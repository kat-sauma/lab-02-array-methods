const mapResult = (numbers, callback) => {
    let numbersCopy = [...numbers];
    for (let i = 0; i < numbers.length; i++) {
        numbersCopy[i] = callback(numbersCopy[i]);
      }
      return numbersCopy;
};

// const ageFinder = (array) => array <= 21;
const filter = (array, callback) => {
    let arrayCopy = [];
    for (let ar of array) {
        if (callback(ar)) arrayCopy = [...arrayCopy, ar];
      } 
    return arrayCopy;
};
// const filter = (array, callback) => {
//     let arrayCopy = [...array];
//     for (let i = 0; i < array.length; i++) {
//         arrayCopy[i] = callback(arrayCopy[i]);
//       }
//     return arrayCopy;
// };

const findIndex = (array, callback) => {
    for (let i = 0; i < array.length; i++) {
        if (callback(array[i])) return i;
    }

};

const reduce = (array, callback, initialValue) => {
    let accumulator = initialValue;
    for (let arr of array) 
    accumulator = callback(accumulator, arr); 
    return accumulator;
    
};



module.exports = {
    mapResult,
    filter,
    findIndex,
    reduce
  };