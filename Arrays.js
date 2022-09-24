
const arr =['Steve' , 'Mark' ,'Adam' ]

const arrLen = arr.push('Dave')
console.log(arr )
console.log( arrLen)

const poppedEle = arr.pop()
console.log(arr)
console.log( poppedEle)

// remove from front
const res =arr.shift()
console.log(arr )
console.log(res)

//add from front
const stack = arr.unshift('Sarah')
console.log(arr )
console.log(stack)

const x = arr.lastIndexOf('Adam')
console.log("x",x)

const y = arr.lastIndexOf('Thomas')
console.log("y",y)

const b = arr.includes('adam')
console.log("b",b)


