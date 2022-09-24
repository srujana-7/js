

const now1 = Date.now()

console.log(now1)
console.log(this)



const x = new Date

const y = new Date()

console.log("x is",x)
console.log("y is", y)



const resDays = 30
const today = new Date
var previous = new Date();
previous.setDate(previous.getDate() - resDays);
console.log("H",today,previous)