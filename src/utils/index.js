/**
 * 打开链接
 * @param {string} link 链接
 */
export const open = link=> {
  try {
    window.open(link, "_self", "")
  } catch (error) {
    throw new Error(error)
  }
}