'use strict'

import keepLowercaseList from './keep-lowercase'
import keepUppercaseList from './keep-uppercase'

const capitalize = (string, lowercaseWords = [], uppercaseWords = []) => {
  const keepLowercase = [...keepLowercaseList, ...lowercaseWords]
  const keepUppercase = [...keepUppercaseList, ...uppercaseWords]

  return string
    .split(' ')
    .filter(word => !!word)
    .map((word, index) => {
      const lowercase = word.toLowerCase()
      return (keepLowercase.includes(lowercase) && index !== 0)
        ? lowercase
        : keepUppercase.includes(lowercase)
          ? lowercase.toUpperCase()
          : `${word.charAt(0).toUpperCase()}${word.substr(1).toLowerCase()}`
    })
    .join(' ')
}

export default capitalize
