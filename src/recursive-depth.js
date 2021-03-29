const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  
  maxDepth = 1

  calculateDepth(arr, count = 1) {
    arr.forEach(item => {
      if (Array.isArray(item)) {
        this.calculateDepth(item, count + 1)
      }
    })
    if (count > this.maxDepth) {
      this.maxDepth = count
      count = 0
    } else {
      count = 0
    }
    return this.maxDepth
  }

};