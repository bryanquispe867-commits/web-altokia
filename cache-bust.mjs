/**
 * ALTOKIA — versiona los assets por contenido.
 *
 *   node cache-bust.mjs
 *
 * Añade (o actualiza) un ?v=<hash> en las referencias a css/altokia.css y
 * js/altokia.js dentro de todas las páginas. El hash sale del contenido del
 * propio archivo, así que la URL solo cambia cuando el archivo cambia de verdad.
 *
 * Por qué hace falta: la zona de Cloudflare fuerza un Browser Cache TTL de 4 h
 * que pisa las cabeceras de _headers. Sin esto, un cambio de estilos puede
 * tardar horas en verse, y durante ese rato un visitante puede recibir el HTML
 * nuevo con la CSS vieja.
 *
 * Ejecútalo SIEMPRE antes de hacer commit de un cambio en css/ o js/.
 */
import fs from "node:fs";
import crypto from "node:crypto";

const ASSETS = ["css/altokia.css", "js/altokia.js"];

const hashes = new Map(
  ASSETS.map((file) => [
    file,
    crypto.createHash("sha1").update(fs.readFileSync(file)).digest("hex").slice(0, 8)
  ])
);

const pages = fs.readdirSync(".").filter((f) => f.endsWith(".html"));
let updated = 0;

for (const page of pages) {
  const before = fs.readFileSync(page, "utf8");
  let after = before;

  for (const [file, hash] of hashes) {
    // Captura href="css/altokia.css" y también href="css/altokia.css?v=viejo"
    const pattern = new RegExp(
      '((?:href|src)=")' + file.replace(/[.*+?^${}()|[\]\\]/g, "\\$&") + '(?:\\?v=[a-f0-9]+)?(")',
      "g"
    );
    after = after.replace(pattern, `$1${file}?v=${hash}$2`);
  }

  if (after !== before) {
    fs.writeFileSync(page, after, "utf8");
    updated++;
  }
}

for (const [file, hash] of hashes) console.log(`  ${file}  ->  ?v=${hash}`);
console.log(`${updated} de ${pages.length} páginas actualizadas`);
