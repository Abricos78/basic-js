const CustomError = require("../extensions/custom-error");

module.exports = function countCats(matrix) {
  let result = 0
  matrix.forEach(el => {
    let arr = el.filter(item => item === '^^')
    result += arr.length
  })
  return result
};
