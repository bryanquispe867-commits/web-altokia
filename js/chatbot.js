/*==============================================================
  ALTObot — asistente virtual de ALTOKIA
  Portado del sitio anterior al nuevo sistema de diseño.
  Menú guiado + entrada libre + flujo de agendamiento que termina
  en WhatsApp o correo.
==============================================================*/
(function () {
    "use strict";

    var WA_NUMBER = "51904608141";
    var CONTACT_EMAIL = "contacto@altokia.com";
    var REDUCED = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    var T = {
        greeting: "¡Hola! 👋 Soy ALTObot, el asistente virtual de ALTOKIA.\n¿En qué puedo ayudarte hoy?",
        optServices: "🤔 ¿Qué servicios ofrecen?",
        optPricing: "💰 ¿Cuánto cuesta un proyecto?",
        optTiming: "⏱ ¿Cuánto demora?",
        optBook: "📅 Agendar una reunión",
        optHuman: "👤 Hablar con una persona",
        optMenu: "↩ Volver al menú",

        ansServices:
            "Ofrecemos:\n⚡ Automatización de procesos (RPA con Automation Anywhere, Power Automate y Python)\n◈ Desarrollo de software a medida\n◎ Optimización de procesos\n✦ Analítica de datos y dashboards\n⬡ Marketing digital\n\n¿Quieres agendar una reunión para conversar sobre tu caso?",
        ansPricing:
            "Cada proyecto es único, por eso no usamos tarifas genéricas. 😊\n\nPrimero escuchamos tu caso en una consultoría gratuita de 30 minutos y luego te enviamos una propuesta a medida, con alcance y precio cerrados.\n\n¿Agendamos esa llamada?",
        ansTiming:
            "Depende del alcance:\n\n🤖 Una automatización simple: 2 a 4 semanas\n🌐 Un sitio o app web: 4 a 8 semanas\n🏗 Proyectos de integración grandes: 2 a 4 meses\n\nTrabajamos con sprints y entregas parciales, así ves avances desde la primera semana.",
        ansHuman:
            '¡Con gusto! Puedes hablar directamente con nuestro equipo:\n\n📱 <a href="https://wa.me/' +
            WA_NUMBER +
            '" target="_blank" rel="noopener">WhatsApp</a>\n✉ <a href="mailto:' +
            CONTACT_EMAIL +
            '">' + CONTACT_EMAIL + '</a>\n💼 <a href="https://www.linkedin.com/company/altokia" target="_blank" rel="noopener">LinkedIn</a>\n\nRespondemos en menos de 24 horas.',
        fallback:
            "Buena pregunta 🤓 Para darte una respuesta precisa, lo mejor es que la conversemos. Puedes agendar una reunión o escribirnos por WhatsApp.\n\nMientras tanto, ¿te ayudo con alguna de estas opciones?",

        askService: "¡Genial! 🎉 ¿Sobre qué servicio te gustaría conversar?",
        svcAuto: "⚡ Automatización",
        svcWeb: "◈ Desarrollo de software",
        svcData: "✦ Analítica de datos",
        svcOther: "💡 Otro / no estoy seguro",
        askDate: "Perfecto. 📅 ¿Qué día te acomoda?",
        askTime: "¿A qué hora te queda mejor? (hora local)",
        askName: "¡Casi listo! ¿A nombre de quién agendo la reunión?\n\n✍ Escribe tu nombre abajo y presiona enviar.",
        confirmWa: "📱 Confirmar por WhatsApp",
        confirmMail: "✉ Confirmar por correo",
        mailBookingSubject: "Confirmación de reunión — ALTOKIA",
        anythingElse: "¿Puedo ayudarte con algo más? 😊"
    };

    function confirmedMsg(b) {
        return (
            "¡Listo, " + b.name + "! ✅\n\nTu reunión quedó pre-agendada:\n\n🗂 Tema: " +
            b.service + "\n📅 Fecha: " + b.date + "\n🕐 Hora: " + b.time +
            "\n\nConfírmala por el canal que prefieras y te enviaremos la invitación:"
        );
    }

    function waBookingMsg(b) {
        return (
            'Hola ALTOKIA, soy ' + b.name + '. Quiero confirmar una reunión sobre "' +
            b.service + '" el ' + b.date + " a las " + b.time + "."
        );
    }

    var toggleBtn = document.getElementById("chatToggle");
    var minimizeBtn = document.getElementById("chatMinimize");
    var panel = document.getElementById("chatbot");
    var messagesEl = document.getElementById("chatMessages");
    var optionsEl = document.getElementById("chatOptions");
    var form = document.getElementById("chatForm");
    var input = document.getElementById("chatInput");

    if (!toggleBtn || !messagesEl || !panel) return;

    var started = false;
    var awaitingName = false;
    var booking = { service: "", date: "", time: "", name: "" };

    /* --- Render ------------------------------------------------ */
    function scrollBottom() { messagesEl.scrollTop = messagesEl.scrollHeight; }

    function esc(s) { return s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;"); }

    function addMsg(html, who) {
        var div = document.createElement("div");
        div.className = "ak-msg ak-msg--" + who;
        div.innerHTML = html.replace(/\n/g, "<br>");
        messagesEl.appendChild(div);
        scrollBottom();
        return div;
    }

    function botSay(text, delay) {
        return new Promise(function (resolve) {
            var typing = document.createElement("div");
            typing.className = "ak-msg ak-msg--bot ak-msg--typing";
            typing.innerHTML = "<i></i><i></i><i></i>";
            messagesEl.appendChild(typing);
            scrollBottom();

            setTimeout(function () {
                typing.remove();
                addMsg(text, "bot");
                resolve();
            }, REDUCED ? 0 : (delay || 650));
        });
    }

    function renderOptions(opts) {
        optionsEl.innerHTML = "";
        opts.forEach(function (opt) {
            var btn = document.createElement("button");
            btn.type = "button";
            btn.className = "ak-chat-opt";
            btn.textContent = typeof opt.label === "function" ? opt.label() : opt.label;
            btn.addEventListener("click", function () {
                addMsg(esc(btn.textContent), "user");
                optionsEl.innerHTML = "";
                opt.action();
            });
            optionsEl.appendChild(btn);
        });
        scrollBottom();
    }

    /* --- Menú -------------------------------------------------- */
    function mainMenu() {
        renderOptions([
            { label: T.optServices, action: function () { answer(T.ansServices, true); } },
            { label: T.optPricing, action: function () { answer(T.ansPricing, true); } },
            { label: T.optTiming, action: function () { answer(T.ansTiming, false); } },
            { label: T.optBook, action: startBooking },
            { label: T.optHuman, action: function () { answer(T.ansHuman, false); } }
        ]);
    }

    function answer(text, offerBooking) {
        return botSay(text).then(function () {
            if (offerBooking) {
                renderOptions([
                    { label: T.optBook, action: startBooking },
                    { label: T.optMenu, action: backToMenu }
                ]);
            } else {
                renderOptions([{ label: T.optMenu, action: backToMenu }]);
            }
        });
    }

    function backToMenu() {
        return botSay(T.anythingElse).then(mainMenu);
    }

    /* --- Agendamiento ------------------------------------------ */
    function startBooking() {
        return botSay(T.askService).then(function () {
            renderOptions([
                { label: T.svcAuto, action: function () { pickService(T.svcAuto); } },
                { label: T.svcWeb, action: function () { pickService(T.svcWeb); } },
                { label: T.svcData, action: function () { pickService(T.svcData); } },
                { label: T.svcOther, action: function () { pickService(T.svcOther); } }
            ]);
        });
    }

    function pickService(label) {
        booking.service = label.replace(/^[^A-Za-zÁÉÍÓÚÑáéíóúñ]+\s*/, "");
        return botSay(T.askDate).then(function () {
            /* Próximos 5 días hábiles */
            var dates = [];
            var d = new Date();
            while (dates.length < 5) {
                d.setDate(d.getDate() + 1);
                if (d.getDay() !== 0 && d.getDay() !== 6) dates.push(new Date(d));
            }

            renderOptions(dates.map(function (date) {
                return {
                    label: function () {
                        return new Intl.DateTimeFormat("es-PE", {
                            weekday: "short", day: "numeric", month: "short"
                        }).format(date);
                    },
                    action: function () {
                        booking.date = new Intl.DateTimeFormat("es-PE", {
                            weekday: "long", day: "numeric", month: "long"
                        }).format(date);
                        pickTime();
                    }
                };
            }));
        });
    }

    function pickTime() {
        return botSay(T.askTime).then(function () {
            renderOptions(["09:00", "11:00", "15:00", "17:00"].map(function (slot) {
                return {
                    label: "🕐 " + slot,
                    action: function () { booking.time = slot; askName(); }
                };
            }));
        });
    }

    function askName() {
        return botSay(T.askName).then(function () {
            awaitingName = true;
            input.focus();
        });
    }

    function confirmBooking() {
        return botSay(confirmedMsg(booking)).then(function () {
            var waText = encodeURIComponent(waBookingMsg(booking));
            renderOptions([
                {
                    label: T.confirmWa,
                    action: function () {
                        window.open("https://wa.me/" + WA_NUMBER + "?text=" + waText, "_blank", "noopener");
                        backToMenu();
                    }
                },
                {
                    label: T.confirmMail,
                    action: function () {
                        window.location.href =
                            "mailto:" + CONTACT_EMAIL +
                            "?subject=" + encodeURIComponent(T.mailBookingSubject) +
                            "&body=" + waText;
                        backToMenu();
                    }
                },
                { label: T.optMenu, action: backToMenu }
            ]);
        });
    }

    /* --- Entrada libre ------------------------------------------ */
    form.addEventListener("submit", function (e) {
        e.preventDefault();
        var text = input.value.trim();
        if (!text) return;

        addMsg(esc(text), "user");
        input.value = "";
        optionsEl.innerHTML = "";

        if (awaitingName) {
            awaitingName = false;
            booking.name = text;
            confirmBooking();
            return;
        }

        var q = text.toLowerCase();
        if (/(servicio|hacen|ofrec)/.test(q)) return answer(T.ansServices, true);
        if (/(precio|costo|cuesta|tarifa|presupuesto)/.test(q)) return answer(T.ansPricing, true);
        if (/(demora|tiempo|plazo|semanas|cuánto tarda|cuanto tarda)/.test(q)) return answer(T.ansTiming, false);
        if (/(agendar|reunión|reunion|cita|meeting|demo|llamada)/.test(q)) return startBooking();
        if (/(humano|persona|asesor|contacto|hablar)/.test(q)) return answer(T.ansHuman, false);
        if (/(hola|buenas|hey|saludos)/.test(q)) {
            return botSay(T.greeting).then(mainMenu);
        }

        return botSay(T.fallback).then(mainMenu);
    });

    /* --- Abrir / cerrar ----------------------------------------- */
    function openChat() {
        document.body.classList.add("ak-chat-open");
        panel.setAttribute("aria-hidden", "false");
        if (!started) {
            started = true;
            botSay(T.greeting, 900).then(mainMenu);
        }
    }

    function closeChat() {
        document.body.classList.remove("ak-chat-open");
        panel.setAttribute("aria-hidden", "true");
    }

    toggleBtn.addEventListener("click", function () {
        document.body.classList.contains("ak-chat-open") ? closeChat() : openChat();
    });

    if (minimizeBtn) minimizeBtn.addEventListener("click", closeChat);

    document.addEventListener("keydown", function (e) {
        if (e.key === "Escape" && document.body.classList.contains("ak-chat-open")) closeChat();
    });

    /* Cualquier botón con data-open-bot abre el asistente */
    Array.prototype.forEach.call(document.querySelectorAll("[data-open-bot]"), function (el) {
        el.addEventListener("click", function (e) { e.preventDefault(); openChat(); });
    });
})();
