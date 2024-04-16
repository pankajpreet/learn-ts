function add(num1: number, num2: number, printResult: boolean) {
    console.log(typeof num1)
    let result = num1+num2
    if (printResult) {
        console.log(result)
    } else{
        return result
    }

}

add(1, 5.3, true)
 