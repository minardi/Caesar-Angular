import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';

@Component({
    selector: 'caesar-expert-list',
    templateUrl: './expert-list.component.html',
    styleUrls: ['./expert-list.component.scss']
})
export class ExpertListComponent implements OnInit {
    public toggleInputAndButton = true;
    public hiddenExperts = true;
    public hiddenButton = false;

    public expertName: string;
    public experts: string[];

    @Input() editState: boolean;
    @Input() editExperts: string[];

    @Output() onExpertsChanged = new EventEmitter<string[]>();

    constructor() {
    }

    ngOnInit() {
        setTimeout(() => this.checkState(), 0);
    }

    private checkState () {
        if (this.editState) {
            this.hiddenExperts = false;
            this.experts = this.editExperts;
        } else {
            this.experts = [];
        }
     }

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
