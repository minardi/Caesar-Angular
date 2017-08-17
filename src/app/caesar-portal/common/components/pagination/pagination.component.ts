import {Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';

@Component({
  selector: 'caesar-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent implements OnInit, OnChanges {

  constructor() { }

  currentPage = 1;
  pagesQuantity: number;
  @Input() itemsPerPage: number;
  @Input() itemsQuantity: number;
  @Output() pageChange: EventEmitter<number> = new EventEmitter();

  ngOnInit() {}

  ngOnChanges(changes: SimpleChanges) {
    this.getItemsQuantity();
  }

  getItemsQuantity() {
    if (this.itemsQuantity && this.itemsQuantity !== 0) {
      this.pagesQuantity = Math.ceil(this.itemsQuantity / this.itemsPerPage);
    } else {
      this.pagesQuantity = 1;
    }
    return this.pagesQuantity;
  }

  pageIncrement() {
    if (this.currentPage < this.pagesQuantity) {
      this.currentPage++;
      this.pageChange.emit(this.currentPage);
    }
  }

  pageDecrement() {
    if (this.currentPage > 1) {
      this.currentPage--;
      this.pageChange.emit(this.currentPage);
    }
  }
}
