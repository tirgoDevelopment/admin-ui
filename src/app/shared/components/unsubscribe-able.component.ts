import {Component, OnDestroy} from '@angular/core';
import { Subject } from 'rxjs';

@Component({
	selector: 'app-unsubscribe-able',
	template: ''
})
export class UnsubscribeAble implements OnDestroy {

	protected _unsubscribeAll: Subject<any> = new Subject();

	ngOnDestroy(): void {
		this._unsubscribeAll.next;
		this._unsubscribeAll.complete();
	}
}
