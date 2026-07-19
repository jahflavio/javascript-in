/**
 * Create a Backpack object.
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
  newStrapLength(left, right) {
    this.strapLength.left = left;
    this.strapLength.right = right;
  },
};
console.log('The backpack object:', backpack);
