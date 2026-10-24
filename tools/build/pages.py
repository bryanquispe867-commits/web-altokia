# -*- coding: utf-8 -*-
"""Genera las páginas de ALTOKIA. Uso: python3 pages.py <carpeta del repo> <carpeta de trabajo>"""
import sys, os, json, re
sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
from parts import I, WA, head, hero, btn, btn_wa, quote_band, cta_band, page
from sections import (SVC, PROJECTS, eyebrow_head, service_cards, process, marquee, impact, code_feature,
                      project_cards, faq, sectors_grid, team, form_field)
from visuals import VISUALS

# Carpeta del repositorio: se pasa como argumento o se deduce desde tools/build/
REPO = sys.argv[1] if len(sys.argv) > 1 else os.path.dirname(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))
ORG_LD = '''
  <script type="application/ld+json">
  {"@context": "https://schema.org", "@type": "Organization", "name": "ALTOKIA", "slogan": "Tecnología que trabaja mientras tú creces",
   "email": "contacto@altokia.com", "telephone": "+51 906 106 881", "areaServed": ["PE", "PA", "US"], "sameAs": ["https://www.linkedin.com/company/altokia"]}
  </script>'''

# Traducciones de los textos nuevos (los del sitio original ya están en el diccionario)
EXTRA = {
    "Submenú de Nosotros": "About submenu",
    "Submenú de Servicios": "Services submenu",
    "Quiénes somos": "Who we are",
    "Escuchamos primero, automatizamos después": "We listen first, then we automate",
    "Las personas detrás de cada automatización": "The people behind every automation",
    "No vendemos horas, entregamos eficiencia": "We don't sell hours, we deliver efficiency",
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
    "Consultar este servicio": "Ask about this service",
    "Ver proyectos": "See projects",
    "Agenda una demo": "Book a demo",
    "Consulta desde la web": "Website inquiry",
    "Consulta desde la web — Agenda": "Website inquiry — Booking",
    "Cita": "Quote",
    "Lo que casi": "What we're almost",
    "siempre nos preguntan": "always asked",
    "Escribe": "Write",
    # Ilustraciones animadas de servicios
    "Flujo automatizado: los documentos de la bandeja pasan por el bot RPA y se registran en el ERP; las inconsistencias generan una alerta": "Automated flow: documents from the inbox go through the RPA bot and are recorded in the ERP; inconsistencies raise an alert",
    "Un editor escribe código mientras la interfaz de una aplicación se va armando bloque a bloque": "An editor writes code while an application's interface is assembled block by block",
    "Dashboard con indicadores reales de ALTOKIA: 12,000 documentos por mes, 6 veces más consultas atendidas y 98 % de satisfacción, con gráficos de barras, línea y anillo": "Dashboard with real ALTOKIA indicators: 12,000 documents per month, 6x more enquiries handled and 98% satisfaction, with bar, line and ring charts",
    "Medidor que baja las tareas manuales un 87 % y comparación de un proceso antes y después de optimizarlo": "Gauge showing manual tasks down 87% and a before-and-after comparison of an optimized process",
    "Embudo de marketing por el que baja el tráfico desde alcance e interés hasta clientes, junto a un objetivo y una campaña en curso": "Marketing funnel where traffic flows from reach and interest down to customers, next to a target and a running campaign",
    "bandeja": "inbox", "bot RPA": "RPA bot", "alerta": "alert",
    "3 días de trabajo manual": "3 days of manual work", "→ 20 minutos": "→ 20 minutes",
    "portal_proveedores.ts": "supplier_portal.ts", "✓ compilado · listo para desplegar": "✓ compiled · ready to deploy", "sin plantillas": "no templates",
    "dashboard · operaciones": "dashboard · operations", "en vivo": "live", "docs / mes": "docs / month", "consultas atendidas": "enquiries handled", "satisfacción": "satisfaction",
    "documentos procesados": "documents processed", "cierre contable": "month-end close", "más rápido": "faster",
    "tareas manuales": "manual tasks", "antes": "before", "después": "after", "manual": "manual", "−5 d cierre": "−5 d close",
    "alcance": "reach", "interés": "interest", "clientes": "customers", "leads calificados": "qualified leads",
    "campaña activa": "active campaign", "consultas": "enquiries", "−5 días": "−5 days",
}


def svc_detail(k, case=None):
    """Bloque de detalle de un servicio con su ilustración animada (visuals.py)."""
    num, ic, kick, title, text, tags, _ = SVC[k]
    tg = "".join(f'<span class="tag">{t}</span>' for t in tags)
    if case:
        badge = f'<span class="ico" aria-hidden="true">{I[ic]}</span><span><strong>{case[0]}</strong><span>{case[1]}</span></span>'
    else:
        badge = f'<span class="ico" aria-hidden="true">{I[ic]}</span><span><strong>{kick}</strong><span class="muted">{" · ".join(tags)}</span></span>'
    return f'''        <article class="svc" id="{k}">
          <div class="reveal">
            <span class="svc__num" aria-hidden="true">{num}</span>
            <span class="card__kicker">{kick}</span>
            <h2>{title}</h2>
            <p class="svc__text">{text}</p>
            <div class="svc__tags">{tg}</div>
            <div class="svc__ctas">
              <a class="btn btn--cta" href="agenda.html?servicio={k}">Consultar este servicio{I["arrow"]}</a>
              <a class="btn btn--ghost" href="proyectos.html">Ver proyectos</a>
            </div>
          </div>
          <div class="svc__visual svc__visual--anim reveal" style="--i:1">
{VISUALS[k]}
            <div class="svc__badge">{badge}</div>
          </div>
        </article>
'''


def stat(num, suffix="", count=True, sep=False):
    if count:
        s = ' data-sep' if sep else ''
        shown = f"{int(num):,}" if sep else num
        n = f'<span data-count="{num}"{s}>{shown}</span>'
    else:
        n = num
    return n + (f'<span class="suffix">{suffix}</span>' if suffix else "")


pages = {}

# ---------------------------------------------------------------- INICIO
main = hero(
    "inicio", light_img="hero-bg2.webp", sub=False, cue=True, pos="60% 50%",
    chip='<span class="pulse-dot" aria-hidden="true"></span>Impulsando el futuro digital',
    h1='<span class="sr-only">Automatizamos el futuro de tu negocio con flujos inteligentes</span>'
       '<span aria-hidden="true">Automatizamos el futuro<br>de tu negocio con<span class="grad-text rotator" data-rotator '
       'data-words="flujos inteligentes|crecimiento medible|ventaja competitiva|tiempo para innovar">flujos inteligentes</span></span>',
    lead="Automatización, software a medida, analítica de datos y marketing. Convertimos tareas repetitivas en resultados que puedes medir desde la primera semana.",
    ctas=btn("servicios.html", "Explorar servicios") + "\n" + btn("agenda.html", "Agendar demo", "btn--ghost btn--lg", arrow=False),
    stats=[(stat("120", "+"), "Proyectos"), (stat("87", "%"), "Menos tareas manuales"), (stat("15000", sep=True), "Horas ahorradas"), (stat("98", "%"), "Satisfacción")],
) + '    <div id="contenido"></div>\n' + marquee() + f'''
    <section class="section" id="servicios" aria-labelledby="servicios-title">
      <div class="container">
{eyebrow_head("// Servicios", 'Lo que hacemos <span class="grad-text">extraordinariamente bien</span>', link=("servicios.html", "Todos los servicios"), hid="servicios-title")}{service_cards()}      </div>
    </section>

    <section class="section section--alt" aria-labelledby="nosotros-title">
      <div class="container split">
{impact("Impacto medido", "Antes y después de automatizar", [("Facturas &amp; OC", "-94%", 94), ("Atención retail", "6x", 86), ("Cierre contable", "-5 d", 72), ("Seguimiento proveedores", "-80%", 80), ("Satisfacción de clientes", "98%", 98)])}        <div class="reveal" style="--i:1">
          <p class="eyebrow">// Nosotros</p>
          <h2 id="nosotros-title">Escuchamos primero, <span class="grad-text">automatizamos después</span></h2>
          <p class="lead" style="margin-top:1rem">En <strong>ALTOKIA</strong> no vendemos tecnología por vender: nos obsesionan los requerimientos reales del usuario y del cliente. Cada proyecto empieza con una conversación, no con una propuesta genérica.</p>
          <div class="traits">
            <div class="trait"><span class="ico" aria-hidden="true">{I["ear"]}</span><div><h3>Escucha activa</h3><p>Entendemos tu proceso antes de proponer una sola línea de código.</p></div></div>
            <div class="trait"><span class="ico" aria-hidden="true">{I["user"]}</span><div><h3>Centrados en el usuario</h3><p>Diseñamos para las personas que usarán la solución cada día.</p></div></div>
            <div class="trait"><span class="ico" aria-hidden="true">{I["chart"]}</span><div><h3>Resultados medibles</h3><p>Cada entrega viene con KPIs claros y retorno demostrable.</p></div></div>
            <div class="trait"><span class="ico" aria-hidden="true">{I["globe"]}</span><div><h3>Experiencia internacional</h3><p>Proyectos entregados en EE.UU., Panamá y Perú.</p></div></div>
          </div>
          <a class="btn btn--cta btn--lg" href="nosotros.html">Conoce a ALTOKIA{I["arrow"]}</a>
        </div>
      </div>
    </section>

{code_feature(alt=False)}{process(alt=True)}
    <section class="section" aria-labelledby="proyectos-title">
      <div class="container">
{eyebrow_head("// Proyectos", 'Automatizaciones que ya <span class="grad-text">trabajan por nuestros clientes</span>', "Casos reales en minería, retail y banca — con resultados medibles desde la primera semana.", link=("proyectos.html", "Ver todos"), hid="proyectos-title")}{project_cards(PROJECTS[:3])}      </div>
    </section>

{quote_band()}{cta_band("contacto")}'''
pages["index.html"] = page(head("ALTOKIA — Automatización, Software a Medida, Datos y Marketing",
                                "Automatizamos el futuro de tu negocio: RPA, software a medida, analítica de datos y marketing digital. Casos reales en minería, retail y banca.",
                                og_title="ALTOKIA — Tecnología que trabaja mientras tú creces", extra=ORG_LD), "inicio", main)

# ---------------------------------------------------------------- SERVICIOS
subnav = "\n".join(f'          <li><a class="chip" href="#{k}">{I[ic]}{name}</a></li>' for k, ic, name, kick in
                   [("automatizacion", "bolt", "Automatización", ""), ("software", "code", "Software a medida", ""), ("analitica", "chart", "Analítica de datos", ""),
                    ("optimizacion", "gear", "Optimización de procesos", ""), ("marketing", "mega", "Marketing digital", "")])
main = hero(
    "servicios", pos="62% 45%", crumb="Servicios",
    h1='Lo que hacemos<br><span class="grad-text">extraordinariamente bien</span>',
    lead="Automatización, software a medida, analítica de datos, marketing y optimización — un solo equipo para todo tu ecosistema digital.",
    ctas=btn("agenda.html", "Agendar consultoría") + "\n" + btn_wa(),
    stats=[(stat("5"), "líneas de servicio con un solo equipo"), (stat("4"), "fases de la idea al impacto"), ("30 min", "consultoría gratuita"), ("&lt; 24 h", "tiempo de respuesta")],
) + f'''    <nav class="subnav" aria-label="Servicios">
      <div class="container">
        <ul>
{subnav}
        </ul>
      </div>
    </nav>

    <section class="section" style="padding-top:0" aria-label="Servicios">
      <div class="container">
{svc_detail("automatizacion", ("Facturas &amp; Órdenes de Compra", "▲ 94% menos tiempo de procesamiento"))}{svc_detail("software", ("Onboarding de Proveedores", "▲ 80% menos correos de seguimiento"))}{svc_detail("analitica", ("Reportería Automática de Ventas", "▲ Decisiones con datos del día anterior"))}{svc_detail("optimizacion", ("Conciliación Bancaria Automática", "▲ Cierre contable 5 días más rápido"))}{svc_detail("marketing", ("Bot de WhatsApp Inteligente", "▲ 6x más consultas atendidas"))}      </div>
    </section>

{process(alt=True)}{marquee()}{faq([
    ("¿Cuánto cuesta un proyecto?", "Cada proyecto es único, por eso no usamos tarifas genéricas. Primero escuchamos tu caso en una consultoría gratuita de 30 minutos y luego te enviamos una propuesta a medida, con alcance y precio cerrados."),
    ("¿Cuánto demora?", "Depende del alcance: una automatización simple, de 2 a 4 semanas; un sitio o app web, de 4 a 8 semanas; proyectos de integración grandes, de 2 a 4 meses. Trabajamos con sprints y entregas parciales, así ves avances desde la primera semana."),
    ("¿Con qué herramientas automatizan?", "Principalmente RPA con Automation Anywhere, Power Automate y Python, además de desarrollo propio en Node.js y PostgreSQL cuando el caso lo pide. Elegimos la herramienta según tu operación, no al revés."),
    ("¿En qué rubros tienen experiencia?", "Minería, retail, banca y finanzas, manufactura, logística y salud. Hemos entregado proyectos en Perú, Panamá y Estados Unidos, adaptándonos a distintas regulaciones, monedas y sistemas."),
    ("¿Cómo empezamos?", "Con una consultoría gratuita de 30 minutos. Nos cuentas tu caso, revisamos juntos dónde está la mayor oportunidad de eficiencia y te dejamos por escrito los primeros pasos, trabajes o no con nosotros."),
])}{cta_band("agenda")}'''
pages["servicios.html"] = page(head("Servicios — ALTOKIA", "Automatización, software a medida, analítica de datos, optimización de procesos y marketing digital. Un solo equipo para todo tu ecosistema digital."), "servicios", main)

# ---------------------------------------------------------------- PROYECTOS
tabs = "\n".join(f'          <button class="tab" type="button" data-filter="{f}" aria-pressed="{"true" if f == "all" else "false"}">{n}<span class="count">{c}</span></button>'
                 for f, n, c in [("all", "Todos", 7), ("mineria", "Minería", 2), ("retail", "Retail", 2), ("banca", "Banca", 2), ("legal", "Legal", 1)])
main = hero(
    "proyectos", pos="55% 40%", crumb="Proyectos",
    h1='Automatizaciones que ya<br><span class="grad-text">trabajan por nuestros clientes</span>',
    lead="Casos reales en minería, retail y banca — con resultados medibles desde la primera semana.",
    ctas=btn("agenda.html", "Agendar consultoría") + "\n" + btn_wa(),
    stats=[(stat("120", "+"), "Proyectos entregados"), (stat("87", "%"), "Reducción de tareas manuales"), (stat("15000", sep=True), "Horas ahorradas a clientes"), (stat("98", "%"), "Satisfacción de clientes")],
) + f'''    <section class="section" aria-labelledby="casos-title">
      <div class="container">
{eyebrow_head("// Proyectos", 'Casos reales, <span class="grad-text">resultados medibles</span>', hid="casos-title")}        <div class="tabs reveal" role="group" aria-label="Filtrar proyectos por sector">
{tabs}
        </div>
{project_cards(PROJECTS, with_cta=True, filterable=True)}      </div>
    </section>

    <section class="section section--alt" aria-labelledby="sectores-title">
      <div class="container">
{eyebrow_head("// Sectores", 'Rubros que <span class="grad-text">dominamos</span>', "Operaciones que ya conocemos de cerca:", center=True, hid="sectores-title")}{sectors_grid()}      </div>
    </section>

{code_feature(alt=False)}{cta_band("servicios")}'''
EXTRA["Casos reales,"] = "Real cases,"
EXTRA["resultados medibles"] = "measurable results"
pages["proyectos.html"] = page(head("Proyectos — ALTOKIA", "Casos reales de automatización en minería, retail, banca y legal, con resultados medibles desde la primera semana."), "proyectos", main)

# ---------------------------------------------------------------- NOSOTROS
countries = "\n".join(f'          <li class="card glow country reveal" style="--i:{i}"><span class="flag" aria-hidden="true">{f}</span><strong>{n}</strong></li>'
                      for i, (f, n) in enumerate([("🇺🇸", "EE.UU."), ("🇵🇦", "Panamá"), ("🇵🇪", "Perú")]))
main = hero(
    "nosotros", pos="58% 45%", crumb="Nosotros",
    h1='Escuchamos primero,<br><span class="grad-text">automatizamos después</span>',
    lead="Conoce al equipo detrás de ALTOKIA: experiencia internacional, escucha activa y resultados medibles.",
    ctas=btn("proyectos.html", "Ver nuestros proyectos") + "\n" + btn("agenda.html", "Agenda una demo", "btn--ghost btn--lg", arrow=False),
    stats=[(stat("3"), "países con proyectos entregados"), (stat("6"), "rubros que dominamos"), (stat("120", "+"), "Proyectos entregados"), (stat("98", "%"), "Satisfacción de clientes")],
) + f'''    <section class="section" id="quienes" aria-labelledby="quienes-title">
      <div class="container split">
        <div class="code code--md reveal" role="img" aria-label="Cómo trabajamos en ALTOKIA">
          <div class="code__bar" aria-hidden="true"><i></i><i></i><i></i><span>como_trabajamos.md</span></div>
          <div class="code__md" style="padding:1.25rem 1.5rem;font:400 .875rem/1.9 var(--font-mono);color:#DCE3F5">
            <p class="h"># Cómo trabajamos en ALTOKIA</p>
            <p><span class="n">1.</span> Escuchamos el proceso antes de proponer.</p>
            <p><span class="n">2.</span> Diseñamos para quien lo usará a diario.</p>
            <p><span class="n">3.</span> Cada entrega trae <span class="b">KPIs</span> claros.</p>
            <p><span class="n">4.</span> Sprints cortos, avances visibles.</p>
            <p><span class="n">5.</span> Nos adaptamos a tu regulación, tu moneda y tus sistemas.</p>
            <p><span class="n">6.</span> Te escuchamos <span class="h">las veces que</span> <span class="h">haga falta</span>.</p>
          </div>
        </div>
        <div class="prose reveal" style="--i:1">
          <p class="eyebrow">// Quiénes somos</p>
          <h2 id="quienes-title">Entendemos el negocio <span class="grad-text">antes que el código</span></h2>
          <p class="lead" style="margin-top:1rem">En <strong>ALTOKIA</strong> no vendemos tecnología por vender: nos obsesionan los requerimientos reales del usuario y del cliente. Cada proyecto empieza con una conversación, no con una propuesta genérica.</p>
          <p>Somos un equipo con <strong>experiencia internacional</strong> que ha desplegado soluciones de automatización y desarrollo web en múltiples países, adaptándonos a distintas regulaciones, monedas, sistemas y culturas de trabajo. Esa diversidad nos dio algo que ningún curso enseña: la capacidad de <strong>entender el negocio antes que el código</strong>.</p>
          <p>Estamos dispuestos a escucharte las veces que haga falta. Tu operación es única, y tu automatización también debería serlo.</p>
          <div class="hero-ctas"><a class="btn btn--cta btn--lg" href="proyectos.html">Ver nuestros proyectos{I["arrow"]}</a></div>
        </div>
      </div>
    </section>

    <section class="section section--alt" aria-labelledby="valores-title">
      <div class="container">
{eyebrow_head("// Valores", 'Tres cosas que no <span class="grad-text">negociamos</span>', center=True, hid="valores-title")}        <div class="services">
          <article class="card glow reveal" style="--i:0"><span class="card__icon" aria-hidden="true">{I["ear"]}</span><h3 style="margin-top:0">Escucha activa</h3><p>Entendemos tu proceso antes de proponer una sola línea de código.</p></article>
          <article class="card glow reveal" style="--i:1"><span class="card__icon" aria-hidden="true">{I["user"]}</span><h3 style="margin-top:0">Centrados en el usuario</h3><p>Diseñamos para las personas que usarán la solución cada día.</p></article>
          <article class="card glow reveal" style="--i:2"><span class="card__icon" aria-hidden="true">{I["chart"]}</span><h3 style="margin-top:0">Resultados medibles</h3><p>Cada entrega viene con KPIs claros y retorno demostrable.</p></article>
        </div>
      </div>
    </section>

{team().replace('section section--alt" id="equipo"', 'section" id="equipo"')}
    <section class="section section--alt" aria-labelledby="alcance-title">
      <div class="container">
{eyebrow_head("// Alcance", 'Presencia <span class="grad-text">internacional</span>', "Proyectos entregados en:", hid="alcance-title")}        <ul class="countries">
{countries}
        </ul>
        <div style="margin-top:var(--space-8)">
{eyebrow_head("// Sectores", 'Rubros que <span class="grad-text">dominamos</span>', "Operaciones que ya conocemos de cerca:")}{sectors_grid()}        </div>
      </div>
    </section>

{quote_band()}{cta_band("proyectos")}'''
pages["nosotros.html"] = page(head("Nosotros — ALTOKIA", "Experiencia internacional, escucha activa y resultados medibles. Conoce el equipo detrás de ALTOKIA."), "nosotros", main)

# ---------------------------------------------------------------- POR QUÉ ALTOKIA
main = hero(
    "por-que", pos="50% 50%", crumb="Por qué ALTOKIA",
    h1='Tecnología que trabaja<br><span class="grad-text">mientras tú creces</span>',
    lead="Escucha activa, foco en el usuario y resultados medibles: qué nos diferencia y cómo lo demostramos con números.",
    ctas=btn("agenda.html", "Agendar consultoría") + "\n" + btn("proyectos.html", "Ver nuestros proyectos", "btn--ghost btn--lg", arrow=False),
    stats=[('-<span data-count="94">94</span><span class="suffix">%</span>', "Facturas &amp; OC"), (stat("6", "x"), "Consultas retail"), ('<span data-count="12">12</span><span class="suffix">k/m</span>', "Docs bancarios"), ('-<span data-count="87">87</span><span class="suffix">%</span>', "Tareas manuales")],
) + f'''    <section class="section" aria-labelledby="dif-title">
      <div class="container">
        <div class="special reveal">
          <div class="special__grid" aria-hidden="true"></div>
          <p class="eyebrow">// Diferenciales</p>
          <h2 id="dif-title">No vendemos horas, entregamos eficiencia</h2>
          <p class="special__lead">Cada automatización que ponemos en producción libera tiempo de personas que estaban haciendo trabajo repetitivo. Eso es lo que medimos.</p>
          <div class="why">
            <div class="why__item">{I["ear"]}<h3>Escucha activa</h3><p>Entendemos tu proceso antes de proponer una sola línea de código.</p></div>
            <div class="why__item">{I["globe"]}<h3>Experiencia internacional</h3><p>Distintas regulaciones, monedas, sistemas y culturas de trabajo.</p></div>
            <div class="why__item">{I["user"]}<h3>Foco en el usuario</h3><p>Diseñamos para quien usará la solución todos los días.</p></div>
            <div class="why__item">{I["chart"]}<h3>KPIs desde el día uno</h3><p>Cada entrega trae retorno demostrable, no promesas.</p></div>
          </div>
          <p class="quote">La mejor automatización es la que nace de escuchar a quien vive el proceso todos los días.</p>
        </div>
      </div>
    </section>

    <section class="section section--alt" aria-labelledby="res-title">
      <div class="container split">
{impact("Resultados en producción", "Casos entregados", [("Facturas &amp; OC", "-94%", 94), ("Consultas retail", "6x", 86), ("Docs bancarios", "12k/m", 90), ("Correos de seguimiento", "-80%", 80), ("Tareas manuales", "-87%", 87)])}        <div class="reveal" style="--i:1">
          <p class="eyebrow">// Resultados</p>
          <h2 id="res-title">Números que <span class="grad-text">hablan por nosotros</span></h2>
          <ul class="stats" style="grid-template-columns:repeat(2,1fr);margin-top:var(--space-6)">
            <li class="stat glow"><p class="stat__num">{stat("120", "+")}</p><p class="stat__label">Proyectos entregados</p></li>
            <li class="stat glow"><p class="stat__num">{stat("87", "%")}</p><p class="stat__label">Reducción de tareas manuales</p></li>
            <li class="stat glow"><p class="stat__num">{stat("15000", sep=True)}</p><p class="stat__label">Horas ahorradas a clientes</p></li>
            <li class="stat glow"><p class="stat__num">{stat("98", "%")}</p><p class="stat__label">Satisfacción de clientes</p></li>
          </ul>
        </div>
      </div>
    </section>

{code_feature(alt=False)}{cta_band("nosotros")}'''
pages["por-que-altokia.html"] = page(head("Por qué ALTOKIA — Cómo trabajamos", "Escucha activa, foco en el usuario y resultados medibles: qué nos diferencia y cómo lo demostramos con números."), "por-que", main)

# ---------------------------------------------------------------- CONTACTO
main = hero(
    "contacto", pos="55% 45%", crumb="Contacto",
    h1='Hablemos de tu<br><span class="grad-text">próxima automatización</span>',
    lead="Escríbenos por WhatsApp, correo o LinkedIn. Respondemos en menos de 24 horas.",
    ctas=btn_wa("btn--cta btn--lg") + "\n" + btn("agenda.html", "Agenda una demo", "btn--ghost btn--lg", arrow=False),
    stats=[("&lt; 24 h", "tiempo de respuesta"), ("30 min", "consultoría gratuita"), (stat("3"), "países con proyectos entregados")],
) + f'''    <section class="section" aria-labelledby="canales-title">
      <div class="container">
        <h2 id="canales-title" class="sr-only">Canales de contacto</h2>
        <div class="services" style="grid-template-columns:repeat(auto-fit,minmax(240px,1fr))">
          <a class="card glow channel-card reveal" style="--i:0;text-decoration:none" href="{WA}" target="_blank" rel="noopener" data-wa>
            <span class="card__icon" aria-hidden="true" style="color:var(--wa)">{I["wa"]}</span>
            <p class="card__kicker" style="margin-top:.5rem">WhatsApp</p>
            <h3 style="margin-top:0">+51 906 106 881</h3>
            <p>Respuesta inmediata</p>
          </a>
          <a class="card glow channel-card reveal" style="--i:1;text-decoration:none" href="mailto:contacto@altokia.com">
            <span class="card__icon" aria-hidden="true">{I["mail"]}</span>
            <p class="card__kicker" style="margin-top:.5rem">Correo</p>
            <h3 style="margin-top:0">contacto@altokia.com</h3>
            <p>Escríbenos</p>
          </a>
          <a class="card glow channel-card reveal" style="--i:2;text-decoration:none" href="https://www.linkedin.com/company/altokia" target="_blank" rel="noopener">
            <span class="card__icon" aria-hidden="true">{I["in"]}</span>
            <p class="card__kicker" style="margin-top:.5rem">LinkedIn</p>
            <h3 style="margin-top:0">/company/altokia</h3>
            <p>Síguenos y conecta</p>
          </a>
        </div>
      </div>
    </section>

    <section class="section section--alt" id="escribenos" aria-labelledby="form-title">
      <div class="container contact">
        <div class="reveal">
          <p class="eyebrow">// Escríbenos</p>
          <h2 id="form-title">Cuéntanos qué <span class="grad-text">quieres automatizar</span></h2>
          <p class="lead" style="margin-top:1rem">Leemos todos los mensajes y respondemos en menos de 24 horas. Si prefieres hablar, déjanos tu teléfono y te llamamos.</p>
          <div class="bot-card" style="margin-top:var(--space-6)">
            <div class="bot-card__head">
              <img class="on-dark" src="images/altokia-logo-corto-oscuro.svg" alt="" width="52" height="52">
              <img class="on-light" src="images/altokia-logo-corto-claro.svg" alt="" width="52" height="52">
              <div><h3>Agenda con nuestro bot</h3><p>Reserva una reunión en 1 minuto.</p></div>
            </div>
            <div class="btn-row">
              <button class="btn btn--cta" type="button" data-open-bot>Abrir ALTObot</button>
              <a class="btn btn--ghost" href="agenda.html">Ver formulario de agenda</a>
            </div>
          </div>
        </div>
        <div class="form-card reveal" style="--i:2">
          <h3>Enviar mensaje</h3>
          <p>Leemos todos los mensajes y respondemos en menos de 24 horas.</p>
          <form class="form" data-ak-form data-subject="Consulta desde la web" novalidate>
            <div class="form__row">
{form_field("c-nombre", "Nombre", ph="Tu nombre", required=True, auto="name")}
{form_field("c-correo", "Correo", typ="email", ph="tucorreo@empresa.com", required=True, auto="email")}
            </div>
{form_field("c-tel", "Teléfono / WhatsApp", typ="tel", ph="+51 …", opt=True, auto="tel")}
{form_field("c-mensaje", "Mensaje", typ="textarea", ph="¿Qué proceso quieres automatizar?", required=True)}
            <div class="form__actions">
              <button class="btn btn--cta" type="submit" data-channel="wa">Enviar por WhatsApp</button>
              <button class="btn btn--ghost" type="submit" data-channel="mail">Enviar por correo</button>
            </div>
            <p class="form__note">◆ Respuesta en menos de 24 h · ◆ Sin compromiso</p>
            <p class="form__status" role="status" aria-live="polite"></p>
          </form>
        </div>
      </div>
    </section>

{faq([
    ("¿Atienden proyectos fuera de Perú?", "Sí. Hemos entregado proyectos en Estados Unidos, Panamá y Perú, adaptándonos a distintas regulaciones, monedas y sistemas."),
    ("¿Cuánto demora una automatización?", "Una automatización simple está lista en 2 a 4 semanas. Un sitio o app web, entre 4 y 8 semanas. Los proyectos de integración grandes, de 2 a 4 meses."),
    ("¿La primera reunión tiene costo?", "No. La consultoría inicial de 30 minutos es gratuita y sin compromiso, y sales de ella con los primeros pasos por escrito."),
])}'''
EXTRA["Canales de contacto"] = "Contact channels"
EXTRA["Enviar mensaje"] = "Send a message"
pages["contacto.html"] = page(head("Contacto — ALTOKIA", "Escríbenos por WhatsApp, correo o LinkedIn. Respondemos en menos de 24 horas."), "contacto", main)

# ---------------------------------------------------------------- AGENDA
opts = "\n".join(f'                  <option value="{v}" data-key="{k}">{v}</option>' for k, v in
                 [("automatizacion", "Automatización"), ("software", "Desarrollo de software a medida"), ("analitica", "Analítica de datos — dashboards &amp; KPIs"),
                  ("optimizacion", "Optimización de procesos"), ("marketing", "Marketing digital"), ("otro", "Aún no lo tengo claro")])
main = hero(
    "agenda", pos="50% 45%", crumb="Agenda una demo",
    h1='Treinta minutos que<br><span class="grad-text">ahorran meses</span>',
    lead="Reserva 30 minutos con nuestro equipo. Te mostramos exactamente dónde puedes ganar eficiencia, sin compromiso.",
    ctas=btn("#reserva", "Reserva tu consultoría") + '\n            <button class="btn btn--ghost btn--lg" type="button" data-open-bot>Agendar con el bot</button>',
    stats=[("30 min", "consultoría gratuita"), ("1 min", "para reservar con ALTObot"), ("&lt; 24 h", "tiempo de respuesta")],
) + f'''    <section class="section" id="reserva" aria-labelledby="reserva-title">
      <div class="container contact">
        <div class="reveal">
          <p class="eyebrow">// Consultoría gratuita</p>
          <h2 id="reserva-title">Cuéntanos tu caso, <span class="grad-text">sin compromiso</span></h2>
          <p class="lead" style="margin-top:1rem">Agenda una consultoría gratuita de 30 minutos. Cuéntanos tu caso y te mostramos exactamente dónde puedes ganar eficiencia.</p>
          <ol class="mini-steps">
            <li><b>1</b><div><strong>Escuchamos</strong><span>Nos cuentas qué proceso te está costando tiempo o dinero hoy.</span></div></li>
            <li><b>2</b><div><strong>Detectamos oportunidades</strong><span>Identificamos los cuellos de botella con mayor retorno al automatizar.</span></div></li>
            <li><b>3</b><div><strong>Te dejamos un plan</strong><span>Primeros pasos por escrito, trabajes o no con nosotros.</span></div></li>
          </ol>
          <div class="bot-card" style="margin-top:var(--space-6)">
            <div class="bot-card__head">
              <img class="on-dark" src="images/altokia-logo-corto-oscuro.svg" alt="" width="52" height="52">
              <img class="on-light" src="images/altokia-logo-corto-claro.svg" alt="" width="52" height="52">
              <div><h3>¿Prefieres agendar al instante?</h3><p>ALTObot reserva tu reunión en menos de un minuto.</p></div>
            </div>
            <div class="btn-row"><button class="btn btn--cta" type="button" data-open-bot>Agendar con el bot</button></div>
          </div>
        </div>
        <div class="form-card reveal" style="--i:2">
          <h3>Reserva tu consultoría</h3>
          <p>Leemos todos los mensajes y respondemos en menos de 24 horas.</p>
          <form class="form" data-ak-form data-subject="Consulta desde la web — Agenda" novalidate>
            <div class="form__row">
{form_field("a-nombre", "Nombre", ph="Tu nombre", required=True, auto="name")}
{form_field("a-correo", "Correo", typ="email", ph="tucorreo@empresa.com", required=True, auto="email")}
            </div>
            <div class="form__row">
{form_field("a-empresa", "Empresa", ph="Empresa", opt=True, auto="organization")}
{form_field("a-tel", "Teléfono / WhatsApp", typ="tel", ph="+51 …", opt=True, auto="tel")}
            </div>
            <div class="field">
              <label for="a-servicio">¿Qué te interesa?</label>
              <select id="a-servicio" name="a-servicio">
{opts}
              </select>
            </div>
{form_field("a-mensaje", "Mensaje", typ="textarea", ph="¿Qué proceso quieres automatizar?", required=True)}
            <div class="form__actions">
              <button class="btn btn--cta" type="submit" data-channel="wa">Enviar por WhatsApp</button>
              <button class="btn btn--ghost" type="submit" data-channel="mail">Enviar por correo</button>
            </div>
            <p class="form__note">◆ Respuesta en menos de 24 h · ◆ Sin compromiso</p>
            <p class="form__status" role="status" aria-live="polite"></p>
          </form>
          <p class="form__note" style="margin-top:var(--space-5)">¿Prefieres escribirnos directamente? <a href="{WA}" target="_blank" rel="noopener" data-wa>WhatsApp</a> · <a href="mailto:contacto@altokia.com">contacto@altokia.com</a></p>
        </div>
      </div>
    </section>
'''
pages["agenda.html"] = page(head("Agenda una consultoría gratuita — ALTOKIA", "Reserva 30 minutos con nuestro equipo. Te mostramos exactamente dónde puedes ganar eficiencia, sin compromiso."), "agenda", main)

EXTRA.update({
    "Diagnóstico · Rediseño · Métricas": "Diagnosis · Redesign · Metrics",
    "SEO · Google Ads · Meta Ads": "SEO · Google Ads · Meta Ads",
    "Logística": "Logistics", "Manufactura": "Manufacturing", "Salud": "Healthcare", "Banca & Finanzas": "Banking & Finance",
    "Cómo trabajamos en ALTOKIA": "How we work at ALTOKIA",
})

for name, html in pages.items():
    open(f"{REPO}/{name}", "w", encoding="utf-8").write(html)

# Traducciones nuevas: se añaden al objeto DIC de js/altokia.js si no existen todavía
js_path = f"{REPO}/js/altokia.js"
js = open(js_path, encoding="utf-8").read()
start = js.index("var DIC = {")
close = js.index("\n  };", start)
block = js[start:close]
missing = {k: v for k, v in EXTRA.items() if json.dumps(k, ensure_ascii=False) + ":" not in block}
if missing:
    add = "".join(f',\n  {json.dumps(k, ensure_ascii=False)}: {json.dumps(v, ensure_ascii=False)}' for k, v in missing.items())
    js = js[:close] + add + js[close:]
    open(js_path, "w", encoding="utf-8").write(js)
print("páginas:", ", ".join(pages), "| traducciones añadidas:", len(missing))
