
    //drag drop
export interface Draggable{
    dragStartHandler(events: DragEvent): void
    dragEndHandler(event: DragEvent): void
}

export interface DragTarget{
    dragOverHandler(events: DragEvent): void
    dropHandler(events: DragEvent): void
    dragLeaveHandler(events: DragEvent): void
}


