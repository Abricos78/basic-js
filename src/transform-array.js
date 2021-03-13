const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  let copyArr = [...arr]
  if (!Array.isArray(arr)) {
    throw new Error
  }
  copyArr
  .forEach((el, index, array) => {
    if (array[index - 1] === '--discard-next') {
      array[index] = undefined
    } else if (array[index + 1] === '--discard-prev') {
      array[index] = undefined
    } else if (el === '--double-next' ) {
      array[index] = array[index + 1]
    } else if (el === '--double-prev' ) {
      array[index] = array[index - 1]
    }
  })
  copyArr = copyArr.filter(el => el !== '--discard-next' && el !== '--discard-prev' && el !== undefined)
  return copyArr
};
