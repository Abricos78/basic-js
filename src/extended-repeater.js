const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
  const {
    repeatTimes = 1,
    separator = '+',
    addition = '',
    additionRepeatTimes = 1,
    additionSeparator = '|',
  } = options;
  let result = ''
  
  for (let i = 0; i < repeatTimes; i++) {
    let copyStr = str + ''
    for (let j = 0; j < additionRepeatTimes; j++) {
      copyStr += j + 1 === additionRepeatTimes ? (addition + '') : (addition + '') + additionSeparator
    }
    result += i + 1 === repeatTimes ? copyStr : copyStr + separator
  }
  return result
};
