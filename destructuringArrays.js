
const restaurant = {

    'name' : 'classic Italian',
    'location' : 'Italy',

    'categories' : ['Vegetarian' , 'Pizzeria' ,'Italian'],
    'starterMenu' :['Soup' ,'Salad'],

    order : function(start , main)
    {
         return [this.starterMenu[start], this.starterMenu[main]]
    }
}

const arr= [2,3,4]
const a= arr[0]
const b = arr[1]
const c = arr[2]

const [x,y,z] = arr
console.log(x,y,z)

let [first, second] = restaurant.categories

console.log(first , second)

//[first,second] =[second , first]

//console.log(first , second)

let [starter ,main]= restaurant.order(1,0)

console.log("our menu" ,starter,main)

//[starter,main] = [main , starter]

console.log("Reversed menu ", starter, main)

const nested = [2,4,[5,8]]
const [i,,[j,k]] = nested
console.log(j,k)

console.log("-------------------------------")
const[p,q,r] =[8,9]
console.log(p,q,r)

//[p,q] =[q,p]
console.log(p,q,r)


let arr2 = [1,2,3]
let [g,h] = arr2
console.log(g,h)
//[g,h] = [h,g]
console.log(g,h)

var s=3
var t=4
console.log("s, t" , s,t)
[s, t] = [t, s];
console.log("s, t" , s,t)
