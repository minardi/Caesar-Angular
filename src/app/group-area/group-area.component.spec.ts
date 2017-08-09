import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GroupAreaComponent } from './group-area.component';

describe('GroupAreaComponent', () => {
  let component: GroupAreaComponent;
  let fixture: ComponentFixture<GroupAreaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GroupAreaComponent ]
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
