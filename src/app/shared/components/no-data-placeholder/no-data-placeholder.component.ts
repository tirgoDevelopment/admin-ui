import { ChangeDetectionStrategy, Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
	selector: 'app-no-data-placeholder',
	templateUrl: './no-data-placeholder.component.html',
	styleUrls: ['./no-data-placeholder.component.scss'],
	encapsulation: ViewEncapsulation.None,
	changeDetection: ChangeDetectionStrategy.OnPush,
	standalone: true,
})
export class NoDataPlaceholderComponent implements OnInit {
	constructor() { }

	ngOnInit(): void {
	}

}
