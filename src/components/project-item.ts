import { Component } from "./base-component";
import { Draggable } from "../models/drag-drop-interfaces";
import { autobind } from "../decorators/auto-bind";
import { Project } from "../models/project-model";

export class ProjectItem extends Component<HTMLUListElement, HTMLLIElement> implements Draggable{

    private project: Project;

    constructor(hostID: string, project: Project){
        super('single-project', hostID, false, project.Id)
        this.project = project
        this.configure();
        this.renderContent()
    }

    @autobind
    dragStartHandler(events: DragEvent): void {
        events.dataTransfer!.setData("text/plain", this.project.Id)
        events.dataTransfer!.effectAllowed = 'move'
    }


    dragEndHandler(_: DragEvent): void {
        
    }

    configure(): void {
        this.element.addEventListener('dragstart', this.dragStartHandler)
        this.element.addEventListener('dragend', this.dragEndHandler)
    }

    renderContent(): void {
        this.element.querySelector('h2')!.textContent = this.project.Title
        this.element.querySelector('h3')!.textContent = this.project.NumberOfPeople.toString() + ' assigned'
        this.element.querySelector('p')!.textContent = this.project.Description
    }

}