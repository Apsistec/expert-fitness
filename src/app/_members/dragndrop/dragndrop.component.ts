import {
  CdkDragDrop,
  moveItemInArray,
  transferArrayItem
} from '@angular/cdk/drag-drop';
import { Component } from '@angular/core';

@Component({
  selector: 'app-dragndrop',
  templateUrl: './dragndrop.component.html',
  styleUrls: ['./dragndrop.component.scss']
})
export class DragndropComponent {
  players = [
    'Player 01',
    'Player 10',
    'Player 11',
    'Player 12',
    'Player 13',
    'Player 14',
    'Player 15',
    'Player 16',
    'Player 17',
    'Player 18',
    'Player 19',
    'Player 21',
    'Player 31',
    'Player 41'
  ];

  myLineup = [];

  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    }
  }
}
