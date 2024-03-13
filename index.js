"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.moveZeros = void 0;
const moveZeros = (arr) => {
    let nonZeroIndex = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] !== 0) {
            arr[nonZeroIndex] = arr[i];
            nonZeroIndex++;
        }
    }
    for (let i = nonZeroIndex; i < arr.length; i++) {
        arr[i] = 0;
    }
    return arr;
};
exports.moveZeros = moveZeros;
const exampleArray = [false, 1, 0, 1, 2, 0, 1, 3, "a"];
const modifiedArray = (0, exports.moveZeros)(exampleArray);
const resultArray = JSON.stringify(modifiedArray);
console.log(resultArray);
