const CustomError = require("../extensions/custom-error");

const alphabet = 'abcdefghijklmnopqrstuvwxyz'

class VigenereCipheringMachine {
  constructor(type) {
    this.reverse = type === false
  }
  encrypt(message, key) {
    let index = 0
    if (!message || !key) {
      throw new Error
    }
    const filterMessage = message.split('')
    .filter(el => /[A-Za-z]/.test(el))
    let copyKey = key
    if (key.length < message.length) {
      copyKey = key.repeat(Math.floor(filterMessage.length / key.length)) + key.slice(0, filterMessage.length % key.length)
    }
    const encryptLetters = filterMessage
    .map((letter, index) => {
        let cesar = Math.abs('a'.charCodeAt() - copyKey[index].toLowerCase().charCodeAt())
        let newLetter = alphabet.indexOf(letter.toLowerCase()) + cesar
        letter = newLetter >= alphabet.length ? alphabet[newLetter - alphabet.length] : alphabet[newLetter]
        return letter.toUpperCase()
    })
    const result = message.split('').map(el => {
      if (/[A-Za-z]/.test(el)) {
        el = encryptLetters[index]
        index++
      }
      return el
    })
    return this.reverse ? result.reverse().join('') : result.join('')
  }
  decrypt(encryptedMessage, key) {
    let index = 0
    if (!encryptedMessage || !key) {
      throw new Error
    }

    const filterEncryptedMessage = encryptedMessage.split('')
    .filter(el => /[A-Za-z]/.test(el))

    let copyKey = key
    if (key.length < encryptedMessage.length) {
      copyKey = key.repeat(Math.floor(filterEncryptedMessage.length / key.length)) + key.slice(0, filterEncryptedMessage.length % key.length)
    }
    const originalLetters = filterEncryptedMessage
    .map((letter, index) => {
        let cesar = Math.abs('a'.charCodeAt() - copyKey[index].toLowerCase().charCodeAt())
        let newLetter = alphabet.indexOf(letter.toLowerCase()) - cesar
        letter = newLetter < 0 ? alphabet[newLetter + alphabet.length] : alphabet[newLetter]
        return letter.toUpperCase()
    })

    const result = encryptedMessage.split('').map(el => {
      if (/[A-Za-z]/.test(el)) {
        el = originalLetters[index]
        index++
      }
      return el
    })
    return this.reverse ? result.reverse().join('') : result.join('')
  }
}

module.exports = VigenereCipheringMachine;
