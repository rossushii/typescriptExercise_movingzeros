export const moveZeros = (arr: any[]): any[] => {
  let nonZeroIndex = 0;

  // Iterate through the array and move non-zero elements to the front
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== 0) {
      arr[nonZeroIndex] = arr[i];
      nonZeroIndex++;
    }
  }

  // Fill the remaining elements with zeros
  for (let i = nonZeroIndex; i < arr.length; i++) {
    arr[i] = 0;
  }

  return arr;
};

const exampleArray = [false, 1, 0, 1, 2, 0, 1, 3, "a"];
const modifiedArray = moveZeros(exampleArray);

const resultArray = JSON.stringify(modifiedArray);
console.log(resultArray);
