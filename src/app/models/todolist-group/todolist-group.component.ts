import { Component, OnInit } from '@angular/core';
import { ItemReorderEventDetail } from '@ionic/angular';

@Component({
  selector: 'app-todolist-group',
  templateUrl: './todolist-group.component.html',
  styleUrls: ['./todolist-group.component.scss'],
})
export class TodolistGroupComponent implements OnInit {

    // Exemple de todo
    todoGroup = [
      // Première liste avec son titre et ses tâches
      {
        id: 1,
        title: 'Liste 1',
        opened: true,
        tasks: [
          { id: 1, name: 'Faire les courses', done: false },
          { id: 2, name: 'Faire la vaisselle', done: false },
          { id: 3, name: 'Faire le ménage', done: false },
        ],
      },
      // Deuxième liste
      {
        id: 2,
        title: 'Liste 2',
        opened: false,
        tasks: [
          { id: 1, name: 'Faire les courses', done: false },
          { id: 2, name: 'Faire la vaisselle', done: false },
          { id: 3, name: 'Faire le ménage', done: false },
        ],
      },  
    ];

  constructor() { }

  ngOnInit() {}

  handleReorder(ev: CustomEvent<ItemReorderEventDetail>) {
    // The `from` and `to` properties contain the index of the item
    // when the drag started and ended, respectively
    console.log('Dragged from index', ev.detail.from, 'to', ev.detail.to);

    // Finish the reorder and position the item in the DOM based on
    // where the gesture ended. This method can also be called directly
    // by the reorder group
    ev.detail.complete();
  }

}
