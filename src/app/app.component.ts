import { Component } from '@angular/core';
import { of } from 'rxjs';

export interface Task {
  id: number;
  name: string;
  difficulty: Difficulty;
  state: State;
}
export enum State {
  toDo,
  inProgress,
  done,
}
export enum Difficulty {
  Easy = 'Easy',
  Medium = 'Medium',
  Hard = 'Hard',
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  toDo: Task[] = [];
  inProgress: Task[] = [];
  done: Task[] = [];

  state = State;

  addTask(name: string, difficulty: string) {
    this.toDo.push({
      id: this.toDo.length,
      name: name,
      difficulty:
        difficulty === 'Easy'
          ? Difficulty.Easy
          : difficulty === 'Medium'
          ? Difficulty.Medium
          : Difficulty.Hard,
      state: State.toDo,
    });
  }

  removeTaskHandler(id: number) {
    const task = this.toDo.find((task) => task?.id === id);
    const index = this.toDo.indexOf(task!);
    this.toDo.splice(index, 1);
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
  }
}
