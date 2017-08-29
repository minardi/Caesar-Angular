import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'caesar-menu',
    templateUrl: './menu.component.html',
    styleUrls: ['./menu.component.scss']
})
export class MenuComponent {
    isHidden = true;
    distanceX = 5;

    constructor() { }

    public hideMenu(): void {
        this.isHidden = true;
    }

    public onOpenModal() {
        this.hideMenu();
    }
}
