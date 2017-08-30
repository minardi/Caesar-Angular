import { Input, Component, OnInit } from '@angular/core';
import { Group } from '../../common/models/group';

@Component({
    selector: 'caesar-group-item',
    templateUrl: './group-item.component.html',
    styleUrls: ['./group-item.component.scss']
})

export class GroupItemComponent implements OnInit {
    @Input() group: Group;
    constructor() { }

    ngOnInit() { }
}

