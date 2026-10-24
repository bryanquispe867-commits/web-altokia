# -*- coding: utf-8 -*-
"""Ilustraciones animadas de cada servicio (SVG + CSS + SMIL).

Son gráficos vectoriales que se animan en el navegador: pesan poco, se ven
nítidos en cualquier pantalla y toman los colores del tema (claro u oscuro).
Las cifras que muestran son las reales del sitio; no hay datos inventados.
Las animaciones se pausan fuera de pantalla y se detienen si el visitante
pide menos movimiento (lo gestiona js/altokia.js).

Regla de dibujo: todo el contenido vive entre y=16 e y=222 del viewBox
(400×300) porque la insignia del caso cubre la franja inferior.
Los grupos animados con CSS no llevan atributo transform (CSS lo pisaría):
se envuelven en un <g transform> exterior.
"""

# --- 01 · Automatización: flujo bandeja → bot RPA → ERP / alerta -------------
RPA = '''            <svg class="anim anim--rpa" viewBox="0 0 400 300" role="img" aria-label="Flujo automatizado: los documentos de la bandeja pasan por el bot RPA y se registran en el ERP; las inconsistencias generan una alerta">
              <defs>
                <linearGradient id="g-rpa" x1="0" x2="1"><stop offset="0" stop-color="var(--link)"/><stop offset="1" stop-color="var(--accent-2)"/></linearGradient>
              </defs>
              <g class="a-grid"><line x1="0" y1="60" x2="400" y2="60"/><line x1="0" y1="150" x2="400" y2="150"/><line x1="0" y1="240" x2="400" y2="240"/><line x1="100" y1="0" x2="100" y2="300"/><line x1="200" y1="0" x2="200" y2="300"/><line x1="300" y1="0" x2="300" y2="300"/></g>
              <g class="a-caption" transform="translate(28 38)"><text class="a-mono">3 días de trabajo manual</text><text class="a-mono a-mono--accent" x="150">→ 20 minutos</text></g>
              <path class="a-flow" d="M112 118 H168"/>
              <path class="a-flow" d="M232 110 C270 110 270 62 304 62"/>
              <path class="a-flow a-flow--alt" d="M232 126 C270 126 270 176 304 176"/>
              <g transform="translate(28 78)">
                <rect class="a-panel" width="84" height="80" rx="12"/>
                <g class="a-doc a-doc--3"><rect x="28" y="20" width="36" height="46" rx="4"/><line x1="36" y1="32" x2="56" y2="32"/><line x1="36" y1="40" x2="56" y2="40"/><line x1="36" y1="48" x2="50" y2="48"/></g>
                <g class="a-doc a-doc--2"><rect x="24" y="16" width="36" height="46" rx="4"/><line x1="32" y1="28" x2="52" y2="28"/><line x1="32" y1="36" x2="52" y2="36"/><line x1="32" y1="44" x2="46" y2="44"/></g>
                <g class="a-doc a-doc--1"><rect x="20" y="12" width="36" height="46" rx="4"/><line x1="28" y1="24" x2="48" y2="24"/><line x1="28" y1="32" x2="48" y2="32"/><line x1="28" y1="40" x2="42" y2="40"/></g>
                <text class="a-lbl" x="42" y="98" text-anchor="middle">bandeja</text>
              </g>
              <g transform="translate(168 86)">
                <circle class="a-ring" cx="32" cy="32" r="30"/>
                <rect class="a-bot" x="14" y="14" width="36" height="36" rx="10"/>
                <circle class="a-eye" cx="26" cy="31" r="3"/><circle class="a-eye" cx="38" cy="31" r="3"/>
                <rect class="a-mouth" x="25" y="40" width="14" height="2.5" rx="1.25"/>
                <line class="a-antenna" x1="32" y1="14" x2="32" y2="6"/><circle class="a-dot-live" cx="32" cy="5" r="2.5"/>
                <text class="a-lbl" x="32" y="90" text-anchor="middle">bot RPA</text>
              </g>
              <g transform="translate(304 30)">
                <rect class="a-panel" width="72" height="64" rx="12"/>
                <rect class="a-server" x="14" y="12" width="44" height="10" rx="3"/><rect class="a-server" x="14" y="27" width="44" height="10" rx="3"/><rect class="a-server" x="14" y="42" width="44" height="10" rx="3"/>
                <circle class="a-led" cx="52" cy="17" r="1.8"/><circle class="a-led" cx="52" cy="32" r="1.8"/><circle class="a-led" cx="52" cy="47" r="1.8"/>
                <text class="a-lbl" x="36" y="82" text-anchor="middle">ERP</text>
                <g transform="translate(66 -2)"><g class="a-badge a-badge--ok"><circle r="11"/><path d="M-4.5 0.5 L-1.5 3.5 L4.5 -3" fill="none"/></g></g>
              </g>
              <g transform="translate(304 148)">
                <rect class="a-panel" width="72" height="56" rx="12"/>
                <path class="a-warn" d="M36 12 L54 44 H18 Z"/><line class="a-warn-i" x1="36" y1="24" x2="36" y2="33"/><circle class="a-warn-i" cx="36" cy="38" r="1.3"/>
                <text class="a-lbl" x="36" y="72" text-anchor="middle">alerta</text>
              </g>
              <circle class="a-pkt" r="4.5"><animateMotion dur="4s" repeatCount="indefinite" path="M112 118 H168" keyPoints="0;1;1" keyTimes="0;0.32;1" calcMode="linear"/><animate attributeName="opacity" values="0;1;1;0;0" keyTimes="0;0.04;0.28;0.34;1" dur="4s" repeatCount="indefinite"/></circle>
              <circle class="a-pkt" r="4.5"><animateMotion dur="4s" repeatCount="indefinite" path="M232 110 C270 110 270 62 304 62" keyPoints="0;0;1;1" keyTimes="0;0.4;0.7;1" calcMode="linear"/><animate attributeName="opacity" values="0;0;1;1;0;0" keyTimes="0;0.4;0.44;0.66;0.72;1" dur="4s" repeatCount="indefinite"/></circle>
              <circle class="a-pkt a-pkt--alt" r="3.5"><animateMotion dur="12s" repeatCount="indefinite" path="M232 126 C270 126 270 176 304 176" keyPoints="0;0;1;1" keyTimes="0;0.8;0.9;1" calcMode="linear"/><animate attributeName="opacity" values="0;0;1;1;0;0" keyTimes="0;0.8;0.82;0.88;0.9;1" dur="12s" repeatCount="indefinite"/></circle>
            </svg>'''

# --- 02 · Software a medida: editor que escribe código y app que se arma ------
CODE = '''            <svg class="anim anim--code anim--screen" viewBox="0 0 400 300" role="img" aria-label="Un editor escribe código mientras la interfaz de una aplicación se va armando bloque a bloque">
              <g class="a-grid"><line x1="0" y1="75" x2="400" y2="75"/><line x1="0" y1="150" x2="400" y2="150"/><line x1="0" y1="225" x2="400" y2="225"/><line x1="133" y1="0" x2="133" y2="300"/><line x1="266" y1="0" x2="266" y2="300"/></g>
              <g transform="translate(22 24)">
                <rect class="a-win" width="218" height="194" rx="14"/>
                <rect class="a-winbar" width="218" height="28" rx="14"/><rect class="a-winbar-fix" y="14" width="218" height="14"/>
                <circle class="a-wdot a-wdot--r" cx="16" cy="14" r="3.5"/><circle class="a-wdot a-wdot--y" cx="28" cy="14" r="3.5"/><circle class="a-wdot a-wdot--g" cx="40" cy="14" r="3.5"/>
                <text class="a-mono a-mono--dim" x="56" y="18">portal_proveedores.ts</text>
                <g class="a-cl" style="--i:0"><rect class="a-tok a-tok--k" x="16" y="44" width="30" height="7" rx="3.5"/><rect class="a-tok a-tok--i" x="52" y="44" width="78" height="7" rx="3.5"/><rect class="a-tok a-tok--f" x="136" y="44" width="44" height="7" rx="3.5"/></g>
                <g class="a-cl" style="--i:1"><rect class="a-tok a-tok--i" x="30" y="60" width="54" height="7" rx="3.5"/><rect class="a-tok a-tok--s" x="90" y="60" width="90" height="7" rx="3.5"/></g>
                <g class="a-cl" style="--i:2"><rect class="a-tok a-tok--k" x="30" y="76" width="22" height="7" rx="3.5"/><rect class="a-tok a-tok--f" x="58" y="76" width="68" height="7" rx="3.5"/><rect class="a-tok a-tok--i" x="132" y="76" width="36" height="7" rx="3.5"/></g>
                <g class="a-cl" style="--i:3"><rect class="a-tok a-tok--i" x="44" y="92" width="40" height="7" rx="3.5"/><rect class="a-tok a-tok--f" x="90" y="92" width="98" height="7" rx="3.5"/></g>
                <g class="a-cl" style="--i:4"><rect class="a-tok a-tok--k" x="44" y="108" width="26" height="7" rx="3.5"/><rect class="a-tok a-tok--s" x="76" y="108" width="60" height="7" rx="3.5"/></g>
                <g class="a-cl" style="--i:5"><rect class="a-tok a-tok--i" x="30" y="124" width="30" height="7" rx="3.5"/><rect class="a-tok a-tok--f" x="66" y="124" width="84" height="7" rx="3.5"/></g>
                <g class="a-cl" style="--i:6"><rect class="a-tok a-tok--k" x="16" y="140" width="38" height="7" rx="3.5"/><rect class="a-tok a-tok--i" x="60" y="140" width="70" height="7" rx="3.5"/></g>
                <rect class="a-caret" x="16" y="155" width="7" height="9"/>
                <g class="a-term" transform="translate(16 177)"><text class="a-mono a-mono--dim" y="0">$ npm run build</text><text class="a-mono a-mono--ok a-term__ok" y="13">✓ compilado · listo para desplegar</text></g>
              </g>
              <g transform="translate(262 30)">
                <rect class="a-phone" width="114" height="188" rx="20"/>
                <rect class="a-phone-notch" x="42" y="8" width="30" height="4" rx="2"/>
                <rect class="a-ui a-ui--1" x="12" y="22" width="90" height="12" rx="6"/>
                <rect class="a-ui a-ui--2" x="12" y="42" width="90" height="48" rx="10"/>
                <rect class="a-ui a-ui--2b" x="22" y="52" width="40" height="6" rx="3"/><rect class="a-ui a-ui--2b" x="22" y="64" width="64" height="6" rx="3"/><rect class="a-ui a-ui--2b" x="22" y="76" width="52" height="6" rx="3"/>
                <rect class="a-ui a-ui--3" x="12" y="98" width="42" height="40" rx="10"/>
                <rect class="a-ui a-ui--4" x="60" y="98" width="42" height="40" rx="10"/>
                <rect class="a-ui a-ui--5" x="12" y="150" width="90" height="24" rx="12"/>
                <circle class="a-tap" cx="57" cy="162" r="6"/>
              </g>
            </svg>'''

# --- 03 · Analítica de datos: dashboard con KPIs reales, barras, línea y anillo
DATA = '''            <svg class="anim anim--data anim--screen" viewBox="0 0 400 300" role="img" aria-label="Dashboard con indicadores reales de ALTOKIA: 12,000 documentos por mes, 6 veces más consultas atendidas y 98 % de satisfacción, con gráficos de barras, línea y anillo">
              <rect class="a-win" x="20" y="16" width="360" height="212" rx="16"/>
              <rect class="a-winbar" x="20" y="16" width="360" height="30" rx="16"/><rect class="a-winbar-fix" x="20" y="32" width="360" height="14"/>
              <circle class="a-wdot a-wdot--r" cx="38" cy="31" r="3.5"/><circle class="a-wdot a-wdot--y" cx="50" cy="31" r="3.5"/><circle class="a-wdot a-wdot--g" cx="62" cy="31" r="3.5"/>
              <text class="a-mono a-mono--dim" x="78" y="35">dashboard · operaciones</text>
              <circle class="a-dot-live" cx="364" cy="31" r="3"/><text class="a-mono a-mono--dim" x="356" y="35" text-anchor="end">en vivo</text>
              <g transform="translate(36 58)">
                <g><g class="a-kpi" style="--i:0"><rect class="a-tile" width="104" height="54" rx="10"/><text class="a-num" x="12" y="30"><tspan data-count="12000" data-sep>12,000</tspan></text><text class="a-lbl" x="12" y="45">docs / mes</text></g></g>
                <g transform="translate(112 0)"><g class="a-kpi" style="--i:1"><rect class="a-tile" width="104" height="54" rx="10"/><text class="a-num" x="12" y="30"><tspan data-count="6">6</tspan>x</text><text class="a-lbl" x="12" y="45">consultas</text></g></g>
                <g transform="translate(224 0)"><g class="a-kpi" style="--i:2"><rect class="a-tile" width="104" height="54" rx="10"/><text class="a-num a-num--mint" x="12" y="30"><tspan data-count="98">98</tspan>%</text><text class="a-lbl" x="12" y="45">satisfacción</text></g></g>
              </g>
              <g transform="translate(36 122)">
                <rect class="a-tile" width="206" height="96" rx="10"/>
                <text class="a-lbl" x="12" y="17">documentos procesados</text>
                <g class="a-bars" transform="translate(14 84)">
                  <rect class="a-bar" style="--i:0" x="0" y="-19" width="12" height="19" rx="3"/><rect class="a-bar" style="--i:1" x="22" y="-27" width="12" height="27" rx="3"/><rect class="a-bar" style="--i:2" x="44" y="-23" width="12" height="23" rx="3"/><rect class="a-bar" style="--i:3" x="66" y="-36" width="12" height="36" rx="3"/><rect class="a-bar" style="--i:4" x="88" y="-42" width="12" height="42" rx="3"/><rect class="a-bar" style="--i:5" x="110" y="-39" width="12" height="39" rx="3"/><rect class="a-bar" style="--i:6" x="132" y="-50" width="12" height="50" rx="3"/><rect class="a-bar" style="--i:7" x="154" y="-56" width="12" height="56" rx="3"/><rect class="a-bar a-bar--hi" style="--i:8" x="176" y="-59" width="12" height="59" rx="3"/>
                </g>
                <polyline class="a-spark" points="14,74 36,68 58,71 80,58 102,53 124,55 146,42 168,37 184,31 194,27"/>
                <circle class="a-spark-dot" cx="194" cy="27" r="3.5"/>
              </g>
              <g transform="translate(252 122)">
                <rect class="a-tile" width="112" height="96" rx="10"/>
                <text class="a-lbl" x="12" y="17">cierre contable</text>
                <g transform="translate(56 58)">
                  <circle class="a-donut-track" r="26"/>
                  <circle class="a-donut" r="26" transform="rotate(-90)"/>
                  <text class="a-num a-num--sm a-num--mint" y="0" text-anchor="middle">−5 d</text><text class="a-lbl" y="13" text-anchor="middle">más rápido</text>
                </g>
              </g>
            </svg>'''

# --- 04 · Optimización de procesos: medidor, antes/después y engranajes -------
PROC = '''            <svg class="anim anim--proc" viewBox="0 0 400 300" role="img" aria-label="Medidor que baja las tareas manuales un 87 % y comparación de un proceso antes y después de optimizarlo">
              <g class="a-grid"><line x1="0" y1="75" x2="400" y2="75"/><line x1="0" y1="150" x2="400" y2="150"/><line x1="0" y1="225" x2="400" y2="225"/><line x1="133" y1="0" x2="133" y2="300"/><line x1="266" y1="0" x2="266" y2="300"/></g>
              <g transform="translate(200 150)">
                <path class="a-gauge-track" d="M-108 0 A108 108 0 0 1 108 0"/>
                <path class="a-gauge-zone a-gauge-zone--old" d="M-108 0 A108 108 0 0 1 -54 -93.5"/>
                <path class="a-gauge-zone a-gauge-zone--mid" d="M-54 -93.5 A108 108 0 0 1 54 -93.5"/>
                <path class="a-gauge-zone a-gauge-zone--new" d="M54 -93.5 A108 108 0 0 1 108 0"/>
                <g class="a-needle"><line x1="0" y1="8" x2="0" y2="-86"/><circle class="a-needle-hub" r="8"/><circle class="a-needle-pin" r="3"/></g>
                <text class="a-num a-num--big a-num--mint" y="-28" text-anchor="middle">−<tspan data-count="87">87</tspan>%</text>
                <text class="a-lbl" y="-12" text-anchor="middle">tareas manuales</text>
              </g>
              <g transform="translate(40 178)">
                <text class="a-lbl" y="4">antes</text>
                <g class="a-steps a-steps--old" transform="translate(58 -6)">
                  <rect class="a-step" style="--i:0" x="0" width="26" height="14" rx="4"/><rect class="a-step" style="--i:1" x="32" width="26" height="14" rx="4"/><rect class="a-step" style="--i:2" x="64" width="26" height="14" rx="4"/><rect class="a-step" style="--i:3" x="96" width="26" height="14" rx="4"/><rect class="a-step" style="--i:4" x="128" width="26" height="14" rx="4"/><rect class="a-step" style="--i:5" x="160" width="26" height="14" rx="4"/><rect class="a-step" style="--i:6" x="192" width="26" height="14" rx="4"/>
                </g>
                <text class="a-mono a-mono--dim" x="290" y="4">manual</text>
              </g>
              <g transform="translate(40 208)">
                <text class="a-lbl" y="4">después</text>
                <g class="a-steps a-steps--new" transform="translate(58 -6)">
                  <rect class="a-step a-step--new" style="--i:0" x="0" width="68" height="14" rx="4"/><rect class="a-step a-step--new" style="--i:1" x="75" width="68" height="14" rx="4"/><rect class="a-step a-step--new" style="--i:2" x="150" width="68" height="14" rx="4"/>
                </g>
                <text class="a-mono a-mono--accent" x="290" y="4">−5 días</text>
              </g>
              <g transform="translate(352 46)"><g class="a-cog"><circle class="a-cog-teeth" r="14"/><circle class="a-cog-body" r="9"/><circle class="a-cog-hole" r="3"/></g></g>
              <g transform="translate(326 70)"><g class="a-cog a-cog--rev"><circle class="a-cog-teeth" r="9"/><circle class="a-cog-body" r="5.5"/><circle class="a-cog-hole" r="2"/></g></g>
            </svg>'''

# --- 05 · Marketing digital: embudo con tráfico, objetivo y campaña -----------
MKT = '''            <svg class="anim anim--mkt" viewBox="0 0 400 300" role="img" aria-label="Embudo de marketing por el que baja el tráfico desde alcance e interés hasta clientes, junto a un objetivo y una campaña en curso">
              <g class="a-grid"><line x1="0" y1="75" x2="400" y2="75"/><line x1="0" y1="150" x2="400" y2="150"/><line x1="0" y1="225" x2="400" y2="225"/><line x1="133" y1="0" x2="133" y2="300"/><line x1="266" y1="0" x2="266" y2="300"/></g>
              <g transform="translate(40 28)">
                <polygon class="a-fun a-fun--1" points="0,0 168,0 142,54 26,54"/>
                <polygon class="a-fun a-fun--2" points="30,62 138,62 118,112 50,112"/>
                <polygon class="a-fun a-fun--3" points="54,120 114,120 100,166 68,166"/>
                <text class="a-lbl a-lbl--light" x="84" y="31" text-anchor="middle">alcance</text>
                <text class="a-lbl a-lbl--light" x="84" y="91" text-anchor="middle">interés</text>
                <text class="a-lbl a-lbl--light" x="84" y="147" text-anchor="middle">clientes</text>
                <circle class="a-drop" r="3"><animateMotion dur="2.8s" begin="0s" repeatCount="indefinite" path="M22 -12 L80 178"/><animate attributeName="opacity" values="0;1;1;0" keyTimes="0;0.08;0.85;1" dur="2.8s" begin="0s" repeatCount="indefinite"/></circle>
                <circle class="a-drop" r="3"><animateMotion dur="2.8s" begin="0.7s" repeatCount="indefinite" path="M84 -12 L84 178"/><animate attributeName="opacity" values="0;1;1;0" keyTimes="0;0.08;0.85;1" dur="2.8s" begin="0.7s" repeatCount="indefinite"/></circle>
                <circle class="a-drop" r="3"><animateMotion dur="2.8s" begin="1.4s" repeatCount="indefinite" path="M146 -12 L88 178"/><animate attributeName="opacity" values="0;1;1;0" keyTimes="0;0.08;0.85;1" dur="2.8s" begin="1.4s" repeatCount="indefinite"/></circle>
                <circle class="a-drop" r="3"><animateMotion dur="2.8s" begin="2.1s" repeatCount="indefinite" path="M52 -12 L82 178"/><animate attributeName="opacity" values="0;1;1;0" keyTimes="0;0.08;0.85;1" dur="2.8s" begin="2.1s" repeatCount="indefinite"/></circle>
                <g transform="translate(36 174)"><g class="a-pill a-pill--pulse"><rect width="96" height="22" rx="11"/><text class="a-mono a-mono--accent" x="48" y="15" text-anchor="middle">leads calificados</text></g></g>
              </g>
              <g transform="translate(300 90)">
                <circle class="a-target a-target--1" r="54"/><circle class="a-target a-target--2" r="36"/><circle class="a-target a-target--3" r="18"/><circle class="a-target-core" r="6"/>
                <circle class="a-target-pulse" r="54"/>
              </g>
              <g transform="translate(212 158)">
                <rect class="a-tile" width="164" height="62" rx="12"/>
                <text class="a-lbl" x="12" y="18">campaña activa</text>
                <rect class="a-track" x="12" y="28" width="140" height="8" rx="4"/><rect class="a-fill" x="12" y="28" width="140" height="8" rx="4"/>
                <text class="a-mono a-mono--dim" x="12" y="53">SEO · Google Ads · Meta Ads</text>
              </g>
            </svg>'''

VISUALS = {
    "automatizacion": RPA,
    "software": CODE,
    "analitica": DATA,
    "optimizacion": PROC,
    "marketing": MKT,
}
