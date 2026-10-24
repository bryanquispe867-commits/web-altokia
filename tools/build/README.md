# Generador de páginas

Las páginas HTML del sitio se generan desde aquí para que la cabecera, el menú, el pie, el bot y las secciones repetidas sean idénticos en todas.

```
python3 tools/build/pages.py      # reescribe index.html, servicios.html, proyectos.html, nosotros.html, por-que-altokia.html, contacto.html y agenda.html
node cache-bust.mjs               # actualiza el ?v= de la CSS y el JS en todas las páginas
```

| Archivo | Qué contiene |
|---|---|
| `parts.py` | Cabecera `<head>`, header con submenús, hero con video, pie, bot, banda de cita y de llamada a la acción |
| `sections.py` | Textos y bloques repetidos: servicios, proyectos, proceso, impacto, equipo, preguntas, formularios |
| `visuals.py` | Ilustraciones animadas (SVG) de los 5 servicios |
| `pages.py` | Arma cada página y añade a `js/altokia.js` las traducciones nuevas que falten |

**Importante:** si editas un `.html` a mano y luego ejecutas el generador, tu cambio se pierde. Haz los cambios de texto en `sections.py` / `pages.py` (o solo en el HTML, y no vuelvas a generar). Las traducciones al inglés viven en el objeto `DIC` de `js/altokia.js`.
