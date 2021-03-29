const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {
  if (typeof sampleActivity !== 'string' || isNaN(sampleActivity) || sampleActivity > 15 || sampleActivity <= 0) {
    return false
  }
  
  const k = (0.693 / HALF_LIFE_PERIOD)
  const result = Math.ceil(Math.log((MODERN_ACTIVITY / sampleActivity)) / k)
  return result
};
