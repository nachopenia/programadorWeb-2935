var genero = prompt('Ingrese Genero: male, female, other')
var edad = prompt('Ingrese edad')

if (genero === 'male' && edad >= 18) {
  console.log('Sr. usted es mayor de edad puede ingresar')
} else if (genero === 'male' && edad < 18) {
  console.log('Sr. usted es menor de edad no puede ingresar')
}

if (genero === 'female' && edad >= 18) {
  console.log('Sra. usted es mayor de edad puede ingresar')
} else if (genero === 'female' && edad < 18) {
  console.log('Sra. usted es menor de edad no puede ingresar')
}

if (genero === 'other' && edad >= 18) {
  console.log('Sx. usted es mayor de edad puede ingresar')
} else if (genero === 'other' && edad < 18) {
  console.log('Sx. usted es menor de edad no puede ingresar')
} else {
  console.log('datos incorrectos')
}



