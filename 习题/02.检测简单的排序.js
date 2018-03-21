// 循环数组，比较每相邻两项
function defaultComparator(a, b) {
  return a - b
}

function checksort(array, comparator) {
  comparator = comparator || defaultComparator

  for (var i = 1; i < array.length; ++i) {
    if (comparator(array[i - 1], array[i]) > 0) return false
  }

  return true
}

console.log(checksort([1, 2, 3]))
// => true

console.log(checksort([3, 1, 2]))
// => false

// supports custom comparators
console.log(checksort([3, 2, 1], function (a, b) {
  return a - b;
}))