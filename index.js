const mapResult = (numbers, callback) => {
    let numbersCopy = [...numbers];
    for (let i = 0; i < numbers.length; i++) {
        numbersCopy[i] = callback(numbersCopy[i]);
      }
      return numbersCopy;
};

// const ageFinder = (array) => array <== 21;
// const ofAge = (array, callback) => {
//     return callback.filter(array);
// };
// const allEvens = (numbers) => {
//     return numbers.every(evenFinder);
//   };

module.exports = {
    mapResult,
    // ofAge,
  };