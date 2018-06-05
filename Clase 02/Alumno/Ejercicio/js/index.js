var dia = prompt('ingrese un dia')

switch (dia) {
  case 'lunes':
  case 'martes':
  case 'miercoles':
  case 'jueves':
  case 'viernes':
    console.log('Es un dia habil')
    break

  case 'viernes':
  case 'sabado':
    console.log('Es fin de semana')
    break

  default:
    console.log('No es un dia valido')
    break
}

// if (dia === 'lunes' || dia === 'martes' || dia === 'miercoles' || dia === 'jueves' || dia === 'viernes') {
//   console.log('Es un dia habil')
// } else if (dia === 'sabado' || dia === 'domingo') {
//   console.log('Es fin de semana')
// } else {
//   console.log('no es un dia valido')
// }
