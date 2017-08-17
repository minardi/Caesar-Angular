import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginationComponent } from './pagination.component';

describe('PaginationComponent', () => {
  let component: PaginationComponent;
  let fixture: ComponentFixture<PaginationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaginationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaginationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });

  it('currentPage should be decremented by 1', () => {
    component.currentPage = 3;
    component.pageDecrement();
    expect(component.currentPage).toBe(2);
  });

  it('currentPage should be incremented by 1', () => {
    component.currentPage = 3;
    component.pagesQuantity = 6;
    component.pageIncrement();
    expect(component.currentPage).toBe(4);
  });

  it('pagesQuantity should be 4', () => {
    component.itemsQuantity = 35;
    component.itemsPerPage = 10;
    component.getItemsQuantity();
    expect(component.pagesQuantity).toBe(4);
  });
});
