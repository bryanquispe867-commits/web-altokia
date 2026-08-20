/*==============================================================
  ALTOKIA — main.js
  Motor de interacciones: red de partículas, cursor personalizado,
  reveals, contadores, tilt 3D, magnetismo, marquesina y más.
==============================================================*/
(function () {
    "use strict";

    var REDUCED = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    var $ = function (sel, ctx) { return (ctx || document).querySelector(sel); };
    var $$ = function (sel, ctx) { return Array.prototype.slice.call((ctx || document).querySelectorAll(sel)); };

    /*----------------------------------------------------------
      1. Preloader
    ----------------------------------------------------------*/
    function initPreloader() {
        var spinner = $("#spinner");
        if (!spinner) return;
        var hide = function () {
            setTimeout(function () { spinner.classList.remove("show"); }, 320);
        };
        if (document.readyState === "complete") hide();
        else window.addEventListener("load", hide);
        // Red de seguridad: nunca dejar la pantalla bloqueada
        setTimeout(function () { spinner.classList.remove("show"); }, 4000);
    }

    /*----------------------------------------------------------
      2. Red de partículas del hero (canvas)
    ----------------------------------------------------------*/
    function initParticles() {
        var canvas = $("#ak-net");
        if (!canvas || REDUCED) return;

        var ctx = canvas.getContext("2d");
        var dpr = Math.min(window.devicePixelRatio || 1, 2);
        var w = 0, h = 0;
        var nodes = [];
        var mouse = { x: -9999, y: -9999 };
        var running = true;
        var raf = null;

        var COLORS = ["0, 229, 255", "123, 77, 255", "255, 46, 126"];

        function resize() {
            var rect = canvas.getBoundingClientRect();
            w = rect.width;
            h = rect.height;
            canvas.width = Math.floor(w * dpr);
            canvas.height = Math.floor(h * dpr);
            ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
            build();
        }

        function build() {
            var density = w < 640 ? 14000 : w < 1200 ? 11000 : 9000;
            var count = Math.max(26, Math.min(110, Math.round((w * h) / density)));
            nodes = [];
            for (var i = 0; i < count; i++) {
                nodes.push({
                    x: Math.random() * w,
                    y: Math.random() * h,
                    vx: (Math.random() - 0.5) * 0.34,
                    vy: (Math.random() - 0.5) * 0.34,
                    r: Math.random() * 1.7 + 0.8,
                    c: COLORS[(Math.random() * COLORS.length) | 0]
                });
            }
        }

        function step() {
            if (!running) { raf = null; return; }
            ctx.clearRect(0, 0, w, h);

            var linkDist = w < 640 ? 110 : 148;

            for (var i = 0; i < nodes.length; i++) {
                var p = nodes[i];

                // Atracción suave hacia el cursor
                var dxm = mouse.x - p.x, dym = mouse.y - p.y;
                var dm2 = dxm * dxm + dym * dym;
                if (dm2 < 26000 && dm2 > 1) {
                    var f = 0.00035;
                    p.vx += dxm * f;
                    p.vy += dym * f;
                }

                p.x += p.vx;
                p.y += p.vy;

                // Fricción para que no se disparen
                p.vx *= 0.994;
                p.vy *= 0.994;

                // Velocidad mínima para que nunca se detengan
                var sp = Math.hypot(p.vx, p.vy);
                if (sp < 0.06) {
                    p.vx += (Math.random() - 0.5) * 0.08;
                    p.vy += (Math.random() - 0.5) * 0.08;
                }

                if (p.x < -20) p.x = w + 20;
                if (p.x > w + 20) p.x = -20;
                if (p.y < -20) p.y = h + 20;
                if (p.y > h + 20) p.y = -20;

                ctx.beginPath();
                ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
                ctx.fillStyle = "rgba(" + p.c + ", .85)";
                ctx.fill();

                // Enlaces con los vecinos
                for (var j = i + 1; j < nodes.length; j++) {
                    var q = nodes[j];
                    var dx = p.x - q.x, dy = p.y - q.y;
                    var d = Math.sqrt(dx * dx + dy * dy);
                    if (d < linkDist) {
                        ctx.beginPath();
                        ctx.moveTo(p.x, p.y);
                        ctx.lineTo(q.x, q.y);
                        ctx.strokeStyle = "rgba(" + p.c + ", " + (0.20 * (1 - d / linkDist)).toFixed(3) + ")";
                        ctx.lineWidth = 1;
                        ctx.stroke();
                    }
                }

                // Halo alrededor del cursor
                if (dm2 < 26000) {
                    ctx.beginPath();
                    ctx.moveTo(p.x, p.y);
                    ctx.lineTo(mouse.x, mouse.y);
                    ctx.strokeStyle = "rgba(0, 229, 255, " + (0.24 * (1 - Math.sqrt(dm2) / 161)).toFixed(3) + ")";
                    ctx.lineWidth = 1;
                    ctx.stroke();
                }
            }

            raf = requestAnimationFrame(step);
        }

        function start() { if (!raf) { running = true; raf = requestAnimationFrame(step); } }
        function stop() { running = false; }

        var host = canvas.parentElement;
        host.addEventListener("mousemove", function (e) {
            var r = canvas.getBoundingClientRect();
            mouse.x = e.clientX - r.left;
            mouse.y = e.clientY - r.top;
        });
        host.addEventListener("mouseleave", function () { mouse.x = -9999; mouse.y = -9999; });

        var rt;
        window.addEventListener("resize", function () {
            clearTimeout(rt);
            rt = setTimeout(resize, 180);
        });

        // Pausar cuando el hero sale de pantalla
        if ("IntersectionObserver" in window) {
            new IntersectionObserver(function (entries) {
                entries[0].isIntersecting ? start() : stop();
            }, { threshold: 0 }).observe(canvas);
        }

        document.addEventListener("visibilitychange", function () {
            document.hidden ? stop() : start();
        });

        resize();
        start();
    }

    /*----------------------------------------------------------
      3. Cursor personalizado
    ----------------------------------------------------------*/
    function initCursor() {
        if (REDUCED) return;
        if (!window.matchMedia("(hover: hover) and (pointer: fine)").matches) return;
        if (window.innerWidth < 992) return;

        var dot = document.createElement("div");
        var ring = document.createElement("div");
        dot.className = "ak-cursor";
        ring.className = "ak-cursor-ring";
        document.body.appendChild(dot);
        document.body.appendChild(ring);

        var mx = window.innerWidth / 2, my = window.innerHeight / 2;
        var rx = mx, ry = my;
        var awake = false;

        window.addEventListener("mousemove", function (e) {
            mx = e.clientX;
            my = e.clientY;
            dot.style.transform = "translate(" + (mx - 3.5) + "px," + (my - 3.5) + "px)";
            // Hasta que no hay un movimiento real de ratón no mostramos nada
            if (!awake) {
                awake = true;
                rx = mx;
                ry = my;
                document.body.classList.add("ak-cursor-on");
            }
        });

        (function loop() {
            rx += (mx - rx) * 0.16;
            ry += (my - ry) * 0.16;
            var s = ring.offsetWidth / 2;
            ring.style.transform = "translate(" + (rx - s) + "px," + (ry - s) + "px)";
            requestAnimationFrame(loop);
        })();

        document.addEventListener("mouseover", function (e) {
            var t = e.target;
            if (t.closest && t.closest("a, button, .ak-card, .ak-faq-q, input, textarea, select, .ak-case, .ak-member")) {
                ring.classList.add("is-hover");
            }
        });

        document.addEventListener("mouseout", function (e) {
            var t = e.target;
            if (t.closest && t.closest("a, button, .ak-card, .ak-faq-q, input, textarea, select, .ak-case, .ak-member")) {
                ring.classList.remove("is-hover");
            }
        });
    }

    /*----------------------------------------------------------
      4. Barra de progreso de scroll + navbar + volver arriba
    ----------------------------------------------------------*/
    function initScrollUI() {
        var bar = document.createElement("div");
        bar.className = "ak-progress";
        document.body.appendChild(bar);

        var nav = $(".navbar.sticky-top");
        var top = $(".back-to-top");
        var ticking = false;

        function update() {
            var y = window.pageYOffset || document.documentElement.scrollTop;
            var max = document.documentElement.scrollHeight - window.innerHeight;
            bar.style.transform = "scaleX(" + (max > 0 ? Math.min(y / max, 1) : 0) + ")";

            if (nav) nav.classList.toggle("ak-scrolled", y > 40);

            if (top) {
                if (y > 400) { top.style.display = "flex"; top.style.opacity = "1"; }
                else { top.style.opacity = "0"; top.style.display = "none"; }
            }
            ticking = false;
        }

        window.addEventListener("scroll", function () {
            if (!ticking) { ticking = true; requestAnimationFrame(update); }
        }, { passive: true });

        update();

        if (top) {
            top.style.transition = "opacity .4s ease";
            top.addEventListener("click", function (e) {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: REDUCED ? "auto" : "smooth" });
            });
        }
    }

    /*----------------------------------------------------------
      5. Reveal al hacer scroll
    ----------------------------------------------------------*/
    function initReveal() {
        var items = $$("[data-reveal]");
        if (!items.length) return;

        if (REDUCED || !("IntersectionObserver" in window)) {
            items.forEach(function (el) { el.classList.add("is-in"); });
            return;
        }

        items.forEach(function (el) {
            var d = el.getAttribute("data-delay");
            if (d) el.style.setProperty("--d", d + "ms");
        });

        var io = new IntersectionObserver(function (entries) {
            entries.forEach(function (entry) {
                if (entry.isIntersecting) {
                    entry.target.classList.add("is-in");
                    io.unobserve(entry.target);
                }
            });
        }, { threshold: 0.12, rootMargin: "0px 0px -60px 0px" });

        items.forEach(function (el) { io.observe(el); });
    }

    /*----------------------------------------------------------
      6. Contadores animados
    ----------------------------------------------------------*/
    function initCounters() {
        var els = $$("[data-count]");
        if (!els.length) return;

        function run(el) {
            var target = parseFloat(el.getAttribute("data-count"));
            var decimals = parseInt(el.getAttribute("data-decimals") || "0", 10);
            var suffix = el.getAttribute("data-suffix") || "";
            var prefix = el.getAttribute("data-prefix") || "";
            var dur = parseInt(el.getAttribute("data-duration") || "1900", 10);

            if (REDUCED) {
                el.textContent = prefix + target.toFixed(decimals) + suffix;
                return;
            }

            var t0 = performance.now();
            (function tick(now) {
                var p = Math.min((now - t0) / dur, 1);
                var eased = 1 - Math.pow(1 - p, 4);
                el.textContent = prefix + (target * eased).toFixed(decimals) + suffix;
                if (p < 1) requestAnimationFrame(tick);
            })(t0);
        }

        if (!("IntersectionObserver" in window)) { els.forEach(run); return; }

        var io = new IntersectionObserver(function (entries) {
            entries.forEach(function (entry) {
                if (entry.isIntersecting) {
                    run(entry.target);
                    io.unobserve(entry.target);
                }
            });
        }, { threshold: 0.4 });

        els.forEach(function (el) { io.observe(el); });
    }

    /*----------------------------------------------------------
      7. Titular con palabra rotativa (efecto máquina de escribir)
    ----------------------------------------------------------*/
    function initRotator() {
        var host = $(".ak-rotator");
        if (!host) return;

        var out = $(".word", host);
        var words = (host.getAttribute("data-words") || "").split("|").filter(Boolean);
        if (!out || words.length < 2) return;

        if (REDUCED) { out.textContent = words[0]; return; }

        var i = 0, ch = 0, deleting = false;

        (function tick() {
            var word = words[i];
            ch += deleting ? -1 : 1;
            out.textContent = word.slice(0, ch);

            var delay = deleting ? 45 : 85;

            if (!deleting && ch === word.length) {
                deleting = true;
                delay = 1700;
            } else if (deleting && ch === 0) {
                deleting = false;
                i = (i + 1) % words.length;
                delay = 320;
            }

            setTimeout(tick, delay);
        })();
    }

    /*----------------------------------------------------------
      8. Tilt 3D + foco radial en tarjetas
    ----------------------------------------------------------*/
    function initCards() {
        var cards = $$(".ak-card, .ak-case, .ak-member");
        if (!cards.length) return;

        var canTilt = !REDUCED && window.matchMedia("(hover: hover) and (pointer: fine)").matches;

        cards.forEach(function (card) {
            card.addEventListener("mouseenter", function () {
                if (canTilt) card.style.transition = "transform .12s linear, border-color .5s, box-shadow .5s";
            });

            card.addEventListener("mousemove", function (e) {
                var r = card.getBoundingClientRect();
                var px = (e.clientX - r.left) / r.width;
                var py = (e.clientY - r.top) / r.height;

                card.style.setProperty("--mx", (px * 100) + "%");
                card.style.setProperty("--my", (py * 100) + "%");

                if (canTilt) {
                    var rx = (0.5 - py) * 9;
                    var ry = (px - 0.5) * 9;
                    card.style.transform =
                        "perspective(900px) rotateX(" + rx.toFixed(2) + "deg) rotateY(" + ry.toFixed(2) + "deg) translateY(-8px)";
                }
            });

            card.addEventListener("mouseleave", function () {
                card.style.transition = "";
                card.style.transform = "";
            });
        });
    }

    /*----------------------------------------------------------
      9. Botones magnéticos
    ----------------------------------------------------------*/
    function initMagnetic() {
        if (REDUCED || !window.matchMedia("(hover: hover) and (pointer: fine)").matches) return;

        $$("[data-magnetic]").forEach(function (el) {
            el.addEventListener("mousemove", function (e) {
                var r = el.getBoundingClientRect();
                var x = e.clientX - r.left - r.width / 2;
                var y = e.clientY - r.top - r.height / 2;
                el.style.transform = "translate(" + x * 0.28 + "px," + (y * 0.28 - 3) + "px)";
            });
            el.addEventListener("mouseleave", function () { el.style.transform = ""; });
        });
    }

    /*----------------------------------------------------------
      10. Barras de progreso y gráfico del panel
    ----------------------------------------------------------*/
    function initBars() {
        var bars = $$("[data-bar]");
        var charts = $$(".ak-chart");
        if (!bars.length && !charts.length) return;

        function fillBar(el) {
            var span = el.querySelector("span");
            if (span) span.style.width = el.getAttribute("data-bar") + "%";
        }

        function fillChart(el) {
            $$("i", el).forEach(function (b, idx) {
                var v = b.getAttribute("data-h") || (25 + ((idx * 37) % 70));
                setTimeout(function () { b.style.height = v + "%"; }, idx * 90);
            });
        }

        if (!("IntersectionObserver" in window)) {
            bars.forEach(fillBar);
            charts.forEach(fillChart);
            return;
        }

        var io = new IntersectionObserver(function (entries) {
            entries.forEach(function (entry) {
                if (!entry.isIntersecting) return;
                if (entry.target.hasAttribute("data-bar")) fillBar(entry.target);
                else fillChart(entry.target);
                io.unobserve(entry.target);
            });
        }, { threshold: 0.3 });

        bars.forEach(function (el) { io.observe(el); });
        charts.forEach(function (el) { io.observe(el); });
    }

    /*----------------------------------------------------------
      11. Marquesina infinita (duplica el contenido)
    ----------------------------------------------------------*/
    function initMarquee() {
        $$(".ak-marquee-track").forEach(function (track) {
            if (track.dataset.cloned === "1") return;
            track.innerHTML += track.innerHTML;
            track.dataset.cloned = "1";
        });
    }

    /*----------------------------------------------------------
      12. Acordeón de preguntas frecuentes
    ----------------------------------------------------------*/
    function initFaq() {
        var faqs = $$(".ak-faq");
        if (!faqs.length) return;

        faqs.forEach(function (faq) {
            var btn = $(".ak-faq-q", faq);
            var body = $(".ak-faq-a", faq);
            if (!btn || !body) return;

            btn.addEventListener("click", function () {
                var open = faq.classList.contains("is-open");

                faqs.forEach(function (other) {
                    other.classList.remove("is-open");
                    var b = $(".ak-faq-a", other);
                    if (b) b.style.maxHeight = null;
                });

                if (!open) {
                    faq.classList.add("is-open");
                    body.style.maxHeight = body.scrollHeight + "px";
                }
            });
        });
    }

    /*----------------------------------------------------------
      13. Parallax suave
    ----------------------------------------------------------*/
    function initParallax() {
        var els = $$("[data-parallax]");
        if (!els.length || REDUCED) return;

        var ticking = false;

        function update() {
            var y = window.pageYOffset;
            els.forEach(function (el) {
                var speed = parseFloat(el.getAttribute("data-parallax")) || 0.1;
                el.style.transform = "translate3d(0," + (y * speed).toFixed(2) + "px,0)";
            });
            ticking = false;
        }

        window.addEventListener("scroll", function () {
            if (!ticking) { ticking = true; requestAnimationFrame(update); }
        }, { passive: true });
    }

    /*----------------------------------------------------------
      14. Formularios (validación ligera + confirmación)
    ----------------------------------------------------------*/
    function initForms() {
        $$("form[data-ak-form]").forEach(function (form) {
            form.addEventListener("submit", function (e) {
                e.preventDefault();

                var ok = true;
                $$("[required]", form).forEach(function (field) {
                    var valid = field.value.trim() !== "" &&
                        (field.type !== "email" || /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(field.value));
                    field.style.borderColor = valid ? "" : "rgba(255, 46, 126, .7)";
                    if (!valid) ok = false;
                });

                if (!ok) return;

                var alertBox = $(".ak-alert", form);
                var btn = form.querySelector("button[type=submit]");
                var label = btn ? btn.innerHTML : "";

                if (btn) {
                    btn.disabled = true;
                    btn.innerHTML = '<i class="fa fa-circle-notch fa-spin me-2"></i>Enviando...';
                }

                setTimeout(function () {
                    if (btn) { btn.disabled = false; btn.innerHTML = label; }
                    if (alertBox) alertBox.classList.add("show");
                    form.reset();
                }, 1100);
            });
        });
    }

    /*----------------------------------------------------------
      15. Enlace activo del menú según la sección visible
    ----------------------------------------------------------*/
    function initScrollSpy() {
        var links = $$('.navbar .nav-link[href^="#"]');
        if (!links.length || !("IntersectionObserver" in window)) return;

        var map = {};
        var sections = [];

        links.forEach(function (link) {
            var id = link.getAttribute("href").slice(1);
            var sec = id && document.getElementById(id);
            if (sec) { map[id] = link; sections.push(sec); }
        });

        if (!sections.length) return;

        var io = new IntersectionObserver(function (entries) {
            entries.forEach(function (entry) {
                if (!entry.isIntersecting) return;
                links.forEach(function (l) { l.classList.remove("active"); });
                var link = map[entry.target.id];
                if (link) link.classList.add("active");
            });
        }, { threshold: 0.35, rootMargin: "-80px 0px -50% 0px" });

        sections.forEach(function (s) { io.observe(s); });
    }

    /*----------------------------------------------------------
      16. Cierra el menú móvil al pulsar un enlace
    ----------------------------------------------------------*/
    function initMobileNav() {
        var collapse = $("#navbarCollapse");
        if (!collapse) return;

        $$(".nav-link:not(.dropdown-toggle), .dropdown-item", collapse).forEach(function (link) {
            link.addEventListener("click", function () {
                if (window.innerWidth < 992 && collapse.classList.contains("show")) {
                    var toggler = $(".navbar-toggler");
                    if (toggler) toggler.click();
                }
            });
        });
    }

    /*----------------------------------------------------------
      17. Carrusel de testimonios (Owl)
    ----------------------------------------------------------*/
    function initCarousel() {
        if (typeof window.jQuery === "undefined") return;
        var $c = window.jQuery(".testimonial-carousel");
        if (!$c.length || typeof $c.owlCarousel !== "function") return;

        $c.owlCarousel({
            autoplay: !REDUCED,
            autoplayTimeout: 5200,
            autoplayHoverPause: true,
            smartSpeed: 900,
            items: 1,
            dots: false,
            loop: true,
            nav: true,
            margin: 24,
            navText: [
                '<i class="bi bi-arrow-left"></i>',
                '<i class="bi bi-arrow-right"></i>'
            ]
        });
    }

    /*----------------------------------------------------------
      Arranque
    ----------------------------------------------------------*/
    function boot() {
        document.documentElement.classList.add("js");
        initPreloader();
        initScrollUI();
        initReveal();
        initCounters();
        initRotator();
        initCards();
        initMagnetic();
        initBars();
        initMarquee();
        initFaq();
        initParallax();
        initForms();
        initScrollSpy();
        initMobileNav();
        initCursor();
        initParticles();
        initCarousel();
    }

    if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", boot);
    else boot();
})();
