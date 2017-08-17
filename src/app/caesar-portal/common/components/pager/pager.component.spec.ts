import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import {PagerComponent} from './pager.component';

describe('PagerComponent', () => {
  let component: PagerComponent;
  let fixture: ComponentFixture<PagerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PagerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });

  it('currentPage should be decremented by 1', () => {
    component.currentPage = 3;
    component.pagePrevious();
    expect(component.currentPage).toBe(2);
  });

  it('currentPage should be incremented by 1', () => {
    component.currentPage = 3;
    component.pagesQuantity = 6;
    component.pageNext();
    expect(component.currentPage).toBe(4);
  });

  it('pagesQuantity should be 4', () => {
    component.itemsQuantity = 35;
    component.itemsPerPage = 10;
    component.getItemsQuantity();
    expect(component.pagesQuantity).toBe(4);
  });
});
