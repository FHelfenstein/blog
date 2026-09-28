export function createImageSrc(originalSrc: string, prefix = '', sufix = '') {
  return `${prefix}${originalSrc}${sufix}`;
}
