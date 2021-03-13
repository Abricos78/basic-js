const CustomError = require("../extensions/custom-error");

const months = {
  winter: 'winter',
  spring: 'spring',
  summer: 'summer',
  autumn: 'autumn'
}

module.exports = function getSeason(date) {
  if (date === undefined) {
    return 'Unable to determine the time of year!'
  } 
  if(!date.valueOf()) {
    throw new Error
  }
  const month = date.getMonth()
  if (month <= 1 || month === 11) {
    return months.winter
  } else if (month < 5) {
    return months.spring
  } else if (month < 8) {
    return months.summer
  } else {
    return months.autumn
  }
};
