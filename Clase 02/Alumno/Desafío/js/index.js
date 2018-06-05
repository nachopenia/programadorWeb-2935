// var genero = prompt('Ingrese Genero: male, female, other')
// var edad = prompt('Ingrese edad')

// if (genero === 'male' && edad >= 18) {
//   console.log('Sr. usted es mayor de edad puede ingresar')
// } else if (genero === 'male' && edad < 18) {
//   console.log('Sr. usted es menor de edad no puede ingresar')

// }

// if (genero === 'female' && edad >= 18) {
//   console.log('Sra. usted es mayor de edad puede ingresar')
// } else if (genero === 'female' && edad < 18) {
//   console.log('Sra. usted es menor de edad no puede ingresar')

// }

// if (genero === 'other' && edad >= 18) {
//   console.log('Sx. usted es mayor de edad puede ingresar')
// } else if (genero === 'other' && edad < 18) {
//   console.log('Sx. usted es menor de edad no puede ingresar')
// } else {
//   console.log('datos incorrectos')
// }

var gender = prompt('Ingrese su género, male, female u other')

var age = prompt('Ingrese su edad')

var message = 'Hola, '

switch (gender) {
  case 'male':
    message = message + 'Sr. '
    break
  case 'female':
    message = message + 'Sra. '
    break
  case 'other':
    message = message + 'Sx. '
    break
  default:
    message = message + 'Género inválido '
    break
}

if (age < 18) {
  message = message + 'usted es menor de edad no puede ingresar'
} else if (age >= 18) {
  message = message + 'usted es mayor de edad puede ingresar'
}

console.log(message)






