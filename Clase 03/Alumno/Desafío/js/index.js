var operation = prompt('Ingrese la operación a realizar, sum, res, mul o div')

var number1 = prompt('Ingerese el primer número')
var parsedNumber1 = parseFloat(number1, 10)

do {
  var number2 = prompt('Ingerese el segundo número')
  var parsedNumber2 = parseFloat(number2, 10)
} while (operation === 'div' && parsedNumber2 === 0)

var result

switch (operation) {
  case 'sum':
    result = parsedNumber1 + parsedNumber2
    break
  case 'res':
    result = parsedNumber1 - parsedNumber2
    break
  case 'mul':
    result = parsedNumber1 * parsedNumber2
    break
  case 'div':
    result = parsedNumber1 / parsedNumber2

    break
  default:
    result = 'Operación incorrecta'
    break
}
var menssage = 'El resultado de la ' + operation + ' es: ' + result

console.log(menssage)


