/*==============================================================
  ALTOKIA — idioma automático ES / EN

  Detecta el idioma del navegador (que hereda el del sistema
  operativo): si es español muestra español, si no, inglés.
  El visitante puede forzarlo con el botón ES/EN y su elección
  se recuerda.

  El diccionario va indexado por el texto en español tal y como
  aparece en la página, así que no hace falta ensuciar el HTML
  con atributos data-i18n. La traducción inglesa reutiliza la
  redacción del sitio anterior de ALTOKIA.
==============================================================*/
(function () {
    "use strict";

    var DIC = {
        /* ---- Navegación y marca ---- */
        "Inicio": "Home",
        "Nosotros": "About",
        "Servicios": "Services",
        "Proyectos": "Projects",
        "Contacto": "Contact",
        "Compañía": "Company",
        "Agenda una demo": "Book a demo",
        "Por qué ALTOKIA": "Why ALTOKIA",
        "Automatización & Lógica · Tecnología · Operaciones · Conocimiento":
            "Automation & Logic · Technology · Operations · Knowledge",
        "Sistemas operativos": "Systems operational",
        "Inicializando ALTOKIA": "Starting ALTOKIA",
        "ALTOKIA - Inicio": "ALTOKIA - Home",
        "Cambiar tema": "Switch theme",
        "Cambiar idioma": "Switch language",
        "Volver arriba": "Back to top",
        "breadcrumb": "breadcrumb",

        /* ---- Hero ---- */
        "Impulsando el futuro digital": "Powering the digital future",
        "Automatizamos el futuro": "We automate the future",
        "de tu negocio con": "of your business with",
        "Automatización, software a medida, analítica de datos y marketing. Convertimos tareas repetitivas en resultados que puedes medir desde la primera semana.":
            "Automation, custom software, data analytics and marketing. We turn repetitive tasks into results you can measure from week one.",
        "Explorar servicios": "Explore services",
        "flujos inteligentes": "intelligent workflows",
        "crecimiento medible": "measurable growth",
        "ventaja competitiva": "competitive advantage",
        "tiempo para innovar": "time to innovate",
        "Agendar demo": "Book a demo",
        "Desliza para descubrir": "Scroll to discover",
        "Menos tareas manuales": "Fewer manual tasks",
        "Horas ahorradas": "Hours saved",
        "Satisfacción": "Satisfaction",
        "Tiempo de proceso": "Processing time",
        "minería": "mining",
        "Documentos / mes": "Documents / month",
        "sin intervención": "untouched by hand",

        /* ---- Bloque de código del hero ---- */
        "# Bot RPA — Facturas & Órdenes de Compra (minería)":
            "# RPA bot — Invoices & Purchase Orders (mining)",
        "▸ 3 días de trabajo manual": "▸ 3 days of manual work",
        "20 minutos": "20 minutes",

        /* ---- Servicios ---- */
        "// Servicios": "// Services",
        "Lo que hacemos": "What we do",
        "extraordinariamente bien": "extraordinarily well",
        "Todos los servicios": "All services",
        "Ver detalle": "See detail",
        "Automatización": "Automation",
        "Punto de partida": "Where we start",
        "Diseñamos flujos inteligentes con RPA e IA que eliminan tareas repetitivas y conectan tus sistemas de punta a punta.":
            "We design intelligent workflows with RPA and AI that eliminate repetitive tasks and connect your systems end-to-end.",
        "Desarrollo de Software a Medida": "Custom Software Development",
        "Software a medida": "Custom software",
        "Sistemas y aplicaciones construidos desde cero para tu operación, sin plantillas ni licencias que no necesitas.":
            "Systems and applications built from scratch for your operation — no templates, no licenses you don't need.",
        "Analítica de Datos": "Data Analytics",
        "Convertimos tus datos en decisiones: dashboards en tiempo real, KPIs claros y reportes que le hablan directo a tu negocio.":
            "We turn your data into decisions: real-time dashboards, clear KPIs and reports that speak directly to your business.",
        "Optimización de Procesos": "Process Optimization",
        "Eficiencia operativa": "Operational efficiency",
        "Medimos, rediseñamos y afinamos tus operaciones para reducir costos y eliminar cuellos de botella.":
            "We measure, redesign and fine-tune your operations to cut costs and remove bottlenecks.",
        "Marketing Digital": "Digital Marketing",
        "Growth digital": "Digital growth",
        "Estrategias basadas en datos — SEO, pauta y automatización de campañas — para llegar a las personas correctas.":
            "Data-driven strategies — SEO, paid media and campaign automation — to reach the right people.",
        "Automatización, software a medida, analítica de datos, marketing y optimización — un solo equipo para todo tu ecosistema digital.":
            "Automation, custom software, data analytics, marketing and optimization — one team for your entire digital ecosystem.",
        "Diagnóstico": "Diagnosis",
        "Rediseño": "Redesign",
        "Métricas": "Metrics",
        "Reportería": "Reporting",

        /* ---- Nosotros ---- */
        "// Nosotros": "// About",
        "// Quiénes somos": "// Who we are",
        "Escuchamos primero,": "We listen first,",
        "automatizamos después": "then we automate",
        "Entendemos el negocio": "We understand the business",
        "antes que el código": "before the code",
        "Conoce al equipo detrás de ALTOKIA: experiencia internacional, escucha activa y resultados medibles.":
            "Meet the team behind ALTOKIA: international experience, active listening and measurable results.",
        "En": "At",
        "no vendemos tecnología por vender: nos obsesionan los requerimientos reales del usuario y del cliente. Cada proyecto empieza con una conversación, no con una propuesta genérica.":
            "we don't sell technology for its own sake: we are obsessed with the real requirements of the user and the client. Every project starts with a conversation, not a generic proposal.",
        "Somos un equipo con": "We are a team with",
        "experiencia internacional": "international experience",
        "que ha desplegado soluciones de automatización y desarrollo web en múltiples países, adaptándonos a distintas regulaciones, monedas, sistemas y culturas de trabajo. Esa diversidad nos dio algo que ningún curso enseña: la capacidad de":
            "that has deployed automation and web development solutions across multiple countries, adapting to different regulations, currencies, systems and work cultures. That diversity gave us something no course can teach: the ability to",
        "entender el negocio antes que el código": "understand the business before the code",
        "Estamos dispuestos a escucharte las veces que haga falta. Tu operación es única, y tu automatización también debería serlo.":
            "We are willing to listen to you as many times as it takes. Your operation is unique — your automation should be too.",
        "Ver nuestros proyectos": "See our projects",
        "// Valores": "// Values",
        "Tres cosas que no": "Three things we don't",
        "negociamos": "negotiate",
        "Escucha activa": "Active listening",
        "Entendemos tu proceso antes de proponer una sola línea de código.":
            "We understand your process before proposing a single line of code.",
        "Centrados en el usuario": "User-centered",
        "Diseñamos para las personas que usarán la solución cada día.":
            "We design for the people who will use the solution every day.",
        "Resultados medibles": "Measurable results",
        "Cada entrega viene con KPIs claros y retorno demostrable.":
            "Every delivery comes with clear KPIs and provable ROI.",
        "// Alcance": "// Reach",
        "Presencia": "International",
        "internacional": "presence",
        "Proyectos entregados en:": "Projects delivered in:",
        "// Sectores": "// Industries",
        "Rubros que": "Industries we",
        "dominamos": "master",
        "Operaciones que ya conocemos de cerca:": "Operations we already know inside out:",
        "La mejor automatización es la que nace de escuchar a quien vive el proceso todos los días.":
            "The best automation is born from listening to the people who live the process every day.",
        "# Cómo trabajamos en ALTOKIA": "# How we work at ALTOKIA",
        "Escuchamos el proceso antes de proponer.": "We listen to the process before proposing.",
        "Diseñamos para quien lo usará a diario.": "We design for whoever uses it daily.",
        "Cada entrega trae": "Every delivery brings",
        "claros.": "clear.",
        "Sprints cortos, avances visibles.": "Short sprints, visible progress.",
        "Nos adaptamos a tu regulación, tu moneda y tus sistemas.":
            "We adapt to your regulations, your currency and your systems.",
        "Te escuchamos": "We listen",
        "las veces que": "as many times as",
        "haga falta": "it takes",

        /* ---- Proceso ---- */
        "// Proceso": "// Process",
        "De la idea al impacto": "From idea to impact",
        "en 4 fases": "in 4 phases",
        "Descubrimiento": "Discovery",
        "Auditamos tus procesos actuales, identificamos cuellos de botella y detectamos oportunidades de automatización con mayor retorno.":
            "We audit your current processes, identify bottlenecks and detect the automation opportunities with the highest return.",
        "Diseño de Solución": "Solution Design",
        "Prototipamos la arquitectura, definimos flujos y diseñamos interfaces centradas en el usuario. Todo validado contigo antes de escribir código.":
            "We prototype the architecture, define workflows and design user-centered interfaces. Everything validated with you before writing code.",
        "Desarrollo Ágil": "Agile Development",
        "Sprints cortos, entregas continuas y comunicación transparente. Ves el avance en tiempo real y ajustamos sobre la marcha.":
            "Short sprints, continuous deliveries and transparent communication. You see progress in real time and we adjust along the way.",
        "Lanzamiento & Evolución": "Launch & Evolution",
        "Desplegamos, medimos KPIs y optimizamos continuamente. Tu solución crece junto a tu negocio.":
            "We deploy, measure KPIs and optimize continuously. Your solution grows with your business.",

        /* ---- Stack / resultados ---- */
        "Tecnología que domina el juego": "Technology that owns the game",
        "// Resultados": "// Results",
        "Números que": "Numbers that",
        "hablan por nosotros": "speak for us",
        "Proyectos entregados": "Projects delivered",
        "Reducción de tareas manuales": "Reduction in manual tasks",
        "Horas ahorradas a clientes": "Hours saved for clients",
        "Satisfacción de clientes": "Client satisfaction",
        "Impacto medido": "Measured impact",
        "Antes y después de automatizar": "Before and after automating",
        "Real": "Real",
        "Facturas & OC": "Invoices & POs",
        "Atención retail": "Retail support",
        "Cierre contable": "Accounting close",
        "Seguimiento proveedores": "Supplier follow-up",
        "-5 d": "-5 d",

        /* ---- Proyectos ---- */
        "// Proyectos": "// Projects",
        "Automatizaciones que ya": "Automations already",
        "trabajan por nuestros clientes": "working for our clients",
        "Casos reales en minería, retail y banca — con resultados medibles desde la primera semana.":
            "Real cases in mining, retail and banking — with measurable results from week one.",
        "Ver todos": "See all",
        "⛏ Minería": "⛏ Mining",
        "🛒 Retail": "🛒 Retail",
        "🏦 Banca": "🏦 Banking",
        "⚖ Legal (EE.UU.)": "⚖ Legal (US)",
        "🏦 Banca & Finanzas": "🏦 Banking & Finance",
        "🏭 Manufactura": "🏭 Manufacturing",
        "🚚 Logística": "🚚 Logistics",
        "⚕ Salud": "⚕ Healthcare",
        "🇺🇸 EE.UU.": "🇺🇸 USA",
        "🇵🇦 Panamá": "🇵🇦 Panama",
        "🇵🇪 Perú": "🇵🇪 Peru",
        "Facturas & Órdenes de Compra": "Invoices & Purchase Orders",
        "Bot RPA que lee facturas y OC con OCR, valida montos contra el ERP, detecta inconsistencias y registra todo automáticamente. De 3 días de trabajo manual a 20 minutos.":
            "RPA bot that reads invoices and POs with OCR, validates amounts against the ERP, flags inconsistencies and records everything automatically. From 3 days of manual work to 20 minutes.",
        "▲ 94% menos tiempo de procesamiento": "▲ 94% less processing time",
        "Bot de WhatsApp Inteligente": "Smart WhatsApp Bot",
        "Asistente conversacional que atiende consultas, toma pedidos, consulta stock en tiempo real y deriva a un humano solo cuando hace falta. Disponible 24/7, sin filas de espera.":
            "Conversational assistant that answers questions, takes orders, checks stock in real time and hands off to a human only when needed. Available 24/7, no waiting lines.",
        "▲ 6x más consultas atendidas": "▲ 6x more inquiries handled",
        "Automatización de Documentos": "Document Automation",
        "Generación, clasificación y firma de contratos y documentos regulatorios de forma masiva, con trazabilidad completa y cero errores de tipeo.":
            "Mass generation, classification and signing of contracts and regulatory documents, with full traceability and zero typing errors.",
        "▲ 12,000 documentos/mes sin intervención": "▲ 12,000 documents/month untouched by hand",
        "Conciliación Bancaria Automática": "Automatic Bank Reconciliation",
        "Robot que cruza extractos bancarios contra registros contables cada noche, concilia partidas y genera el reporte de excepciones listo para revisión matutina.":
            "A robot that cross-checks bank statements against accounting records every night, reconciles entries and generates the exception report ready for morning review.",
        "▲ Cierre contable 5 días más rápido": "▲ Monthly close 5 days faster",
        "Reportería Automática de Ventas": "Automated Sales Reporting",
        "Pipeline que consolida ventas de todas las tiendas y canales, y envía dashboards e informes ejecutivos por correo y WhatsApp antes de que empiece el día.":
            "Pipeline that consolidates sales from every store and channel, and delivers dashboards and executive reports via email and WhatsApp before the day starts.",
        "▲ Decisiones con datos del día anterior": "▲ Decisions with yesterday's data",
        "Onboarding de Proveedores": "Supplier Onboarding",
        "Portal web + flujo automatizado que valida documentación legal de proveedores, verifica vigencias y notifica vencimientos, eliminando el seguimiento manual por correo.":
            "Web portal + automated workflow that validates suppliers' legal documentation, checks expiration dates and sends notifications, eliminating manual email follow-up.",
        "▲ 80% menos correos de seguimiento": "▲ 80% fewer follow-up emails",
        "Resumen Inteligente de Llamadas Legales": "Smart Legal Call Summaries",
        "IA que escucha las llamadas de los case managers con clientes de firmas de abogados en EE.UU. y extrae automáticamente el resumen de la conversación, tipo de caso, número de póliza, teléfono y demás datos clave — listos para el expediente, sin transcribir nada a mano.":
            "AI that listens to case managers' calls with clients at US law firms and automatically extracts the call summary, case type, policy number, phone number and other key data — ready for the file, with nothing transcribed by hand.",
        "▲ Documentación de llamadas 100% automática": "▲ 100% automatic call documentation",

        /* ---- Por qué ALTOKIA ---- */
        "// Por qué ALTOKIA": "// Why ALTOKIA",
        "Tecnología que trabaja": "Technology that works",
        "mientras tú creces": "while you grow",
        "// Diferenciales": "// What sets us apart",
        "No vendemos horas,": "We don't sell hours,",
        "entregamos eficiencia": "we deliver efficiency",
        "Cada automatización que ponemos en producción libera tiempo de personas que estaban haciendo trabajo repetitivo. Eso es lo que medimos.":
            "Every automation we put into production frees up time for people who were doing repetitive work. That is what we measure.",
        "Experiencia internacional": "International experience",
        "Proyectos entregados en EE.UU., Panamá y Perú.":
            "Projects delivered in the USA, Panama and Peru.",
        "Distintas regulaciones, monedas, sistemas y culturas de trabajo.":
            "Different regulations, currencies, systems and work cultures.",
        "Foco en el usuario": "User focus",
        "Diseñamos para quien usará la solución todos los días.":
            "We design for whoever will use the solution every day.",
        "KPIs desde el día uno": "KPIs from day one",
        "Cada entrega trae retorno demostrable, no promesas.":
            "Every delivery brings provable ROI, not promises.",
        "Resultados en producción": "Results in production",
        "Casos entregados": "Delivered cases",
        "Consultas retail": "Retail inquiries",
        "Docs bancarios": "Banking docs",
        "Correos de seguimiento": "Follow-up emails",
        "Tareas manuales": "Manual tasks",
        "12k/m": "12k/mo",

        /* ---- Agenda ---- */
        "// Agenda": "// Booking",
        "Treinta minutos que": "Thirty minutes that",
        "ahorran meses": "save months",
        "// Consultoría gratuita": "// Free consultation",
        "Cuéntanos tu caso,": "Tell us your case,",
        "sin compromiso": "no commitment",
        "Agenda una consultoría gratuita de 30 minutos. Cuéntanos tu caso y te mostramos exactamente dónde puedes ganar eficiencia.":
            "Book a free 30-minute consultation. Tell us your case and we'll show you exactly where you can gain efficiency.",
        "1. Escuchamos": "1. We listen",
        "Nos cuentas qué proceso te está costando tiempo o dinero hoy.":
            "You tell us which process is costing you time or money today.",
        "2. Detectamos oportunidades": "2. We spot opportunities",
        "Identificamos los cuellos de botella con mayor retorno al automatizar.":
            "We identify the bottlenecks with the highest return when automated.",
        "3. Te dejamos un plan": "3. We leave you a plan",
        "Primeros pasos por escrito, trabejes o no con nosotros.":
            "First steps in writing, whether you work with us or not.",
        "Primeros pasos por escrito, trabajes o no con nosotros.":
            "First steps in writing, whether you work with us or not.",
        "¿Prefieres agendar al instante?": "Prefer to book instantly?",
        "ALTObot reserva tu reunión en menos de un minuto.":
            "ALTObot books your meeting in under a minute.",
        "Agendar con el bot": "Book with the bot",
        "Reserva tu consultoría": "Book your consultation",
        "¿Qué te interesa?": "What are you interested in?",
        "Desarrollo de software a medida": "Custom software development",
        "Analítica de datos — dashboards & KPIs": "Data analytics — dashboards & KPIs",
        "Optimización de procesos": "Process optimization",
        "Marketing digital": "Digital marketing",
        "Aún no lo tengo claro": "Not sure yet",
        "¿Prefieres escribirnos directamente?": "Prefer to write to us directly?",
        "Teléfono / WhatsApp": "Phone / WhatsApp",

        /* ---- Contacto ---- */
        "// Contacto": "// Contact",
        "Hablemos de tu": "Let's talk about your",
        "próxima automatización": "next automation",
        "Escríbenos por WhatsApp, correo o LinkedIn. Respondemos en menos de 24 horas.":
            "Write to us on WhatsApp, email or LinkedIn. We reply within 24 hours.",
        "Correo": "Email",
        "Respuesta inmediata": "Instant response",
        "Escríbenos": "Email us",
        "Síguenos y conecta": "Follow us and connect",
        "// Escríbenos": "// Write to us",
        "Cuéntanos qué": "Tell us what",
        "quieres automatizar": "you want to automate",
        "Leemos todos los mensajes y respondemos en menos de 24 horas. Si prefieres hablar, déjanos tu teléfono y te llamamos.":
            "We read every message and reply within 24 hours. If you'd rather talk, leave us your phone number and we'll call you.",
        "Tu nombre": "Your name",
        "Tu correo": "Your email",
        "tucorreo@empresa.com": "you@company.com",
        "Nombre": "Name",
        "Empresa": "Company",
        "Teléfono": "Phone",
        "Mensaje": "Message",
        "Enviar": "Send",
        "Enviar mensaje ✦": "Send message ✦",
        "¿Qué proceso quieres automatizar?": "Which process do you want to automate?",
        "Agenda con nuestro bot": "Book with our bot",
        "Reserva una reunión en 1 minuto.": "Schedule a meeting in 1 minute.",
        "Abrir ALTObot": "Open ALTObot",
        "Ver formulario de agenda": "See booking form",

        /* ---- CTA y pie ---- */
        "Hablemos": "Let's talk",
        "¿Listo para": "Ready to",
        "automatizar": "automate",
        "tu próximo gran salto?": "your next big leap?",
        "Cuéntanos tu caso en una consultoría gratuita de 30 minutos. Te mostramos exactamente dónde puedes ganar eficiencia.":
            "Tell us about your case in a free 30-minute consultation. We'll show you exactly where you can gain efficiency.",
        "Agendar consultoría": "Book a consultation",
        "Escríbenos por WhatsApp": "Message us on WhatsApp",
        "◆ Respuesta en menos de 24 h · ◆ Sin compromiso":
            "◆ Response within 24h · ◆ No commitment",
        "Tecnología que trabaja mientras tú creces.": "Technology that works while you grow.",
        "Perú · Panamá · EE.UU.": "Peru · Panama · USA",
        "Analítica de datos": "Data analytics",
        "© 2026": "© 2026",
        "— Todos los derechos reservados": "— All rights reserved",
        "Diseño base por": "Base design by",
        "Conoce a ALTOKIA": "Get to know ALTOKIA",

        /* ---- FAQ ---- */
        "// Dudas frecuentes": "// FAQ",
        "Lo que casi": "What we're almost",
        "siempre nos preguntan": "always asked",
        "Si tu duda no está aquí, pregúntale a ALTObot o escríbenos por WhatsApp.":
            "If your question isn't here, ask ALTObot or message us on WhatsApp.",
        "Preguntar al bot": "Ask the bot",
        "¿Cuánto cuesta un proyecto?": "How much does a project cost?",
        "Cada proyecto es único, por eso no usamos tarifas genéricas. Primero escuchamos tu caso en una consultoría gratuita de 30 minutos y luego te enviamos una propuesta a medida, con alcance y precio cerrados.":
            "Every project is unique, so we don't use generic rates. First we listen to your case in a free 30-minute consultation, then we send you a tailored proposal with a fixed scope and price.",
        "¿Cuánto demora?": "How long does it take?",
        "Depende del alcance: una automatización simple, de 2 a 4 semanas; un sitio o app web, de 4 a 8 semanas; proyectos de integración grandes, de 2 a 4 meses. Trabajamos con sprints y entregas parciales, así ves avances desde la primera semana.":
            "It depends on the scope: a simple automation, 2 to 4 weeks; a website or web app, 4 to 8 weeks; large integration projects, 2 to 4 months. We work in sprints with partial deliveries, so you see progress from week one.",
        "¿Con qué herramientas automatizan?": "Which tools do you automate with?",
        "Principalmente RPA con Automation Anywhere, Power Automate y Python, además de desarrollo propio en Node.js y PostgreSQL cuando el caso lo pide. Elegimos la herramienta según tu operación, no al revés.":
            "Mainly RPA with Automation Anywhere, Power Automate and Python, plus custom development in Node.js and PostgreSQL when the case calls for it. We pick the tool to fit your operation, not the other way round.",
        "¿En qué rubros tienen experiencia?": "Which industries do you work in?",
        "Minería, retail, banca y finanzas, manufactura, logística y salud. Hemos entregado proyectos en Perú, Panamá y Estados Unidos, adaptándonos a distintas regulaciones, monedas y sistemas.":
            "Mining, retail, banking and finance, manufacturing, logistics and healthcare. We have delivered projects in Peru, Panama and the United States, adapting to different regulations, currencies and systems.",
        "¿Cómo empezamos?": "How do we start?",
        "Con una consultoría gratuita de 30 minutos. Nos cuentas tu caso, revisamos juntos dónde está la mayor oportunidad de eficiencia y te dejamos por escrito los primeros pasos, trabajes o no con nosotros.":
            "With a free 30-minute consultation. You tell us your case, we review together where the biggest efficiency opportunity is, and we leave you the first steps in writing, whether you work with us or not.",
        "¿Atienden proyectos fuera de Perú?": "Do you take projects outside Peru?",
        "Sí. Hemos entregado proyectos en Estados Unidos, Panamá y Perú, adaptándonos a distintas regulaciones, monedas y sistemas.":
            "Yes. We have delivered projects in the United States, Panama and Peru, adapting to different regulations, currencies and systems.",
        "¿Cuánto demora una automatización?": "How long does an automation take?",
        "Una automatización simple está lista en 2 a 4 semanas. Un sitio o app web, entre 4 y 8 semanas. Los proyectos de integración grandes, de 2 a 4 meses.":
            "A simple automation is ready in 2 to 4 weeks. A website or web app, 4 to 8 weeks. Large integration projects, 2 to 4 months.",
        "¿La primera reunión tiene costo?": "Is the first meeting free?",
        "No. La consultoría inicial de 30 minutos es gratuita y sin compromiso, y sales de ella con los primeros pasos por escrito.":
            "No. The initial 30-minute consultation is free with no commitment, and you leave it with the first steps in writing.",

        /* ---- Asistente ---- */
        "Asistente virtual": "Virtual assistant",
        "Asistente virtual ALTObot": "ALTObot virtual assistant",
        "Abrir asistente virtual": "Open virtual assistant",
        "¡Escríbenos!": "Chat with us!",
        "En línea — responde al instante": "Online — instant replies",
        "Escribe tu mensaje": "Type your message",
        "Escribe tu mensaje...": "Type your message...",
        "Cerrar chat": "Close chat",

        /* ---- 404 ---- */
        "Error 404 · recurso no encontrado": "Error 404 · resource not found",
        "Esta ruta no existe (todavía)": "This route doesn't exist (yet)",
        "La página que buscas se ha movido, ha cambiado de nombre o nunca llegó a desplegarse. Volvamos a terreno conocido.":
            "The page you're looking for has moved, been renamed or was never deployed. Let's get back to familiar ground.",
        "Volver al inicio": "Back to home",
        "Avisar del error": "Report the problem",

        /* ---- Títulos y descripciones de página ---- */
        "ALTOKIA — Automatización, Software a Medida, Datos y Marketing":
            "ALTOKIA — Automation, Custom Software, Data and Marketing",
        "Automatizamos el futuro de tu negocio: RPA, software a medida, analítica de datos y marketing digital. Casos reales en minería, retail y banca.":
            "We automate the future of your business: RPA, custom software, data analytics and digital marketing. Real cases in mining, retail and banking.",
        "Servicios — ALTOKIA": "Services — ALTOKIA",
        "Automatización, software a medida, analítica de datos, optimización de procesos y marketing digital. Un solo equipo para todo tu ecosistema digital.":
            "Automation, custom software, data analytics, process optimization and digital marketing. One team for your entire digital ecosystem.",
        "Proyectos — ALTOKIA": "Projects — ALTOKIA",
        "Casos reales de automatización en minería, retail, banca y legal, con resultados medibles desde la primera semana.":
            "Real automation cases in mining, retail, banking and legal, with measurable results from week one.",
        "Nosotros — ALTOKIA": "About — ALTOKIA",
        "Experiencia internacional, escucha activa y resultados medibles. Conoce el equipo detrás de ALTOKIA.":
            "International experience, active listening and measurable results. Meet the team behind ALTOKIA.",
        "Por qué ALTOKIA — Cómo trabajamos": "Why ALTOKIA — How we work",
        "Escucha activa, foco en el usuario y resultados medibles: qué nos diferencia y cómo lo demostramos con números.":
            "Active listening, user focus and measurable results: what sets us apart and how we prove it with numbers.",
        "Agenda una consultoría gratuita — ALTOKIA": "Book a free consultation — ALTOKIA",
        "Reserva 30 minutos con nuestro equipo. Te mostramos exactamente dónde puedes ganar eficiencia, sin compromiso.":
            "Book 30 minutes with our team. We'll show you exactly where you can gain efficiency, no commitment.",
        "Contacto — ALTOKIA": "Contact — ALTOKIA",
        "Página no encontrada — ALTOKIA": "Page not found — ALTOKIA",
        "La página que buscas no existe. Volvamos a terreno conocido.":
            "The page you're looking for doesn't exist. Let's get back to familiar ground."
    };

    var ATTRS = ["placeholder", "aria-label", "title", "alt"];

    /* Idioma inicial: elección guardada o el del navegador (que viene del SO) */
    function detectar() {
        var guardado = null;
        try { guardado = localStorage.getItem("altok-idioma"); } catch (e) {}
        if (guardado === "es" || guardado === "en") return guardado;
        var nav = (navigator.language || navigator.userLanguage || "es").toLowerCase();
        return nav.indexOf("es") === 0 ? "es" : "en";
    }

    var idioma = detectar();

    /* Recolección: guardamos el español original de cada nodo una sola vez */
    var textos = [];
    var atributos = [];

    function norm(s) { return s.replace(/\s+/g, " ").trim(); }

    function recolectar() {
        var it = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, null);
        var n;
        while ((n = it.nextNode())) {
            var padre = n.parentNode;
            if (!padre) continue;
            var tag = padre.nodeName;
            if (tag === "SCRIPT" || tag === "STYLE" || tag === "TEXTAREA") continue;
            var clave = norm(n.nodeValue);
            if (!clave || !DIC[clave]) continue;
            /* Dentro de <pre> el espaciado es significativo: solo traducimos
               si el nodo es exactamente la cadena, sin sangrías alrededor */
            var enPre = !!(padre.closest && padre.closest("pre"));
            if (enPre && n.nodeValue !== clave) continue;
            textos.push({ n: n, es: n.nodeValue, clave: clave, pre: enPre });
        }

        /* El rotador del titular guarda sus palabras en data-words,
           separadas por "|": se traducen una a una */
        Array.prototype.forEach.call(document.querySelectorAll("[data-words]"), function (el) {
            atributos.push({ el: el, a: "data-words", es: el.getAttribute("data-words"), lista: true });
        });

        ATTRS.forEach(function (a) {
            var els = document.querySelectorAll("[" + a + "]");
            Array.prototype.forEach.call(els, function (el) {
                var v = norm(el.getAttribute(a));
                if (DIC[v]) atributos.push({ el: el, a: a, es: el.getAttribute(a), clave: v });
            });
        });
    }

    function aplicar(lang) {
        var en = lang === "en";

        textos.forEach(function (t) {
            if (!en) { t.n.nodeValue = t.es; return; }
            var trad = DIC[t.clave];
            if (t.pre) { t.n.nodeValue = trad; return; }
            var ini = t.es.match(/^\s*/)[0];
            var fin = t.es.match(/\s*$/)[0];
            t.n.nodeValue = ini + trad + fin;
        });

        atributos.forEach(function (t) {
            if (t.lista) {
                t.el.setAttribute(t.a, en
                    ? t.es.split("|").map(function (w) { return DIC[w] || w; }).join("|")
                    : t.es);
                return;
            }
            t.el.setAttribute(t.a, en ? DIC[t.clave] : t.es);
        });

        /* Cabecera del documento */
        document.documentElement.setAttribute("lang", lang);
        var tit = norm(document.title);
        if (en && DIC[tit]) document.title = DIC[tit];
        else if (!en) {
            /* Volver: buscamos la clave española cuyo valor sea el título actual */
            for (var k in DIC) { if (DIC[k] === tit) { document.title = k; break; } }
        }
        var meta = document.querySelector('meta[name="description"]');
        if (meta) {
            var d = norm(meta.getAttribute("content"));
            if (en && DIC[d]) meta.setAttribute("content", DIC[d]);
            else if (!en) { for (var j in DIC) { if (DIC[j] === d) { meta.setAttribute("content", j); break; } } }
        }

        var btn = document.querySelector(".ak-lang-btn");
        if (btn) {
            btn.textContent = en ? "EN" : "ES";
            btn.setAttribute("title", en ? "Cambiar a español" : "Switch to English");
        }

        document.dispatchEvent(new CustomEvent("ak:idioma", { detail: lang }));
    }

    function arrancar() {
        recolectar();
        aplicar(idioma);

        var btn = document.querySelector(".ak-lang-btn");
        if (btn) {
            btn.addEventListener("click", function () {
                idioma = idioma === "es" ? "en" : "es";
                try { localStorage.setItem("altok-idioma", idioma); } catch (e) {}
                aplicar(idioma);
            });
        }
    }

    window.akIdioma = function () { return idioma; };

    if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", arrancar);
    else arrancar();
})();
