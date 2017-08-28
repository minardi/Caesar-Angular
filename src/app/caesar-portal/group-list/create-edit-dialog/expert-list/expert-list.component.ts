import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
    selector: 'expert-list',
    templateUrl: './expert-list.component.html',
    styleUrls: ['./expert-list.component.scss']
})
export class ExpertListComponent implements OnInit {
    public toggleInputAndButton: boolean = true;
    public hiddenExperts: boolean = true;
    public hiddenButton: boolean = false;

    public expertName: string;
    public experts: string[] = [];

    constructor() {
    }

    ngOnInit() {
    }

    @Output() onExpertsChanged = new EventEmitter<string[]>();

    public sendExperts(): void {
        this.onExpertsChanged.emit(this.experts);
    }    

    private toggleInputButton (): void {
        this.toggleInputAndButton = !this.toggleInputAndButton;
    }

    public cancelExpert(): void {
        this.expertName = '';

        this.toggleInputButton();
    }

    public addExpert(): void {
        this.toggleInputButton();
    }

    public saveExpert(): void {
        this.experts.push(this.expertName);
        this.expertName = '';
        this.hiddenExperts = false;

        this.toggleInputButton();
        this.sendExperts();
    }

    public deleteExpert(expert: string): void {
        const indexOfExpert = this.experts.indexOf(expert);

        this.experts.splice(indexOfExpert, 1);

        this.sendExperts();
        this.checkPresenceOfExperts();
    }

    private checkPresenceOfExperts(): void {
        if (!this.experts.length) {
            this.hiddenExperts = true;
        } 
    }
}
