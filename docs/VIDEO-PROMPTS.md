# ALTOKIA · Guía y prompts para los videos del sitio

El sitio ya se mueve sin estos videos: cada página tiene un hero con video (hoy, un segmento del video de marca en cámara lenta) y cada servicio tiene una ilustración animada. Esta guía sirve para **reemplazar los segmentos del video de marca por clips propios de cada página**, generados con una herramienta de video por IA (Runway, Kling, Veo, Luma, Pika o similar), sin tocar el código.

> Las herramientas de video por IA no se pueden ejecutar desde este entorno, por eso aquí van los prompts listos para pegar y las instrucciones para integrar el resultado.

---

## 1. Cómo se integra un clip (sin tocar código)

1. Genera el clip con el prompt de la página (sección 4).
2. Conviértelo con el comando de la sección 6 y guárdalo con **el nombre exacto** de su página:

   | Página | Archivo que espera el sitio | Póster (ya existe, puedes reemplazarlo) |
   |---|---|---|
   | Inicio | `images/video/inicio.mp4` | `images/hero/inicio.webp` |
   | Servicios | `images/video/servicios.mp4` | `images/hero/servicios.webp` |
   | Proyectos | `images/video/proyectos.mp4` | `images/hero/proyectos.webp` |
   | Nosotros | `images/video/nosotros.mp4` | `images/hero/nosotros.webp` |
   | Por qué ALTOKIA | `images/video/por-que.mp4` | `images/hero/por-que.webp` |
   | Contacto | `images/video/contacto.mp4` | `images/hero/contacto.webp` |
   | Agenda | `images/video/agenda.mp4` | `images/hero/agenda.webp` |

3. Ejecuta una vez `python3 tools/build/pages.py` (el generador detecta el clip y lo coloca como primera fuente del `<video>`; si falta, la página sigue usando el video de marca).
4. Sube los cambios. Listo: el clip se reproduce en bucle, silencioso, se funde con el fondo por la izquierda y por abajo, se pausa fuera de pantalla y no se carga con "ahorro de datos" ni con "reducir movimiento".

**Modo claro:** el video se muestra invertido (trazos de neón sobre blanco), igual que los fotogramas actuales. Si prefieres un clip distinto para el modo claro, pídelo y se añade una segunda fuente.

---

## 2. Especificaciones técnicas

| Parámetro | Valor |
|---|---|
| Formato | MP4, códec H.264 (perfil High), `yuv420p`, **sin audio** |
| Resolución | 1920 × 1080 (16:9). En móvil se recorta por el centro |
| Duración | 6 a 10 s, en bucle perfecto |
| Cuadros por segundo | 24 |
| Peso objetivo | ≤ 2.5 MB por clip (CRF 24–28) |
| Movimiento | lento y continuo; nada de cortes ni destellos (el texto del hero va encima) |
| Texto y logos dentro del video | **ninguno** (la IA deforma las letras; el logo ya está en la cabecera) |
| Zona segura | el tercio izquierdo queda cubierto por el titular: el motivo principal va al **centro-derecha** |

---

## 3. Prefijo de estilo (pégalo al inicio de cada prompt)

```
Cinematic abstract tech loop for a software and automation consultancy. Deep navy background (#061226), glowing cyan (#2EC5F5) and electric blue (#2E6BFF) light as the only accent colors, subtle hints of mint (#34F5C5). Dark, clean, premium, minimal. Slow continuous camera motion, soft volumetric light, shallow depth of field, fine particles, thin luminous lines. Main subject framed center-right, left third mostly dark and empty. No text, no letters, no logos, no people's faces, no pink, no purple, no red, no lens flares pointing at camera. Seamless loop, 16:9, 24 fps, photoreal 3D render quality.
```

**Prompt negativo** (si la herramienta lo acepta):

```
text, letters, watermark, logo, subtitles, pink, magenta, purple, red, orange, warm light, faces, hands, cartoon, flat illustration, fast cuts, flicker, strobe, camera shake, blur smear, low quality
```

---

## 4. Prompts por página (hero)

Cada clip reemplaza al segmento del video de marca que hoy usa esa página. El motivo mantiene la idea de ese segmento, para que el cambio sea coherente con los fotogramas y con el brochure.

### Inicio · `inicio.mp4`
Hoy: video de marca completo. Idea: la red que conecta todo.
```
[prefijo] A vast three-dimensional network of glowing nodes connected by thin cyan and blue lines, slowly rotating in dark space; pulses of light travel along the connections like data packets; a soft blue horizon glow at the bottom; the camera drifts forward very slowly.
```

### Servicios · `servicios.mp4`
Hoy: brazos robóticos (segmento 4.9–7.1 s). Idea: automatización que trabaja sola.
```
[prefijo] Sleek dark robotic arms with thin cyan light strips working in perfect synchrony over a dark glass surface, assembling translucent glowing blue data blocks; soft reflections; slow lateral camera dolly; fine floating particles.
```

### Proyectos · `proyectos.mp4`
Hoy: dashboards y lluvia de datos (1.0–3.1 s). Idea: resultados medibles.
```
[prefijo] Floating translucent holographic dashboards with glowing blue bar charts and cyan line graphs rising slowly, soft depth of field, charts gently animating upward; dark reflective floor; the camera slowly pushes in from the right side.
```

### Nosotros · `nosotros.mp4`
Hoy: red neuronal / cerebro (3.3–4.8 s). Idea: personas y criterio detrás de la tecnología.
```
[prefijo] A luminous neural network shaped like a soft abstract brain made of thousands of cyan and blue points of light, gently breathing and rotating; thin synapse lines flicker with quiet pulses; deep navy fog around it; very slow orbital camera.
```

### Por qué ALTOKIA · `por-que.mp4`
Hoy: túnel de luz (7.3–8.6 s). Idea: avanzar, velocidad con control.
```
[prefijo] Flying slowly forward through a dark tunnel built from thin concentric rings of cyan and electric blue light, rings receding into the distance with a soft blue glow at the vanishing point; smooth constant speed; subtle particles passing by.
```

### Contacto · `contacto.mp4`
Hoy: flujos de datos (0.9–2.6 s). Idea: conexión directa.
```
[prefijo] Two glowing streams of blue and cyan light curving toward each other and merging into a single bright pulse in the center-right, like a connection being established; soft ripples spread across a dark glass surface; slow and calm.
```

### Agenda una demo · `agenda.mp4`
Hoy: datos (1.8–3.1 s). Idea: el siguiente paso, ordenado y simple.
```
[prefijo] A minimal dark glass interface floating in space: translucent blue cards gently sliding into place one after another along a thin cyan timeline, each card lighting up softly when it locks in; calm rhythm, slow push-in camera.
```

---

## 5. Prompts por servicio (opcionales)

Los servicios ya tienen **ilustraciones animadas** (vectoriales, se adaptan al tema claro y oscuro y pesan casi nada). Estos clips son para redes sociales, presentaciones o el brochure digital; también pueden reemplazar a la ilustración si algún día lo prefieres (formato 4:3 o 1:1, mismo estilo).

| Servicio | Prompt (añade el prefijo) |
|---|---|
| Automatización | `Stacks of glowing translucent documents flowing along a thin blue conveyor of light into a compact dark robot module with a cyan visor; they exit as ordered luminous data blocks into a dark server rack; one red-free amber warning glyph gently pulses on a side panel; slow lateral dolly.` |
| Software a medida | `Lines of glowing code materialize in mid-air in cyan and blue and fold themselves into a sleek dark app interface floating in space; the interface blocks snap into place with soft light; shallow depth of field; slow orbit.` |
| Analítica de datos | `A dark glass command center: holographic KPI tiles, rising bar charts and a glowing mint ring gauge filling up; data streams drift upward as fine particles; slow push-in from the right.` |
| Optimización de procesos | `A tangled, dim flow of many small grey light paths reorganizes itself into three clean straight bright cyan channels; a thin blue gauge needle sweeps from left to right as the flow gets faster; dark background, slow camera.` |
| Marketing digital | `Thousands of fine blue light particles stream down through a glowing funnel of translucent blue glass and converge into a single bright cyan point on a concentric target; soft rings expand from the target; slow calm motion.` |

---

## 6. Convertir, recortar y hacer el bucle (ffmpeg)

**Convertir al formato del sitio** (8 s, sin audio, 1080p, 24 fps, ≤ 2.5 MB aprox.):
```bash
ffmpeg -i clip-generado.mp4 -t 8 -an -vf "scale=1920:-2,fps=24" \
  -c:v libx264 -profile:v high -pix_fmt yuv420p -crf 26 -preset slow -movflags +faststart \
  images/video/servicios.mp4
```
Si pesa más de 2.5 MB, sube el CRF a 28 o reduce a 6 s.

**Bucle perfecto.** Lo ideal es pedirlo en la herramienta (opción *loop* o usar el mismo fotograma como inicio y fin en *image-to-video*). Si el clip no cierra bien, el bucle de ida y vuelta siempre funciona:
```bash
ffmpeg -i clip.mp4 -filter_complex "[0:v]reverse[r];[0:v][r]concat=n=2:v=1[v]" -map "[v]" -an clip-loop.mp4
```

**Póster** (la imagen que se ve mientras carga el video y en navegadores sin autoplay):
```bash
ffmpeg -ss 2 -i images/video/servicios.mp4 -frames:v 1 -vf "scale=1600:-2" -c:v libwebp -quality 80 images/hero/servicios.webp
```

---

## 7. Lista de verificación antes de subir

- [ ] Sin texto, letras ni logos dentro del video.
- [ ] Colores solo azul marino, cian, azul y un toque de menta (nada rosa, violeta ni rojo).
- [ ] El motivo principal está en el centro-derecha; el tercio izquierdo es oscuro.
- [ ] Movimiento lento y continuo; el bucle no "salta".
- [ ] MP4 H.264 sin audio, 1920×1080, 24 fps, ≤ 2.5 MB.
- [ ] Nombre exacto del archivo según la tabla de la sección 1.
- [ ] Ejecutado `python3 tools/build/pages.py` y revisado en modo claro y oscuro, en escritorio y móvil.
