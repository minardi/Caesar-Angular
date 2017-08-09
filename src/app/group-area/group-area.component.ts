import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'group-area',
  templateUrl: './group-area.component.html',
  styleUrls: ['./group-area.component.css']
})

export class GroupAreaComponent implements OnInit {
	activeTab = 'info';

	onTabChange (tabName: string) {
		this.activeTab = tabName;
	}

	ngOnInit () {
	}
}
