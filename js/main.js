/* ═══════════════════════════════════════════════
   ALTOKIA — main.js
   Three.js + interacciones UX/UI + i18n + chatbot
   ═══════════════════════════════════════════════ */

'use strict';

const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

const WA_NUMBER = '51999999999';
const CONTACT_EMAIL = 'contacto@altokia.com';

/* ══════════ i18n — DICCIONARIO ES / EN ══════════ */
const I18N = {
  es: {
    'brand.acronym': 'Automatización & Lógica · Tecnología · Operaciones · Conocimiento',
    'pre.msgs': ['Inicializando sistemas...', 'Cargando módulos 3D...', 'Compilando shaders...', 'Optimizando experiencia...', 'Listo ✦'],

    'nav.inicio': 'Inicio', 'nav.nosotros': 'Nosotros', 'nav.servicios': 'Servicios',
    'nav.proyectos': 'Proyectos', 'nav.stack': 'Stack', 'nav.resultados': 'Resultados', 'nav.cta': 'Hablemos',

    'hero.badge': 'Impulsando el futuro digital',
    'hero.t1': 'Automatizamos', 'hero.t2': 'el futuro', 'hero.t3': 'de tu negocio',
    'hero.subtitle': 'Desarrollo web, automatización y optimización de procesos.<br />Convertimos tareas repetitivas en',
    'hero.typed': ['flujos inteligentes', 'crecimiento medible', 'ventaja competitiva', 'tiempo para innovar'],
    'hero.btn1': 'Explorar servicios', 'hero.btn2': 'Agendar demo',
    'hero.scroll': 'Desliza para descubrir',

    'marquee': 'AUTOMATIZACIÓN ✦ DESARROLLO WEB ✦ IA APLICADA ✦ OPTIMIZACIÓN DE PROCESOS ✦ INTEGRACIÓN DE SISTEMAS ✦ RPA ✦ CLOUD ✦ ',

    'about.tag': '// 01 — Nosotros',
    'about.title': 'Escuchamos primero,<br /><span class="text-gradient">automatizamos después</span>',
    'about.lead': 'En <strong>ALTOKIA</strong> no vendemos tecnología por vender: nos obsesionan <span class="about__highlight">los requerimientos reales del usuario y del cliente</span>. Cada proyecto empieza con una conversación, no con una propuesta genérica.',
    'about.p1': 'Somos un equipo con <strong>experiencia internacional</strong> que ha desplegado soluciones de automatización y desarrollo web en múltiples países, adaptándonos a distintas regulaciones, monedas, sistemas y culturas de trabajo. Esa diversidad nos dio algo que ningún curso enseña: la capacidad de <em>entender el negocio antes que el código</em>.',
    'about.p2': 'Estamos dispuestos a escucharte las veces que haga falta. Tu operación es única, y tu automatización también debería serlo.',
    'about.v1': '<strong>Escucha activa</strong><span>Entendemos tu proceso antes de proponer una sola línea de código.</span>',
    'about.v2': '<strong>Centrados en el usuario</strong><span>Diseñamos para las personas que usarán la solución cada día.</span>',
    'about.v3': '<strong>Resultados medibles</strong><span>Cada entrega viene con KPIs claros y retorno demostrable.</span>',
    'about.countriesTitle': 'Presencia internacional',
    'about.countriesSub': 'Proyectos entregados en:',
    'about.c1': '🇺🇸 EE.UU.', 'about.c3': '🇵🇦 Panamá', 'about.c5': '🇵🇪 Perú',
    'about.industriesTitle': 'Rubros que dominamos',
    'about.i1': '⛏ Minería', 'about.i2': '🛒 Retail', 'about.i3': '🏦 Banca & Finanzas',
    'about.i4': '🏭 Manufactura', 'about.i5': '🚚 Logística', 'about.i6': '⚕ Salud',
    'about.quote': 'La mejor automatización es la que nace de escuchar a quien vive el proceso todos los días.',

    'services.tag': '// 02 — Servicios',
    'services.title': 'Lo que hacemos<br /><span class="text-gradient">extraordinariamente bien</span>',
    'services.s1t': 'Automatización de Procesos',
    'services.s1d': 'Eliminamos tareas manuales con RPA y flujos inteligentes. Tu equipo se enfoca en lo estratégico, los bots hacen el resto.',
    'services.s2t': 'Desarrollo Web',
    'services.s2d': 'Aplicaciones y sitios web de alto rendimiento, con diseño moderno, animaciones fluidas y experiencias que enamoran.',
    'services.s3t': 'Optimización de Procesos',
    'services.s3d': 'Analizamos, medimos y rediseñamos tus operaciones para reducir costos y multiplicar la eficiencia de tu empresa.',
    'services.s4t': 'IA Aplicada',
    'services.s4d': 'Chatbots, análisis predictivo y modelos de IA integrados a tus sistemas para tomar decisiones basadas en datos.',
    'services.s5t': 'Integración de Sistemas',
    'services.s5d': 'Conectamos tus herramientas — ERP, CRM, APIs — en un ecosistema unificado que fluye sin fricciones.',
    'services.s6t': 'Cloud & DevOps',
    'services.s6d': 'Infraestructura escalable, despliegues automatizados y monitoreo continuo para que tu producto nunca se detenga.',

    'process.tag': '// 03 — Proceso',
    'process.title': 'De la idea al impacto<br /><span class="text-gradient">en 4 fases</span>',
    'process.f1': '<span class="process__phase">Fase 01</span><h3>Descubrimiento</h3><p>Auditamos tus procesos actuales, identificamos cuellos de botella y detectamos oportunidades de automatización con mayor retorno.</p>',
    'process.f2': '<span class="process__phase">Fase 02</span><h3>Diseño de Solución</h3><p>Prototipamos la arquitectura, definimos flujos y diseñamos interfaces centradas en el usuario. Todo validado contigo antes de escribir código.</p>',
    'process.f3': '<span class="process__phase">Fase 03</span><h3>Desarrollo Ágil</h3><p>Sprints cortos, entregas continuas y comunicación transparente. Ves el avance en tiempo real y ajustamos sobre la marcha.</p>',
    'process.f4': '<span class="process__phase">Fase 04</span><h3>Lanzamiento & Evolución</h3><p>Desplegamos, medimos KPIs y optimizamos continuamente. Tu solución crece junto a tu negocio.</p>',

    'projects.tag': '// 04 — Proyectos',
    'projects.title': 'Automatizaciones que ya<br /><span class="text-gradient">trabajan por nuestros clientes</span>',
    'projects.p1s': '⛏ Minería', 'projects.p1t': 'Facturas & Órdenes de Compra',
    'projects.p1d': 'Bot RPA que lee facturas y OC con OCR, valida montos contra el ERP, detecta inconsistencias y registra todo automáticamente. De 3 días de trabajo manual a 20 minutos.',
    'projects.p1r': '▲ 94% menos tiempo de procesamiento',
    'projects.p2s': '🛒 Retail', 'projects.p2t': 'Bot de WhatsApp Inteligente',
    'projects.p2d': 'Asistente conversacional que atiende consultas, toma pedidos, consulta stock en tiempo real y deriva a un humano solo cuando hace falta. Disponible 24/7, sin filas de espera.',
    'projects.p2r': '▲ 6x más consultas atendidas',
    'projects.p3s': '🏦 Banca', 'projects.p3t': 'Automatización de Documentos',
    'projects.p3d': 'Generación, clasificación y firma de contratos y documentos regulatorios de forma masiva, con trazabilidad completa y cero errores de tipeo.',
    'projects.p3r': '▲ 12,000 documentos/mes sin intervención',
    'projects.p4s': '🏦 Banca', 'projects.p4t': 'Conciliación Bancaria Automática',
    'projects.p4d': 'Robot que cruza extractos bancarios contra registros contables cada noche, concilia partidas y genera el reporte de excepciones listo para revisión matutina.',
    'projects.p4r': '▲ Cierre contable 5 días más rápido',
    'projects.p5s': '🛒 Retail', 'projects.p5t': 'Reportería Automática de Ventas',
    'projects.p5d': 'Pipeline que consolida ventas de todas las tiendas y canales, y envía dashboards e informes ejecutivos por correo y WhatsApp antes de que empiece el día.',
    'projects.p5r': '▲ Decisiones con datos del día anterior',
    'projects.p6s': '⛏ Minería', 'projects.p6t': 'Onboarding de Proveedores',
    'projects.p6d': 'Portal web + flujo automatizado que valida documentación legal de proveedores, verifica vigencias y notifica vencimientos, eliminando el seguimiento manual por correo.',
    'projects.p6r': '▲ 80% menos correos de seguimiento',

    'stack.tag': '// 05 — Stack',
    'stack.title': 'Tecnología que<br /><span class="text-gradient">domina el juego</span>',

    'stats.tag': '// 06 — Resultados',
    'stats.title': 'Números que<br /><span class="text-gradient">hablan por nosotros</span>',
    'stats.l1': 'Proyectos entregados', 'stats.l2': 'Reducción de tareas manuales',
    'stats.l3': 'Horas ahorradas a clientes', 'stats.l4': 'Satisfacción de clientes',

    'contact.title': '¿Listo para <span class="text-gradient">automatizar</span><br />tu próximo gran salto?',
    'contact.desc': 'Agenda una consultoría gratuita de 30 minutos. Cuéntanos tu caso y te mostramos exactamente dónde puedes ganar eficiencia.',
    'contact.fName': 'Nombre', 'contact.fEmail': 'Correo', 'contact.fMsg': '¿Qué proceso quieres automatizar?',
    'contact.phName': 'Tu nombre', 'contact.phEmail': 'tucorreo@empresa.com', 'contact.phMsg': 'Cuéntanos brevemente tu caso...',
    'contact.send': 'Enviar mensaje ✦',
    'contact.emailLabel': 'Escríbenos',
    'contact.waLabel': 'Respuesta inmediata',
    'contact.liLabel': 'Síguenos y conecta',
    'contact.botLabel': 'Agenda con nuestro bot',
    'contact.botSub': 'Reserva una reunión en 1 minuto',
    'contact.meta1': '◆ Respuesta en menos de 24h', 'contact.meta2': '◆ Sin compromiso',
    'contact.mailSubject': 'Consulta desde la web',

    'footer.tagline': 'Tecnología que trabaja mientras tú creces.',
    'footer.proceso': 'Proceso', 'footer.contacto': 'Contacto',
    'footer.rights': '© 2026 ALTOKIA — Todos los derechos reservados',
    'footer.status': 'Sistemas operativos',

    'fab.wa': '¡Escríbenos!', 'fab.bot': 'Asistente virtual',

    'bot.online': 'En línea — responde al instante',
    'bot.placeholder': 'Escribe tu mensaje...',
    'bot.greeting': '¡Hola! 👋 Soy ALTObot, el asistente virtual de ALTOKIA.\n¿En qué puedo ayudarte hoy?',
    'bot.optServices': '🤔 ¿Qué servicios ofrecen?',
    'bot.optPricing': '💰 ¿Cuánto cuesta un proyecto?',
    'bot.optTiming': '⏱ ¿Cuánto demora?',
    'bot.optBook': '📅 Agendar una reunión',
    'bot.optHuman': '👤 Hablar con una persona',
    'bot.optMenu': '↩ Volver al menú',
    'bot.ansServices': 'Ofrecemos:\n⚡ Automatización de procesos (RPA con Automation Anywhere, Power Automate y Python)\n◈ Desarrollo web a medida\n◎ Optimización de procesos\n✦ IA aplicada (chatbots, análisis predictivo)\n⬡ Integración de sistemas\n▲ Cloud & DevOps\n\n¿Quieres agendar una reunión para conversar sobre tu caso?',
    'bot.ansPricing': 'Cada proyecto es único, por eso no usamos tarifas genéricas. 😊\n\nPrimero escuchamos tu caso en una consultoría gratuita de 30 minutos y luego te enviamos una propuesta a medida, con alcance y precio cerrados.\n\n¿Agendamos esa llamada?',
    'bot.ansTiming': 'Depende del alcance:\n\n🤖 Una automatización simple: 2 a 4 semanas\n🌐 Un sitio o app web: 4 a 8 semanas\n🏗 Proyectos de integración grandes: 2 a 4 meses\n\nTrabajamos con sprints y entregas parciales, así ves avances desde la primera semana.',
    'bot.ansHuman': '¡Con gusto! Puedes hablar directamente con nuestro equipo:\n\n📱 <a href="https://wa.me/' + '51999999999' + '" target="_blank" rel="noopener">WhatsApp</a>\n✉ <a href="mailto:contacto@altokia.com">contacto@altokia.com</a>\n💼 <a href="https://www.linkedin.com/company/altokia" target="_blank" rel="noopener">LinkedIn</a>\n\nRespondemos en menos de 24 horas.',
    'bot.fallback': 'Buena pregunta 🤓 Para darte una respuesta precisa, lo mejor es que la conversemos. Puedes agendar una reunión o escribirnos por WhatsApp.\n\nMientras tanto, ¿te ayudo con alguna de estas opciones?',
    'bot.askService': '¡Genial! 🎉 ¿Sobre qué servicio te gustaría conversar?',
    'bot.svcAuto': '⚡ Automatización', 'bot.svcWeb': '◈ Desarrollo web',
    'bot.svcAI': '✦ IA aplicada', 'bot.svcOther': '💡 Otro / no estoy seguro',
    'bot.askDate': 'Perfecto. 📅 ¿Qué día te acomoda?',
    'bot.askTime': '¿A qué hora te queda mejor? (hora local)',
    'bot.askName': '¡Casi listo! ¿A nombre de quién agendo la reunión?\n\n✍ Escribe tu nombre abajo y presiona enviar.',
    'bot.confirmed': (b) => `¡Listo, ${b.name}! ✅\n\nTu reunión quedó pre-agendada:\n\n🗂 Tema: ${b.service}\n📅 Fecha: ${b.date}\n🕐 Hora: ${b.time}\n\nConfírmala por el canal que prefieras y te enviaremos la invitación:`,
    'bot.confirmWa': '📱 Confirmar por WhatsApp',
    'bot.confirmMail': '✉ Confirmar por correo',
    'bot.waBookingMsg': (b) => `Hola ALTOKIA, soy ${b.name}. Quiero confirmar una reunión sobre "${b.service}" el ${b.date} a las ${b.time}.`,
    'bot.mailBookingSubject': 'Confirmación de reunión — ALTOKIA',
    'bot.anythingElse': '¿Puedo ayudarte con algo más? 😊'
  },

  en: {
    'brand.acronym': 'Automation & Logic Technology Operations Knowledge',
    'pre.msgs': ['Initializing systems...', 'Loading 3D modules...', 'Compiling shaders...', 'Optimizing experience...', 'Ready ✦'],

    'nav.inicio': 'Home', 'nav.nosotros': 'About Us', 'nav.servicios': 'Services',
    'nav.proyectos': 'Projects', 'nav.stack': 'Stack', 'nav.resultados': 'Results', 'nav.cta': "Let's Talk",

    'hero.badge': 'Powering the digital future',
    'hero.t1': 'We automate', 'hero.t2': 'the future', 'hero.t3': 'of your business',
    'hero.subtitle': 'Web development, automation and process optimization.<br />We turn repetitive tasks into',
    'hero.typed': ['intelligent workflows', 'measurable growth', 'competitive advantage', 'time to innovate'],
    'hero.btn1': 'Explore services', 'hero.btn2': 'Book a demo',
    'hero.scroll': 'Scroll to discover',

    'marquee': 'AUTOMATION ✦ WEB DEVELOPMENT ✦ APPLIED AI ✦ PROCESS OPTIMIZATION ✦ SYSTEMS INTEGRATION ✦ RPA ✦ CLOUD ✦ ',

    'about.tag': '// 01 — About Us',
    'about.title': 'We listen first,<br /><span class="text-gradient">then we automate</span>',
    'about.lead': 'At <strong>ALTOKIA</strong> we don\'t sell technology for its own sake: we are obsessed with <span class="about__highlight">the real requirements of the user and the client</span>. Every project starts with a conversation, not a generic proposal.',
    'about.p1': 'We are a team with <strong>international experience</strong>, having deployed automation and web development solutions across multiple countries, adapting to different regulations, currencies, systems and work cultures. That diversity gave us something no course can teach: the ability to <em>understand the business before the code</em>.',
    'about.p2': 'We are willing to listen to you as many times as it takes. Your operation is unique — your automation should be too.',
    'about.v1': '<strong>Active listening</strong><span>We understand your process before proposing a single line of code.</span>',
    'about.v2': '<strong>User-centered</strong><span>We design for the people who will use the solution every day.</span>',
    'about.v3': '<strong>Measurable results</strong><span>Every delivery comes with clear KPIs and provable ROI.</span>',
    'about.countriesTitle': 'International presence',
    'about.countriesSub': 'Projects delivered in:',
    'about.c1': '🇺🇸 USA', 'about.c3': '🇵🇦 Panama', 'about.c5': '🇵🇪 Peru',
    'about.industriesTitle': 'Industries we master',
    'about.i1': '⛏ Mining', 'about.i2': '🛒 Retail', 'about.i3': '🏦 Banking & Finance',
    'about.i4': '🏭 Manufacturing', 'about.i5': '🚚 Logistics', 'about.i6': '⚕ Healthcare',
    'about.quote': 'The best automation is born from listening to the people who live the process every day.',

    'services.tag': '// 02 — Services',
    'services.title': 'What we do<br /><span class="text-gradient">extraordinarily well</span>',
    'services.s1t': 'Process Automation',
    'services.s1d': 'We eliminate manual tasks with RPA and intelligent workflows. Your team focuses on strategy, the bots do the rest.',
    'services.s2t': 'Web Development',
    'services.s2d': 'High-performance web apps and sites, with modern design, fluid animations and experiences users love.',
    'services.s3t': 'Process Optimization',
    'services.s3d': 'We analyze, measure and redesign your operations to cut costs and multiply your company\'s efficiency.',
    'services.s4t': 'Applied AI',
    'services.s4d': 'Chatbots, predictive analytics and AI models integrated into your systems to make data-driven decisions.',
    'services.s5t': 'Systems Integration',
    'services.s5d': 'We connect your tools — ERP, CRM, APIs — into a unified ecosystem that flows without friction.',
    'services.s6t': 'Cloud & DevOps',
    'services.s6d': 'Scalable infrastructure, automated deployments and continuous monitoring so your product never stops.',

    'process.tag': '// 03 — Process',
    'process.title': 'From idea to impact<br /><span class="text-gradient">in 4 phases</span>',
    'process.f1': '<span class="process__phase">Phase 01</span><h3>Discovery</h3><p>We audit your current processes, identify bottlenecks and detect the automation opportunities with the highest return.</p>',
    'process.f2': '<span class="process__phase">Phase 02</span><h3>Solution Design</h3><p>We prototype the architecture, define workflows and design user-centered interfaces. Everything validated with you before writing code.</p>',
    'process.f3': '<span class="process__phase">Phase 03</span><h3>Agile Development</h3><p>Short sprints, continuous deliveries and transparent communication. You see progress in real time and we adjust along the way.</p>',
    'process.f4': '<span class="process__phase">Phase 04</span><h3>Launch & Evolution</h3><p>We deploy, measure KPIs and optimize continuously. Your solution grows with your business.</p>',

    'projects.tag': '// 04 — Projects',
    'projects.title': 'Automations already<br /><span class="text-gradient">working for our clients</span>',
    'projects.p1s': '⛏ Mining', 'projects.p1t': 'Invoices & Purchase Orders',
    'projects.p1d': 'RPA bot that reads invoices and POs with OCR, validates amounts against the ERP, flags inconsistencies and records everything automatically. From 3 days of manual work to 20 minutes.',
    'projects.p1r': '▲ 94% less processing time',
    'projects.p2s': '🛒 Retail', 'projects.p2t': 'Smart WhatsApp Bot',
    'projects.p2d': 'Conversational assistant that answers questions, takes orders, checks stock in real time and hands off to a human only when needed. Available 24/7, no waiting lines.',
    'projects.p2r': '▲ 6x more inquiries handled',
    'projects.p3s': '🏦 Banking', 'projects.p3t': 'Document Automation',
    'projects.p3d': 'Mass generation, classification and signing of contracts and regulatory documents, with full traceability and zero typing errors.',
    'projects.p3r': '▲ 12,000 documents/month untouched by hand',
    'projects.p4s': '🏦 Banking', 'projects.p4t': 'Automatic Bank Reconciliation',
    'projects.p4d': 'A robot that cross-checks bank statements against accounting records every night, reconciles entries and generates the exception report ready for morning review.',
    'projects.p4r': '▲ Monthly close 5 days faster',
    'projects.p5s': '🛒 Retail', 'projects.p5t': 'Automated Sales Reporting',
    'projects.p5d': 'Pipeline that consolidates sales from every store and channel, and delivers dashboards and executive reports via email and WhatsApp before the day starts.',
    'projects.p5r': '▲ Decisions with yesterday\'s data',
    'projects.p6s': '⛏ Mining', 'projects.p6t': 'Supplier Onboarding',
    'projects.p6d': 'Web portal + automated workflow that validates suppliers\' legal documentation, checks expiration dates and sends notifications, eliminating manual email follow-up.',
    'projects.p6r': '▲ 80% fewer follow-up emails',

    'stack.tag': '// 05 — Stack',
    'stack.title': 'Technology that<br /><span class="text-gradient">owns the game</span>',

    'stats.tag': '// 06 — Results',
    'stats.title': 'Numbers that<br /><span class="text-gradient">speak for us</span>',
    'stats.l1': 'Projects delivered', 'stats.l2': 'Reduction in manual tasks',
    'stats.l3': 'Hours saved for clients', 'stats.l4': 'Client satisfaction',

    'contact.title': 'Ready to <span class="text-gradient">automate</span><br />your next big leap?',
    'contact.desc': 'Book a free 30-minute consultation. Tell us your case and we\'ll show you exactly where you can gain efficiency.',
    'contact.fName': 'Name', 'contact.fEmail': 'Email', 'contact.fMsg': 'Which process do you want to automate?',
    'contact.phName': 'Your name', 'contact.phEmail': 'you@company.com', 'contact.phMsg': 'Briefly tell us about your case...',
    'contact.send': 'Send message ✦',
    'contact.emailLabel': 'Email us',
    'contact.waLabel': 'Instant response',
    'contact.liLabel': 'Follow us and connect',
    'contact.botLabel': 'Book with our bot',
    'contact.botSub': 'Schedule a meeting in 1 minute',
    'contact.meta1': '◆ Response within 24h', 'contact.meta2': '◆ No commitment',
    'contact.mailSubject': 'Inquiry from the website',

    'footer.tagline': 'Technology that works while you grow.',
    'footer.proceso': 'Process', 'footer.contacto': 'Contact',
    'footer.rights': '© 2026 ALTOKIA — All rights reserved',
    'footer.status': 'Systems operational',

    'fab.wa': 'Chat with us!', 'fab.bot': 'Virtual assistant',

    'bot.online': 'Online — instant replies',
    'bot.placeholder': 'Type your message...',
    'bot.greeting': "Hi! 👋 I'm ALTObot, ALTOKIA's virtual assistant.\nHow can I help you today?",
    'bot.optServices': '🤔 What services do you offer?',
    'bot.optPricing': '💰 How much does a project cost?',
    'bot.optTiming': '⏱ How long does it take?',
    'bot.optBook': '📅 Book a meeting',
    'bot.optHuman': '👤 Talk to a human',
    'bot.optMenu': '↩ Back to menu',
    'bot.ansServices': 'We offer:\n⚡ Process automation (RPA with Automation Anywhere, Power Automate and Python)\n◈ Custom web development\n◎ Process optimization\n✦ Applied AI (chatbots, predictive analytics)\n⬡ Systems integration\n▲ Cloud & DevOps\n\nWould you like to book a meeting to discuss your case?',
    'bot.ansPricing': "Every project is unique, so we don't use generic pricing. 😊\n\nFirst we listen to your case in a free 30-minute consultation, then we send you a tailored proposal with a fixed scope and price.\n\nShall we book that call?",
    'bot.ansTiming': 'It depends on the scope:\n\n🤖 A simple automation: 2–4 weeks\n🌐 A website or web app: 4–8 weeks\n🏗 Large integration projects: 2–4 months\n\nWe work in sprints with partial deliveries, so you see progress from week one.',
    'bot.ansHuman': 'Gladly! You can talk directly to our team:\n\n📱 <a href="https://wa.me/' + '51999999999' + '" target="_blank" rel="noopener">WhatsApp</a>\n✉ <a href="mailto:contacto@altokia.com">contacto@altokia.com</a>\n💼 <a href="https://www.linkedin.com/company/altokia" target="_blank" rel="noopener">LinkedIn</a>\n\nWe reply within 24 hours.',
    'bot.fallback': "Good question 🤓 To give you a precise answer, it's best we talk it through. You can book a meeting or message us on WhatsApp.\n\nMeanwhile, can I help you with one of these?",
    'bot.askService': 'Great! 🎉 Which service would you like to talk about?',
    'bot.svcAuto': '⚡ Automation', 'bot.svcWeb': '◈ Web development',
    'bot.svcAI': '✦ Applied AI', 'bot.svcOther': "💡 Other / not sure yet",
    'bot.askDate': 'Perfect. 📅 Which day works for you?',
    'bot.askTime': 'What time suits you best? (local time)',
    'bot.askName': "Almost done! Who should I book the meeting for?\n\n✍ Type your name below and press send.",
    'bot.confirmed': (b) => `All set, ${b.name}! ✅\n\nYour meeting is pre-booked:\n\n🗂 Topic: ${b.service}\n📅 Date: ${b.date}\n🕐 Time: ${b.time}\n\nConfirm it through your preferred channel and we'll send the invite:`,
    'bot.confirmWa': '📱 Confirm via WhatsApp',
    'bot.confirmMail': '✉ Confirm via email',
    'bot.waBookingMsg': (b) => `Hi ALTOKIA, I'm ${b.name}. I'd like to confirm a meeting about "${b.service}" on ${b.date} at ${b.time}.`,
    'bot.mailBookingSubject': 'Meeting confirmation — ALTOKIA',
    'bot.anythingElse': 'Anything else I can help you with? 😊'
  }
};

let currentLang = localStorage.getItem('altok-lang') || 'es';

function t(key) {
  return (I18N[currentLang] && I18N[currentLang][key]) || I18N.es[key] || key;
}

function applyLang() {
  document.documentElement.lang = currentLang;

  document.querySelectorAll('[data-i18n]').forEach((el) => {
    const val = t(el.dataset.i18n);
    if (typeof val === 'string') el.innerHTML = val;
  });

  document.querySelectorAll('[data-i18n-placeholder]').forEach((el) => {
    el.placeholder = t(el.dataset.i18nPlaceholder);
  });

  document.querySelectorAll('[data-i18n-title]').forEach((el) => {
    el.title = t(el.dataset.i18nTitle);
  });

  document.querySelectorAll('.lang-toggle__opt').forEach((opt) => {
    opt.classList.toggle('is-active', opt.dataset.lang === currentLang);
  });
}

/* ══════════ 1. PRELOADER ══════════ */
(function preloader() {
  const bar = document.getElementById('preloaderBar');
  const status = document.getElementById('preloaderStatus');
  const overlay = document.getElementById('preloader');
  const messages = t('pre.msgs');

  let progress = 0;
  const tick = setInterval(() => {
    progress += Math.random() * 22 + 8;
    if (progress >= 100) {
      progress = 100;
      clearInterval(tick);
      setTimeout(() => overlay.classList.add('is-done'), 400);
    }
    bar.style.width = progress + '%';
    status.textContent = messages[Math.min(Math.floor(progress / 25), messages.length - 1)];
  }, 240);
})();

/* ══════════ 2. THREE.JS — FONDO DE PARTÍCULAS ══════════ */
(function threeBackground() {
  const canvas = document.getElementById('webgl-bg');
  if (!window.THREE || !canvas) return;

  const scene = new THREE.Scene();
  scene.fog = new THREE.FogExp2(0x05060f, 0.035);

  const camera = new THREE.PerspectiveCamera(60, innerWidth / innerHeight, 0.1, 100);
  camera.position.set(0, 0, 14);

  const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true });
  renderer.setPixelRatio(Math.min(devicePixelRatio, 2));
  renderer.setSize(innerWidth, innerHeight);

  const COUNT = 2600;
  const positions = new Float32Array(COUNT * 3);
  const colors = new Float32Array(COUNT * 3);
  const seeds = new Float32Array(COUNT);

  const palette = [
    new THREE.Color(0x00e5ff),
    new THREE.Color(0x7c4dff),
    new THREE.Color(0xff2d92)
  ];

  for (let i = 0; i < COUNT; i++) {
    positions[i * 3]     = (Math.random() - 0.5) * 46;
    positions[i * 3 + 1] = (Math.random() - 0.5) * 28;
    positions[i * 3 + 2] = (Math.random() - 0.5) * 24;
    seeds[i] = Math.random() * Math.PI * 2;

    const c = palette[Math.floor(Math.random() * palette.length)];
    colors[i * 3] = c.r;
    colors[i * 3 + 1] = c.g;
    colors[i * 3 + 2] = c.b;
  }

  const geo = new THREE.BufferGeometry();
  geo.setAttribute('position', new THREE.BufferAttribute(positions, 3));
  geo.setAttribute('color', new THREE.BufferAttribute(colors, 3));

  const mat = new THREE.PointsMaterial({
    size: 0.07,
    vertexColors: true,
    transparent: true,
    opacity: 0.85,
    blending: THREE.AdditiveBlending,
    depthWrite: false
  });

  const particles = new THREE.Points(geo, mat);
  scene.add(particles);

  const knot = new THREE.Mesh(
    new THREE.TorusKnotGeometry(3.2, 0.9, 140, 20),
    new THREE.MeshBasicMaterial({ color: 0x7c4dff, wireframe: true, transparent: true, opacity: 0.12 })
  );
  knot.position.set(6, 1, -4);
  scene.add(knot);

  const ico = new THREE.Mesh(
    new THREE.IcosahedronGeometry(1.6, 1),
    new THREE.MeshBasicMaterial({ color: 0x00e5ff, wireframe: true, transparent: true, opacity: 0.18 })
  );
  ico.position.set(-7, -2, -2);
  scene.add(ico);

  /* Adaptación de la escena al tema claro/oscuro.
     En claro: sin additive blending (invisible sobre blanco) y niebla clara. */
  window.threeSetTheme = (mode) => {
    const light = mode === 'light';
    scene.fog.color.set(light ? 0xf5f7fd : 0x05060f);
    mat.blending = light ? THREE.NormalBlending : THREE.AdditiveBlending;
    mat.opacity = light ? 0.5 : 0.85;
    mat.size = light ? 0.09 : 0.07;
    mat.needsUpdate = true;
    knot.material.opacity = light ? 0.18 : 0.12;
    ico.material.opacity = light ? 0.26 : 0.18;
  };

  const mouse = { x: 0, y: 0 };
  const target = { x: 0, y: 0 };

  addEventListener('mousemove', (e) => {
    mouse.x = (e.clientX / innerWidth - 0.5) * 2;
    mouse.y = (e.clientY / innerHeight - 0.5) * 2;
  });

  let scrollY = 0;
  addEventListener('scroll', () => { scrollY = window.scrollY; }, { passive: true });

  const clock = new THREE.Clock();
  const basePositions = positions.slice();

  function animate() {
    requestAnimationFrame(animate);
    const time = clock.getElapsedTime();

    if (!prefersReducedMotion) {
      const pos = geo.attributes.position.array;
      for (let i = 0; i < COUNT; i++) {
        const ix = i * 3;
        pos[ix + 1] = basePositions[ix + 1] + Math.sin(time * 0.6 + seeds[i] + basePositions[ix] * 0.25) * 0.6;
      }
      geo.attributes.position.needsUpdate = true;

      particles.rotation.y = time * 0.02;
      knot.rotation.x = time * 0.15;
      knot.rotation.y = time * 0.2;
      ico.rotation.x = -time * 0.25;
      ico.rotation.z = time * 0.18;
    }

    target.x += (mouse.x - target.x) * 0.04;
    target.y += (mouse.y - target.y) * 0.04;
    camera.position.x = target.x * 1.6;
    camera.position.y = -target.y * 1.1 - scrollY * 0.002;
    camera.lookAt(0, -scrollY * 0.002, 0);

    renderer.render(scene, camera);
  }
  animate();

  addEventListener('resize', () => {
    camera.aspect = innerWidth / innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(innerWidth, innerHeight);
  });
})();

/* ══════════ 3. CURSOR PERSONALIZADO (con delegación) ══════════ */
(function customCursor() {
  const cursor = document.getElementById('cursor');
  const follower = document.getElementById('cursorFollower');
  if (!cursor || matchMedia('(hover: none)').matches) return;

  let cx = -100, cy = -100;
  let fx = -100, fy = -100;

  addEventListener('mousemove', (e) => {
    cx = e.clientX;
    cy = e.clientY;
    cursor.style.left = cx + 'px';
    cursor.style.top = cy + 'px';
  });

  (function follow() {
    fx += (cx - fx) * 0.12;
    fy += (cy - fy) * 0.12;
    follower.style.left = fx + 'px';
    follower.style.top = fy + 'px';
    requestAnimationFrame(follow);
  })();

  /* Delegación: funciona también con elementos creados dinámicamente (chatbot) */
  const HOVER_SELECTOR = 'a, button, input, textarea, [data-tilt], .stack__item, .chip';

  document.addEventListener('mouseover', (e) => {
    if (e.target.closest(HOVER_SELECTOR)) document.body.classList.add('cursor-hover');
  });

  document.addEventListener('mouseout', (e) => {
    if (e.target.closest(HOVER_SELECTOR)) document.body.classList.remove('cursor-hover');
  });
})();

/* ══════════ 4. BOTONES MAGNÉTICOS ══════════ */
(function magneticElements() {
  if (matchMedia('(hover: none)').matches || prefersReducedMotion) return;

  document.querySelectorAll('[data-magnetic]').forEach((el) => {
    const strength = 0.35;

    el.addEventListener('mousemove', (e) => {
      const r = el.getBoundingClientRect();
      const x = e.clientX - r.left - r.width / 2;
      const y = e.clientY - r.top - r.height / 2;
      el.style.transform = `translate(${x * strength}px, ${y * strength}px)`;
    });

    el.addEventListener('mouseleave', () => {
      el.style.transition = 'transform 0.5s cubic-bezier(0.34, 1.56, 0.64, 1)';
      el.style.transform = 'translate(0, 0)';
      setTimeout(() => (el.style.transition = ''), 500);
    });
  });
})();

/* ══════════ 5. TILT 3D EN TARJETAS ══════════ */
(function tiltCards() {
  if (matchMedia('(hover: none)').matches || prefersReducedMotion) return;

  document.querySelectorAll('[data-tilt]').forEach((card) => {
    card.addEventListener('mousemove', (e) => {
      const r = card.getBoundingClientRect();
      const px = (e.clientX - r.left) / r.width;
      const py = (e.clientY - r.top) / r.height;

      const rotX = (0.5 - py) * 10;
      const rotY = (px - 0.5) * 10;

      card.style.transform = `perspective(900px) rotateX(${rotX}deg) rotateY(${rotY}deg) translateZ(6px)`;
      card.style.setProperty('--mx', px * 100 + '%');
      card.style.setProperty('--my', py * 100 + '%');
    });

    card.addEventListener('mouseleave', () => {
      card.style.transition = 'transform 0.6s cubic-bezier(0.22, 1, 0.36, 1)';
      card.style.transform = 'perspective(900px) rotateX(0) rotateY(0) translateZ(0)';
      setTimeout(() => (card.style.transition = ''), 600);
    });
  });
})();

/* ══════════ 6. EFECTO DE TEXTO ESCRITO (TYPED, bilingüe) ══════════ */
const typedControl = { reset: null };

(function typedEffect() {
  const el = document.getElementById('typedText');
  if (!el) return;

  let phraseIdx = 0, charIdx = 0, deleting = false, timer = null;

  typedControl.reset = () => {
    phraseIdx = 0;
    charIdx = 0;
    deleting = false;
  };

  function type() {
    const phrases = t('hero.typed');
    const current = phrases[phraseIdx % phrases.length];
    charIdx = Math.min(charIdx, current.length);

    if (!deleting) {
      charIdx++;
      if (charIdx >= current.length) {
        deleting = true;
        el.textContent = current;
        timer = setTimeout(type, 2000);
        return;
      }
    } else {
      charIdx--;
      if (charIdx === 0) {
        deleting = false;
        phraseIdx = (phraseIdx + 1) % phrases.length;
      }
    }

    el.textContent = current.slice(0, charIdx);
    timer = setTimeout(type, deleting ? 40 : 85);
  }

  setTimeout(type, 2400);
})();

/* ══════════ 7. REVEAL ON SCROLL ══════════ */
(function scrollReveal() {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry, i) => {
        if (entry.isIntersecting) {
          entry.target.style.transitionDelay = (i % 4) * 0.08 + 's';
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
  );

  document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));
})();

/* ══════════ 8. CONTADORES ANIMADOS ══════════ */
(function counters() {
  const format = (n) => n.toLocaleString(currentLang === 'es' ? 'es-PE' : 'en-US');

  const animate = (el) => {
    const targetValue = +el.dataset.target;
    const duration = 1800;
    const start = performance.now();

    function step(now) {
      const p = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - p, 4);
      el.textContent = format(Math.round(targetValue * eased));
      if (p < 1) requestAnimationFrame(step);
    }
    requestAnimationFrame(step);
  };

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          animate(entry.target);
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.6 }
  );

  document.querySelectorAll('.counter').forEach((el) => observer.observe(el));
})();

/* ══════════ 9. NAV: SCROLL + LINK ACTIVO + BURGER ══════════ */
(function navigation() {
  const nav = document.getElementById('nav');
  const links = document.querySelectorAll('.nav__link');
  const burger = document.getElementById('navBurger');
  const navLinks = document.getElementById('navLinks');
  const progress = document.getElementById('scrollProgress');
  const processLine = document.getElementById('processLine');
  const processTimeline = document.querySelector('.process__timeline');

  const sections = [...document.querySelectorAll('section[id]')];

  function onScroll() {
    const y = window.scrollY;

    nav.classList.toggle('is-scrolled', y > 60);

    const max = document.documentElement.scrollHeight - innerHeight;
    progress.style.width = (y / max) * 100 + '%';

    let currentId = 'inicio';
    sections.forEach((s) => {
      if (y >= s.offsetTop - innerHeight * 0.4) currentId = s.id;
    });
    links.forEach((l) => l.classList.toggle('is-active', l.getAttribute('href') === '#' + currentId));

    if (processTimeline && processLine) {
      const r = processTimeline.getBoundingClientRect();
      const visible = Math.min(Math.max((innerHeight * 0.75 - r.top) / r.height, 0), 1);
      processLine.style.height = visible * 100 + '%';
    }
  }

  addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  burger.addEventListener('click', () => {
    burger.classList.toggle('is-open');
    navLinks.classList.toggle('is-open');
  });

  navLinks.querySelectorAll('a').forEach((a) =>
    a.addEventListener('click', () => {
      burger.classList.remove('is-open');
      navLinks.classList.remove('is-open');
    })
  );
})();

/* ══════════ 10. SELECTOR DE IDIOMA ══════════ */
(function langSwitcher() {
  const toggle = document.getElementById('langToggle');
  if (!toggle) return;

  toggle.addEventListener('click', () => {
    currentLang = currentLang === 'es' ? 'en' : 'es';
    localStorage.setItem('altok-lang', currentLang);
    applyLang();
    if (typedControl.reset) typedControl.reset();
    if (window.chatbotRefresh) window.chatbotRefresh();
  });

  applyLang(); // aplica idioma guardado al cargar
})();

/* ══════════ 10b. TEMA CLARO/OSCURO ══════════ */
(function themeSwitcher() {
  const btn = document.getElementById('themeToggle');
  const icon = document.getElementById('themeIcon');
  if (!btn) return;

  function apply(mode) {
    document.documentElement.setAttribute('data-theme', mode);
    /* Muestra el ícono del tema al que cambiarás */
    icon.textContent = mode === 'dark' ? '☀' : '🌙';
    if (window.threeSetTheme) window.threeSetTheme(mode);
  }

  /* Sin preferencia guardada: claro de día (7:00–19:00), oscuro de noche */
  const saved = localStorage.getItem('altokia-theme');
  const hour = new Date().getHours();
  let mode = saved || (hour >= 7 && hour < 19 ? 'light' : 'dark');
  apply(mode);

  btn.addEventListener('click', () => {
    mode = mode === 'dark' ? 'light' : 'dark';
    localStorage.setItem('altokia-theme', mode);
    apply(mode);
  });
})();

/* ══════════ 11. FORMULARIO DE CONTACTO (mailto) ══════════ */
(function contactForm() {
  const form = document.getElementById('contactForm');
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const name = document.getElementById('cfName').value.trim();
    const email = document.getElementById('cfEmail').value.trim();
    const msg = document.getElementById('cfMsg').value.trim();

    const subject = encodeURIComponent(`${t('contact.mailSubject')} — ${name}`);
    const body = encodeURIComponent(`${msg}\n\n— ${name}\n${email}`);

    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`;
  });
})();

/* ══════════ 12. CHATBOT ══════════ */
(function chatbot() {
  const toggleBtn = document.getElementById('chatToggle');
  const minimizeBtn = document.getElementById('chatMinimize');
  const openFromContact = document.getElementById('openBotFromContact');
  const messagesEl = document.getElementById('chatMessages');
  const optionsEl = document.getElementById('chatOptions');
  const form = document.getElementById('chatForm');
  const input = document.getElementById('chatInput');

  if (!toggleBtn || !messagesEl) return;

  let started = false;
  let awaitingName = false;
  const booking = { service: '', date: '', time: '', name: '' };
  let currentOptions = []; // [{labelKey|labelFn, action}]

  /* — Helpers de render — */
  function scrollBottom() {
    messagesEl.scrollTop = messagesEl.scrollHeight;
  }

  function addMsg(html, who) {
    const div = document.createElement('div');
    div.className = 'msg msg--' + who;
    div.innerHTML = html;
    messagesEl.appendChild(div);
    scrollBottom();
    return div;
  }

  function botSay(html, delay = 650) {
    return new Promise((resolve) => {
      const typing = document.createElement('div');
      typing.className = 'msg msg--bot msg--typing';
      typing.innerHTML = '<i></i><i></i><i></i>';
      messagesEl.appendChild(typing);
      scrollBottom();

      setTimeout(() => {
        typing.remove();
        addMsg(html, 'bot');
        resolve();
      }, prefersReducedMotion ? 0 : delay);
    });
  }

  function renderOptions(opts) {
    currentOptions = opts;
    optionsEl.innerHTML = '';
    opts.forEach((opt) => {
      const btn = document.createElement('button');
      btn.type = 'button';
      btn.className = 'chat-opt';
      btn.innerHTML = typeof opt.label === 'function' ? opt.label() : t(opt.label);
      btn.addEventListener('click', () => {
        addMsg(btn.innerHTML, 'user');
        optionsEl.innerHTML = '';
        opt.action();
      });
      optionsEl.appendChild(btn);
    });
  }

  /* Re-render de opciones al cambiar idioma */
  window.chatbotRefresh = () => {
    if (currentOptions.length) renderOptions(currentOptions);
  };

  /* — Menú principal — */
  function mainMenu() {
    renderOptions([
      { label: 'bot.optServices', action: () => answer('bot.ansServices', true) },
      { label: 'bot.optPricing', action: () => answer('bot.ansPricing', true) },
      { label: 'bot.optTiming', action: () => answer('bot.ansTiming', false) },
      { label: 'bot.optBook', action: startBooking },
      { label: 'bot.optHuman', action: () => answer('bot.ansHuman', false) }
    ]);
  }

  async function answer(key, offerBooking) {
    await botSay(t(key));
    if (offerBooking) {
      renderOptions([
        { label: 'bot.optBook', action: startBooking },
        { label: 'bot.optMenu', action: backToMenu }
      ]);
    } else {
      renderOptions([{ label: 'bot.optMenu', action: backToMenu }]);
    }
  }

  async function backToMenu() {
    await botSay(t('bot.anythingElse'));
    mainMenu();
  }

  /* — Flujo de agendamiento — */
  async function startBooking() {
    await botSay(t('bot.askService'));
    renderOptions([
      { label: 'bot.svcAuto', action: () => pickService('bot.svcAuto') },
      { label: 'bot.svcWeb', action: () => pickService('bot.svcWeb') },
      { label: 'bot.svcAI', action: () => pickService('bot.svcAI') },
      { label: 'bot.svcOther', action: () => pickService('bot.svcOther') }
    ]);
  }

  async function pickService(key) {
    booking.service = t(key).replace(/^[^\w]+\s*/, '');
    await botSay(t('bot.askDate'));

    /* Próximos 5 días hábiles */
    const dates = [];
    const d = new Date();
    while (dates.length < 5) {
      d.setDate(d.getDate() + 1);
      if (d.getDay() !== 0 && d.getDay() !== 6) dates.push(new Date(d));
    }

    renderOptions(
      dates.map((date) => ({
        label: () =>
          new Intl.DateTimeFormat(currentLang === 'es' ? 'es-PE' : 'en-US', {
            weekday: 'short', day: 'numeric', month: 'short'
          }).format(date),
        action: () => {
          booking.date = new Intl.DateTimeFormat(currentLang === 'es' ? 'es-PE' : 'en-US', {
            weekday: 'long', day: 'numeric', month: 'long'
          }).format(date);
          pickTime();
        }
      }))
    );
  }

  async function pickTime() {
    await botSay(t('bot.askTime'));
    const slots = ['09:00', '11:00', '15:00', '17:00'];
    renderOptions(
      slots.map((slot) => ({
        label: () => '🕐 ' + slot,
        action: () => {
          booking.time = slot;
          askName();
        }
      }))
    );
  }

  async function askName() {
    await botSay(t('bot.askName'));
    awaitingName = true;
    input.focus();
  }

  async function confirmBooking() {
    const confirmFn = t('bot.confirmed');
    await botSay(typeof confirmFn === 'function' ? confirmFn(booking) : String(confirmFn));

    const waMsgFn = t('bot.waBookingMsg');
    const waText = encodeURIComponent(typeof waMsgFn === 'function' ? waMsgFn(booking) : '');
    const mailSubject = encodeURIComponent(t('bot.mailBookingSubject'));
    const mailBody = waText;

    renderOptions([
      {
        label: 'bot.confirmWa',
        action: () => {
          window.open(`https://wa.me/${WA_NUMBER}?text=${waText}`, '_blank', 'noopener');
          backToMenu();
        }
      },
      {
        label: 'bot.confirmMail',
        action: () => {
          window.location.href = `mailto:${CONTACT_EMAIL}?subject=${mailSubject}&body=${mailBody}`;
          backToMenu();
        }
      },
      { label: 'bot.optMenu', action: backToMenu }
    ]);
  }

  /* — Entrada libre de texto — */
  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const text = input.value.trim();
    if (!text) return;

    addMsg(text.replace(/</g, '&lt;'), 'user');
    input.value = '';
    optionsEl.innerHTML = '';
    currentOptions = [];

    if (awaitingName) {
      awaitingName = false;
      booking.name = text;
      confirmBooking();
      return;
    }

    const q = text.toLowerCase();
    if (/(servicio|service|hacen|ofrec|offer)/.test(q)) return answer('bot.ansServices', true);
    if (/(precio|costo|cost|price|cuánto cuesta|how much)/.test(q)) return answer('bot.ansPricing', true);
    if (/(demora|tiempo|plazo|how long|time|duration|semanas|weeks)/.test(q)) return answer('bot.ansTiming', false);
    if (/(agendar|reunión|reunion|cita|book|meeting|schedule|demo)/.test(q)) return startBooking();
    if (/(humano|persona|human|agent|asesor)/.test(q)) return answer('bot.ansHuman', false);
    if (/(hola|hello|hi|buenas|hey)/.test(q)) {
      await botSay(t('bot.greeting'));
      return mainMenu();
    }

    await botSay(t('bot.fallback'));
    mainMenu();
  });

  /* — Abrir / cerrar — */
  async function openChat() {
    document.body.classList.add('chat-open');
    document.getElementById('chatbot').setAttribute('aria-hidden', 'false');

    if (!started) {
      started = true;
      await botSay(t('bot.greeting'), 900);
      mainMenu();
    }
  }

  function closeChat() {
    document.body.classList.remove('chat-open');
    document.getElementById('chatbot').setAttribute('aria-hidden', 'true');
  }

  toggleBtn.addEventListener('click', () => {
    document.body.classList.contains('chat-open') ? closeChat() : openChat();
  });

  minimizeBtn.addEventListener('click', closeChat);

  if (openFromContact) {
    openFromContact.addEventListener('click', () => {
      openChat();
    });
  }
})();
