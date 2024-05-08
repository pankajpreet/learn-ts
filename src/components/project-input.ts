import { Validatable, validate } from "../utils/validatable";
import { autobind } from "../decorators/auto-bind";
import { projectState } from "../state/project-state";
import { Component } from "./base-component";

export class ProjectInput extends Component<HTMLDivElement, HTMLFormElement>{

    titleInput: HTMLInputElement;
    descriptionInput: HTMLInputElement;
    peopleInput: HTMLInputElement;


    constructor(){

        super('project-input', 'app', true, 'user-input')
        this.titleInput = this.element.querySelector('#title') as HTMLInputElement
        this.descriptionInput = this.element.querySelector('#description') as HTMLInputElement
        this.peopleInput = this.element.querySelector('#people') as HTMLInputElement
        this.configure();
    }

    private gatherUserInput():[string, string, number] | void {
        const enteredTitle = this.titleInput.value;
        const enteredDesc = this.descriptionInput.value;
        const enteredPeople = this.peopleInput.value;
    
        const titleValidatable : Validatable = {
            value: enteredTitle,
            required: true, 
            minLength: 5,
            maxLength: 20
        }

        const descrptionValidatable : Validatable = {
            value: enteredDesc,
            required: true, 
            minLength: 5,
            maxLength: 50
        }

        const peopleValidatable : Validatable = {
            value: +enteredPeople,
            required: true,
            min: 1,
            max: 5
        }

        if(!validate(titleValidatable) || !validate(descrptionValidatable) || !validate(peopleValidatable) ){
            alert("validation failed")
        } else{
            return [enteredTitle, enteredDesc, +enteredPeople]
        }

    }

    renderContent(): void {
        
    }

    configure(){
        this.element.addEventListener('submit', this.submitHandler);
    }

    @autobind
    private submitHandler(event: Event){
        event.preventDefault()
        console.log(this.titleInput.value);
    
        const userInput = this.gatherUserInput();
        if (Array.isArray(userInput)){
            const [title, description,people] = userInput;
            projectState.addProject(title, description, people)
            this.clearForm();
        }

    }

    private clearForm(){
        this.titleInput.value = ""
            this.descriptionInput.value = ""
            this.peopleInput.value = ""
    }

}