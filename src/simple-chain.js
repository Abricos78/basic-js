const CustomError = require("../extensions/custom-error");

const chainMaker = {
  arr: [],
  getLength() {
    return this.arr.length
  },
  addLink(value) {
    value !== undefined ? this.arr.push(` ${value} `) : this.arr.push(' ')
    return this
  },
  removeLink(position) {
    if (typeof position !== 'number' || !Number.isInteger(position) || position > this.arr.length) {
      this.arr = []
      throw new Error
    } else {
      const arr1 = this.arr.slice(0, position - 1)
      const arr2 = this.arr.slice(position)
      this.arr = arr1.concat(arr2)
      return this
    }
  },
  reverseChain() {
    this.arr.reverse()
    return this
  },
  finishChain() {
    let result = this.arr.map(el => `(${el})`).join('~~')
    this.arr = []
    return result
  }
};

module.exports = chainMaker;
