/**
 * Returns a random integer between min (included) and max (included)
 * @param  {number} min minimum value
 * @param  {number} max maximum value
 * @return {number}     randomized integer between min and max
 */
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

/**
 * Return random items inside an array (regardless their values)
 * @param  {Array} arr Array to randomize
 * @return {*}     randomly picked item
 */
function getRandomItem(arr) {
  return arr[getRandomInt(0, arr.length - 1)];
}

module.exports = {
  getRandomInt,
  getRandomItem,
};
