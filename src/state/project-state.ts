
import { Project, ProjectStatus } from "../models/project-model";

    type Listener = (items: Project[]) => void

    export class ProjectState{
        private listeners: Listener[] = [];
        private projects:Project[] = [];
    
        addProject(title: string, description: string, peoples : number) {
            this.projects.push(new Project(title, description, peoples, ProjectStatus.Active))
            for (const listener of this.listeners) {
                listener(this.projects.slice())
            }
        }
    
        addListener(listener: Listener){
            this.listeners.push(listener)
        }
    
        moveProject(projectId: string, newStatus: ProjectStatus){
            const project = this.projects.find(prj=> prj.Id === projectId)
            if (project){
                project.status = newStatus
                for (const listener of this.listeners) {
                    listener(this.projects.slice())
                }
            }
    
        }
    }
    
    export const projectState = new ProjectState();
