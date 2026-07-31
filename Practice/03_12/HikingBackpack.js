// 1. Importamos la clase padre (el "molde" original)
import Backpack from './Backpack.js';

// 2. Declaramos la clase hija que se extiende de la padre
class HikingBackpack extends Backpack {
  constructor(
    name,
    volume,
    color,
    pocketNum,
    strapLengthL,
    strapLengthR,
    lidOpen,
    hydrationCapacity,
  ) {
    // Inicializa las propiedades de la clase padre
    super(
      name,
      volume,
      color,
      pocketNum,
      strapLengthL,
      strapLengthR,
      lidOpen,
    );
    // Propiedad exclusiva de HikingBackpack
    this.hydrationCapacity = hydrationCapacity;
  }

  checkHydration() {
    if (this.hydrationCapacity > 0) {
      console.log(
        `You have ${this.hydrationCapacity} liters of water left.`,
      );
    } else {
      console.log('Time to refill your water!');
    }
  }

  toggleLid(lidStatus) {
    super.toggleLid(lidStatus); // Llama al método del padre
    if (lidStatus) {
      console.log(
        'Your hiking backpack lid is open. Remember to check to make sure the hydration pack is inserted.',
      );
    } else {
      console.log(
        'Your hiking backpack lid is closed. Remember to check to make sure the hydration pack is inserted.',
      );
    }
  }
}

// 3. Exportamos la nueva clase
export default HikingBackpack;
