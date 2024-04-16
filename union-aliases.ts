type combinale = number | string

function combine(num1: string|number, num2: string|number) {
    
    if (typeof num1 === 'number' && typeof num2 === 'number'){
        return num1+num2
    } else{
        return num1.toString() + num2.toString()
    }    
}

console.log(combine(10,20))

console.log(combine("10",20))