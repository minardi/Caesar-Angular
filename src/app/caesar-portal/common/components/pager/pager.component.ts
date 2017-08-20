import {Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';

@Component({
  selector: 'caesar-pager',
  templateUrl: './pager.component.html',
  styleUrls: ['./pager.component.scss']
})
export class PagerComponent implements OnInit, OnChanges {

  constructor() { }

  pagesQuantity: number;
  @Input() currentPage: number;
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

  pageNext() {
    if (this.currentPage < this.pagesQuantity) {
      this.currentPage++;
      this.pageChange.emit(this.currentPage);
    }
  }

  pagePrevious() {
    if (this.currentPage > 1) {
      this.currentPage--;
      this.pageChange.emit(this.currentPage);
    }
  }
}
