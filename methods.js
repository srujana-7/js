

const jonas ={
    firstName : 'Jonas',
    lastName  : 'Schaffel',
    birthYear : 1991,
    hasDriverLicense : false,

    calcAge : function ()
    {
        this.age =2037 -this.birthYear
        return this.age
    },

    getSummary :function ()
{
    return `${this.firstName} has ${this.hasDriverLicense ? 'a': 'no'}  driver license`
}}

console.log(jonas['calcAge'] (1991))

console.log(jonas.calcAge(1991))
console.log(jonas.getSummary())

