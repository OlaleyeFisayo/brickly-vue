import type {
  Plugin,
} from "vite";
import {
  existsSync,
  readFileSync,
} from "node:fs";
import {
  resolve,
} from "node:path";
import {
  setupExport,
  spyTemplate,
} from "./spy-template";
import {
  removeCreateAppImport,
  rewriteRelativeImports,
} from "./transform";

const VIRTUAL_ID = "virtual:brickly-setup";
const RESOLVED_ID = "\0brickly-setup";

export function bricklyPreviewSetup(): Plugin {
  let root = "";

  return {
    name: "brickly-preview-setup",
    configResolved(config) {
      root = config.root;
    },
    resolveId(id) {
      if (id === VIRTUAL_ID)
        return RESOLVED_ID;
    },
    load(id) {
      if (id !== RESOLVED_ID)
        return null;

      const mainTsPath = resolve(
        root,
        "src/main.ts",
      );
      if (!existsSync(mainTsPath))
        return `export function setup() {}`;

      let code = readFileSync(
        mainTsPath,
        "utf-8",
      );
      code = rewriteRelativeImports(
        code,
        mainTsPath,
        root,
      );
      code = removeCreateAppImport(code);

      return `${spyTemplate}\n${code}\n${setupExport}`;
    },
  };
}
