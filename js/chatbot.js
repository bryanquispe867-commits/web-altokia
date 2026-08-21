/*==============================================================
  ALTObot — asistente virtual de ALTOKIA (bilingüe ES / EN)
  Menú guiado + entrada libre + flujo de agendamiento que termina
  en WhatsApp o correo. Sigue el idioma que fija js/i18n.js.
==============================================================*/
(function () {
    "use strict";

    var WA_NUMBER = "51906106881";
    var CONTACT_EMAIL = "contacto@altokia.com";
    var REDUCED = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    var canales = function (introEs, introEn, en) {
        return (en ? introEn : introEs) +
            '\n\n📱 <a href="https://wa.me/' + WA_NUMBER + '" target="_blank" rel="noopener">WhatsApp</a>' +
            '\n✉ <a href="mailto:' + CONTACT_EMAIL + '">' + CONTACT_EMAIL + '</a>' +
            '\n💼 <a href="https://www.linkedin.com/company/altokia" target="_blank" rel="noopener">LinkedIn</a>' +
            (en ? '\n\nWe reply within 24 hours.' : '\n\nRespondemos en menos de 24 horas.');
    };

    var TEXTOS = {
        es: {
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
            ansHuman: canales("¡Con gusto! Puedes hablar directamente con nuestro equipo:", "", false),
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
            anythingElse: "¿Puedo ayudarte con algo más? 😊",
            locale: "es-PE"
        },

        en: {
            greeting: "Hi! 👋 I'm ALTObot, ALTOKIA's virtual assistant.\nHow can I help you today?",
            optServices: "🤔 What services do you offer?",
            optPricing: "💰 How much does a project cost?",
            optTiming: "⏱ How long does it take?",
            optBook: "📅 Book a meeting",
            optHuman: "👤 Talk to a person",
            optMenu: "↩ Back to menu",

            ansServices:
                "We offer:\n⚡ Process automation (RPA with Automation Anywhere, Power Automate and Python)\n◈ Custom software development\n◎ Process optimization\n✦ Data analytics and dashboards\n⬡ Digital marketing\n\nWould you like to book a meeting to discuss your case?",
            ansPricing:
                "Every project is unique, so we don't use generic rates. 😊\n\nFirst we listen to your case in a free 30-minute consultation, then we send you a tailored proposal with a fixed scope and price.\n\nShall we book that call?",
            ansTiming:
                "It depends on the scope:\n\n🤖 A simple automation: 2 to 4 weeks\n🌐 A website or web app: 4 to 8 weeks\n🏗 Large integration projects: 2 to 4 months\n\nWe work in sprints with partial deliveries, so you see progress from week one.",
            ansHuman: canales("", "With pleasure! You can talk directly to our team:", true),
            fallback:
                "Good question 🤓 To give you an accurate answer it's best if we talk it through. You can book a meeting or message us on WhatsApp.\n\nIn the meantime, can I help you with any of these?",

            askService: "Great! 🎉 Which service would you like to talk about?",
            svcAuto: "⚡ Automation",
            svcWeb: "◈ Software development",
            svcData: "✦ Data analytics",
            svcOther: "💡 Other / not sure",
            askDate: "Perfect. 📅 Which day works for you?",
            askTime: "What time suits you best? (local time)",
            askName: "Almost done! Who should I book the meeting for?\n\n✍ Type your name below and hit send.",
            confirmWa: "📱 Confirm on WhatsApp",
            confirmMail: "✉ Confirm by email",
            mailBookingSubject: "Meeting confirmation — ALTOKIA",
            anythingElse: "Can I help you with anything else? 😊",
            locale: "en-US"
        }
    };

    function lang() {
        return (window.akIdioma && window.akIdioma() === "en") ? "en" : "es";
    }

    var T = TEXTOS[lang()];

    document.addEventListener("ak:idioma", function (e) {
        T = TEXTOS[e.detail === "en" ? "en" : "es"];
    });

    function confirmedMsg(b) {
        if (lang() === "en") {
            return "All set, " + b.name + "! ✅\n\nYour meeting is pre-booked:\n\n🗂 Topic: " +
                b.service + "\n📅 Date: " + b.date + "\n🕐 Time: " + b.time +
                "\n\nConfirm it through your preferred channel and we'll send the invite:";
        }
        return "¡Listo, " + b.name + "! ✅\n\nTu reunión quedó pre-agendada:\n\n🗂 Tema: " +
            b.service + "\n📅 Fecha: " + b.date + "\n🕐 Hora: " + b.time +
            "\n\nConfírmala por el canal que prefieras y te enviaremos la invitación:";
    }

    function waBookingMsg(b) {
        if (lang() === "en") {
            return "Hi ALTOKIA, I'm " + b.name + '. I would like to confirm a meeting about "' +
                b.service + '" on ' + b.date + " at " + b.time + ".";
        }
        return "Hola ALTOKIA, soy " + b.name + '. Quiero confirmar una reunión sobre "' +
            b.service + '" el ' + b.date + " a las " + b.time + ".";
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
                        return new Intl.DateTimeFormat(T.locale, {
                            weekday: "short", day: "numeric", month: "short"
                        }).format(date);
                    },
                    action: function () {
                        booking.date = new Intl.DateTimeFormat(T.locale, {
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
        if (/(servicio|hacen|ofrec|service|offer)/.test(q)) return answer(T.ansServices, true);
        if (/(precio|costo|cuesta|tarifa|presupuesto|price|cost|how much|budget)/.test(q)) return answer(T.ansPricing, true);
        if (/(demora|tiempo|plazo|semanas|cuánto tarda|cuanto tarda|how long|timeline|weeks)/.test(q)) return answer(T.ansTiming, false);
        if (/(agendar|reunión|reunion|cita|meeting|demo|llamada|book|schedule|call)/.test(q)) return startBooking();
        if (/(humano|persona|asesor|contacto|hablar|human|person|agent|contact|talk)/.test(q)) return answer(T.ansHuman, false);
        if (/(hola|buenas|hey|saludos|hi|hello)/.test(q)) {
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
