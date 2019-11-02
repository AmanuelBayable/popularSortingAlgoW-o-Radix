//bubbleSort
//selectionSort
//insertionSort
//mergeSort
function bubbleSort(arr) {
  const swap = (arr, x, y) => ([arr[x], arr[y]] = [arr[y], arr[x]]);
  for (var i = arr.length - 1; i > 1; i--) {
    isSwap = false
    for (var j = 0; j < arr.length - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        swap(arr, j, j + 1)
        isSwap = true;
      }
    }
    if (!isSwap) break;
  }
  console.log(arr)
}

function selectionSort(arr) {
  const swap = (arr, x, y) => ([
    [arr[x], arr[y]] = [arr[y], arr[x]]
  ])
  for (var i = 0; i < arr.length; i++) {
    for (var j = i + 1; j < arr.length; j++) {
      if (arr[i] > arr[j]) {
        swap(arr, i, j);
      }
    }
  }
  console.log(arr);
}

function insertionSort(arr) {
  const swap = (arr, x, y) => ([arr[x], arr[y]] = [arr[y], arr[x]])
  for (var i = 1; i < arr.length; i++) {
    for (var j = i; j >= 0; j--) {
      if (arr[j] > arr[j + 1]) {
        swap(arr, j, j + 1)
      }
    }
  }
  console.log(arr)
}
//
function sort(left, right) {
  let results = [];
  let i = 0;
  let j = 0;
  while (left.length > i && right.length > j) {
      if (left[i] > right[j]) {
          results.push(right[j]);
          j++;
      } else {
          results.push(left[i]);
          i++;
      }
  }
  while (left.length > i) {
      results.push(left[i]);
      i++;
  }
  while (right.length > j) {
      results.push(right[j]);
      j++;
  }
  console.log(results)
  return results;
}
function divideMerge(arr) {
  if (arr.length <= 1) return arr;
  let Mid = Math.floor(arr.length / 2);
  let first = divideMerge(arr.slice(0, Mid));
  let second = divideMerge(arr.slice(Mid));
  return sort(first, second);
}
//
//
//
function pivot(arr, start, end ) {
  const swap = (arr, x, y) => ([arr[x], arr[y]] = [arr[y], arr[x]]);

  var swapIdx = start;
  var pivot = arr[start];

  for (var i = start + 1; i <= end; i++) {
    if (arr[i] < pivot) {
      swapIdx++;
      swap(arr, i, swapIdx)
    }
  }
  console.log(swapIdx)
  console.log(arr)

  swap(arr, start, swapIdx);
  return swapIdx;
}

pivot([4,1,3,2])

function quickSort(arr, left = 0, right = arr.length -1) {

  if (left < right) {
    let pivotIndex = pivot(arr,left,right);
    quickSort(arr,left,pivotIndex-1);
    quickSort(arr,pivotIndex+1,right);
  }
  console.log(arr);
  return arr;
}
//
//
//

quickSort([100,-3,2,4,6,9,1,2,5,3,23])
