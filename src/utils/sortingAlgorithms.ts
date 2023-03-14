// function swap(list: Array<number>, idx1: number, idx2: number) {
//   const temp = list[idx1];
//   list[idx1] = list[idx2];
//   list[idx2] = temp;
// }

export function bubbleSort(inputArr: Array<number>) {
  const len = inputArr.length;
  for (let i = 0; i < len; i++) {
    for (let j = 0; j < len; j++) {
      if (inputArr[j] > inputArr[j + 1]) {
        const tmp = inputArr[j];
        inputArr[j] = inputArr[j + 1];
        inputArr[j + 1] = tmp;
      }
    }
  }

  console.log(inputArr);

  return inputArr;
}
