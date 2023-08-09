function isAcronomy(str) {
  if (!str) return false

  const ACRONOMY_SEPARATOR = '.'
  const charCount = {
    letters: 0,
    dots: 0
  }

  for (let i = 0; i < str.length; i++) {
    const char = str[i]
    char === ACRONOMY_SEPARATOR
      ? (charCount.dots += 1)
      : (charCount.letters += 1)
  }

  return charCount.letters === charCount.dots
}

export default isAcronomy
