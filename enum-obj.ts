// const person:{
//     name: string;
//     age:number;
//     hobbies: string[];
//     role: [number, string]
// } = {
//     name: "Pankaj",
//     age: 34, 
//     hobbies: ["Playing", "Eating"],
//     role: [2, "ADMIN"]
// }

enum Role{
    ADMIN,
    READ,
    WRITE
}

enum Role1{
    ADMIN =10,
    READ,
    WRITE
}

enum Role2{
    ADMIN = "ADMIN",
    READ = 2,
    WRITE = 4
}

const person = {
    name: "Pankaj",
    age: 34, 
    hobbies: ["Playing", "Eating"],
    role: Role.ADMIN
}

console.log(person)