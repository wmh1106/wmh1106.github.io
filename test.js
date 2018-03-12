// const arr1 = [22, 343, 45, 4546, 5]

// const arr2 = [...arr1]


const obj1 = {
  a: 1,
  b: 2
}
const obj2 = {
  c: 1,
  d: 2
}

const obj3 = { ...obj1,
  ...obj2
}
obj3.a = 2222
console.log(obj3)
console.log(obj1)