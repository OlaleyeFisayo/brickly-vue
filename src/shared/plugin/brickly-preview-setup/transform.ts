import {
  dirname,
  relative,
  resolve,
} from "node:path";

const RELATIVE_IMPORT_RE = /from\s*['"](\.[^'"]+)['"]/g;
const SIDE_EFFECT_IMPORT_RE = /^import\s*['"](\.[^'"]+)['"]/gm;
const BACKSLASH_RE = /\\/g;
const VUE_IMPORT_RE = /import\s*\{([^}]*)\}\s*from\s*['"]vue['"]/g;
const CREATE_APP_RE = /^(?:type\s+)?createApp$/;

function toRootPath(
  rel: string,
  mainDir: string,
  root: string,
): string {
  const abs = resolve(
    mainDir,
    rel,
  );
  return `/${relative(
    root,
    abs,
  ).replace(
    BACKSLASH_RE,
    "/",
  )}`;
}

export function rewriteRelativeImports(
  code: string,
  mainTsPath: string,
  root: string,
): string {
  const mainDir = dirname(mainTsPath);
  return code
    .replace(
      RELATIVE_IMPORT_RE,
      (
        _,
        rel: string,
      ) => `from '${toRootPath(
        rel,
        mainDir,
        root,
      )}'`,
    )
    .replace(
      SIDE_EFFECT_IMPORT_RE,
      (
        _,
        rel: string,
      ) => `import '${toRootPath(
        rel,
        mainDir,
        root,
      )}'`,
    );
}

export function removeCreateAppImport(code: string): string {
  return code.replace(
    VUE_IMPORT_RE,
    (
      _,
      imports: string,
    ) => {
      const rest = imports
        .split(",")
        .map(s => s.trim())
        .filter(s => s && !CREATE_APP_RE.test(s))
        .join(", ");
      return rest ? `import { ${rest} } from 'vue'` : "";
    },
  );
}
