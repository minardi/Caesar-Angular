import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GroupAreaComponent } from './group-area.component';
import { GroupStudentsComponent } from './group-students/group-students.component';
import { GroupInfoComponent } from './group-info/group-info.component';
import { GroupNotificationsComponent } from './group-notifications/group-notifications.component';
import { GroupScheduleComponent } from './group-schedule/group-schedule.component';

describe('GroupAreaComponent', () => {
  let component: GroupAreaComponent;
  let fixture: ComponentFixture<GroupAreaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        GroupAreaComponent,
        GroupStudentsComponent,
        GroupInfoComponent,
        GroupNotificationsComponent,
        GroupScheduleComponent
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GroupAreaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
