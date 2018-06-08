var examResults = [7, 5, 6, 4, 3, 2, 8]


function promedioFinal(examResults) {

  var value
  var suma = 0

  for (var i = 0; i < examResults.length; i++) {
    value = examResults[i]
    suma = suma + value
  }

  suma = suma / examResults.length

  return suma
}

var resultado = promedioFinal(examResults)

console.log('El promedio es: ' + resultado)
