
    export enum ProjectStatus{
        Active,
        Finished
    }
    
    export class Project{
        private id: string;
        constructor(private title: string, private description: string, private peoples: number, public status: ProjectStatus ){
            this.id = Math.random().toString()
        }
    
        
        public get Id() : string {
            return this.id
        }
        
        
        public get Title() : string {
            return this.title;
        }
    
        
        public get Description() : string {
            return this.description
        }
    
        
        public get NumberOfPeople() : number {
            return this.peoples
        }
        
        
        
    }
