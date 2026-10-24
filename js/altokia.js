/*==============================================================
  ALTOKIA — comportamiento compartido por todas las páginas
  · Idioma ES / EN (diccionario indexado por el texto en español)
  · Tema claro / oscuro con transición circular
  · Menú con submenús, menú móvil, barra de progreso
  · Apariciones al hacer scroll, contadores, barras de impacto
  · Video del hero, red de nodos, filtro de proyectos
  · Formularios (WhatsApp o correo) y ALTObot
==============================================================*/
(function () {
  "use strict";

  var WA_NUMBER = "51906106881";
  var MAIL = "contacto@altokia.com";
  var REDUCED = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  var FINE = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
  var root = document.documentElement;
  var $ = function (s, c) { return (c || document).querySelector(s); };
  var $$ = function (s, c) { return Array.prototype.slice.call((c || document).querySelectorAll(s)); };

  /* =========================================================
     DICCIONARIO ES → EN
     La clave es el texto en español tal como aparece en la página.
     Si cambias un texto en el HTML, cambia también su clave aquí.
     ========================================================= */
  var DIC = {
    "Inicio": "Home",
    "Nosotros": "About",
    "Servicios": "Services",
    "Proyectos": "Projects",
    "Contacto": "Contact",
    "Compañía": "Company",
    "Agenda una demo": "Book a demo",
    "Por qué ALTOKIA": "Why ALTOKIA",
    "Automatización & Lógica · Tecnología · Operaciones · Conocimiento": "Automation & Logic · Technology · Operations · Knowledge",
    "Sistemas operativos": "Systems operational",
    "Inicializando ALTOKIA": "Starting ALTOKIA",
    "ALTOKIA - Inicio": "ALTOKIA - Home",
    "Cambiar tema": "Switch theme",
    "Cambiar idioma": "Switch language",
    "Volver arriba": "Back to top",
    "breadcrumb": "breadcrumb",
    "Impulsando el futuro digital": "Powering the digital future",
    "Automatizamos el futuro": "We automate the future",
    "de tu negocio con": "of your business with",
    "Automatización, software a medida, analítica de datos y marketing. Convertimos tareas repetitivas en resultados que puedes medir desde la primera semana.": "Automation, custom software, data analytics and marketing. We turn repetitive tasks into results you can measure from week one.",
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
    "# Bot RPA — Facturas & Órdenes de Compra (minería)": "# RPA bot — Invoices & Purchase Orders (mining)",
    "▸ 3 días de trabajo manual": "▸ 3 days of manual work",
    "20 minutos": "20 minutes",
    "// Servicios": "// Services",
    "Lo que hacemos": "What we do",
    "extraordinariamente bien": "extraordinarily well",
    "Todos los servicios": "All services",
    "Ver detalle": "See detail",
    "Automatización": "Automation",
    "Punto de partida": "Where we start",
    "Diseñamos flujos inteligentes con RPA e IA que eliminan tareas repetitivas y conectan tus sistemas de punta a punta.": "We design intelligent workflows with RPA and AI that eliminate repetitive tasks and connect your systems end-to-end.",
    "Desarrollo de Software a Medida": "Custom Software Development",
    "Software a medida": "Custom software",
    "Sistemas y aplicaciones construidos desde cero para tu operación, sin plantillas ni licencias que no necesitas.": "Systems and applications built from scratch for your operation, with no templates and no licenses you don't need.",
    "Analítica de Datos": "Data Analytics",
    "Convertimos tus datos en decisiones: dashboards en tiempo real, KPIs claros y reportes que le hablan directo a tu negocio.": "We turn your data into decisions: real-time dashboards, clear KPIs and reports that speak directly to your business.",
    "Optimización de Procesos": "Process Optimization",
    "Eficiencia operativa": "Operational efficiency",
    "Medimos, rediseñamos y afinamos tus operaciones para reducir costos y eliminar cuellos de botella.": "We measure, redesign and fine-tune your operations to cut costs and remove bottlenecks.",
    "Marketing Digital": "Digital Marketing",
    "Growth digital": "Digital growth",
    "Estrategias basadas en datos — SEO, pauta y automatización de campañas — para llegar a las personas correctas.": "Data-driven strategies — SEO, paid media and campaign automation — to reach the right people.",
    "Automatización, software a medida, analítica de datos, marketing y optimización — un solo equipo para todo tu ecosistema digital.": "Automation, custom software, data analytics, marketing and optimization — one team for your entire digital ecosystem.",
    "Diagnóstico": "Diagnosis",
    "Rediseño": "Redesign",
    "Métricas": "Metrics",
    "Reportería": "Reporting",
    "// Nosotros": "// About",
    "// Quiénes somos": "// Who we are",
    "Escuchamos primero,": "We listen first,",
    "automatizamos después": "then we automate",
    "Entendemos el negocio": "We understand the business",
    "antes que el código": "before the code",
    "Conoce al equipo detrás de ALTOKIA: experiencia internacional, escucha activa y resultados medibles.": "Meet the team behind ALTOKIA: international experience, active listening and measurable results.",
    "En": "At",
    "no vendemos tecnología por vender: nos obsesionan los requerimientos reales del usuario y del cliente. Cada proyecto empieza con una conversación, no con una propuesta genérica.": "we don't sell technology for its own sake: we are obsessed with the real requirements of the user and the client. Every project starts with a conversation, not a generic proposal.",
    "Somos un equipo con": "We are a team with",
    "experiencia internacional": "international experience",
    "que ha desplegado soluciones de automatización y desarrollo web en múltiples países, adaptándonos a distintas regulaciones, monedas, sistemas y culturas de trabajo. Esa diversidad nos dio algo que ningún curso enseña: la capacidad de": "that has deployed automation and web development solutions across multiple countries, adapting to different regulations, currencies, systems and work cultures. That diversity gave us something no course can teach: the ability to",
    "entender el negocio antes que el código": "understand the business before the code",
    "Estamos dispuestos a escucharte las veces que haga falta. Tu operación es única, y tu automatización también debería serlo.": "We are willing to listen to you as many times as it takes. Your operation is unique — your automation should be too.",
    "Ver nuestros proyectos": "See our projects",
    "// Valores": "// Values",
    "Tres cosas que no": "Three things we don't",
    "negociamos": "negotiate",
    "Escucha activa": "Active listening",
    "Entendemos tu proceso antes de proponer una sola línea de código.": "We understand your process before proposing a single line of code.",
    "Centrados en el usuario": "User-centered",
    "Diseñamos para las personas que usarán la solución cada día.": "We design for the people who will use the solution every day.",
    "Resultados medibles": "Measurable results",
    "Cada entrega viene con KPIs claros y retorno demostrable.": "Every delivery comes with clear KPIs and provable ROI.",
    "// Alcance": "// Reach",
    "Presencia": "International",
    "internacional": "presence",
    "Proyectos entregados en:": "Projects delivered in:",
    "// Sectores": "// Industries",
    "Rubros que": "Industries we",
    "dominamos": "master",
    "Operaciones que ya conocemos de cerca:": "Operations we already know inside out:",
    "La mejor automatización es la que nace de escuchar a quien vive el proceso todos los días.": "The best automation is born from listening to the people who live the process every day.",
    "# Cómo trabajamos en ALTOKIA": "# How we work at ALTOKIA",
    "Escuchamos el proceso antes de proponer.": "We listen to the process before proposing.",
    "Diseñamos para quien lo usará a diario.": "We design for whoever uses it daily.",
    "Cada entrega trae": "Every delivery brings",
    "claros.": "clear.",
    "Sprints cortos, avances visibles.": "Short sprints, visible progress.",
    "Nos adaptamos a tu regulación, tu moneda y tus sistemas.": "We adapt to your regulations, your currency and your systems.",
    "Te escuchamos": "We listen",
    "las veces que": "as many times as",
    "haga falta": "it takes",
    "// Proceso": "// Process",
    "De la idea al impacto": "From idea to impact",
    "en 4 fases": "in 4 phases",
    "Descubrimiento": "Discovery",
    "Auditamos tus procesos actuales, identificamos cuellos de botella y detectamos oportunidades de automatización con mayor retorno.": "We audit your current processes, identify bottlenecks and detect the automation opportunities with the highest return.",
    "Diseño de Solución": "Solution Design",
    "Prototipamos la arquitectura, definimos flujos y diseñamos interfaces centradas en el usuario. Todo validado contigo antes de escribir código.": "We prototype the architecture, define workflows and design user-centered interfaces. Everything validated with you before writing code.",
    "Desarrollo Ágil": "Agile Development",
    "Sprints cortos, entregas continuas y comunicación transparente. Ves el avance en tiempo real y ajustamos sobre la marcha.": "Short sprints, continuous deliveries and transparent communication. You see progress in real time and we adjust along the way.",
    "Lanzamiento & Evolución": "Launch & Evolution",
    "Desplegamos, medimos KPIs y optimizamos continuamente. Tu solución crece junto a tu negocio.": "We deploy, measure KPIs and optimize continuously. Your solution grows with your business.",
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
    "// Proyectos": "// Projects",
    "Automatizaciones que ya": "Automations already",
    "trabajan por nuestros clientes": "working for our clients",
    "Casos reales en minería, retail y banca — con resultados medibles desde la primera semana.": "Real cases in mining, retail and banking — with measurable results from week one.",
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
    "Bot RPA que lee facturas y OC con OCR, valida montos contra el ERP, detecta inconsistencias y registra todo automáticamente. De 3 días de trabajo manual a 20 minutos.": "RPA bot that reads invoices and POs with OCR, validates amounts against the ERP, flags inconsistencies and records everything automatically. From 3 days of manual work to 20 minutes.",
    "▲ 94% menos tiempo de procesamiento": "▲ 94% less processing time",
    "Bot de WhatsApp Inteligente": "Smart WhatsApp Bot",
    "Asistente conversacional que atiende consultas, toma pedidos, consulta stock en tiempo real y deriva a un humano solo cuando hace falta. Disponible 24/7, sin filas de espera.": "Conversational assistant that answers questions, takes orders, checks stock in real time and hands off to a human only when needed. Available 24/7, no waiting lines.",
    "▲ 6x más consultas atendidas": "▲ 6x more inquiries handled",
    "Automatización de Documentos": "Document Automation",
    "Generación, clasificación y firma de contratos y documentos regulatorios de forma masiva, con trazabilidad completa y cero errores de tipeo.": "Mass generation, classification and signing of contracts and regulatory documents, with full traceability and zero typing errors.",
    "▲ 12,000 documentos/mes sin intervención": "▲ 12,000 documents/month untouched by hand",
    "Conciliación Bancaria Automática": "Automatic Bank Reconciliation",
    "Robot que cruza extractos bancarios contra registros contables cada noche, concilia partidas y genera el reporte de excepciones listo para revisión matutina.": "A robot that cross-checks bank statements against accounting records every night, reconciles entries and generates the exception report ready for morning review.",
    "▲ Cierre contable 5 días más rápido": "▲ Monthly close 5 days faster",
    "Reportería Automática de Ventas": "Automated Sales Reporting",
    "Pipeline que consolida ventas de todas las tiendas y canales, y envía dashboards e informes ejecutivos por correo y WhatsApp antes de que empiece el día.": "Pipeline that consolidates sales from every store and channel, and delivers dashboards and executive reports via email and WhatsApp before the day starts.",
    "▲ Decisiones con datos del día anterior": "▲ Decisions with yesterday's data",
    "Onboarding de Proveedores": "Supplier Onboarding",
    "Portal web + flujo automatizado que valida documentación legal de proveedores, verifica vigencias y notifica vencimientos, eliminando el seguimiento manual por correo.": "Web portal + automated workflow that validates suppliers' legal documentation, checks expiration dates and sends notifications, eliminating manual email follow-up.",
    "▲ 80% menos correos de seguimiento": "▲ 80% fewer follow-up emails",
    "Resumen Inteligente de Llamadas Legales": "Smart Legal Call Summaries",
    "IA que escucha las llamadas de los case managers con clientes de firmas de abogados en EE.UU. y extrae automáticamente el resumen de la conversación, tipo de caso, número de póliza, teléfono y demás datos clave — listos para el expediente, sin transcribir nada a mano.": "AI that listens to case managers' calls with clients at US law firms and automatically extracts the call summary, case type, policy number, phone number and other key data — ready for the file, with nothing transcribed by hand.",
    "▲ Documentación de llamadas 100% automática": "▲ 100% automatic call documentation",
    "// Por qué ALTOKIA": "// Why ALTOKIA",
    "Tecnología que trabaja": "Technology that works",
    "mientras tú creces": "while you grow",
    "// Diferenciales": "// What sets us apart",
    "No vendemos horas,": "We don't sell hours,",
    "entregamos eficiencia": "we deliver efficiency",
    "Cada automatización que ponemos en producción libera tiempo de personas que estaban haciendo trabajo repetitivo. Eso es lo que medimos.": "Every automation we put into production frees up time for people who were doing repetitive work. That is what we measure.",
    "Experiencia internacional": "International experience",
    "Proyectos entregados en EE.UU., Panamá y Perú.": "Projects delivered in the USA, Panama and Peru.",
    "Distintas regulaciones, monedas, sistemas y culturas de trabajo.": "Different regulations, currencies, systems and work cultures.",
    "Foco en el usuario": "User focus",
    "Diseñamos para quien usará la solución todos los días.": "We design for whoever will use the solution every day.",
    "KPIs desde el día uno": "KPIs from day one",
    "Cada entrega trae retorno demostrable, no promesas.": "Every delivery brings provable ROI, not promises.",
    "Resultados en producción": "Results in production",
    "Casos entregados": "Delivered cases",
    "Consultas retail": "Retail inquiries",
    "Docs bancarios": "Banking docs",
    "Correos de seguimiento": "Follow-up emails",
    "Tareas manuales": "Manual tasks",
    "12k/m": "12k/mo",
    "// Agenda": "// Booking",
    "Treinta minutos que": "Thirty minutes that",
    "ahorran meses": "save months",
    "// Consultoría gratuita": "// Free consultation",
    "Cuéntanos tu caso,": "Tell us your case,",
    "sin compromiso": "no commitment",
    "Agenda una consultoría gratuita de 30 minutos. Cuéntanos tu caso y te mostramos exactamente dónde puedes ganar eficiencia.": "Book a free 30-minute consultation. Tell us your case and we'll show you exactly where you can gain efficiency.",
    "1. Escuchamos": "1. We listen",
    "Nos cuentas qué proceso te está costando tiempo o dinero hoy.": "You tell us which process is costing you time or money today.",
    "2. Detectamos oportunidades": "2. We spot opportunities",
    "Identificamos los cuellos de botella con mayor retorno al automatizar.": "We identify the bottlenecks with the highest return when automated.",
    "3. Te dejamos un plan": "3. We leave you a plan",
    "Primeros pasos por escrito, trabejes o no con nosotros.": "First steps in writing, whether you work with us or not.",
    "Primeros pasos por escrito, trabajes o no con nosotros.": "First steps in writing, whether you work with us or not.",
    "¿Prefieres agendar al instante?": "Prefer to book instantly?",
    "ALTObot reserva tu reunión en menos de un minuto.": "ALTObot books your meeting in under a minute.",
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
    "// Contacto": "// Contact",
    "Hablemos de tu": "Let's talk about your",
    "próxima automatización": "next automation",
    "Escríbenos por WhatsApp, correo o LinkedIn. Respondemos en menos de 24 horas.": "Write to us on WhatsApp, email or LinkedIn. We reply within 24 hours.",
    "Correo": "Email",
    "Respuesta inmediata": "Instant response",
    "Escríbenos": "Email us",
    "Síguenos y conecta": "Follow us and connect",
    "// Escríbenos": "// Write to us",
    "Cuéntanos qué": "Tell us what",
    "quieres automatizar": "you want to automate",
    "Leemos todos los mensajes y respondemos en menos de 24 horas. Si prefieres hablar, déjanos tu teléfono y te llamamos.": "We read every message and reply within 24 hours. If you'd rather talk, leave us your phone number and we'll call you.",
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
    "Hablemos": "Let's talk",
    "¿Listo para": "Ready to",
    "automatizar": "automate",
    "tu próximo gran salto?": "your next big leap?",
    "Cuéntanos tu caso en una consultoría gratuita de 30 minutos. Te mostramos exactamente dónde puedes ganar eficiencia.": "Tell us about your case in a free 30-minute consultation. We'll show you exactly where you can gain efficiency.",
    "Agendar consultoría": "Book a consultation",
    "Escríbenos por WhatsApp": "Message us on WhatsApp",
    "◆ Respuesta en menos de 24 h · ◆ Sin compromiso": "◆ Response within 24h · ◆ No commitment",
    "Tecnología que trabaja mientras tú creces.": "Technology that works while you grow.",
    "Perú · Panamá · EE.UU.": "Peru · Panama · USA",
    "Analítica de datos": "Data analytics",
    "© 2026": "© 2026",
    "— Todos los derechos reservados": "— All rights reserved",
    "Diseño base por": "Base design by",
    "Conoce a ALTOKIA": "Get to know ALTOKIA",
    "// Dudas frecuentes": "// FAQ",
    "Lo que casi": "What we're almost",
    "siempre nos preguntan": "always asked",
    "Si tu duda no está aquí, pregúntale a ALTObot o escríbenos por WhatsApp.": "If your question isn't here, ask ALTObot or message us on WhatsApp.",
    "Preguntar al bot": "Ask the bot",
    "¿Cuánto cuesta un proyecto?": "How much does a project cost?",
    "Cada proyecto es único, por eso no usamos tarifas genéricas. Primero escuchamos tu caso en una consultoría gratuita de 30 minutos y luego te enviamos una propuesta a medida, con alcance y precio cerrados.": "Every project is unique, so we don't use generic rates. First we listen to your case in a free 30-minute consultation, then we send you a tailored proposal with a fixed scope and price.",
    "¿Cuánto demora?": "How long does it take?",
    "Depende del alcance: una automatización simple, de 2 a 4 semanas; un sitio o app web, de 4 a 8 semanas; proyectos de integración grandes, de 2 a 4 meses. Trabajamos con sprints y entregas parciales, así ves avances desde la primera semana.": "It depends on the scope: a simple automation, 2 to 4 weeks; a website or web app, 4 to 8 weeks; large integration projects, 2 to 4 months. We work in sprints with partial deliveries, so you see progress from week one.",
    "¿Con qué herramientas automatizan?": "Which tools do you automate with?",
    "Principalmente RPA con Automation Anywhere, Power Automate y Python, además de desarrollo propio en Node.js y PostgreSQL cuando el caso lo pide. Elegimos la herramienta según tu operación, no al revés.": "Mainly RPA with Automation Anywhere, Power Automate and Python, plus custom development in Node.js and PostgreSQL when the case calls for it. We pick the tool to fit your operation, not the other way round.",
    "¿En qué rubros tienen experiencia?": "Which industries do you work in?",
    "Minería, retail, banca y finanzas, manufactura, logística y salud. Hemos entregado proyectos en Perú, Panamá y Estados Unidos, adaptándonos a distintas regulaciones, monedas y sistemas.": "Mining, retail, banking and finance, manufacturing, logistics and healthcare. We have delivered projects in Peru, Panama and the United States, adapting to different regulations, currencies and systems.",
    "¿Cómo empezamos?": "How do we start?",
    "Con una consultoría gratuita de 30 minutos. Nos cuentas tu caso, revisamos juntos dónde está la mayor oportunidad de eficiencia y te dejamos por escrito los primeros pasos, trabajes o no con nosotros.": "With a free 30-minute consultation. You tell us your case, we review together where the biggest efficiency opportunity is, and we leave you the first steps in writing, whether you work with us or not.",
    "¿Atienden proyectos fuera de Perú?": "Do you take projects outside Peru?",
    "Sí. Hemos entregado proyectos en Estados Unidos, Panamá y Perú, adaptándonos a distintas regulaciones, monedas y sistemas.": "Yes. We have delivered projects in the United States, Panama and Peru, adapting to different regulations, currencies and systems.",
    "¿Cuánto demora una automatización?": "How long does an automation take?",
    "Una automatización simple está lista en 2 a 4 semanas. Un sitio o app web, entre 4 y 8 semanas. Los proyectos de integración grandes, de 2 a 4 meses.": "A simple automation is ready in 2 to 4 weeks. A website or web app, 4 to 8 weeks. Large integration projects, 2 to 4 months.",
    "¿La primera reunión tiene costo?": "Is the first meeting free?",
    "No. La consultoría inicial de 30 minutos es gratuita y sin compromiso, y sales de ella con los primeros pasos por escrito.": "Yes. The initial 30-minute consultation is free with no commitment, and you leave it with the first steps in writing.",
    "Asistente virtual": "Virtual assistant",
    "Asistente virtual ALTObot": "ALTObot virtual assistant",
    "Abrir asistente virtual": "Open virtual assistant",
    "¡Escríbenos!": "Chat with us!",
    "En línea — responde al instante": "Online — instant replies",
    "Escribe tu mensaje": "Type your message",
    "Escribe tu mensaje...": "Type your message...",
    "Cerrar chat": "Close chat",
    "Error 404 · recurso no encontrado": "Error 404 · resource not found",
    "Esta ruta no existe (todavía)": "This route doesn't exist (yet)",
    "La página que buscas se ha movido, ha cambiado de nombre o nunca llegó a desplegarse. Volvamos a terreno conocido.": "The page you're looking for has moved, been renamed or was never deployed. Let's get back to familiar ground.",
    "Volver al inicio": "Back to home",
    "Avisar del error": "Report the problem",
    "ALTOKIA — Automatización, Software a Medida, Datos y Marketing": "ALTOKIA — Automation, Custom Software, Data and Marketing",
    "Automatizamos el futuro de tu negocio: RPA, software a medida, analítica de datos y marketing digital. Casos reales en minería, retail y banca.": "We automate the future of your business: RPA, custom software, data analytics and digital marketing. Real cases in mining, retail and banking.",
    "Servicios — ALTOKIA": "Services — ALTOKIA",
    "Automatización, software a medida, analítica de datos, optimización de procesos y marketing digital. Un solo equipo para todo tu ecosistema digital.": "Automation, custom software, data analytics, process optimization and digital marketing. One team for your entire digital ecosystem.",
    "Proyectos — ALTOKIA": "Projects — ALTOKIA",
    "Casos reales de automatización en minería, retail, banca y legal, con resultados medibles desde la primera semana.": "Real automation cases in mining, retail, banking and legal, with measurable results from week one.",
    "Nosotros — ALTOKIA": "About — ALTOKIA",
    "Experiencia internacional, escucha activa y resultados medibles. Conoce el equipo detrás de ALTOKIA.": "International experience, active listening and measurable results. Meet the team behind ALTOKIA.",
    "Por qué ALTOKIA — Cómo trabajamos": "Why ALTOKIA — How we work",
    "Escucha activa, foco en el usuario y resultados medibles: qué nos diferencia y cómo lo demostramos con números.": "Active listening, user focus and measurable results: what sets us apart and how we prove it with numbers.",
    "Agenda una consultoría gratuita — ALTOKIA": "Book a free consultation — ALTOKIA",
    "Reserva 30 minutos con nuestro equipo. Te mostramos exactamente dónde puedes ganar eficiencia, sin compromiso.": "Book 30 minutes with our team. We'll show you exactly where you can gain efficiency, no commitment.",
    "Contacto — ALTOKIA": "Contact — ALTOKIA",
    "Página no encontrada — ALTOKIA": "Page not found — ALTOKIA",
    "La página que buscas no existe. Volvamos a terreno conocido.": "The page you're looking for doesn't exist. Let's get back to familiar ground.",
    "Saltar al contenido": "Skip to content",
    "ALTOKIA — Ir al inicio": "ALTOKIA — Go to home",
    "ALTOKIA — Volver al inicio": "ALTOKIA — Back to home",
    "Principal": "Main",
    "Menú móvil": "Mobile menu",
    "Abrir menú": "Open menu",
    "Cerrar menú": "Close menu",
    "Proceso": "Process",
    "Equipo": "Team",
    "Preguntas": "FAQ",
    "Agendar consultoría gratuita": "Book a free consultation",
    "Automatizamos el futuro de tu negocio": "We automate the future of your business",
    "Automatizamos el": "We automate the",
    "de tu negocio": "of your business",
    "Persona trabajando en una laptop con dashboards de datos y líneas de código en pantalla, en un entorno oscuro con luces azules": "Person working on a laptop with data dashboards and lines of code on screen, in a dark setting with blue lights",
    "Robot humanoide blanco que extiende la mano hacia un circuito digital, sobre fondo claro": "White humanoid robot reaching its hand toward a digital circuit, on a light background",
    "tiempo de proceso · minería": "processing time · mining",
    "documentos / mes sin intervención": "documents / month untouched by hand",
    "Tecnologías": "Technologies",
    "Resultados en cifras": "Results in numbers",
    "Automatización, software a medida, analítica de datos, marketing y optimización: un solo equipo para todo tu ecosistema digital.": "Automation, custom software, data analytics, marketing and optimization: one team for your entire digital ecosystem.",
    "Dashboards & KPIs": "Dashboards & KPIs",
    "Estrategias basadas en datos (SEO, pauta y automatización de campañas) para llegar a las personas correctas.": "Data-driven strategies (SEO, paid media and campaign automation) to reach the right people.",
    "Consultar este servicio": "Ask about this service",
    "¿No sabes por dónde empezar?": "Not sure where to start?",
    "En 30 minutos revisamos tu operación y te decimos qué automatizar primero, trabajes o no con nosotros.": "In 30 minutes we review your operation and tell you what to automate first, whether you work with us or not.",
    "// Caso destacado · Minería": "// Featured case · Mining",
    "De 3 días a": "From 3 days to",
    "Un bot RPA que lee facturas y órdenes de compra con OCR, valida los montos contra el ERP, detecta inconsistencias y lo registra todo automáticamente.": "An RPA bot that reads invoices and purchase orders with OCR, validates amounts against the ERP, flags inconsistencies and records everything automatically.",
    "Comparación de tiempos": "Time comparison",
    "Antes · proceso manual": "Before · manual process",
    "▸ 3 días de trabajo manual → 20 minutos": "▸ 3 days of manual work → 20 minutes",
    "3 días": "3 days",
    "Después · con ALTOKIA": "After · with ALTOKIA",
    "menos tiempo de procesamiento": "less processing time",
    "Quiero un resultado así": "I want results like this",
    "Fragmento de código del bot de facturas: lee cada factura, extrae los datos con OCR, busca la orden de compra en el ERP y registra o alerta según coincidan los montos": "Code snippet of the invoice bot: it reads each invoice, extracts the data with OCR, looks up the purchase order in the ERP and records or raises an alert depending on whether the amounts match",
    "Automatizaciones que ya trabajan por nuestros clientes": "Automations already working for our clients",
    "Casos reales en minería, retail, banca y legal, con resultados medibles desde la primera semana.": "Real cases in mining, retail, banking and legal, with measurable results from week one.",
    "Filtrar proyectos por sector": "Filter projects by industry",
    "Todos": "All",
    "Minería": "Mining",
    "Retail": "Retail",
    "Banca": "Banking",
    "Legal": "Legal",
    "IA que escucha las llamadas de los case managers con clientes de firmas de abogados en EE.UU. y extrae el resumen, tipo de caso, número de póliza, teléfono y demás datos clave, listos para el expediente.": "AI that listens to case managers' calls with clients at US law firms and extracts the summary, case type, policy number, phone number and other key data, ready for the file.",
    "// Tu caso": "// Your case",
    "¿Tu proceso es el siguiente?": "Is your process next?",
    "Cuéntanos qué tarea repetitiva le quita tiempo a tu equipo y te mostramos cómo automatizarla, en una consultoría gratuita de 30 minutos.": "Tell us which repetitive task is eating your team's time and we'll show you how to automate it, in a free 30-minute consultation.",
    "De la idea al impacto en 4 fases": "From idea to impact in 4 phases",
    "Sprints cortos y avances visibles: sabes en qué estamos cada semana.": "Short sprints and visible progress: you know where we stand every week.",
    "No vendemos horas, entregamos eficiencia": "We don't sell hours, we deliver efficiency",
    "En ALTOKIA no vendemos tecnología por vender: nos obsesionan los requerimientos reales del usuario y del cliente. Cada proyecto empieza con una conversación, no con una propuesta genérica.": "At ALTOKIA we don't sell technology for its own sake: we are obsessed with the real requirements of the user and the client. Every project starts with a conversation, not a generic proposal.",
    "Rubros que dominamos": "Industries we master",
    "// Equipo de trabajo": "// Our team",
    "Las personas detrás de": "The people behind",
    "cada automatización": "every automation",
    "Un equipo multidisciplinario que escucha primero y automatiza después, para todo tu ecosistema digital.": "A multidisciplinary team that listens first and automates second, for your entire digital ecosystem.",
    "CEO & Fundadora": "CEO & Founder",
    "Lidera la estrategia y escucha a cada cliente antes de proponer una solución.": "Leads strategy and listens to every client before proposing a solution.",
    "Estrategia": "Strategy",
    "Consultoría": "Consulting",
    "Líder de Automatización RPA": "RPA Automation Lead",
    "Diseña bots que eliminan tareas repetitivas y conectan sistemas de punta a punta.": "Designs bots that eliminate repetitive tasks and connect systems end-to-end.",
    "Desarrolladora Full Stack": "Full Stack Developer",
    "Construye sistemas a medida, sin plantillas ni licencias que no necesitas.": "Builds custom systems, with no templates and no licenses you don't need.",
    "Analista de Datos": "Data Analyst",
    "Convierte datos dispersos en dashboards y KPIs que cualquiera entiende.": "Turns scattered data into dashboards and KPIs anyone can understand.",
    "Especialista en Marketing Digital": "Digital Marketing Specialist",
    "Crea campañas basadas en datos para llegar a las personas correctas.": "Creates data-driven campaigns to reach the right people.",
    "Consultor de Procesos": "Process Consultant",
    "Mide, rediseña y afina operaciones para eliminar cuellos de botella.": "Measures, redesigns and fine-tunes operations to remove bottlenecks.",
    "Lo que casi siempre nos preguntan": "What we're almost always asked",
    "// Hablemos": "// Let's talk",
    "¿Listo para automatizar tu": "Ready to automate your",
    "próximo gran salto": "next big leap",
    "Escuchamos": "We listen",
    "Detectamos oportunidades": "We spot opportunities",
    "Te dejamos un plan": "We leave you a plan",
    "+51 906 106 881 · Respuesta inmediata": "+51 906 106 881 · Instant response",
    "/company/altokia · Síguenos y conecta": "/company/altokia · Follow us and connect",
    "Leemos todos los mensajes y respondemos en menos de 24 horas.": "We read every message and reply within 24 hours.",
    "(opcional)": "(optional)",
    "Cuéntanos brevemente tu caso": "Briefly tell us about your case",
    "Enviar por WhatsApp": "Send via WhatsApp",
    "Enviar por correo": "Send by email",
    "LinkedIn de ALTOKIA": "ALTOKIA on LinkedIn",
    "WhatsApp de ALTOKIA": "ALTOKIA on WhatsApp",
    "Correo de ALTOKIA": "Email ALTOKIA",
    "Equipo de trabajo": "Our team",
    "Preguntas frecuentes": "FAQ",
    "© 2026 ALTOKIA — Todos los derechos reservados": "© 2026 ALTOKIA — All rights reserved",
    "Volver arriba ↑": "Back to top ↑",
    "Automatizamos los procesos de tu negocio con RPA, IA, software a medida, analítica de datos y marketing digital. Casos reales en minería, retail, banca y legal. Agenda una consultoría gratuita de 30 minutos.": "We automate your business processes with RPA, AI, custom software, data analytics and digital marketing. Real cases in mining, retail, banking and legal. Book a free 30-minute consultation.",
    "Submenú de Nosotros": "About submenu",
    "Submenú de Servicios": "Services submenu",
    "Quiénes somos": "Who we are",
    "Escuchamos primero, automatizamos después": "We listen first, then we automate",
    "Las personas detrás de cada automatización": "The people behind every automation",
    "Ruta de navegación": "Breadcrumb",
    "Automatizamos el futuro de tu negocio con flujos inteligentes": "We automate the future of your business with intelligent workflows",
    "líneas de servicio con un solo equipo": "service lines with a single team",
    "fases de la idea al impacto": "phases from idea to impact",
    "consultoría gratuita": "free consultation",
    "tiempo de respuesta": "response time",
    "países con proyectos entregados": "countries with delivered projects",
    "rubros que dominamos": "industries we master",
    "para reservar con ALTObot": "to book with ALTObot",
    "Caso real": "Real case",
    "Ver proyectos": "See projects",
    "Consulta desde la web": "Website inquiry",
    "Consulta desde la web — Agenda": "Website inquiry — Booking",
    "Cita": "Quote",
    "Escribe": "Write",
    "Casos reales,": "Real cases,",
    "resultados medibles": "measurable results",
    "Canales de contacto": "Contact channels",
    "Enviar mensaje": "Send a message",
    "Diagnóstico · Rediseño · Métricas": "Diagnosis · Redesign · Metrics",
    "SEO · Google Ads · Meta Ads": "SEO · Google Ads · Meta Ads",
    "Logística": "Logistics",
    "Manufactura": "Manufacturing",
    "Salud": "Healthcare",
    "Banca & Finanzas": "Banking & Finance",
    "Cómo trabajamos en ALTOKIA": "How we work at ALTOKIA",
  "Flujo automatizado: los documentos de la bandeja pasan por el bot RPA y se registran en el ERP; las inconsistencias generan una alerta": "Automated flow: documents from the inbox go through the RPA bot and are recorded in the ERP; inconsistencies raise an alert",
  "Un editor escribe código mientras la interfaz de una aplicación se va armando bloque a bloque": "An editor writes code while an application's interface is assembled block by block",
  "Dashboard con indicadores reales de ALTOKIA: 12,000 documentos por mes, 6 veces más consultas atendidas y 98 % de satisfacción, con gráficos de barras, línea y anillo": "Dashboard with real ALTOKIA indicators: 12,000 documents per month, 6x more enquiries handled and 98% satisfaction, with bar, line and ring charts",
  "Medidor que baja las tareas manuales un 87 % y comparación de un proceso antes y después de optimizarlo": "Gauge showing manual tasks down 87% and a before-and-after comparison of an optimized process",
  "Embudo de marketing por el que baja el tráfico desde alcance e interés hasta clientes, junto a un objetivo y una campaña en curso": "Marketing funnel where traffic flows from reach and interest down to customers, next to a target and a running campaign",
  "bandeja": "inbox",
  "bot RPA": "RPA bot",
  "alerta": "alert",
  "3 días de trabajo manual": "3 days of manual work",
  "→ 20 minutos": "→ 20 minutes",
  "portal_proveedores.ts": "supplier_portal.ts",
  "✓ compilado · listo para desplegar": "✓ compiled · ready to deploy",
  "sin plantillas": "no templates",
  "dashboard · operaciones": "dashboard · operations",
  "en vivo": "live",
  "docs / mes": "docs / month",
  "consultas atendidas": "enquiries handled",
  "satisfacción": "satisfaction",
  "documentos procesados": "documents processed",
  "cierre contable": "month-end close",
  "más rápido": "faster",
  "tareas manuales": "manual tasks",
  "antes": "before",
  "después": "after",
  "manual": "manual",
  "−5 d cierre": "−5 d close",
  "alcance": "reach",
  "interés": "interest",
  "clientes": "customers",
  "leads calificados": "qualified leads",
  "campaña activa": "active campaign",
  "consultas": "enquiries",
  "−5 días": "−5 days"
  };

  /* Texto alternativo y etiqueta de LinkedIn del equipo: se generan a partir del nombre */
  $$(".member h3").forEach(function (h) {
    var n = h.textContent.trim();
    DIC["Foto de perfil de " + n] = "Profile photo of " + n;
    DIC["LinkedIn de " + n] = n + " on LinkedIn";
  });

  /* Mensajes generados por JS */
  var MSG = {
    es: {
      required: "Este campo es obligatorio.",
      email: "Escribe un correo válido.",
      sentWa: "Abrimos WhatsApp con tu mensaje listo. Solo presiona enviar.",
      sentMail: "Abrimos tu correo con el mensaje listo. Si no se abre, escríbenos a " + MAIL + ".",
      intro: "Hola ALTOKIA, quiero agendar una consultoría.",
      waDefault: "Hola ALTOKIA, quiero información sobre sus servicios",
      menuOpen: "Abrir menú", menuClose: "Cerrar menú",
      subOpen: "Abrir submenú", themeToLight: "Cambiar a modo claro", themeToDark: "Cambiar a modo oscuro"
    },
    en: {
      required: "This field is required.",
      email: "Please enter a valid email.",
      sentWa: "We opened WhatsApp with your message ready. Just hit send.",
      sentMail: "We opened your email app with the message ready. If it doesn't open, write to " + MAIL + ".",
      intro: "Hi ALTOKIA, I'd like to book a consultation.",
      waDefault: "Hi ALTOKIA, I'd like information about your services",
      menuOpen: "Open menu", menuClose: "Close menu",
      subOpen: "Open submenu", themeToLight: "Switch to light mode", themeToDark: "Switch to dark mode"
    }
  };

  /* =========================================================
     IDIOMA
     ========================================================= */
  var ATTRS = ["placeholder", "aria-label", "title", "alt", "data-subject"];
  var nodes = [], attrs = [];
  function norm(s) { return s.replace(/\s+/g, " ").trim(); }
  function tr(es) { return (lang === "en" && DIC[norm(es)]) || es; }

  (function collect() {
    var walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, null);
    var n;
    while ((n = walker.nextNode())) {
      var p = n.parentNode;
      if (!p || p.nodeName === "SCRIPT" || p.nodeName === "STYLE" || (p.closest && p.closest("pre, [data-rotator], #chatMessages, #chatOptions"))) continue;
      var key = norm(n.nodeValue);
      if (key && DIC[key]) nodes.push({ n: n, es: n.nodeValue, key: key });
    }
    $$("*").forEach(function (el) {
      ATTRS.forEach(function (a) {
        var v = el.getAttribute(a);
        if (v && DIC[norm(v)]) attrs.push({ el: el, a: a, es: v });
      });
    });
  })();

  var metaDesc = $('meta[name="description"]');
  var esTitle = document.title, esDesc = metaDesc ? metaDesc.content : "";

  function detectLang() {
    var saved = null;
    try { saved = localStorage.getItem("altok-idioma"); } catch (e) {}
    if (saved === "es" || saved === "en") return saved;
    var nav = (navigator.language || "es").toLowerCase();
    return nav.indexOf("es") === 0 ? "es" : "en";
  }
  var lang = detectLang();

  function applyLang(l) {
    lang = l;
    var en = l === "en";
    root.lang = l;
    nodes.forEach(function (t) { t.n.nodeValue = en ? t.es.replace(t.key, DIC[t.key]) : t.es; });
    attrs.forEach(function (t) { t.el.setAttribute(t.a, en ? DIC[norm(t.es)] : t.es); });
    document.title = en ? (DIC[esTitle] || esTitle) : esTitle;
    if (metaDesc) metaDesc.content = en ? (DIC[esDesc] || esDesc) : esDesc;
    var lb = $("#langToggle"); if (lb) lb.textContent = en ? "ES" : "EN";
    syncThemeLabel(); syncMenuLabel(); startRotator();
    $$("[data-wa]").forEach(function (a) {
      a.href = "https://wa.me/" + WA_NUMBER + "?text=" + encodeURIComponent(MSG[l].waDefault);
    });
  }

  var langBtn = $("#langToggle");
  if (langBtn) langBtn.addEventListener("click", function () {
    var next = lang === "en" ? "es" : "en";
    try { localStorage.setItem("altok-idioma", next); } catch (e) {}
    applyLang(next);
  });

  /* =========================================================
     TITULAR: palabras que rotan con efecto "decodificación"
     <span data-rotator data-words="uno|dos|tres">
     ========================================================= */
  var rot = $("[data-rotator]");
  var rotTimer = null, scrambleTimer = null, rotIdx = 0;
  var GLYPHS = "01<>/_#*+=%$";
  function words() {
    if (!rot) return [];
    return rot.getAttribute("data-words").split("|").map(function (w) { return tr(w); });
  }
  function scrambleTo(text) {
    clearInterval(scrambleTimer);
    var frame = 0, total = 16;
    rot.classList.add("is-scrambling");
    scrambleTimer = setInterval(function () {
      frame++;
      var out = "";
      for (var i = 0; i < text.length; i++) {
        out += (text[i] === " " || i < (text.length * frame) / total) ? text[i] : GLYPHS[Math.floor(Math.random() * GLYPHS.length)];
      }
      rot.textContent = out;
      if (frame >= total) { clearInterval(scrambleTimer); rot.textContent = text; rot.classList.remove("is-scrambling"); }
    }, 45);
  }
  function startRotator() {
    if (!rot) return;
    clearInterval(rotTimer); clearInterval(scrambleTimer);
    var list = words();
    rotIdx = 0; rot.textContent = list[0]; rot.classList.remove("is-scrambling");
    if (REDUCED) return;
    rotTimer = setInterval(function () {
      if (document.hidden) return;
      rotIdx = (rotIdx + 1) % list.length;
      scrambleTo(list[rotIdx]);
    }, 3400);
  }

  /* =========================================================
     TEMA CLARO / OSCURO
     ========================================================= */
  var themeBtn = $("#themeToggle");
  var themeMetas = $$('meta[name="theme-color"]');
  function syncThemeLabel() {
    if (!themeBtn) return;
    var label = root.getAttribute("data-theme") === "dark" ? MSG[lang].themeToLight : MSG[lang].themeToDark;
    themeBtn.setAttribute("aria-label", label);
    themeBtn.setAttribute("title", label);
  }
  function syncThemeColor() {
    var c = root.getAttribute("data-theme") === "dark" ? "#050816" : "#F6F8FF";
    themeMetas.forEach(function (m) { m.setAttribute("content", c); });
  }
  function setTheme(next) {
    root.setAttribute("data-theme", next);
    try { localStorage.setItem("altok-tema", next); } catch (e) {}
    syncThemeLabel(); syncThemeColor();
    document.dispatchEvent(new Event("ak:theme"));
  }
  syncThemeColor();
  if (themeBtn) themeBtn.addEventListener("click", function () {
    var next = root.getAttribute("data-theme") === "dark" ? "light" : "dark";
    if (REDUCED || !document.startViewTransition) { setTheme(next); return; }
    /* El nuevo tema se revela en un círculo que crece desde el botón */
    var r = themeBtn.getBoundingClientRect();
    var x = r.left + r.width / 2, y = r.top + r.height / 2;
    var radius = Math.hypot(Math.max(x, innerWidth - x), Math.max(y, innerHeight - y));
    document.startViewTransition(function () { setTheme(next); }).ready.then(function () {
      root.animate({ clipPath: ["circle(0px at " + x + "px " + y + "px)", "circle(" + radius + "px at " + x + "px " + y + "px)"] },
        { duration: 650, easing: "cubic-bezier(.22, 1, .36, 1)", pseudoElement: "::view-transition-new(root)" });
    });
  });

  /* =========================================================
     HEADER, PROGRESO DE LECTURA, SUBMENÚS Y MENÚ MÓVIL
     ========================================================= */
  var header = $("#header");
  var progress = $("#progress");
  var menuBtn = $("#menuToggle");
  var menu = $("#mobileMenu");

  var ticking = false;
  function onScroll() {
    if (ticking) return;
    ticking = true;
    requestAnimationFrame(function () {
      var y = window.scrollY, max = document.documentElement.scrollHeight - window.innerHeight;
      if (header) header.classList.toggle("is-scrolled", y > 12);
      if (progress) progress.style.transform = "scaleX(" + (max > 0 ? Math.min(y / max, 1) : 0) + ")";
      ticking = false;
    });
  }
  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });
  window.addEventListener("resize", onScroll);

  /* Submenús de escritorio: se abren al pasar el mouse (CSS) o con la flecha (clic / teclado) */
  var subItems = $$(".nav__item.has-sub");
  function closeSubs(except) {
    subItems.forEach(function (it) {
      if (it === except) return;
      it.classList.remove("is-open");
      var b = $(".nav__caret", it); if (b) b.setAttribute("aria-expanded", "false");
    });
  }
  subItems.forEach(function (it) {
    var b = $(".nav__caret", it);
    if (!b) return;
    b.addEventListener("click", function (e) {
      e.stopPropagation();
      var open = !it.classList.contains("is-open");
      closeSubs(it);
      it.classList.toggle("is-open", open);
      b.setAttribute("aria-expanded", String(open));
    });
    it.addEventListener("focusout", function (e) { if (!it.contains(e.relatedTarget)) { it.classList.remove("is-open"); b.setAttribute("aria-expanded", "false"); } });
  });
  document.addEventListener("click", function (e) { if (!e.target.closest(".nav__item.has-sub")) closeSubs(); });

  function syncMenuLabel() {
    if (!menuBtn) return;
    var open = document.body.classList.contains("menu-open");
    menuBtn.setAttribute("aria-label", open ? MSG[lang].menuClose : MSG[lang].menuOpen);
  }
  function setMenu(open) {
    if (!menu) return;
    document.body.classList.toggle("menu-open", open);
    menuBtn.setAttribute("aria-expanded", String(open));
    menu.toggleAttribute("inert", !open);
    syncMenuLabel();
  }
  if (menu && menuBtn) {
    menu.setAttribute("inert", "");
    menuBtn.addEventListener("click", function () { setMenu(!document.body.classList.contains("menu-open")); });
    menu.addEventListener("click", function (e) { if (e.target.closest("a")) setMenu(false); });
    window.matchMedia("(min-width: 1024px)").addEventListener("change", function (e) { if (e.matches) setMenu(false); });
  }

  /* =========================================================
     APARICIÓN AL HACER SCROLL + CONTADORES
     ========================================================= */
  function countUp(el) {
    var target = parseInt(el.getAttribute("data-count"), 10);
    var sep = el.hasAttribute("data-sep");
    var fmt = function (v) { return sep ? v.toLocaleString("en-US") : String(v); };
    if (REDUCED) { el.textContent = fmt(target); return; }
    var start = null, dur = 1600;
    function tick(ts) {
      if (!start) start = ts;
      var p = Math.min((ts - start) / dur, 1);
      el.textContent = fmt(Math.round(target * (1 - Math.pow(1 - p, 3))));
      if (p < 1) requestAnimationFrame(tick);
    }
    el.textContent = fmt(0);
    requestAnimationFrame(tick);
  }

  var revealEls = $$(".reveal");
  if ("IntersectionObserver" in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (!en.isIntersecting) return;
        en.target.classList.add("is-in");
        $$("[data-count]", en.target).forEach(countUp);
        io.unobserve(en.target);
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -40px 0px" });
    revealEls.forEach(function (el) { io.observe(el); });
    /* Contadores del hero (no usan .reveal) */
    $$(".hero-stats [data-count]").forEach(function (el) { countUp(el); });
  } else {
    revealEls.forEach(function (el) { el.classList.add("is-in"); });
  }

  /* Submenú fijo de servicios: marca la sección visible */
  var subLinks = $$(".subnav a[href^='#']");
  if (subLinks.length && "IntersectionObserver" in window) {
    var spy = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (!en.isIntersecting) return;
        subLinks.forEach(function (a) { a.classList.toggle("is-active", a.getAttribute("href") === "#" + en.target.id); });
      });
    }, { rootMargin: "-40% 0px -55% 0px" });
    subLinks.forEach(function (a) { var s = $(a.getAttribute("href")); if (s) spy.observe(s); });
  }

  /* =========================================================
     FOCO DE LUZ QUE SIGUE AL CURSOR EN LAS TARJETAS
     ========================================================= */
  if (FINE && !REDUCED) {
    document.addEventListener("pointermove", function (e) {
      var card = e.target.closest && e.target.closest(".glow");
      if (!card) return;
      var r = card.getBoundingClientRect();
      card.style.setProperty("--mx", (e.clientX - r.left) + "px");
      card.style.setProperty("--my", (e.clientY - r.top) + "px");
    }, { passive: true });
  }

  /* =========================================================
     VIDEO DEL HERO: solo se reproduce si se ve y si el visitante
     no pidió menos movimiento ni ahorro de datos
     ========================================================= */
  $$("video[data-hero-video]").forEach(function (v) {
    var save = navigator.connection && navigator.connection.saveData;
    if (REDUCED || save) { v.removeAttribute("autoplay"); v.pause(); return; }
    v.muted = true;
    var play = function () { var p = v.play(); if (p && p.catch) p.catch(function () {}); };
    if ("IntersectionObserver" in window) {
      new IntersectionObserver(function (en) { en[0].isIntersecting && !document.hidden ? play() : v.pause(); }).observe(v);
    } else { play(); }
    document.addEventListener("visibilitychange", function () { document.hidden ? v.pause() : play(); });

    /* Si la página no tiene clip propio y se usa el video de marca completo,
       se repite en bucle solo el segmento que le corresponde, en cámara lenta. */
    var start = parseFloat(v.getAttribute("data-start")) || 0, end = parseFloat(v.getAttribute("data-end")) || 0;
    if (!end) return;
    var usingBrand = function () { return /video_altokia\.mp4/.test(v.currentSrc || ""); };
    var ticking = false;
    function tick() {
      if (v.paused || v.ended) { ticking = false; return; }
      if (v.currentTime >= end - 0.06) v.currentTime = start;
      requestAnimationFrame(tick);
    }
    function applySegment() {
      if (!usingBrand()) return;
      v.playbackRate = 0.65;
      if (v.currentTime < start || v.currentTime > end) v.currentTime = start;
      if (!ticking) { ticking = true; requestAnimationFrame(tick); }
    }
    v.addEventListener("loadedmetadata", applySegment);
    v.addEventListener("play", applySegment);
    if (v.readyState >= 1) applySegment();
  });

  /* =========================================================
     ILUSTRACIONES ANIMADAS (svg.anim): solo se mueven cuando se ven
     ========================================================= */
  var anims = $$("svg.anim");
  if (anims.length) {
    if (REDUCED) {
      anims.forEach(function (a) { if (a.pauseAnimations) a.pauseAnimations(); });
    } else if ("IntersectionObserver" in window) {
      var aio = new IntersectionObserver(function (entries) {
        entries.forEach(function (en) {
          var a = en.target;
          a.classList.toggle("is-live", en.isIntersecting);
          if (a.pauseAnimations) { en.isIntersecting ? a.unpauseAnimations() : a.pauseAnimations(); }
        });
      }, { threshold: 0.15 });
      anims.forEach(function (a) { aio.observe(a); });
      document.addEventListener("visibilitychange", function () {
        anims.forEach(function (a) {
          if (!a.pauseAnimations) return;
          if (document.hidden) a.pauseAnimations(); else if (a.classList.contains("is-live")) a.unpauseAnimations();
        });
      });
    } else {
      anims.forEach(function (a) { a.classList.add("is-live"); });
    }
  }

  /* =========================================================
     RED DE NODOS (canvas.net-canvas dentro de una sección)
     Se pausa fuera de pantalla o con la pestaña oculta.
     ========================================================= */
  $$("canvas.net-canvas").forEach(function (canvas) {
    var host = canvas.parentElement;
    if (REDUCED || !canvas.getContext) return;
    var ctx = canvas.getContext("2d");
    var dpr = Math.min(window.devicePixelRatio || 1, 2);
    var w = 0, h = 0, pts = [], raf = null, visible = true, colA = "", colB = "";
    var mouse = { x: -9999, y: -9999 };
    var LINK = 130;
    function readColors() {
      var cs = getComputedStyle(root);
      colA = cs.getPropertyValue("--net-a").trim();
      colB = cs.getPropertyValue("--net-b").trim();
    }
    function resize() {
      var r = host.getBoundingClientRect();
      w = r.width; h = r.height;
      canvas.width = Math.round(w * dpr); canvas.height = Math.round(h * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      var n = Math.round(Math.min(70, Math.max(24, (w * h) / 16000)));
      pts = [];
      for (var i = 0; i < n; i++) {
        pts.push({ x: Math.random() * w, y: Math.random() * h, vx: (Math.random() - .5) * .35, vy: (Math.random() - .5) * .35, r: Math.random() * 1.6 + .7, b: Math.random() < .35 });
      }
    }
    function frame() {
      ctx.clearRect(0, 0, w, h);
      var i, j, p, q, dx, dy, d;
      for (i = 0; i < pts.length; i++) {
        p = pts[i];
        p.x += p.vx; p.y += p.vy;
        if (p.x < 0 || p.x > w) p.vx *= -1;
        if (p.y < 0 || p.y > h) p.vy *= -1;
        for (j = i + 1; j < pts.length; j++) {
          q = pts[j]; dx = p.x - q.x; dy = p.y - q.y; d = dx * dx + dy * dy;
          if (d < LINK * LINK) {
            ctx.strokeStyle = "rgba(" + (p.b ? colB : colA) + "," + (0.18 * (1 - Math.sqrt(d) / LINK)).toFixed(3) + ")";
            ctx.lineWidth = 1; ctx.beginPath(); ctx.moveTo(p.x, p.y); ctx.lineTo(q.x, q.y); ctx.stroke();
          }
        }
        dx = p.x - mouse.x; dy = p.y - mouse.y; d = dx * dx + dy * dy;
        if (d < 180 * 180) {
          ctx.strokeStyle = "rgba(" + colB + "," + (0.4 * (1 - Math.sqrt(d) / 180)).toFixed(3) + ")";
          ctx.beginPath(); ctx.moveTo(p.x, p.y); ctx.lineTo(mouse.x, mouse.y); ctx.stroke();
        }
        ctx.fillStyle = "rgba(" + (p.b ? colB : colA) + ",.75)";
        ctx.beginPath(); ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2); ctx.fill();
      }
      raf = requestAnimationFrame(frame);
    }
    function play() { if (!raf && visible && !document.hidden) raf = requestAnimationFrame(frame); }
    function stop() { if (raf) cancelAnimationFrame(raf); raf = null; }
    readColors(); resize(); play();
    var rt; window.addEventListener("resize", function () { clearTimeout(rt); rt = setTimeout(resize, 150); });
    document.addEventListener("ak:theme", readColors);
    document.addEventListener("visibilitychange", function () { document.hidden ? stop() : play(); });
    host.addEventListener("pointermove", function (e) { var r = host.getBoundingClientRect(); mouse.x = e.clientX - r.left; mouse.y = e.clientY - r.top; }, { passive: true });
    host.addEventListener("pointerleave", function () { mouse.x = mouse.y = -9999; });
    if ("IntersectionObserver" in window) {
      new IntersectionObserver(function (en) { visible = en[0].isIntersecting; visible ? play() : stop(); }).observe(host);
    }
  });

  /* =========================================================
     FILTRO DE PROYECTOS (también acepta ?sector=mineria en la URL)
     ========================================================= */
  var tabs = $$(".tab[data-filter]");
  var projects = $$(".project");
  var projectList = $("#projectList");
  function filterProjects(f) {
    if (projectList) projectList.setAttribute("data-filter", f);
    tabs.forEach(function (t) { t.setAttribute("aria-pressed", String(t.getAttribute("data-filter") === f)); });
    projects.forEach(function (p) {
      var show = f === "all" || p.getAttribute("data-sector") === f;
      p.classList.toggle("is-hidden", !show);
      p.classList.remove("is-filtered");
      if (show) { p.classList.add("is-in"); void p.offsetWidth; p.classList.add("is-filtered"); }
    });
  }
  tabs.forEach(function (tab) { tab.addEventListener("click", function () { filterProjects(tab.getAttribute("data-filter")); }); });
  var params = new URLSearchParams(location.search);
  if (tabs.length && params.get("sector") && $('.tab[data-filter="' + params.get("sector") + '"]')) filterProjects(params.get("sector"));

  /* =========================================================
     FORMULARIOS → WhatsApp o correo (sin servidor)
     form[data-ak-form]: los campos [required] se validan y el
     mensaje se arma con la etiqueta y el valor de cada campo.
     ========================================================= */
  $$("form[data-ak-form]").forEach(function (form) {
    var status = $(".form__status", form);
    var select = $("select", form);
    /* Servicio preseleccionado desde la URL (?servicio=automatizacion) o desde un enlace data-service */
    var svc = params.get("servicio");
    if (select && svc) { $$("option", select).forEach(function (o) { if (o.getAttribute("data-key") === svc) select.value = o.value; }); }
    $$("[data-service]").forEach(function (a) {
      a.addEventListener("click", function () { if (select) select.value = a.getAttribute("data-service"); });
    });

    function setError(input, text) {
      var field = input.closest(".field");
      field.classList.toggle("has-error", !!text);
      input.setAttribute("aria-invalid", text ? "true" : "false");
      var err = $(".error", field); if (err) err.textContent = text || "";
    }

    form.addEventListener("submit", function (e) {
      e.preventDefault();
      var m = MSG[lang];
      var channel = (e.submitter && e.submitter.getAttribute("data-channel")) || "wa";
      var ok = true, first = null;
      $$("[required]", form).forEach(function (input) {
        var v = input.value.trim(), err = "";
        if (!v) err = m.required;
        else if (input.type === "email" && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v)) err = m.email;
        setError(input, err);
        if (err) { ok = false; first = first || input; }
      });
      if (!ok) { first.focus(); if (status) status.textContent = ""; return; }

      var lines = [m.intro, ""];
      $$("input, select, textarea", form).forEach(function (el) {
        var v = el.tagName === "SELECT" ? el.options[el.selectedIndex].text : el.value.trim();
        if (!v) return;
        var lab = $('label[for="' + el.id + '"]', form);
        var name = lab ? norm(lab.childNodes[0].nodeValue || lab.textContent) : el.name;
        lines.push(name + ": " + v);
      });
      var body = lines.join("\n");
      var subject = form.getAttribute("data-subject") || "ALTOKIA";

      if (channel === "mail") {
        window.location.href = "mailto:" + MAIL + "?subject=" + encodeURIComponent(subject) + "&body=" + encodeURIComponent(body);
        if (status) status.textContent = m.sentMail;
      } else {
        window.open("https://wa.me/" + WA_NUMBER + "?text=" + encodeURIComponent(body), "_blank", "noopener");
        if (status) status.textContent = m.sentWa;
      }
    });
  });

  (function altobot() {
    /* =========================================================
       ALTObot — asistente guiado (bilingüe)
       ========================================================= */
    var channels = function (en) {
      return (en ? "With pleasure! You can talk directly to our team:" : "¡Con gusto! Puedes hablar directamente con nuestro equipo:") +
        '\n\n📱 <a href="https://wa.me/' + WA_NUMBER + '" target="_blank" rel="noopener">WhatsApp</a>' +
        '\n✉ <a href="mailto:' + MAIL + '">' + MAIL + '</a>' +
        '\n💼 <a href="https://www.linkedin.com/company/altokia" target="_blank" rel="noopener">LinkedIn</a>' +
        (en ? "\n\nWe reply within 24 hours." : "\n\nRespondemos en menos de 24 horas.");
    };
    var BOT = {
      es: {
        greeting: "¡Hola! 👋 Soy ALTObot, el asistente virtual de ALTOKIA.\n¿En qué puedo ayudarte hoy?",
        optServices: "🤔 ¿Qué servicios ofrecen?", optPricing: "💰 ¿Cuánto cuesta un proyecto?", optTiming: "⏱ ¿Cuánto demora?",
        optBook: "📅 Agendar una reunión", optHuman: "👤 Hablar con una persona", optMenu: "↩ Volver al menú",
        ansServices: "Ofrecemos:\n⚡ Automatización de procesos (RPA con Automation Anywhere, Power Automate y Python)\n◈ Desarrollo de software a medida\n✦ Analítica de datos y dashboards\n◎ Optimización de procesos\n⬡ Marketing digital\n\n¿Quieres agendar una reunión para conversar sobre tu caso?",
        ansPricing: "Cada proyecto es único, por eso no usamos tarifas genéricas. 😊\n\nPrimero escuchamos tu caso en una consultoría gratuita de 30 minutos y luego te enviamos una propuesta a medida, con alcance y precio cerrados.\n\n¿Agendamos esa llamada?",
        ansTiming: "Depende del alcance:\n\n🤖 Una automatización simple: 2 a 4 semanas\n🌐 Un sitio o app web: 4 a 8 semanas\n🏗 Proyectos de integración grandes: 2 a 4 meses\n\nTrabajamos con sprints y entregas parciales, así ves avances desde la primera semana.",
        ansHuman: channels(false),
        fallback: "Buena pregunta 🤓 Para darte una respuesta precisa, lo mejor es que la conversemos. Puedes agendar una reunión o escribirnos por WhatsApp.\n\nMientras tanto, ¿te ayudo con alguna de estas opciones?",
        askService: "¡Genial! 🎉 ¿Sobre qué servicio te gustaría conversar?",
        svcAuto: "⚡ Automatización", svcWeb: "◈ Desarrollo de software", svcData: "✦ Analítica de datos", svcOther: "💡 Otro / no estoy seguro",
        askDate: "Perfecto. 📅 ¿Qué día te acomoda?", askTime: "¿A qué hora te queda mejor? (hora local)",
        askName: "¡Casi listo! ¿A nombre de quién agendo la reunión?\n\n✍ Escribe tu nombre abajo y presiona enviar.",
        confirmWa: "📱 Confirmar por WhatsApp", confirmMail: "✉ Confirmar por correo",
        mailSubject: "Confirmación de reunión — ALTOKIA", anythingElse: "¿Puedo ayudarte con algo más? 😊", locale: "es-PE",
        confirmed: function (b) { return "¡Listo, " + b.name + "! ✅\n\nTu reunión quedó pre-agendada:\n\n🗂 Tema: " + b.service + "\n📅 Fecha: " + b.date + "\n🕐 Hora: " + b.time + "\n\nConfírmala por el canal que prefieras y te enviaremos la invitación:"; },
        waBooking: function (b) { return "Hola ALTOKIA, soy " + b.name + '. Quiero confirmar una reunión sobre "' + b.service + '" el ' + b.date + " a las " + b.time + "."; }
      },
      en: {
        greeting: "Hi! 👋 I'm ALTObot, ALTOKIA's virtual assistant.\nHow can I help you today?",
        optServices: "🤔 What services do you offer?", optPricing: "💰 How much does a project cost?", optTiming: "⏱ How long does it take?",
        optBook: "📅 Book a meeting", optHuman: "👤 Talk to a person", optMenu: "↩ Back to menu",
        ansServices: "We offer:\n⚡ Process automation (RPA with Automation Anywhere, Power Automate and Python)\n◈ Custom software development\n✦ Data analytics and dashboards\n◎ Process optimization\n⬡ Digital marketing\n\nWould you like to book a meeting to discuss your case?",
        ansPricing: "Every project is unique, so we don't use generic rates. 😊\n\nFirst we listen to your case in a free 30-minute consultation, then we send you a tailored proposal with a fixed scope and price.\n\nShall we book that call?",
        ansTiming: "It depends on the scope:\n\n🤖 A simple automation: 2 to 4 weeks\n🌐 A website or web app: 4 to 8 weeks\n🏗 Large integration projects: 2 to 4 months\n\nWe work in sprints with partial deliveries, so you see progress from week one.",
        ansHuman: channels(true),
        fallback: "Good question 🤓 To give you an accurate answer it's best if we talk it through. You can book a meeting or message us on WhatsApp.\n\nIn the meantime, can I help you with any of these?",
        askService: "Great! 🎉 Which service would you like to talk about?",
        svcAuto: "⚡ Automation", svcWeb: "◈ Software development", svcData: "✦ Data analytics", svcOther: "💡 Other / not sure",
        askDate: "Perfect. 📅 Which day works for you?", askTime: "What time suits you best? (local time)",
        askName: "Almost done! Who should I book the meeting for?\n\n✍ Type your name below and hit send.",
        confirmWa: "📱 Confirm on WhatsApp", confirmMail: "✉ Confirm by email",
        mailSubject: "Meeting confirmation — ALTOKIA", anythingElse: "Can I help you with anything else? 😊", locale: "en-US",
        confirmed: function (b) { return "All set, " + b.name + "! ✅\n\nYour meeting is pre-booked:\n\n🗂 Topic: " + b.service + "\n📅 Date: " + b.date + "\n🕐 Time: " + b.time + "\n\nConfirm it through your preferred channel and we'll send the invite:"; },
        waBooking: function (b) { return "Hi ALTOKIA, I'm " + b.name + '. I would like to confirm a meeting about "' + b.service + '" on ' + b.date + " at " + b.time + "."; }
      }
    };

    var T = function () { return BOT[lang]; };
    var chatToggle = document.getElementById("chatToggle");
    var chatClose = document.getElementById("chatClose");
    var panel = document.getElementById("chatbot");
    var msgs = document.getElementById("chatMessages");
    var opts = document.getElementById("chatOptions");
    var chatForm = document.getElementById("chatForm");
    var chatInput = document.getElementById("chatInput");
    var started = false, awaitingName = false;
    var booking = { service: "", date: "", time: "", name: "" };
    if (!panel) return;
    panel.setAttribute("inert", "");

    function esc(s) { return s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;"); }
    function scrollBottom() { msgs.scrollTop = msgs.scrollHeight; }
    function addMsg(html, who) {
      var d = document.createElement("div");
      d.className = "msg msg--" + who;
      d.innerHTML = html.replace(/\n/g, "<br>");
      msgs.appendChild(d); scrollBottom();
    }
    function botSay(text, delay) {
      return new Promise(function (resolve) {
        var typing = document.createElement("div");
        typing.className = "msg msg--bot msg--typing";
        typing.innerHTML = "<i></i><i></i><i></i>";
        msgs.appendChild(typing); scrollBottom();
        setTimeout(function () { typing.remove(); addMsg(text, "bot"); resolve(); }, REDUCED ? 0 : (delay || 650));
      });
    }
    function renderOptions(list) {
      opts.innerHTML = "";
      list.forEach(function (o) {
        var b = document.createElement("button");
        b.type = "button"; b.className = "chat-opt"; b.textContent = o.label;
        b.addEventListener("click", function () { addMsg(esc(o.label), "user"); opts.innerHTML = ""; o.action(); });
        opts.appendChild(b);
      });
      scrollBottom();
    }
    function mainMenu() {
      renderOptions([
        { label: T().optServices, action: function () { answer(T().ansServices, true); } },
        { label: T().optPricing, action: function () { answer(T().ansPricing, true); } },
        { label: T().optTiming, action: function () { answer(T().ansTiming, false); } },
        { label: T().optBook, action: startBooking },
        { label: T().optHuman, action: function () { answer(T().ansHuman, false); } }
      ]);
    }
    function answer(text, offerBooking) {
      return botSay(text).then(function () {
        renderOptions(offerBooking
          ? [{ label: T().optBook, action: startBooking }, { label: T().optMenu, action: backToMenu }]
          : [{ label: T().optMenu, action: backToMenu }]);
      });
    }
    function backToMenu() { return botSay(T().anythingElse).then(mainMenu); }
    function startBooking() {
      return botSay(T().askService).then(function () {
        renderOptions([T().svcAuto, T().svcWeb, T().svcData, T().svcOther].map(function (l) {
          return { label: l, action: function () { pickService(l); } };
        }));
      });
    }
    function pickService(label) {
      booking.service = label.replace(/^[^A-Za-zÁÉÍÓÚÑáéíóúñ]+\s*/, "");
      return botSay(T().askDate).then(function () {
        var dates = [], d = new Date();
        while (dates.length < 5) {
          d.setDate(d.getDate() + 1);
          if (d.getDay() !== 0 && d.getDay() !== 6) dates.push(new Date(d));
        }
        renderOptions(dates.map(function (date) {
          return {
            label: new Intl.DateTimeFormat(T().locale, { weekday: "short", day: "numeric", month: "short" }).format(date),
            action: function () {
              booking.date = new Intl.DateTimeFormat(T().locale, { weekday: "long", day: "numeric", month: "long" }).format(date);
              pickTime();
            }
          };
        }));
      });
    }
    function pickTime() {
      return botSay(T().askTime).then(function () {
        renderOptions(["09:00", "11:00", "15:00", "17:00"].map(function (slot) {
          return { label: "🕐 " + slot, action: function () { booking.time = slot; askName(); } };
        }));
      });
    }
    function askName() { return botSay(T().askName).then(function () { awaitingName = true; chatInput.focus(); }); }
    function confirmBooking() {
      return botSay(T().confirmed(booking)).then(function () {
        var text = encodeURIComponent(T().waBooking(booking));
        renderOptions([
          { label: T().confirmWa, action: function () { window.open("https://wa.me/" + WA_NUMBER + "?text=" + text, "_blank", "noopener"); backToMenu(); } },
          { label: T().confirmMail, action: function () { window.location.href = "mailto:" + MAIL + "?subject=" + encodeURIComponent(T().mailSubject) + "&body=" + text; backToMenu(); } },
          { label: T().optMenu, action: backToMenu }
        ]);
      });
    }

    chatForm.addEventListener("submit", function (e) {
      e.preventDefault();
      var text = chatInput.value.trim();
      if (!text) return;
      addMsg(esc(text), "user"); chatInput.value = ""; opts.innerHTML = "";
      if (awaitingName) { awaitingName = false; booking.name = esc(text); confirmBooking(); return; }
      var q = text.toLowerCase();
      if (/(servicio|hacen|ofrec|service|offer)/.test(q)) return answer(T().ansServices, true);
      if (/(precio|costo|cuesta|tarifa|presupuesto|price|cost|how much|budget)/.test(q)) return answer(T().ansPricing, true);
      if (/(demora|tiempo|plazo|semanas|tarda|how long|timeline|weeks)/.test(q)) return answer(T().ansTiming, false);
      if (/(agendar|reunión|reunion|cita|meeting|demo|llamada|book|schedule|call)/.test(q)) return startBooking();
      if (/(humano|persona|asesor|contacto|hablar|human|person|agent|contact|talk)/.test(q)) return answer(T().ansHuman, false);
      if (/(hola|buenas|hey|saludos|hi|hello)/.test(q)) return botSay(T().greeting).then(mainMenu);
      return botSay(T().fallback).then(mainMenu);
    });

    function openChat() {
      setMenu(false);
      document.body.classList.add("chat-open");
      panel.setAttribute("aria-hidden", "false");
      panel.removeAttribute("inert");
      chatToggle.setAttribute("aria-expanded", "true");
      if (!started) { started = true; botSay(T().greeting, 900).then(mainMenu); }
      setTimeout(function () { chatInput.focus({ preventScroll: true }); }, 50);
    }
    function closeChat() {
      document.body.classList.remove("chat-open");
      panel.setAttribute("aria-hidden", "true");
      panel.setAttribute("inert", "");
      chatToggle.setAttribute("aria-expanded", "false");
    }
    chatToggle.addEventListener("click", function () { document.body.classList.contains("chat-open") ? closeChat() : openChat(); });
    chatClose.addEventListener("click", function () { closeChat(); chatToggle.focus(); });
    document.querySelectorAll("[data-open-bot]").forEach(function (el) {
      el.addEventListener("click", function (e) { e.preventDefault(); openChat(); });
    });
    document.addEventListener("keydown", function (e) {
      if (e.key !== "Escape") return;
      if (document.body.classList.contains("chat-open")) { closeChat(); chatToggle.focus(); }
      if (document.body.classList.contains("menu-open")) { setMenu(false); menuBtn.focus(); }
    });
  })();

  /* Arranque */
  if (lang === "en") applyLang("en"); else { syncThemeLabel(); syncMenuLabel(); startRotator(); }
})();
