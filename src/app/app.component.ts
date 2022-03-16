import { Component } from '@angular/core';

export interface Task {
  id: number;
  name: string;
  difficulty: string;
  toDo: boolean;
  inProgress: boolean;
  done: boolean;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  list: Task[] = [];

  addTask(name: string, difficulty: string) {
    this.list.push({
      id: this.list.length,
      name: name,
      difficulty: difficulty,
      toDo: true,
      inProgress: false,
      done: false,
    });
    console.log(this.list);
  }
  // moveRight(id: number) {
  //   if (this.list[id].toDo) {
  //     this.list[id].toDo = false;
  //     this.list[id].inProgress = true;
  //   } else if (this.list[id].inProgress) {
  //     this.list[id].inProgress = false;
  //     this.list[id].done = true;
  //   }
  // }
  // moveLeft(id: number) {
  //   if (this.list[id].inProgress) {
  //     this.list[id].toDo = true;
  //     this.list[id].inProgress = false;
  //   } else if (this.list[id].done) {
  //     this.list[id].inProgress = true;
  //     this.list[id].done = false;
  //   }
  // }
  // removeTask(id: number) {
  //   this.list = this.list.filter((item) => item.id !== id);
  // }
  removeTaskHandler(id: number) {
    // const user = this.users.find((user) => user?.id === id);
    // const index = this.users.indexOf(user);
    // this.users.splice(index, 1);
    this.list = this.list.filter((item) => item.id !== id);
  }
  moveRightHandler(id: number) {
    if (this.list[id].toDo) {
      this.list[id].toDo = false;
      this.list[id].inProgress = true;
    } else if (this.list[id].inProgress) {
      this.list[id].inProgress = false;
      this.list[id].done = true;
    }
  }
  moveLeftHandler(id: number) {
    if (this.list[id].inProgress) {
      this.list[id].toDo = true;
      this.list[id].inProgress = false;
    } else if (this.list[id].done) {
      this.list[id].inProgress = true;
      this.list[id].done = false;
    }
  }
}
