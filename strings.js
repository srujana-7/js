

let str="srujana"

let s= str.slice(4)

console.log(s)
console.log(str)

const b =str.replace('n','ama')
console.log(b)

const s2 = str.replace(/ama/g , 'n')
console.log(s2)

//split
const str2= "Srujana Desai"
const [firstName , lastName] = str2.split(" ")
console.log(firstName , lastName)


const capitalizeName = function (name){

    let result = [];
const str = name.split(' ')
for(n of str)
result.push(n[0].toUpperCase() + n.slice(1))

return result
}

console.log(capitalizeName('srujana desai'))

const message = "Go to gate 23 !"

