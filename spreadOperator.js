

const arr =[7,8,9]
const badArr = [1,2 , arr[0],arr[1],arr[2]]
console.log(badArr)

const newArr =[5,6,...arr]
console.log(newArr)

const a2 =arr
console.log(a2)
a2.push(5)
console.log(a2)
console.log(arr)

console.log("---------------------------------")


const a3 = [...arr]
console.log(a3)
console.log(arr)
a3.push(1)
console.log(a3)
console.log(arr)

const final = [...a2,...a3]

const newResturant = {founder: "Ross", ...final}
console.log(newResturant)
