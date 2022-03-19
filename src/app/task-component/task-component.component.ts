import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Task, State, Difficulty } from '../app.component';

@Component({
  selector: 'app-task-component',
  templateUrl: './task-component.component.html',
  styleUrls: ['./task-component.component.scss'],
})
export class TaskComponentComponent implements OnInit {
  @Input() task: Task | undefined;
  @Output() delete = new EventEmitter<number>();
  @Output() right = new EventEmitter<number>();
  @Output() left = new EventEmitter<number>();

  state = State;
  difficulty = Difficulty;

  constructor() {}

  removeTask(id: number) {
    this.delete.emit(id);
  }
  moveRight(id: number) {
    this.right.emit(id);
  }
  moveLeft(id: number) {
    this.left.emit(id);
  }

  ngOnInit(): void {}
}
