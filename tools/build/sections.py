# -*- coding: utf-8 -*-
"""Secciones de contenido reutilizables. Los textos en español son los del sitio original de ALTOKIA."""
from parts import I, WA, SERVICES

SVC = {
    "automatizacion": ("01", "bolt", "Punto de partida", "Automatización",
                       "Diseñamos flujos inteligentes con RPA e IA que eliminan tareas repetitivas y conectan tus sistemas de punta a punta.",
                       ["RPA", "Automation Anywhere", "Power Automate", "Python"], "Automatización"),
    "software": ("02", "code", "Software a medida", "Desarrollo de Software a Medida",
                 "Sistemas y aplicaciones construidos desde cero para tu operación, sin plantillas ni licencias que no necesitas.",
                 ["Node.js", "Python", "PostgreSQL"], "Desarrollo de software a medida"),
    "analitica": ("03", "chart", "Dashboards & KPIs", "Analítica de Datos",
                  "Convertimos tus datos en decisiones: dashboards en tiempo real, KPIs claros y reportes que le hablan directo a tu negocio.",
                  ["Dashboards", "KPIs", "Reportería"], "Analítica de datos — dashboards & KPIs"),
    "optimizacion": ("04", "gear", "Eficiencia operativa", "Optimización de Procesos",
                     "Medimos, rediseñamos y afinamos tus operaciones para reducir costos y eliminar cuellos de botella.",
                     ["Diagnóstico", "Rediseño", "Métricas"], "Optimización de procesos"),
    "marketing": ("05", "mega", "Growth digital", "Marketing Digital",
                  "Estrategias basadas en datos — SEO, pauta y automatización de campañas — para llegar a las personas correctas.",
                  ["SEO", "Google Ads", "Meta Ads"], "Marketing digital"),
}

PROJECTS = [
    ("mineria", "⛏ Minería", "Facturas &amp; Órdenes de Compra",
     "Bot RPA que lee facturas y OC con OCR, valida montos contra el ERP, detecta inconsistencias y registra todo automáticamente. De 3 días de trabajo manual a 20 minutos.",
     "▲ 94% menos tiempo de procesamiento"),
    ("retail", "🛒 Retail", "Bot de WhatsApp Inteligente",
     "Asistente conversacional que atiende consultas, toma pedidos, consulta stock en tiempo real y deriva a un humano solo cuando hace falta. Disponible 24/7, sin filas de espera.",
     "▲ 6x más consultas atendidas"),
    ("banca", "🏦 Banca", "Automatización de Documentos",
     "Generación, clasificación y firma de contratos y documentos regulatorios de forma masiva, con trazabilidad completa y cero errores de tipeo.",
     "▲ 12,000 documentos/mes sin intervención"),
    ("banca", "🏦 Banca", "Conciliación Bancaria Automática",
     "Robot que cruza extractos bancarios contra registros contables cada noche, concilia partidas y genera el reporte de excepciones listo para revisión matutina.",
     "▲ Cierre contable 5 días más rápido"),
    ("retail", "🛒 Retail", "Reportería Automática de Ventas",
     "Pipeline que consolida ventas de todas las tiendas y canales, y envía dashboards e informes ejecutivos por correo y WhatsApp antes de que empiece el día.",
     "▲ Decisiones con datos del día anterior"),
    ("mineria", "⛏ Minería", "Onboarding de Proveedores",
     "Portal web + flujo automatizado que valida documentación legal de proveedores, verifica vigencias y notifica vencimientos, eliminando el seguimiento manual por correo.",
     "▲ 80% menos correos de seguimiento"),
    ("legal", "⚖ Legal (EE.UU.)", "Resumen Inteligente de Llamadas Legales",
     "IA que escucha las llamadas de los case managers con clientes de firmas de abogados en EE.UU. y extrae automáticamente el resumen de la conversación, tipo de caso, número de póliza, teléfono y demás datos clave — listos para el expediente, sin transcribir nada a mano.",
     "▲ Documentación de llamadas 100% automática"),
]

SECTORS = [("⛏", "Minería"), ("🛒", "Retail"), ("🏦", "Banca &amp; Finanzas"), ("🏭", "Manufactura"), ("🚚", "Logística"), ("⚕", "Salud")]


def eyebrow_head(eyebrow, h2_html, p=None, link=None, center=False, hid=None):
    p_html = f"\n            <p>{p}</p>" if p else ""
    link_html = f'\n          <a class="link-arrow reveal" href="{link[0]}">{link[1]} {I["arrow"]}</a>' if link else ""
    return f'''        <div class="section-head{' section-head--center' if center else ''}">
          <div class="reveal">
            <p class="eyebrow">{eyebrow}</p>
            <h2{f' id="{hid}"' if hid else ''}>{h2_html}</h2>{p_html}
          </div>{link_html}
        </div>
'''


def service_cards(detail_links=True):
    cards = []
    for n, k in enumerate(["automatizacion", "software", "analitica", "optimizacion", "marketing"]):
        num, ic, kick, title, text, tags, _ = SVC[k]
        tg = "".join(f'<li class="tag">{t}</li>' for t in tags)
        cards.append(f'''          <article class="card glow reveal" style="--i:{n % 3}">
            <div class="card__top">
              <span class="card__icon" aria-hidden="true">{I[ic]}</span>
              <span class="card__num">{num}</span>
            </div>
            <p class="card__kicker">{kick}</p>
            <h3>{title}</h3>
            <p>{text}</p>
            <ul class="card__tags">{tg}</ul>
            <a class="link-arrow" href="servicios.html#{k}">Ver detalle {I["arrow"]}</a>
          </article>''')
    cards.append(f'''          <article class="card card--cta glow reveal" style="--i:2">
            <h3>¿No sabes por dónde empezar?</h3>
            <p>En 30 minutos revisamos tu operación y te decimos qué automatizar primero, trabajes o no con nosotros.</p>
            <a class="btn btn--cta" href="agenda.html">Agendar consultoría gratuita</a>
          </article>''')
    return '        <div class="services">\n' + "\n\n".join(cards) + '\n        </div>\n'


def process(alt=True):
    steps = [
        ("Descubrimiento", "Auditamos tus procesos actuales, identificamos cuellos de botella y detectamos oportunidades de automatización con mayor retorno."),
        ("Diseño de Solución", "Prototipamos la arquitectura, definimos flujos y diseñamos interfaces centradas en el usuario. Todo validado contigo antes de escribir código."),
        ("Desarrollo Ágil", "Sprints cortos, entregas continuas y comunicación transparente. Ves el avance en tiempo real y ajustamos sobre la marcha."),
        ("Lanzamiento &amp; Evolución", "Desplegamos, medimos KPIs y optimizamos continuamente. Tu solución crece junto a tu negocio."),
    ]
    li = "\n".join(f'          <li class="step glow reveal" style="--i:{i}"><span class="step__num" aria-hidden="true">{i + 1}</span><h3>{t}</h3><p>{d}</p></li>' for i, (t, d) in enumerate(steps))
    return f'''    <section class="section{' section--alt' if alt else ''}" id="proceso" aria-labelledby="proceso-title">
      <div class="container">
{eyebrow_head("// Proceso", 'De la idea al impacto <span class="grad-text">en 4 fases</span>', "Sprints cortos y avances visibles: sabes en qué estamos cada semana.", hid="proceso-title")}        <ol class="steps">
{li}
        </ol>
      </div>
    </section>
'''


def marquee():
    items = ["Node.js", "Python", "Automation Anywhere", "Power Automate", "PostgreSQL", "Google &amp; Meta Ads"]
    a = "".join(f"<li>{x}</li>" for x in items)
    b = "".join(f'<li aria-hidden="true">{x}</li>' for x in items)
    return f'''    <section class="marquee" aria-label="Tecnologías">
      <p class="marquee__label">Tecnología que domina el juego</p>
      <div class="marquee__viewport">
        <ul class="marquee__track">
          {a}
          {b}
        </ul>
      </div>
    </section>
'''


def impact(k, title, rows, status="Real"):
    r = "\n".join(f'''          <div class="impact__row"><span class="name">{n}</span><span class="pct">{pct}</span><span class="bar" aria-hidden="true"><i style="--w:{w}%;--d:{i}"></i></span></div>''' for i, (n, pct, w) in enumerate(rows))
    return f'''        <div class="impact reveal">
          <div class="impact__head">
            <div><p class="k">{k}</p><h3>{title}</h3></div>
            <span class="status"><span class="pulse-dot" aria-hidden="true"></span>{status}</span>
          </div>
{r}
        </div>
'''


def code_feature(alt=True, eyebrow="// Caso destacado · Minería"):
    return f'''    <section class="section{' section--alt' if alt else ''}" id="caso" aria-labelledby="caso-title">
      <div class="container feature">
        <div class="feature__copy reveal">
          <p class="eyebrow">{eyebrow}</p>
          <h2 id="caso-title" class="display">De 3 días a <span class="grad-text">20 minutos</span></h2>
          <p>Un bot RPA que lee facturas y órdenes de compra con OCR, valida los montos contra el ERP, detecta inconsistencias y lo registra todo automáticamente.</p>
          <div class="compare" aria-label="Comparación de tiempos">
            <div class="compare__row">
              <div class="compare__meta"><span>Antes · proceso manual</span><strong>3 días</strong></div>
              <div class="compare__bar compare__bar--before" aria-hidden="true"><i></i></div>
            </div>
            <div class="compare__row">
              <div class="compare__meta"><span>Después · con ALTOKIA</span><strong>20 minutos</strong></div>
              <div class="compare__bar compare__bar--after" aria-hidden="true"><i></i></div>
            </div>
          </div>
          <div class="feature__metric"><strong>-94%</strong><span>menos tiempo de procesamiento</span></div>
          <a class="btn btn--cta btn--lg" href="agenda.html">Quiero un resultado así</a>
        </div>
        <div class="code reveal" style="--i:2" role="img" aria-label="Fragmento de código del bot de facturas: lee cada factura, extrae los datos con OCR, busca la orden de compra en el ERP y registra o alerta según coincidan los montos">
          <div class="code__bar" aria-hidden="true"><i></i><i></i><i></i><span>automatizacion_facturas.py</span></div>
          <pre aria-hidden="true"><span class="ln" style="--l:0"><span class="c"># Bot RPA — Facturas &amp; Órdenes de Compra (minería)</span></span><span class="ln" style="--l:1"><span class="k">for</span> factura <span class="k">in</span> bandeja.<span class="f">leer</span>():</span><span class="ln" style="--l:2">    datos = ocr.<span class="f">extraer</span>(factura)</span><span class="ln" style="--l:3">    orden = erp.<span class="f">buscar_oc</span>(datos.numero_oc)</span><span class="ln" style="--l:4">    <span class="k">if</span> <span class="f">montos_coinciden</span>(datos, orden):</span><span class="ln" style="--l:5">        erp.<span class="f">registrar</span>(datos)</span><span class="ln" style="--l:6">    <span class="k">else</span>:</span><span class="ln" style="--l:7">        <span class="f">alertar</span>(<span class="s">"inconsistencia"</span>, datos)<span class="caret"></span></span></pre>
          <div class="code__foot" aria-hidden="true">▸ 3 días de trabajo manual → 20 minutos</div>
        </div>
      </div>
    </section>
'''


def project_cards(items, with_cta=False, filterable=False):
    out = []
    for n, (sec, chip, title, text, metric) in enumerate(items):
        out.append(f'''          <article class="card glow project reveal" data-sector="{sec}" style="--i:{n % 3}">
            <span class="chip project__sector">{chip}</span>
            <h3>{title}</h3>
            <p>{text}</p>
            <p class="project__metric">{metric}</p>
          </article>''')
    if with_cta:
        out.append(f'''          <article class="card card--cta glow project-cta reveal" style="--i:1">
            <p class="card__kicker">// Tu caso</p>
            <h3>¿Tu proceso es el siguiente?</h3>
            <p>Cuéntanos qué tarea repetitiva le quita tiempo a tu equipo y te mostramos cómo automatizarla, en una consultoría gratuita de 30 minutos.</p>
            <a class="btn btn--cta" href="agenda.html">Agendar consultoría gratuita</a>
          </article>''')
    attrs = ' id="projectList" data-filter="all" aria-live="polite"' if filterable else ""
    return f'        <div class="projects"{attrs}>\n' + "\n".join(out) + '\n        </div>\n'


def faq(items, alt=False, sid="faq"):
    det = "\n".join(f'''          <details>
            <summary>{q}</summary>
            <p>{a}</p>
          </details>''' for q, a in items)
    return f'''    <section class="section{' section--alt' if alt else ''}" id="{sid}" aria-labelledby="faq-title">
      <div class="container faq-grid">
        <div class="faq-aside reveal">
          <p class="eyebrow">// Dudas frecuentes</p>
          <h2 id="faq-title">Lo que casi <span class="grad-text">siempre nos preguntan</span></h2>
          <p>Si tu duda no está aquí, pregúntale a ALTObot o escríbenos por WhatsApp.</p>
          <div class="btn-row">
            <button class="btn btn--ghost" type="button" data-open-bot>Preguntar al bot</button>
            <a class="btn btn--wa" href="{WA}" target="_blank" rel="noopener" data-wa>WhatsApp</a>
          </div>
        </div>
        <div class="faq reveal" style="--i:1">
{det}
        </div>
      </div>
    </section>
'''


def sectors_grid():
    tiles = "\n".join(f'          <li class="card glow sector reveal" style="--i:{i % 6}"><span class="emoji" aria-hidden="true">{e}</span><strong>{n}</strong></li>' for i, (e, n) in enumerate(SECTORS))
    return f'        <ul class="sectors">\n{tiles}\n        </ul>\n'


TEAM = [
    ("Andrea Salazar", "CEO &amp; Fundadora", "Lidera la estrategia y escucha a cada cliente antes de proponer una solución.", ["Estrategia", "Consultoría"]),
    ("Diego Ramírez", "Líder de Automatización RPA", "Diseña bots que eliminan tareas repetitivas y conectan sistemas de punta a punta.", ["RPA", "Power Automate"]),
    ("Valeria Torres", "Desarrolladora Full Stack", "Construye sistemas a medida, sin plantillas ni licencias que no necesitas.", ["Node.js", "PostgreSQL"]),
    ("Martín Huamán", "Analista de Datos", "Convierte datos dispersos en dashboards y KPIs que cualquiera entiende.", ["Dashboards", "Python"]),
    ("Lucía Fernández", "Especialista en Marketing Digital", "Crea campañas basadas en datos para llegar a las personas correctas.", ["SEO", "Meta Ads"]),
    ("Carlos Mendoza", "Consultor de Procesos", "Mide, rediseña y afina operaciones para eliminar cuellos de botella.", ["Diagnóstico", "Lean"]),
]


def team():
    cards = []
    for i, (n, role, bio, tags) in enumerate(TEAM):
        tg = "".join(f'<li class="tag">{t}</li>' for t in tags)
        cards.append(f'''          <article class="card glow member reveal" style="--i:{i % 3}">
            <div class="member__photo">
              <img src="images/equipo/foto-pendiente.svg" alt="Foto de perfil de {n}" width="600" height="600" loading="lazy">
              <span class="member__id" aria-hidden="true">ID·0{i + 1}</span>
            </div>
            <div class="member__body">
              <h3>{n}</h3>
              <p class="member__role">{role}</p>
              <p class="member__bio">{bio}</p>
            </div>
            <div class="member__foot">
              <ul class="card__tags">{tg}</ul>
              <a class="social" href="https://www.linkedin.com/company/altokia" target="_blank" rel="noopener" aria-label="LinkedIn de {n}">{I["in"]}</a>
            </div>
          </article>''')
    return '''    <!-- ================= EQUIPO DE TRABAJO =================
         [PENDIENTE] EQUIPO DE EJEMPLO: los nombres, cargos, textos y fotos son de muestra.
         Reemplázalos por los reales antes de publicar. Para cada persona:
           1. Sube su foto cuadrada (600×600 px, .webp o .jpg) a images/equipo/, p. ej. images/equipo/andrea.webp
           2. Cambia el src de su <img> y el texto del alt ("Foto de perfil de …")
           3. Cambia nombre (<h3>), cargo, descripción, etiquetas y el enlace de LinkedIn (hoy apunta a la página de ALTOKIA)
           4. Si cambias un cargo o una descripción, actualiza su traducción en js/altokia.js (objeto DIC).
              El alt y la etiqueta de LinkedIn se traducen solos a partir del nombre.
         Para quitar una persona, borra su <article> completo. -->
    <section class="section section--alt" id="equipo" aria-labelledby="equipo-title">
      <div class="container">
''' + eyebrow_head("// Equipo de trabajo", 'Las personas detrás de <span class="grad-text">cada automatización</span>',
                   "Un equipo multidisciplinario que escucha primero y automatiza después, para todo tu ecosistema digital.", hid="equipo-title") + '''        <div class="team">
''' + "\n".join(cards) + '''
        </div>
      </div>
    </section>
'''


def form_field(fid, label, typ="text", ph="", required=False, opt=False, auto=""):
    o = ' <span class="opt">(opcional)</span>' if opt else ""
    req = " required" if required else ""
    ac = f' autocomplete="{auto}"' if auto else ""
    err = '\n                <span class="error" aria-live="polite"></span>' if required else ""
    if typ == "textarea":
        ctl = f'<textarea id="{fid}" name="{fid}" placeholder="{ph}"{req}></textarea>'
    else:
        ctl = f'<input id="{fid}" name="{fid}" type="{typ}"{ac} placeholder="{ph}"{req}>'
    return f'''              <div class="field">
                <label for="{fid}">{label}{o}</label>
                {ctl}{err}
              </div>'''
