
const jonas = {
    firstName : 'Jon',
    lastName : 'Schaffel',
    age : 34,
    friends : ['Mike', 'Dave','Steve'],

    calcAge : function(birthYear){
        return 2038 - birthYear
    }
}

console.log(jonas.firstName)
console.log(jonas['lastName'])

//const interestedIn = prompt('What do you want to know - firstName , lastName , age or friends ? ')
//console.log(jonas[interestedIn])

jonas.location = 'California'
console.log(jonas.location)

console.log(`${jonas.firstName} has total of ${jonas.friends.length} friends`)
console.log(`${jonas.firstName} best friend is ${jonas.friends[0]}`)