export async function copyToClipboard(text: string) {
  return await navigator.clipboard.writeText(text);
}

export async function readFromClipboard() {
  return await navigator.clipboard.readText();
}
