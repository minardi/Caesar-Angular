import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CaesarHomeComponent } from './caesar-home.component';

describe('CaesarHomeComponent', () => {
  let component: CaesarHomeComponent;
  let fixture: ComponentFixture<CaesarHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CaesarHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CaesarHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
