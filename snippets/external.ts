/* eslint-disable no-console */

// #region snippet
// 位于 ./snippets/external.ts 文件内 / Inside ./snippets/external.ts
/**
 * 创建指定长度的空数组
 * Create an empty array with specified length
 * @param length 数组长度 / array length
 * @returns 指定长度的空数组 / empty array with specified length
 */
export function emptyArray<T>(length: number) {
  return Array.from<T>({ length })
}
// #endregion snippet

/**
 * 打印问候消息到控制台
 * Print greeting message to console
 */
export function sayHello() {
  console.log('Hello from snippets/external.ts')
}
