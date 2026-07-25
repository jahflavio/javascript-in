/**
 * Practice: Making methods
 *
 * - Create a method for each object property.
 * - The method receives a value to match the property to be changed.
 * - Create a simple function to replace the current property value with the received value.
 * - Test the method by sending new values and checking the properties in the console.
 */

const backpack = {
  name: 'Everyday Backpack',
  volume: 30,
  color: 'grey',
  pocketNum: 15,
  strapLength: {
    left: 26,
    right: 26,
  },
  lidOpen: false,
  toggleLid(lidStatus) {
    this.lidOpen = lidStatus;
  },
  newStrapLength(lengthLeft, lengthRight) {
    this.strapLength.left = lengthLeft;
    this.strapLength.right = lengthRight;
  },
  changeName(newName) {
    this.name = newName;
  },
  changeVolume(newVolume) {
    this.volume = newVolume;
  },
  changeColor(newColor) {
    this.color = newColor;
  },
  changePocketNum(newPocketNum) {
    this.pocketNum = newPocketNum;
  },
};

// --- Prueba de métodos ---

// 1. Ver el estado inicial
console.log('Objeto inicial:', backpack);

// 2. Modificar las propiedades usando tus nuevos métodos
backpack.changeName('Traveler Pro Backpack');
backpack.changeVolume(40);
backpack.changeColor('black');
backpack.changePocketNum(18);

// Pruebas de los métodos que ya tenías
backpack.toggleLid(true);
backpack.newStrapLength(30, 30);

// 3. Confirmar que las propiedades cambiaron
console.log('Objeto actualizado:', backpack);

// O probar una propiedad específica:
console.log('Nuevo nombre:', backpack.name); // "Traveler Pro Backpack"
