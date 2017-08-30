import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpModule } from '@angular/http';

import { GroupListComponent } from './group-list.component';
import { GroupItemComponent } from './group-item/group-item.component';

describe('GroupListComponent', () => {
    let component: GroupListComponent;
    let fixture: ComponentFixture<GroupListComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [
                GroupListComponent,
                GroupItemComponent
            ],
            imports: [HttpModule]
        })
        .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(GroupListComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should be created', () => {
        expect(component).toBeTruthy();
    });
});
