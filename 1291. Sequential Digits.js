/**
 * @param {number} low
 * @param {number} high
 * @return {number[]}
 */
var sequentialDigits = function (low, high) {
  let lowLength = low.toString().length
  let highLength = high.toString().length
  console.log('lowLength: ', lowLength, 'highLength: ', highLength)

  let arrayOfAll = []
  // console.log(arrayOfAll.length)

  while (!arrayOfAll.length || arrayOfAll[arrayOfAll.length - 1] < high) {
    arrayOfAll.push(getSequentialNumber(!arrayOfAll.length ? +(low.toString()[0]) : arrayOfAll[arrayOfAll.length - 1].toString()[arrayOfAll[arrayOfAll.length - 1].toString().length - 1] == 9 || arrayOfAll[arrayOfAll.length - 1] == false ? 1 : +(arrayOfAll[arrayOfAll.length - 1].toString()[1]), !arrayOfAll.length ? lowLength : arrayOfAll[arrayOfAll.length - 1].toString()[arrayOfAll[arrayOfAll.length - 1].toString().length - 1] == 9 ? arrayOfAll[arrayOfAll.length - 1].toString().length + 1 : arrayOfAll[arrayOfAll.length - 1] == false && arrayOfAll.length == 1 ? lowLength + 1 : arrayOfAll[arrayOfAll.length - 1] == false && arrayOfAll.length > 1 ? arrayOfAll[arrayOfAll.length - 2].toString().length + 1 : arrayOfAll[arrayOfAll.length - 1].toString().length))
    console.log('if last digit is 9: ', arrayOfAll[arrayOfAll.length - 1].toString()[arrayOfAll[arrayOfAll.length - 1].toString().length - 1] == 9 || arrayOfAll[arrayOfAll.length - 1] == false)
  }
  finalArray = arrayOfAll.filter((el) => {
    return el >= low && el <= high
  })
  console.log('arrayOfAll: ', arrayOfAll)
  console.log('finalArray: ', finalArray)
  return finalArray
};

var getSequentialNumber = function (startingDigit, length) {
  console.log(startingDigit, length)
  let sequentialNumber = [startingDigit]
  let returnBool = true
  for (let i = startingDigit; sequentialNumber.length < length; i++) {
    sequentialNumber.push(sequentialNumber[sequentialNumber.length - 1] + 1)
    returnBool = sequentialNumber.length < length && sequentialNumber[sequentialNumber.length - 1] === 9 ? false : returnBool
  }
  let finalSequentialNumber = sequentialNumber.join('')
  console.log(finalSequentialNumber)
  return returnBool ? finalSequentialNumber : false
}

// sequentialDigits(1000, 13000)

// sequentialDigits(234, 2345)

// sequentialDigits(8511, 23553)