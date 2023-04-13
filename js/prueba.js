function aleatorio() {
  let numero = Math.floor(Math.random() * (4 - 1) + 1);
  return numero;
}

function piedra() {
  let eleccionMaquina = aleatorio();
  if (eleccionMaquina === 1) {
    alert("EMPATE - ambos elijieron piedra");
  } else if (eleccionMaquina === 2) {
    alert("PERDISTE - elegiste piedra y la maquina eligio papel");
  } else {
    alert("GANASTE - la maquina eligio tijera ");
  }
}
function papel() {
  let eleccionMaquina = aleatorio();

  if (eleccionMaquina === 2) {
    alert("EMPATE - ambos elijieron papel");
  } else if (eleccionMaquina === 3) {
    alert("perdiste - elegiste papel y la maquina eligio tijera");
  } else {
    alert("GANASTE - la maquina eligio piedra");
  }
}
function tijera() {
  let eleccionMaquina = aleatorio();

  if (eleccionMaquina === 3) {
    alert("empate - ambos elijieron tijera");
  } else if (eleccionMaquina === 1) {
    alert("perdiste - elegiste papel y la maquina eligio piedra");
  } else {
    alert("GANASTE - la maquina eligio papel");
  }
}
