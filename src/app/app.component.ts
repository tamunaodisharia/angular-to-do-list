import { Component } from '@angular/core';
import { of } from 'rxjs';

export interface Task {
  id: number;
  name: string;
  difficulty: string;
  state: State;
  // toDo: boolean;
  // inProgress: boolean;
  // done: boolean;
}
export enum State {
  toDo,
  inProgress,
  done,
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  list: Task[] = [];
  toDo: Task[] = [];
  inProgress: Task[] = [];
  done: Task[] = [];
  state = State;
  addTask(name: string, difficulty: string) {
    this.toDo.push({
      id: this.toDo.length,
      name: name,
      difficulty: difficulty,
      state: State.toDo,
      // toDo: true,
      // inProgress: false,
      // done: false,
    });
  }

  removeTaskHandler(id: number) {
    const task = this.toDo.find((task) => task?.id === id);
    const index = this.toDo.indexOf(task!);
    this.toDo.splice(index, 1);
    //this.list = this.list.filter((item) => item.id !== id);
  }
  moveRightHandler(id: number) {
    let task = this.toDo.find((task) => task?.id === id);
    if (!task) {
      task = this.inProgress.find((task) => task?.id === id);
      if (task) {
        const index = this.inProgress.indexOf(task);
        this.inProgress.splice(index, 1);
        task.state = State.done;
        this.done.push(task);
      }
    } else {
      const index = this.toDo.indexOf(task);
      this.toDo.splice(index, 1);
      task.state = State.inProgress;
      this.inProgress.push(task);
    }

    // if (this.list[id].toDo) {
    //   this.list[id].toDo = false;
    //   this.list[id].inProgress = true;
    // } else if (this.list[id].inProgress) {
    //   this.list[id].inProgress = false;
    //   this.list[id].done = true;
    // }
  }
  moveLeftHandler(id: number) {
    let task = this.inProgress.find((task) => task?.id === id);
    if (!task) {
      task = this.done.find((task) => task?.id === id);
      if (task) {
        const index = this.inProgress.indexOf(task);
        this.done.splice(index, 1);
        task.state = State.inProgress;
        this.inProgress.push(task);
      }
    } else {
      const index = this.inProgress.indexOf(task);
      this.inProgress.splice(index, 1);
      task.state = State.toDo;
      this.toDo.push(task);
    }

    // if (this.list[id].inProgress) {
    //   this.list[id].toDo = true;
    //   this.list[id].inProgress = false;
    // } else if (this.list[id].done) {
    //   this.list[id].inProgress = true;
    //   this.list[id].done = false;
    // }
  }
}
