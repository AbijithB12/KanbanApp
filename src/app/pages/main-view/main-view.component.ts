import { Component, OnInit } from '@angular/core';
import {
  CdkDragDrop,
  moveItemInArray,
  transferArrayItem,
  CdkDrag,
  CdkDropList,
  CdkDropListGroup
} from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-main-view',
  templateUrl: './main-view1.component.html',
  styleUrl: './main-view1.component.css',
})
export class MainViewComponent implements OnInit{
  Backlog:string[] = [];
  Doing:string[]=[];
  Done:string[]=[];
  Review:string[]=[];

  constructor(){}
  ngOnInit() {
    const storedTask=localStorage.getItem('task-Backlog');
    if(storedTask){
      this.Backlog=JSON.parse(storedTask);
    }
    const storedTask2=localStorage.getItem('task-Doing');
    if(storedTask2){
      this.Doing=JSON.parse(storedTask2);
    }
  }
  onClick(task:string){
    if(task.trim()!==''){
      this.Backlog.push(task);
      console.log(task);
      localStorage.setItem('task-Backlog',JSON.stringify(this.Backlog));
      localStorage.setItem('task-Doing',JSON.stringify(this.Doing));
    }
  }
  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex,
      );
    }
  }
}
 
