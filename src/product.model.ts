export class Product{
    title: string;
    price: number;


    constructor(t: string, p: number){
        this.title = t;
        this.price = p;
    }

    
    public get information() : string {
        return `Price for ${this.title} is ${this.price}`
    }
    

}