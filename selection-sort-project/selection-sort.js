function selectionSort(arr) {
  const array = arr.slice();

  for (let i = 0; i < array.length - 1; i++) {
    let min = i;
    for (let k = i + 1; k < array.length; k++) {
      if (array[k] < array[min]) {
        min = k;
      }
    }
    //const temp = array[i];
    //array[i] = array[min];
    //array[min] = temp;

    [array[i], array[min]] = [array[min], array[i]];
  }

  console.log(arr);
  console.log(array);
  return array;
}

selectionSort([7, 3, 5, 8, 2, 9, 4, 15, 6]);
