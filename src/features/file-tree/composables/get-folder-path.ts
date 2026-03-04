import type {
  FileTreeNode,
} from "@brickly/file-explorer";

export function getFolderPath(node: FileTreeNode | null) {
  const nodePath = node?.type === "directory" ? node.absolutePath : node?.parentPath;
  return nodePath;
}
