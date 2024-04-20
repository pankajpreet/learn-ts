
function Logger(constructor: Function){
    console.log("logging");
}

function LoggerFactory(forWhom: string){
    return function(constructor: Function){
        console.log(`logging from factory ${forWhom}`)
    }
    
}

@LoggerFactory("testUser")
@Logger
class Person {
    name = "Max";


    constructor(){
        console.log("CReating person")
    }
}

new Person();


