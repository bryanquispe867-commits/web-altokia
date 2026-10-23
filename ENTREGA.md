# ALTOKIA · Entrega del sitio web

Sitio de **una sola página** con el estilo visual de la referencia (estructura, tipografía, botones y animaciones) y **solo la marca, los logos y el contenido de ALTOKIA**.

## Identidad visual: paleta "Deep Space"

Para no parecer una copia de la referencia, la paleta es propia y más tecnológica:

| Rol | Oscuro | Claro |
|---|---|---|
| Fondo | `#050816` (casi negro índigo) | `#F6F8FF` |
| Superficies | `#0A0F24` / `#10162E` | `#FFFFFF` / `#EEF1FB` |
| Marca: cian (logo) | `#2EC5F5` | `#0891C9` |
| Marca: azul (logo) | `#2E6BFF` | `#1D4FD6` |
| Acento: violeta eléctrico | `#8B5CF6` / `#A78BFA` | `#7C3AED` / `#6D28D9` |
| Acento: menta (datos y resultados) | `#34F5C5` | `#047857` |
| Botón principal | degradado `#1D4FD6 → #5B3DF5 → #7C3AED` con texto blanco | igual |

**Animaciones:**
- red de nodos interactiva y auroras de color en el hero;
- palabra del titular que rota con efecto "decodificación";
- marco HUD con línea de escaneo sobre la imagen;
- código que se escribe solo en el caso destacado;
- tarjetas con foco de luz que sigue al cursor y borde de neón giratorio;
- rejilla en perspectiva en "Por qué ALTOKIA";
- barras de cifras animadas;
- barra de progreso de lectura;
- cursores de terminal en las etiquetas de sección.

Todas se desactivan con `prefers-reduced-motion`, y la red de nodos se pausa cuando no está en pantalla.

## Archivos

| Archivo | Qué es |
|---|---|
| `index.html` | El sitio completo, con el CSS y el JS dentro (tema claro/oscuro, ES/EN, ALTObot y formulario) |
| `404.html` | Página de error con la nueva marca |
| `images/altokia-logo-largo-oscuro.svg` · `…-claro.svg` | Logo largo: el `-oscuro` va sobre fondo oscuro y el `-claro` sobre fondo claro (se cambian solos con el tema) |
| `images/altokia-logo-corto-oscuro.svg` · `…-claro.svg` | Logo corto "TOK": botón de ALTObot y canal de agenda |
| `images/favicon.svg` · `apple-touch-icon.png` | Íconos de pestaña y de iPhone, hechos con el logo corto |
| `images/og-altokia.png` | Imagen de 1200×630 que se ve al compartir el enlace en WhatsApp, LinkedIn, etc. |
| `images/hero-bg.webp` · `hero-bg2.webp` | Imagen del hero en modo oscuro y en modo claro |
| `images/equipo/foto-pendiente.svg` | Foto provisional del equipo de trabajo |
| `_redirects` | Lleva las URLs antiguas (`/servicios`, `/contacto`…) a su sección |
| `_headers` | Cabeceras de seguridad y caché |

Se retiraron Bootstrap, los CSS y JS sueltos, las 6 páginas antiguas, los logos "OK" anteriores y la licencia de la plantilla HTML Codex: el sitio nuevo no usa nada de esa plantilla. Todo sigue disponible en el historial de git.

## Control de calidad

- **Contraste WCAG AA:** se revisaron todos los textos visibles en los dos temas y ninguno queda por debajo de 4.5:1 (3:1 en texto grande).
- **Contenido de la referencia:** no queda ningún texto, logo, imagen ni nombre de la referencia. Solo se reutilizan sus fuentes libres (Inter y Barlow Condensed, de Google Fonts).
- **Enlaces y botones:** se probaron en el navegador:
  - todas las anclas internas existen;
  - WhatsApp, correo y LinkedIn funcionan;
  - menú móvil, tema, idioma, filtro de proyectos, validación del formulario y flujo de agenda de ALTObot funcionan;
  - no hay errores en la consola;
  - no hay scroll horizontal en 390, 820, 1024, 1100 ni 1440 px.
- **SEO:** `title`, `meta description`, Open Graph y Twitter Card, favicon SVG, `apple-touch-icon`, datos estructurados `Organization` y `lang` dinámico.
- **Accesibilidad:**
  - enlace "Saltar al contenido";
  - foco visible;
  - `aria-expanded` en el menú y en el bot;
  - el menú y el bot se cierran con Esc;
  - las animaciones se desactivan con `prefers-reduced-motion`.

## [PENDIENTE]

0. **Equipo de trabajo (sección `#equipo`): ES DE EJEMPLO.** Los 6 nombres son inventados: Andrea Salazar, Diego Ramírez, Valeria Torres, Martín Huamán, Lucía Fernández y Carlos Mendoza. También son de ejemplo sus cargos, descripciones y fotos, y los enlaces de LinkedIn apuntan a la página de la empresa. **No publiques así.** Para cada persona:
   1. sube su foto cuadrada (600×600, `.webp` o `.jpg`) a `images/equipo/`;
   2. cambia en `index.html` el `src` de la foto, el `alt`, el nombre, el cargo, la descripción, las etiquetas y su LinkedIn;
   3. si cambias un cargo o una descripción, cambia también su traducción en el bloque `EQUIPO` del objeto `DIC`. El `alt` y la etiqueta de LinkedIn se traducen solos a partir del nombre.

   Para quitar a alguien, borra su `<article>`. El comentario `[PENDIENTE]` sobre la sección repite estas instrucciones.
1. **Confirmar las cifras.** Están en tu web anterior, pero hay que confirmar que son reales y actuales:
   - 120+ proyectos, 87 % menos tareas manuales, 15 000 horas ahorradas y 98 % de satisfacción;
   - resultados de los casos: -94 %, 6x, 12 000 documentos al mes, -80 %, cierre contable 5 días antes y 100 % automática.
2. **Testimonios.** La sección `#testimonios` está lista pero **oculta** (atributo `hidden`). Para activarla, cambia los `[PENDIENTE]` por nombre, cargo, empresa y texto reales, con permiso del cliente.
3. **Dominio.** Cuando esté confirmado, añade en `index.html` `<link rel="canonical" href="https://TU-DOMINIO/">` y pon la URL absoluta en `og:image`, `twitter:image` y `og:url`. Hay un comentario `[PENDIENTE]` en el `<head>` que marca el lugar.
4. **Formulario.** No tiene servidor: abre WhatsApp o el correo del visitante con el mensaje ya escrito. Si quieres recibir los mensajes sin que el visitante tenga que enviarlos él mismo, hay que conectar un servicio de formularios (Formspree, Cloudflare Workers, etc.).
5. **Libro de Reclamaciones.** La referencia lo muestra en el pie. Si ALTOKIA atiende a consumidores finales en Perú, puede ser obligatorio; confírmalo y te añado el enlace.
6. **Redes sociales.** Hoy solo hay LinkedIn. Si tienes Instagram, Facebook o TikTok, pásame los enlaces.
7. **Video de marca.** `images/video_altokia.mp4` se conserva, pero el sitio nuevo no lo usa. Se puede poner en el hero o en el caso destacado si lo quieres.

## Cómo publicarlo

El repositorio ya trae `_headers` y `_redirects`, que son el formato de **Cloudflare Pages** (también los acepta Netlify).

1. Une esta rama (`claude/funny-feynman-99ufmh`) con la rama principal del repositorio.
2. Si Cloudflare Pages está conectado al repositorio, publica solo al recibir el cambio. Configuración del proyecto:
   - framework preset: **None**;
   - build command: vacío;
   - output directory: `/`.
3. Si no está conectado, entra en Cloudflare → *Workers & Pages* → *Create* → *Pages* → *Upload assets*. Sube la carpeta con `index.html`, `404.html`, `_headers`, `_redirects` e `images/`.
4. Después de publicar, comprueba:
   - el botón ☀️/🌙 y el botón ES/EN;
   - que `/servicios` te lleve a la sección Servicios;
   - la vista previa al compartir el enlace (por ejemplo, con el Post Inspector de LinkedIn).

Para editar textos, abre `index.html`: el contenido en español está en el HTML y la traducción al inglés está en el objeto `DIC` del `<script>` final. Si cambias una frase en español, cambia también su clave en `DIC`.
