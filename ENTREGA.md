# ALTOKIA · Entrega del sitio web

Sitio de **varias páginas**: cada pestaña del menú lleva a su propia página, con todo el contenido del sitio original. Toma de la referencia el estilo (heros a pantalla completa que se funden con el fondo, tipografía, botones y animaciones). Usa **solo la marca, los logos, el video y el contenido de ALTOKIA**.

## Páginas

| Página | Contenido |
|---|---|
| `index.html` · Inicio | Hero con el **video de marca** de fondo, titular con palabras que rotan, cifras, tecnologías, 5 servicios, impacto medido + Nosotros, caso destacado (código que se escribe solo), proceso en 4 fases, 3 proyectos, cita y llamada a la acción |
| `servicios.html` · Servicios | Menú fijo por servicio y un bloque de detalle para cada uno de los 5, con imagen y caso real. Incluye proceso, tecnologías, preguntas frecuentes y llamada a la acción |
| `proyectos.html` · Proyectos | Los 7 casos con filtro por sector (también por URL: `proyectos.html?sector=banca`), rubros, caso destacado y llamada a la acción |
| `nosotros.html` · Nosotros | Quiénes somos (`como_trabajamos.md`), valores, **Equipo de trabajo**, presencia internacional, rubros, cita y llamada a la acción |
| `por-que-altokia.html` · Por qué ALTOKIA | Diferenciales, resultados en producción con barras, cifras, caso destacado y llamada a la acción |
| `contacto.html` · Contacto | Canales (WhatsApp, correo, LinkedIn), formulario, ALTObot y preguntas frecuentes |
| `agenda.html` · Agenda una demo | Los 3 pasos, ALTObot y formulario de reserva. El servicio llega preseleccionado desde "Consultar este servicio": `agenda.html?servicio=analitica` |
| `404.html` | Página de error con la marca |

**Menú:** Inicio · Nosotros ▾ (Quiénes somos, Equipo de trabajo, Por qué ALTOKIA) · Servicios ▾ (los 5 servicios) · Proyectos · Contacto, más el botón **Agenda una demo**.
- **Escritorio:** los submenús se abren al pasar el mouse o con la flecha.
- **Móvil:** se despliegan dentro del menú.
- **Página actual:** queda marcada en el menú.

## Identidad visual: azul y azul marino

| Rol | 🌙 Oscuro | ☀️ Claro |
|---|---|---|
| Fondo | `#061226` (azul marino) | `#F5F8FD` |
| Superficies | `#0A1A33` / `#0F2442` | `#FFFFFF` / `#EAF1FB` |
| Marca: cian (logo) | `#2EC5F5` | `#0891C9` |
| Marca: azul (logo) | `#2E6BFF` | `#1D4FD6` |
| Etiquetas y cargos | `#8AB4FF` (azul claro) | `#1D4FD6` |
| Resultados y métricas | `#34F5C5` (menta) | `#047857` |
| Botón principal | degradado `#1E40AF → #1D4FD6 → #2563EB` con texto blanco | igual |
| Violeta | solo un toque: un brillo en la cita, la esquina del bloque "Por qué ALTOKIA" y el final de los textos en degradado | igual |

**Heros a pantalla completa:**
- La imagen (o el video en Inicio) ocupa todo el ancho y se funde con el color de fondo: se desvanece hacia la izquierda y hacia abajo, con un velo del color de la página detrás del texto.
- En móvil la imagen queda detrás del texto, con un velo más fuerte para que se lea.
- **Imágenes:** son fotogramas de tu video de marca (`images/hero/*.webp`), con un tinte azul que lleva el rosa del neón hacia el azul.
- **Modo claro:** los fotogramas se invierten y quedan como trazos de neón sobre blanco. Inicio usa el robot (`hero-bg2.webp`).

**Animaciones:**
- video de fondo en Inicio, con zoom lento en las demás imágenes;
- palabra del titular con efecto "decodificación";
- transición circular al cambiar de tema;
- apariciones al hacer scroll;
- contadores;
- barras de impacto;
- código que se escribe solo;
- foco de luz y borde de neón en las tarjetas;
- red de nodos en la llamada a la acción;
- rejilla en perspectiva;
- barra de progreso de lectura.

Todas se desactivan con `prefers-reduced-motion`. El video tampoco se reproduce con ahorro de datos y se pausa cuando no está en pantalla.

## Archivos

| Archivo | Qué es |
|---|---|
| `*.html` | Las páginas |
| `css/altokia.css` | Todos los estilos (colores y medidas en variables al inicio) |
| `js/altokia.js` | Idioma ES/EN (objeto `DIC`), tema, menú, animaciones, filtro, formularios y ALTObot |
| `cache-bust.mjs` | Añade `?v=hash` a la CSS y el JS en todas las páginas. **Ejecútalo (`node cache-bust.mjs`) antes de cada commit que cambie `css/` o `js/`** |
| `images/hero/*.webp` | Fotogramas del video de marca para los heros |
| `images/video_altokia.mp4` | Video de marca (hero de Inicio) |
| `images/hero-bg2.webp` | Robot del hero de Inicio en modo claro |
| `images/altokia-logo-*.svg`, `favicon.svg`, `apple-touch-icon.png`, `og-altokia.png` | Logos, íconos e imagen para redes |
| `images/equipo/foto-pendiente.svg` | Foto provisional del equipo |
| `_headers` · `_redirects` | Caché y seguridad; `/equipo` redirige a `/nosotros#equipo` |

**Para editar un texto:**
1. Cámbialo en el HTML de su página.
2. Para que la versión en inglés siga funcionando, cambia también su clave en el objeto `DIC` de `js/altokia.js`. La clave es el texto en español y el valor, la traducción.

## Control de calidad (escritorio 1440 px, tablet 820 px y móvil 390 px, ambos modos)

- **Errores:** ninguno en la consola, ningún recurso roto y ningún scroll horizontal en las 7 páginas.
- **Enlaces internos:** todos los archivos y anclas existen.
- **Contraste WCAG AA:** se cumple en las 7 páginas, en modo claro y oscuro.
- **Inglés:** todas las páginas están traducidas, incluidos títulos y descripciones.
- **Funcionamiento probado:**
  - los submenús y su navegación a cada sección;
  - "Consultar este servicio" con el servicio ya elegido en la agenda;
  - el filtro de proyectos por URL;
  - la validación de los formularios;
  - el cambio de tema;
  - ALTObot;
  - el menú móvil con submenús.
- **Video:** en el navegador de pruebas no se puede reproducir porque no trae el códec H.264, así que ahí se ve el póster. En Chrome, Safari, Edge y Firefox reales se reproduce.

## Origen del contenido

Todo el texto sale del sitio original (commit `e660d9b`): servicios, proyectos, proceso, valores, rubros, preguntas frecuentes, respuestas de ALTObot, cifras y datos de contacto. Las traducciones al inglés del sitio original se reutilizan.

- **Textos nuevos sin datos nuevos:** algunas frases de navegación y llamada a la acción, como "Consultar este servicio", "¿Tu proceso es el siguiente?" o "Casos reales, resultados medibles".
- **Etiquetas de cifras nuevas:** salen de datos que ya estaban en el sitio:
  - "5 líneas de servicio";
  - "4 fases";
  - "3 países con proyectos entregados";
  - "6 rubros".
- **Contenido de ejemplo:** solo el equipo de trabajo y los testimonios, que siguen ocultos.

## [PENDIENTE]

0. **Equipo de trabajo (`nosotros.html#equipo`): ES DE EJEMPLO.** Los 6 nombres son inventados, igual que sus cargos, textos y fotos; los LinkedIn apuntan a la página de la empresa. **No publiques así.** Para cada persona:
   1. sube su foto cuadrada (600×600, `.webp` o `.jpg`) a `images/equipo/`;
   2. en `nosotros.html` cambia el `src`, el `alt`, el nombre, el cargo, el texto, las etiquetas y su LinkedIn;
   3. si cambias un cargo o un texto, actualiza su traducción en `DIC`.

   El comentario `[PENDIENTE]` sobre la sección repite estos pasos.
1. **Confirmar las cifras:** 120+ proyectos, 87 %, 15 000 horas, 98 % y los resultados de cada caso.
2. **Testimonios:** no existen todavía; la sección no se muestra.
3. **Dominio:** añadir `canonical` y URLs absolutas en `og:image` y `og:url`. Hay un comentario `[PENDIENTE]` en el `<head>` de cada página.
4. **Formulario:** abre WhatsApp o el correo con el mensaje ya escrito. Para recibir los mensajes sin que el visitante tenga que enviarlos, hay que conectar un servicio de formularios.
5. **Libro de Reclamaciones y otras redes sociales:** confirmar si aplican.

## Cómo publicarlo (Cloudflare Pages)

1. Une esta rama (`claude/funny-feynman-99ufmh`) con la rama principal.
2. Si Cloudflare Pages está conectado al repositorio, publica solo. Configuración: preset **None**, sin build command y output directory `/`.
3. Comprueba en el sitio publicado:
   - que cada pestaña abra su propia página;
   - el botón ☀️/🌙 y el botón ES/EN;
   - que `/equipo` lleve a la sección del equipo.
