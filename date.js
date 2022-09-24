

    const today = new Date()
    console.log("today is",today)
    var previous = new Date();
previous.setDate(previous.getDate() - 30);

console.log("previous is", previous)


console.log((previous.setDate(previous.getDate() + 30)))
console.log("previous is", previous)

console.log(new Date(previous.setDate(previous.getDate() + 30)))
console.log("previous is", previous)

console.log("---------------------------------------------------")

let currentDate = new Date();

console.log("cu",currentDate)


console.log("---------------------------------------------------")


var date1 = new Date('7/11/2010');
var date2 = new Date('12/12/2010');
var diffDays = date2.getDate() - date1.getDate(); 

console.log("difference in days" , diffDays)

console.log("---------------------------------------------------")
var date1 = new Date('7/11/2010');
var date2 = new Date('12/12/2010');
var diffDays = date2 - date1

console.log("difference in days" , diffDays)
