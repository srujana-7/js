

const today = new Date

const last30 = (today -30)

console.log( last30.setDate)
console.log(today)

var previous = new Date();
previous.setDate(previous.getDate() - 30);

console.log("previous"  , previous)