const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  
  calculateDepth(arr) {
    let maxDepth = 1;
    
    arr.forEach(el => {
      if(Array.isArray(el)) {
        let currentDepth = 1
        currentDepth = 1 + this.calculateDepth(el)
        if (currentDepth > maxDepth) {
          maxDepth = currentDepth
        }
      }
    })

    return maxDepth;
  }

};