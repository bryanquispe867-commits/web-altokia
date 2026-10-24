# -*- coding: utf-8 -*-
"""Piezas compartidas de las páginas de ALTOKIA (cabecera, menú, pie, bot, hero)."""
import os

WA = "https://wa.me/51906106881?text=Hola%20ALTOKIA%2C%20quiero%20informaci%C3%B3n%20sobre%20sus%20servicios"

I = {
    "bolt": '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linejoin="round"><path d="M13 2 4 14h7l-1 8 9-12h-7z"/></svg>',
    "code": '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m8 7-5 5 5 5M16 7l5 5-5 5M14 4l-4 16"/></svg>',
    "chart": '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 3v18h18"/><path d="M7 15l4-4 3 3 5-6"/></svg>',
    "gear": '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><circle cx="12" cy="12" r="3"/><path d="M12 2v3M12 19v3M4.2 4.2l2.1 2.1M17.7 17.7l2.1 2.1M2 12h3M19 12h3M4.2 19.8l2.1-2.1M17.7 6.3l2.1-2.1"/></svg>',
    "mega": '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 11v2a1 1 0 0 0 1 1h3l5 4V6L7 10H4a1 1 0 0 0-1 1z"/><path d="M16 8a5 5 0 0 1 0 8M19 5a9 9 0 0 1 0 14"/></svg>',
    "users": '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="9" cy="8" r="3.5"/><path d="M2.5 20a6.5 6.5 0 0 1 13 0"/><path d="M16 4.5a3.5 3.5 0 0 1 0 7M21.5 20a6.5 6.5 0 0 0-4-6"/></svg>',
    "user": '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="8" r="4"/><path d="M4 21a8 8 0 0 1 16 0"/></svg>',
    "ear": '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 18v-6a9 9 0 0 1 18 0v6"/><path d="M21 19a2 2 0 0 1-2 2h-1v-6h3zM3 19a2 2 0 0 0 2 2h1v-6H3z"/></svg>',
    "globe": '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3a14 14 0 0 1 0 18M12 3a14 14 0 0 0 0 18"/></svg>',
    "target": '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="5"/><circle cx="12" cy="12" r="1"/></svg>',
    "spark": '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3v4M12 17v4M3 12h4M17 12h4M5.6 5.6l2.8 2.8M15.6 15.6l2.8 2.8M5.6 18.4l2.8-2.8M15.6 8.4l2.8-2.8"/></svg>',
    "doc": '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 3H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z"/><path d="M14 3v6h6M9 14l2 2 4-4"/></svg>',
    "cal": '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="17" rx="2"/><path d="M16 2v4M8 2v4M3 10h18M9 15l2 2 4-4"/></svg>',
    "arrow": '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6"/></svg>',
    "down": '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="m6 9 6 6 6-6"/></svg>',
    "wa": '<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2zm0 18.2a8.2 8.2 0 0 1-4.2-1.2l-.3-.2-3 .8.8-2.9-.2-.3A8.2 8.2 0 1 1 12 20.2zm4.5-6.1c-.2-.1-1.5-.7-1.7-.8s-.4-.1-.6.1-.7.8-.8 1-.3.2-.5.1a6.7 6.7 0 0 1-3.3-2.9c-.3-.4.2-.4.7-1.4.1-.2 0-.3 0-.4l-.8-1.8c-.2-.5-.4-.4-.6-.4h-.5a1 1 0 0 0-.7.3 3 3 0 0 0-.9 2.2 5.2 5.2 0 0 0 1.1 2.7 11.8 11.8 0 0 0 4.5 4c1.7.7 2.3.8 3.2.6a2.7 2.7 0 0 0 1.8-1.2 2.2 2.2 0 0 0 .1-1.3c0-.1-.2-.2-.4-.3z"/></svg>',
    "mail": '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 7 9 6 9-6"/></svg>',
    "in": '<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M20.4 20.5h-3.6v-5.6c0-1.3 0-3-1.8-3s-2.1 1.4-2.1 2.9v5.7H9.3V9h3.4v1.6c.5-.9 1.6-1.8 3.4-1.8 3.6 0 4.3 2.4 4.3 5.5v6.2zM5.3 7.4a2.1 2.1 0 1 1 0-4.2 2.1 2.1 0 0 1 0 4.2zm1.8 13.1H3.5V9h3.6v11.5z"/></svg>',
}

SERVICES = [
    ("automatizacion", "bolt", "Automatización", "Punto de partida"),
    ("software", "code", "Software a medida", "Software a medida"),
    ("analitica", "chart", "Analítica de datos", "Dashboards & KPIs"),
    ("optimizacion", "gear", "Optimización de procesos", "Eficiencia operativa"),
    ("marketing", "mega", "Marketing digital", "Growth digital"),
]


def head(title, desc, og_title=None, og_desc=None, extra=""):
    og_title = og_title or title
    og_desc = og_desc or desc
    return f'''<!DOCTYPE html>
<html lang="es" data-theme="dark">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>{title}</title>
  <meta name="description" content="{desc}">
  <meta name="theme-color" content="#050816" media="(prefers-color-scheme: dark)">
  <meta name="theme-color" content="#F6F8FF" media="(prefers-color-scheme: light)">
  <meta name="color-scheme" content="dark light">
  <!-- [PENDIENTE] Cuando se confirme el dominio: <link rel="canonical" href="https://DOMINIO/..."> y URLs absolutas en og:url y og:image -->
  <meta property="og:type" content="website">
  <meta property="og:site_name" content="ALTOKIA">
  <meta property="og:locale" content="es_PE">
  <meta property="og:locale:alternate" content="en_US">
  <meta property="og:title" content="{og_title}">
  <meta property="og:description" content="{og_desc}">
  <meta property="og:image" content="images/og-altokia.png">
  <meta property="og:image:width" content="1200">
  <meta property="og:image:height" content="630">
  <meta property="og:image:alt" content="Logotipo de ALTOKIA sobre fondo oscuro con el eslogan Tecnología que trabaja mientras tú creces">
  <meta name="twitter:card" content="summary_large_image">
  <meta name="twitter:image" content="images/og-altokia.png">
  <link rel="icon" href="images/favicon.svg" type="image/svg+xml">
  <link rel="apple-touch-icon" href="images/apple-touch-icon.png">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@700;800&family=Inter:wght@400;500;600;700;800&family=JetBrains+Mono:wght@400;500&display=swap" rel="stylesheet">
  <link href="css/altokia.css" rel="stylesheet">
  <script>
    /* Tema antes del primer pintado: elección guardada > preferencia del dispositivo > oscuro */
    (function () {{
      var t = null;
      try {{ t = localStorage.getItem("altok-tema"); }} catch (e) {{}}
      if (t !== "light" && t !== "dark") t = window.matchMedia && window.matchMedia("(prefers-color-scheme: light)").matches ? "light" : "dark";
      document.documentElement.setAttribute("data-theme", t);
      document.documentElement.classList.add("js");
    }})();
  </script>{extra}
</head>
'''


def _cur(page, *names):
    return ' aria-current="page"' if page in names else ""


def header(page):
    nos = page in ("nosotros", "por-que")
    svc_links = "\n".join(
        f'''            <a href="servicios.html#{k}"><span class="ico" aria-hidden="true">{I[ic]}</span><span><strong>{name}</strong><small>{kick}</small></span></a>'''
        for k, ic, name, kick in SERVICES)
    msvc = "\n".join(f'            <a href="servicios.html#{k}">{name}</a>' for k, ic, name, kick in SERVICES)
    return f'''<body data-page="{page}">
  <a class="skip-link" href="#main">Saltar al contenido</a>
  <div class="progress" id="progress" aria-hidden="true"></div>

  <header class="header" id="header">
    <div class="container header__inner">
      <a class="header__logo" href="index.html" aria-label="ALTOKIA — Ir al inicio">
        <img class="on-dark" src="images/altokia-logo-largo-oscuro.svg" alt="ALTOKIA" width="810" height="104">
        <img class="on-light" src="images/altokia-logo-largo-claro.svg" alt="ALTOKIA" width="810" height="104">
      </a>

      <nav class="nav" aria-label="Principal">
        <ul class="nav__list">
          <li class="nav__item"><a class="nav__link" href="index.html"{_cur(page, "inicio")}>Inicio</a></li>
          <li class="nav__item has-sub">
            <a class="nav__link" href="nosotros.html"{' aria-current="page"' if nos else ""}>Nosotros</a>
            <button class="nav__caret" type="button" aria-expanded="false" aria-label="Submenú de Nosotros">{I["down"]}</button>
            <div class="nav__sub">
              <a href="nosotros.html#quienes"><span class="ico" aria-hidden="true">{I["ear"]}</span><span><strong>Quiénes somos</strong><small>Escuchamos primero, automatizamos después</small></span></a>
              <a href="nosotros.html#equipo"><span class="ico" aria-hidden="true">{I["users"]}</span><span><strong>Equipo de trabajo</strong><small>Las personas detrás de cada automatización</small></span></a>
              <a href="por-que-altokia.html"><span class="ico" aria-hidden="true">{I["target"]}</span><span><strong>Por qué ALTOKIA</strong><small>No vendemos horas, entregamos eficiencia</small></span></a>
            </div>
          </li>
          <li class="nav__item has-sub">
            <a class="nav__link" href="servicios.html"{_cur(page, "servicios")}>Servicios</a>
            <button class="nav__caret" type="button" aria-expanded="false" aria-label="Submenú de Servicios">{I["down"]}</button>
            <div class="nav__sub nav__sub--mega">
{svc_links}
              <a class="nav__sub-all" href="servicios.html">Todos los servicios {I["arrow"]}</a>
            </div>
          </li>
          <li class="nav__item"><a class="nav__link" href="proyectos.html"{_cur(page, "proyectos")}>Proyectos</a></li>
          <li class="nav__item"><a class="nav__link" href="contacto.html"{_cur(page, "contacto")}>Contacto</a></li>
        </ul>
      </nav>

      <div class="header__actions">
        <button class="icon-btn lang-btn" type="button" id="langToggle" aria-label="Cambiar idioma" title="Cambiar idioma">EN</button>
        <button class="icon-btn" type="button" id="themeToggle" aria-label="Cambiar tema" title="Cambiar tema">
          <svg class="icon-sun" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" aria-hidden="true"><circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"/></svg>
          <svg class="icon-moon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z"/></svg>
        </button>
        <a class="btn btn--primary btn--sm header__cta" href="agenda.html"{_cur(page, "agenda")}>Agenda una demo</a>
        <button class="icon-btn menu-btn" type="button" id="menuToggle" aria-label="Abrir menú" aria-expanded="false" aria-controls="mobileMenu">
          <span class="bars" aria-hidden="true"><span class="bar"></span><span class="bar"></span><span class="bar"></span></span>
        </button>
      </div>
    </div>
  </header>

  <div class="mobile-menu" id="mobileMenu" aria-label="Menú móvil">
    <ul class="mobile-menu__list">
      <li style="--i:0"><a href="index.html"{_cur(page, "inicio")}>Inicio</a></li>
      <li style="--i:1">
        <details{' class="is-current" open' if nos else ""}>
          <summary>Nosotros</summary>
          <div class="mobile-menu__sub">
            <a href="nosotros.html">Quiénes somos</a>
            <a href="nosotros.html#equipo">Equipo de trabajo</a>
            <a href="por-que-altokia.html">Por qué ALTOKIA</a>
          </div>
        </details>
      </li>
      <li style="--i:2">
        <details{' class="is-current" open' if page == "servicios" else ""}>
          <summary>Servicios</summary>
          <div class="mobile-menu__sub">
            <a href="servicios.html">Todos los servicios</a>
{msvc}
          </div>
        </details>
      </li>
      <li style="--i:3"><a href="proyectos.html"{_cur(page, "proyectos")}>Proyectos</a></li>
      <li style="--i:4"><a href="contacto.html"{_cur(page, "contacto")}>Contacto</a></li>
    </ul>
    <a class="btn btn--cta btn--lg" href="agenda.html">Agenda una demo</a>
    <a class="btn btn--ghost btn--lg" href="{WA}" target="_blank" rel="noopener" data-wa>Escríbenos por WhatsApp</a>
  </div>
'''


# Segmentos del video de marca (segundos) que usa cada página mientras no exista su propio clip en images/video/<página>.mp4
SEGMENTS = {
    "inicio": (0, 0),            # (0, 0) = el video completo
    "servicios": (4.9, 7.1),     # brazos robóticos
    "proyectos": (1.0, 3.1),     # dashboards y lluvia de datos
    "nosotros": (3.3, 4.8),      # red neuronal
    "por-que": (7.3, 8.6),       # túnel de datos
    "contacto": (0.9, 2.6),      # dashboards
    "agenda": (1.8, 3.1),        # dashboards y código
}


def hero(img, h1, lead, ctas, stats=None, crumb=None, chip=None, pos="60% 50%", sub=True, light_img=None, cue=False):
    """Hero a pantalla completa con video de fondo.

    Si existe images/video/<img>.mp4 (el clip propio de la página) se usa primero; si no, se usa el
    video de marca completo, del que JS reproduce solo el segmento indicado. Tras añadir un clip hay
    que volver a ejecutar el generador.
    En modo claro el video se invierte (trazos de neón sobre blanco), salvo que haya light_img.
    """
    start, end = SEGMENTS.get(img, (0, 0))
    seg = f' data-start="{start}" data-end="{end}"' if end else ""
    cls = "on-dark" if light_img else "inv-light"
    own_clip = os.path.exists(os.path.join(os.path.dirname(os.path.abspath(__file__)), "..", "..", "images", "video", f"{img}.mp4"))
    src_own = f'\n          <source src="images/video/{img}.mp4" type="video/mp4">' if own_clip else ""
    media_video = f'''<video class="{cls}" data-hero-video autoplay muted loop playsinline preload="auto" poster="images/hero/{img}.webp"{seg} aria-hidden="true">{src_own}
          <source src="images/video_altokia.mp4" type="video/mp4">
        </video>'''
    media_light = f'\n        <img class="on-light" src="images/{light_img}" alt="" width="1536" height="1024">' if light_img else ""
    crumbs = ""
    if crumb:
        crumbs = f'''          <nav class="crumbs hero-enter" style="--i:0" aria-label="Ruta de navegación"><a href="index.html">Inicio</a><span aria-hidden="true">/</span><span aria-current="page">{crumb}</span></nav>\n'''
    chip_html = f'          <p class="hero-chip hero-enter" style="--i:0">{chip}</p>\n' if chip else ""
    stats_html = ""
    if stats:
        items = "\n".join(f'            <li><strong>{n}</strong><span class="lbl">{l}</span></li>' for n, l in stats)
        stats_html = f'''          <ul class="hero-stats hero-enter" style="--i:5">
{items}
          </ul>\n'''
    cue_html = f'''      <a class="scroll-cue" href="#contenido" aria-hidden="true" tabindex="-1">Desliza para descubrir {I["down"]}</a>\n''' if cue else ""
    return f'''    <section class="page-hero{' page-hero--sub' if sub else ''}" aria-labelledby="hero-title">
      <div class="hero-media" style="--pos:{pos}" aria-hidden="true">
        {media_video}{media_light}
      </div>
      <div class="container">
        <div class="hero-copy">
{crumbs}{chip_html}          <h1 id="hero-title" class="hero-enter" style="--i:1">{h1}</h1>
          <p class="hero-lead hero-enter" style="--i:2">{lead}</p>
          <div class="hero-ctas hero-enter" style="--i:3">
{ctas}
          </div>
{stats_html}        </div>
      </div>
{cue_html}    </section>
'''


def btn_wa(cls="btn--ghost btn--lg", label="Escríbenos por WhatsApp"):
    return f'            <a class="btn {cls}" href="{WA}" target="_blank" rel="noopener" data-wa>{I["wa"]}{label}</a>'


def btn(href, label, cls="btn--cta btn--lg", arrow=True):
    return f'            <a class="btn {cls}" href="{href}">{label}{I["arrow"] if arrow else ""}</a>'


def quote_band():
    return '''    <section class="quote-band" aria-label="Cita">
      <div class="container reveal">
        <p>La mejor automatización es la que nace de escuchar a quien vive el proceso todos los días.</p>
      </div>
    </section>
'''


def cta_band(img="contacto"):
    return f'''    <section class="cta-band" aria-labelledby="cta-title">
      <div class="hero-media" style="--pos:55% 50%" aria-hidden="true">
        <img class="on-dark" src="images/hero/{img}.webp" alt="" width="1203" height="633" loading="lazy">
        <img class="on-light inv" src="images/hero/{img}.webp" alt="" width="1203" height="633" loading="lazy">
      </div>
      <canvas class="net-canvas" aria-hidden="true" style="position:absolute;inset:0;width:100%;height:100%;z-index:-1;pointer-events:none"></canvas>
      <div class="container">
        <div class="cta-band__inner reveal">
          <p class="eyebrow">// Hablemos</p>
          <h2 id="cta-title">¿Listo para automatizar tu <span class="grad-text">próximo gran salto</span>?</h2>
          <p class="lead">Cuéntanos tu caso en una consultoría gratuita de 30 minutos. Te mostramos exactamente dónde puedes ganar eficiencia.</p>
          <div class="hero-ctas">
            <a class="btn btn--cta btn--lg" href="agenda.html">Agendar consultoría{I["arrow"]}</a>
            <a class="btn btn--ghost btn--lg" href="{WA}" target="_blank" rel="noopener" data-wa>{I["wa"]}Escríbenos por WhatsApp</a>
          </div>
          <p class="hero-note">◆ Respuesta en menos de 24 h · ◆ Sin compromiso</p>
        </div>
      </div>
    </section>
'''


def footer():
    svc = "\n".join(f'            <li><a href="servicios.html#{k}">{name}</a></li>' for k, ic, name, kick in SERVICES)
    return f'''  <footer class="footer">
    <img class="footer__mark on-dark" src="images/altokia-logo-corto-oscuro.svg" alt="" width="204" height="204" loading="lazy">
    <img class="footer__mark on-light" src="images/altokia-logo-corto-claro.svg" alt="" width="204" height="204" loading="lazy">
    <div class="container">
      <div class="footer__grid">
        <div class="footer__brand">
          <a href="index.html" aria-label="ALTOKIA — Volver al inicio">
            <img class="on-dark" src="images/altokia-logo-largo-oscuro.svg" alt="ALTOKIA" width="810" height="104" loading="lazy">
            <img class="on-light" src="images/altokia-logo-largo-claro.svg" alt="ALTOKIA" width="810" height="104" loading="lazy">
          </a>
          <p>Tecnología que trabaja mientras tú creces.</p>
          <p class="tagline">Automatización &amp; Lógica · Tecnología · Operaciones · Conocimiento</p>
          <div class="socials">
            <a class="social" href="https://www.linkedin.com/company/altokia" target="_blank" rel="noopener" aria-label="LinkedIn de ALTOKIA">{I["in"]}</a>
            <a class="social" href="{WA}" target="_blank" rel="noopener" aria-label="WhatsApp de ALTOKIA" data-wa>{I["wa"]}</a>
            <a class="social" href="mailto:contacto@altokia.com" aria-label="Correo de ALTOKIA">{I["mail"]}</a>
          </div>
        </div>
        <div>
          <h3>Servicios</h3>
          <ul>
{svc}
          </ul>
        </div>
        <div>
          <h3>Compañía</h3>
          <ul>
            <li><a href="nosotros.html">Nosotros</a></li>
            <li><a href="nosotros.html#equipo">Equipo de trabajo</a></li>
            <li><a href="proyectos.html">Proyectos</a></li>
            <li><a href="por-que-altokia.html">Por qué ALTOKIA</a></li>
            <li><a href="agenda.html">Agenda una demo</a></li>
            <li><a href="contacto.html">Contacto</a></li>
          </ul>
        </div>
        <div>
          <h3>Contacto</h3>
          <ul>
            <li><a href="{WA}" target="_blank" rel="noopener" data-wa>+51 906 106 881</a></li>
            <li><a href="mailto:contacto@altokia.com">contacto@altokia.com</a></li>
            <li>Perú · Panamá · EE.UU.</li>
            <li><a href="#" data-open-bot>Agenda con nuestro bot</a></li>
          </ul>
        </div>
      </div>
      <div class="footer__bottom">
        <p>© 2026 ALTOKIA — Todos los derechos reservados</p>
        <a href="#main">Volver arriba ↑</a>
      </div>
    </div>
  </footer>

  <div class="fab-stack">
    <div class="fab-wrap">
      <span class="fab-label" aria-hidden="true">¡Escríbenos!</span>
      <button class="fab fab--bot" type="button" id="chatToggle" aria-label="Abrir asistente virtual" aria-controls="chatbot" aria-expanded="false">
        <img class="on-dark" src="images/altokia-logo-corto-oscuro.svg" alt="" width="44" height="44">
        <img class="on-light" src="images/altokia-logo-corto-claro.svg" alt="" width="44" height="44">
      </button>
    </div>
    <div class="fab-wrap">
      <span class="fab-label" aria-hidden="true">WhatsApp</span>
      <a class="fab fab--wa" href="{WA}" target="_blank" rel="noopener" aria-label="Escríbenos por WhatsApp" data-wa>{I["wa"]}</a>
    </div>
  </div>

  <div class="chatbot" id="chatbot" role="dialog" aria-label="Asistente virtual ALTObot" aria-hidden="true">
    <div class="chatbot__head">
      <img class="on-dark" src="images/altokia-logo-corto-oscuro.svg" alt="" width="36" height="36">
      <img class="on-light" src="images/altokia-logo-corto-claro.svg" alt="" width="36" height="36">
      <div><strong>ALTObot</strong><span><span class="pulse-dot" aria-hidden="true"></span>En línea — responde al instante</span></div>
      <button class="icon-btn" type="button" id="chatClose" aria-label="Cerrar chat">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" aria-hidden="true"><path d="M6 6l12 12M18 6 6 18"/></svg>
      </button>
    </div>
    <div class="chatbot__body" id="chatMessages" aria-live="polite"></div>
    <div class="chatbot__opts" id="chatOptions"></div>
    <form class="chatbot__form" id="chatForm" autocomplete="off">
      <label class="sr-only" for="chatInput">Escribe tu mensaje</label>
      <input id="chatInput" type="text" placeholder="Escribe tu mensaje..." maxlength="300">
      <button class="btn btn--cta" type="submit" aria-label="Enviar">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M22 2 11 13M22 2l-7 20-4-9-9-4z"/></svg>
      </button>
    </form>
  </div>

  <script src="js/altokia.js" defer></script>
</body>
</html>
'''


def page(head_html, page_id, main_html):
    return head_html + header(page_id) + '\n  <main id="main">\n' + main_html + '  </main>\n\n' + footer()
