/** Public URL for images in /public (encode spaces only; keep UTF-8 folder names) */
export function encodeImagePath(imagePath: string): string {
  return (
    "/" +
    imagePath
      .replace(/\\/g, "/")
      .split("/")
      .map((segment) => segment.replace(/ /g, "%20"))
      .join("/")
  );
}
