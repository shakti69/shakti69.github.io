const fs = require('fs');
const path = require('path');

const src = path.join('node_modules', 'three', 'examples', 'jsm', 'libs', 'draco', 'gltf');
const output = path.join('public', 'draco');

// Ensure output directory exists
if (!fs.existsSync(output)) {
  fs.mkdirSync(output, { recursive: true });
}

// Copy draco decoder from three.js into the public directory
const files = ['draco_decoder.wasm', 'draco_wasm_wrapper.js'];
for (const file of files) {
  const srcFile = path.join(src, file);
  const destFile = path.join(output, file);
  if (fs.existsSync(srcFile)) {
    fs.copyFileSync(srcFile, destFile);
  }
}
