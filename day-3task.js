/*   question no:1 compare two json  object */
var obj1 = {
  name: 'person 1',
  age: '5',
}

var obj2 = {
  age: '5',
  name: 'person 1',
}

function deepCompare(obj1, obj2) {
  return JSON.stringify(obj1) === JSON.stringify(obj2)
}

var areEqual = deepCompare(obj1, obj2)

if (areEqual) {
  console.log('The JSON objects are equal.')
} else {
  console.log('The JSON objects are not equal.')
}
// Question No:2 & 3

var request = new XMLHttpRequest()
request.open('GET', 'https://restcountries.com/v2/all')
request.send()

request.onload = function () {
  var result = JSON.parse(request.response)
  console.log(result)
  for (i in result) {
    console.log(result[i].flags)
  }
  for (i in result) {
    console.log(result[i].name)
  }
  for (i in result) {
    console.log(result[i].region)
  }
}
