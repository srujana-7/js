

const arr = [1,2,...[3,4]]

const [a,b,...others] = [1,2,3,4,5]
console.log(a,b,others)

const [x, ,y, ...others2] = [1,2,3,4]
console.log(x,y,others2)


const add= function(...numbers){
    let sum=0
    for(let i=0; i<numbers.length ; i++)
    sum +=numbers[i]
    console.log(sum)
}

const z = [23,5,6]
add(...z)