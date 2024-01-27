import { Component, OnInit, ViewEncapsulation, Input } from '@angular/core';

@Component({
	selector: 'app-no-data-placeholder',
	templateUrl: './no-data-placeholder.component.html',
	styleUrls: ['./no-data-placeholder.component.scss'],
	encapsulation: ViewEncapsulation.None,
	standalone: true,
})
export class NoDataPlaceholderComponent implements OnInit {
	constructor() { }

	ngOnInit(): void {
	}

}
