import { spawn } from "child_process";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const root = path.join(path.dirname(fileURLToPath(import.meta.url)), "..");
const stylesDir = path.join(root, "styles");

function stripBom(filePath) {
  const buf = fs.readFileSync(filePath);
  if (buf.length >= 3 && buf[0] === 0xef && buf[1] === 0xbb && buf[2] === 0xbf) {
    fs.writeFileSync(filePath, buf.subarray(3));
    console.log(`Removed BOM from ${path.basename(filePath)}`);
  }
}

function stripAllCss() {
  for (const file of fs.readdirSync(stylesDir)) {
    if (file.endsWith(".css")) stripBom(path.join(stylesDir, file));
  }
}

stripAllCss();

fs.watch(stylesDir, (_event, filename) => {
  if (filename?.endsWith(".css")) {
    stripBom(path.join(stylesDir, filename));
  }
});

const next = spawn("npx", ["next", "dev"], {
  cwd: root,
  stdio: "inherit",
  shell: true,
});

next.on("exit", (code) => process.exit(code ?? 0));
