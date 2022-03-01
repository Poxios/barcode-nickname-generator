export const barcodeGen = (options) => {
  let str = ''
  if (options.use1) {
    for (let i = 0; i < (options.genLonger ? 12 : 8); i++) {
      const n = Math.floor(Math.random() * 3)
      if (n === 0) { str += options.useLowerCaseI ? 'i' : 'I' }
      else if (n === 1) { str += 'l' }
      else { str += '1' }
    }
  }
  else {
    for (let i = 0; i < (options.genLonger ? 12 : 8); i++) {
      const n = Math.floor(Math.random() * 2)
      if (n === 0) { str += options.useLowerCaseI ? 'i' : 'I' }
      else { str += 'l' }
    }
  }
  return str
};