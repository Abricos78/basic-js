const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  result = 1
  maxDepth = []

  calculateDepth(arr) {
    if (Array.isArray(arr)) {
      arr.forEach(el => {
        if (Array.isArray(el)) {
          this.result = this.result + this.calculateDepth(el)
          this.maxDepth.push(this.result)
        }
      })
    }
    console.log(this.maxDepth)
    return result
  }

};