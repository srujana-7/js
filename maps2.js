

const rate = 80

const billsUsd = [10 ,20 ,45 , 5 , 2,8, 34]

const billsInr  = billsUsd.map((value)=>   value * rate

 )
console.log(billsInr)

const str ="Adam Dave Stephen"

const createUsername = str.toLocaleLowerCase().split(' ').map(value =>value[0].toLowerCase() )
console.log(createUsername , typeof createUsername)

const finalName = str.toLocaleLowerCase().split(' ').map(value =>value[0].toLowerCase() ).join('')
console.log(finalName , typeof finalName)

console.log(billsUsd)

console.log("-------------------------------------------------------------------------")
const bigBills = billsUsd.filter((value)=> value > 20)


console.log(bigBills)
console.log("org",billsUsd)


const calcBalance = function(billsUsd){

    const b = billsUsd.reduce((acc,item) => acc+item)
    console.log("B is",b)
}

calcBalance(billsUsd)