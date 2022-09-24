
const student= new Map()

student.set('name','Srujana')
student.set(1,['candy','bullet'])
console.log(student)


console.log(student.get(1))

const x= [...student.keys()]
const y = [...student.values()]

console.log(x,y)