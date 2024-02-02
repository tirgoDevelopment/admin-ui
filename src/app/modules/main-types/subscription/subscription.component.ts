import { CurrencyPipe, NgClass, NgFor, NgIf } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { TranslocoModule } from '@ngneat/transloco';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatMenuModule } from '@angular/material/menu';
import { MatDialog } from '@angular/material/dialog';
import { UnsubscribeAble } from 'app/shared/components/unsubscribe-able.component';
import { SubscriptionModel } from './models/subscription.model';
import { SubscriptionService } from './services/subscription.service';
import { AddSubscriptionComponent } from './components/add-subscription/add-subscription.component';
import { NoDataPlaceholderComponent } from 'app/shared/components/no-data-placeholder/no-data-placeholder.component';

@Component({
  selector: 'app-subscription',
  templateUrl: './subscription.component.html',
  styleUrls: ['./subscription.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [TranslocoModule, MatIconModule, MatButtonModule, NoDataPlaceholderComponent, NgFor, NgIf, MatTableModule, NgClass, CurrencyPipe, MatFormFieldModule, MatInputModule, MatTableModule, MatSortModule, MatPaginatorModule, MatMenuModule, MatSlideToggleModule],

})
export class SubscriptionComponent extends UnsubscribeAble implements OnInit {
  displayedColumns: string[] = ['name', 'duration', 'price', 'actions'];
  @ViewChild(MatPaginator) paginator: MatPaginator;
  dataSource = new MatTableDataSource<SubscriptionModel>([]);
  constructor(private _subscriptionService: SubscriptionService, protected _dialog?: MatDialog) {
    super();
  }

  ngOnInit() {
    this.getAllSubscription();
  }

  getAllSubscription() {
    this._subscriptionService.getAll().subscribe((response) => {
      this.dataSource.data = response.data;
    });
  }

  add() {
    const dialog = this._dialog.open(AddSubscriptionComponent, {
      minWidth: '25vw',
      maxWidth: '30vw',
      minHeight: '35vh',
      maxHeight: '80vh',
      autoFocus: false,
    })
    dialog.afterClosed()
      .subscribe(() => {
        this.getAllSubscription()
      })
  }

  edit(row: any[]) {
    const dialogRef = this._dialog.open(AddSubscriptionComponent, {
      minWidth: '25vw',
      maxWidth: '30vw',
      minHeight: '35vh',
      maxHeight: '80vh',
      autoFocus: false,
      data: row,
    });
    dialogRef.afterClosed()
      .subscribe(() => {
        this.getAllSubscription()
      })
  }

  delete(id: number) {
    this._subscriptionService.delete(id).subscribe(() => {
      this.getAllSubscription()
    })
  }
}
