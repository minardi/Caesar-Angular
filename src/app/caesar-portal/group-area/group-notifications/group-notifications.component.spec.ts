import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GroupNotificationsComponent } from './group-notifications.component';

describe('GroupNotificationsComponent', () => {
  let component: GroupNotificationsComponent;
  let fixture: ComponentFixture<GroupNotificationsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GroupNotificationsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GroupNotificationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
