'use strict'

import keepLowercaseList from './keep-lowercase'
import keepUppercaseList from './keep-uppercase'
import isAcronomy from './utils/isAcronomy'

const capitalize = (string, lowercaseWords = [], uppercaseWords = []) => {
  if (typeof(string) !== 'string') {
    return string
  }

  const keepLowercase = [...keepLowercaseList, ...lowercaseWords]
  const keepUppercase = [...keepUppercaseList, ...uppercaseWords]

  return string
    .split(' ')
    .filter(word => !!word)
    .map((word, index) => {
      const lowercase = word.toLowerCase()
      return (keepLowercase.includes(lowercase) && index !== 0)
        ? lowercase
        : keepUppercase.includes(lowercase) || isAcronomy(word)
          ? lowercase.toUpperCase()
          : `${word.charAt(0).toUpperCase()}${word.slice(1).toLowerCase()}`
    })
    .join(' ')
}

export default capitalize
