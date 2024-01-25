import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DrawerService {

  private isDrawerOpenSubject = new Subject<boolean>();
  isDrawerOpen$ = this.isDrawerOpenSubject.asObservable();

  openDrawer() {
    this.isDrawerOpenSubject.next(true);
  }

  closeDrawer() {
    this.isDrawerOpenSubject.next(false);
  }

}
