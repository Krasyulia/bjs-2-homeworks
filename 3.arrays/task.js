function compareArrays(arr1, arr2) {
  const testedArr1 = arr1.length >= arr2.length ? arr1 : arr2;
  const testedArr2 = arr1.length >= arr2.length ? arr2 : arr1;

  return testedArr1.every((item, index) => item === testedArr2[index]);
}

function advancedFilter(arr) {
  return arr.filter((item) => item > 0 && item % 3 === 0).map((item) => item * 10)
}
