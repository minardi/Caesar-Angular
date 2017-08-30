import { Component, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { BsModalService, ModalDirective } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/modal-options.class';
import { HostListener } from '@angular/core';

import { GroupService } from '../../common/services/group.service';

@Component({
    selector: 'caesar-delete-dialog',
    templateUrl: './delete-dialog.component.html',
    styleUrls: ['./delete-dialog.component.scss'],
})

export class DeleteDialogComponent {
    groupId: number;
    groupName: string;
    @Output() onGroupDeleted = new EventEmitter<number>();
    @HostListener('document:keypress', ['$event'])

    handleKeyboardEvent(event: KeyboardEvent) {
        const enterButton = 13;
        if (event.keyCode === enterButton) {
            this.deleteGroup();
        }
    }

    constructor(public bsModalRef: BsModalRef, private groupService: GroupService) { }

    deleteGroup() {
        if (this.groupId > 0) {
            this.groupService.delete(this.groupId).subscribe(
                data => {
                    this.bsModalRef.hide();
                    this.onGroupDeleted.emit(this.groupId);
                },
                error => console.log(error));
        }
    }
}

