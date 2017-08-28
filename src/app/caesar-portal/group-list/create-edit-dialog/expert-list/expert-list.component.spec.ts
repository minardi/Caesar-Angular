import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpertListComponent } from './expert-list.component';

describe('ExpertListComponent', () => {
  let component: ExpertListComponent;
  let fixture: ComponentFixture<ExpertListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExpertListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExpertListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
