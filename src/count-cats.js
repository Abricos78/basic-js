const CustomError = require("../extensions/custom-error");

module.exports = function countCats(matrix) {
  let result = 0
  matrix.forEach(el => {
    el.forEach(item => {
      item === '^^' && result++
    })
  })
  return result
};
