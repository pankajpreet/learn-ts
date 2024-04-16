function add(num1: number, num2: number): number{
    return num1 + num2;
}

let abc : Function
let addValues: (arg0: number, arg1:number) => number;

addValues = add;
// abc=6;

abc = add;

console.log(addValues(1,2))

function addAndHandle(num1: number, num2: number, op: (number)=> void){
    let result =  num1 + num2;
    op(result)
}

function consolePrinter(num: number){
    console.log(num)
}

addAndHandle(10,12, consolePrinter)

addAndHandle(10,12, (num)=>{alert(num)})