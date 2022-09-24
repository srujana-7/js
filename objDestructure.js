
const restaurant ={
name : 'classic Italian',
oh : {
    thu:{
        o:1,
        c:2
    },

    fri :{
        o :2 ,
        c : 4
    },
    
},
categories : ['A', 'B','C'],
starterMenu : ['salad' , 'soup']
}

const {name ,oh , categories} = restaurant 
console.log(name )
console.log(oh) 
console.log(categories)

const {
    name : restaurantName ,
    oh : hours,
    categories : tags
} = restaurant

console.log(restaurantName ,oh ,tags)
console.log("........................................")
const {menu =[] ,starterMenu: starters =[]} = restaurant
console.log(menu , starters)

// mutating variables
let a =11
let b =23
const obj = {a:23 ,b:7}
