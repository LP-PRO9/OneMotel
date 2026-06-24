import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const stylesDir = path.join(path.dirname(fileURLToPath(import.meta.url)), "..", "styles");

for (const file of fs.readdirSync(stylesDir)) {
  if (!file.endsWith(".css")) continue;
  const filePath = path.join(stylesDir, file);
  const buf = fs.readFileSync(filePath);
  if (buf.length >= 3 && buf[0] === 0xef && buf[1] === 0xbb && buf[2] === 0xbf) {
    fs.writeFileSync(filePath, buf.subarray(3));
    console.log(`Removed BOM from ${file}`);
  }
}
