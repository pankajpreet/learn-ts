console.log('Your code goes here...');


const hobbies = ["Soccer", "Volleyball", "DayDreaming"]
const activeHobbies = ["Netflix"]
activeHobbies.push(...hobbies)

console.log(activeHobbies)

class Department {
    name: string;
    private employees: string[] = [];

    constructor(n : string){
        this.name = n;
    }

    describe(){
        console.log(this.name)
    }

    addEmployee(employee: string){
        this.employees.push(employee)
    }

    printEmployees(){
        console.log(this.employees.length)
        console.log(this.employees)
    }

}

class ITDepartment extends Department{

    constructor(public admins : string[]){
        super("IT")
    }

    get adminsForDept(){
        return this.admins
    }

    set adminsForDept(admin: string[]){
        this.admins.push(...admin)
    }
}

const accounting = new Department("Accounting")
console.log(accounting)

const itDepartment = new ITDepartment(["Pankaj"])