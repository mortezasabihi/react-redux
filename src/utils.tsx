/**
 * truncate
 * @param str {string}
 * @param maxLength {number}
 * @returns {string}
 */
export function truncate(str: string, maxLength: number): string {
  if (str.length > maxLength) {
    return str.substring(0, maxLength) + "...";
  }
  return str;
}
