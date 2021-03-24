const mapResult = (numbers, callback) => {
    let numbersCopy = [...numbers];
    for (let i = 0; i < numbers.length; i++) {
        numbersCopy[i] = callback(numbersCopy[i]);
      }
      return numbersCopy;
};

// const ageFinder = (array) => array <= 21;
const filter = (array, callback) => {
    let arrayCopy = [...array];
    for (let i = 0; i < array.length; i++) {
        arrayCopy[i] = callback(arrayCopy[i]);
      }
    return arrayCopy;
};
// const allEvens = (numbers) => {
//     return numbers.every(evenFinder);
//   };


module.exports = {
    mapResult,
    filter,
  };