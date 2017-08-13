import { Component, Input } from '@angular/core';
import { GroupsComponent }   from './groups.component';
import { Group }   from './Group';

@Component({
    selector: 'group-item',
    template: `<div class="group-item" >{{groupItem.name}} {{groupItem.direction}}</div>`
  
   
})

export class GroupItemComponent {
     @Input() groupItem: Group;
}