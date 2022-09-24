

const orderSet = new Set(['A','B','B'])
console.log(orderSet.has('B'))
console.log(orderSet)
console.log(orderSet.has('F'))

orderSet.add('G')
orderSet.add('H')
console.log(orderSet)
orderSet.delete('B')
console.log(orderSet)
console.log(orderSet.size)
//console.log(orderSet.clear())

const orderArray = [...new Set(orderSet)]

//const orderArray = [...new Set(orderSet)]
console.log(orderArray)