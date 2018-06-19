var numbers = [ 1, 2, 3, 4, 5 ]

function deleteElement (index, array) {
  if (Array.isArray(array) && typeof index === 'number') {
    var sliced = array.slice()
    sliced.splice(index, 1)
    return sliced
  } else {
    return array
  }

  return index
}

console.log(deleteElement(2, numbers))
console.log(numbers)
