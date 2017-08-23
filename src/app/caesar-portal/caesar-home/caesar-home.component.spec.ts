import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpModule } from '@angular/http';
import { RouterTestingModule } from '@angular/router/testing';
import { BsModalRef } from 'ngx-bootstrap/modal/modal-options.class';
import { BsModalService } from 'ngx-bootstrap/modal';

import { CaesarHomeComponent } from './caesar-home.component';
import { GroupAreaModule } from '../group-area/group-area.module';
import { GroupListModule } from '../group-list/group-list.module';
import { ProfileModule } from '../profile/profile.module';
import { GroupService } from './../common/services/group.service';

describe('CaesarHomeComponent', () => {
    let component: CaesarHomeComponent;
    let fixture: ComponentFixture<CaesarHomeComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ CaesarHomeComponent ],
            imports: [
                GroupListModule,
                GroupAreaModule,
                ProfileModule,
                HttpModule,
                RouterTestingModule
            ],
            providers: [
                GroupService,
                BsModalRef,
                BsModalService
            ]
        })
       .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(CaesarHomeComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    xit('should be created', () => {
        expect(component).toBeTruthy();
    });
});
