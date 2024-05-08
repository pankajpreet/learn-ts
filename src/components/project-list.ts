import { Component } from "./base-component";
import { DragTarget } from "../models/drag-drop-interfaces";
import { autobind } from "../decorators/auto-bind";
import { Project, ProjectStatus } from "../models/project-model";
import { projectState} from "../state/project-state";
import { ProjectItem } from "./project-item";


export class ProjectList extends Component<HTMLDivElement, HTMLElement> implements DragTarget{
    assignedProject: Project[] =[];

    constructor(private projectType: 'active' | 'finished'){
        super('project-list', 'app', false,  `${projectType}-projects` )
        this.configure()
        this.renderContent()
    
    }
    @autobind
    dragOverHandler(event: DragEvent): void {
        event.preventDefault()
        const listEL = this.element.querySelector('ul')
        listEL!.classList.add('droppable')
    }

    @autobind
    dropHandler(event: DragEvent): void {
        const prjId = event.dataTransfer!.getData('text/plain')
        projectState.moveProject(prjId, this.projectType === 'active'? ProjectStatus.Active:ProjectStatus.Finished )
        
    }

    @autobind
    dragLeaveHandler(_: DragEvent): void {
        const listEL = this.element.querySelector('ul')
        listEL!.classList.remove('droppable')
    }

    configure(): void {
        this.element.addEventListener('dragover', this.dragOverHandler)
        this.element.addEventListener('dragleave', this.dragLeaveHandler)
        this.element.addEventListener('drop', this.dropHandler)
        projectState.addListener((projects: Project[])=>{
            const relevantProject = projects.filter(prj => {
                if (this.projectType === 'active'){
                    return prj.status === ProjectStatus.Active
                } else{
                    return prj.status === ProjectStatus.Finished
                }
            } )
            this.assignedProject = relevantProject
            this.renderProjects()
        })
    }

    private renderProjects(){
        const listEl:HTMLUListElement = document.getElementById(`${this.projectType}-projects-list`)! as HTMLUListElement
        listEl.innerHTML = ''
        for (const prjItem of this.assignedProject) {
            new ProjectItem(this.element.querySelector('ul')!.id, prjItem)
        }
    }

    renderContent(){
        const listId = `${this.projectType}-projects-list`;
        this.element.querySelector('ul')!.id = listId;
        this.element.querySelector('h2')!.textContent = this.projectType.toUpperCase()+' PROJECTS';
    }

}