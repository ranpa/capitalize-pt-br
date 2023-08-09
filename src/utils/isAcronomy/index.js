function isAcronomy(str) {
  if (!str) return false
  if (str.length % 2 !== 0) return false

  const ACRONOMY_SEPARATOR = '.'

  if (str.charAt(str.length - 1) !== ACRONOMY_SEPARATOR) return false

  for (let i = 0; i < str.length; i++) {
    const char = str[i]

    if (
      (i % 2 !== 0 && char !== ACRONOMY_SEPARATOR) ||
      (i % 2 === 0 && char === ACRONOMY_SEPARATOR)
    ) {
      return false
    }
  }

  return true
}

export default isAcronomy
