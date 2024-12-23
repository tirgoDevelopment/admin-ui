import { CurrencyPipe, NgClass, NgFor, NgIf } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { TranslocoModule } from '@ngneat/transloco';
import { MatPaginator, MatPaginatorModule, PageEvent } from '@angular/material/paginator';
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
     pageParams = {
    pageIndex: 1,
    pageSize: 10,
    totalPagesCount:1,
    sortBy: 'id',
    sortType: 'desc'
  };

  @ViewChild(MatPaginator) paginator: MatPaginator;
  dataSource = new MatTableDataSource<SubscriptionModel>([]);
  constructor(private _subscriptionService: SubscriptionService, protected _dialog?: MatDialog) {
    super();
  }

  ngOnInit() {
    this.getAllSubscription(this.pageParams);
  }

  getAllSubscription(params?) {
    this._subscriptionService.getAll(params).subscribe((response:any) => {
      this.dataSource.data = response.data;
      this.pageParams.pageSize = response?.data?.pageSize;
      this.pageParams.pageIndex = response?.data?.pageIndex;
      this.pageParams.totalPagesCount = response?.data?.totalPagesCount;
    });
  }

  onPageChange(event: PageEvent): void {
    this.pageParams.pageSize = event.pageSize;
    this.pageParams.pageIndex = event.pageIndex+1;
    this.getAllSubscription(this.pageParams);
  }
  
  add() {
    const dialog = this._dialog.open(AddSubscriptionComponent, {
      minWidth: '35vw',
      maxWidth: '40vw',
      minHeight: '45vh',
      maxHeight: '60vh',
      autoFocus: false,
    })
    dialog.afterClosed()
      .subscribe(() => {
        this.getAllSubscription(this.pageParams);
      })
  }

  edit(row: any[]) {
    const dialogRef = this._dialog.open(AddSubscriptionComponent, {
      minWidth: '35vw',
      maxWidth: '40vw',
      minHeight: '45vh',
      maxHeight: '60vh',
      autoFocus: false,
      data: row,
    });
    dialogRef.afterClosed()
      .subscribe(() => {
        this.getAllSubscription(this.pageParams);
      })
  }

  delete(id: number) {
    this._subscriptionService.delete(id).subscribe(() => {
      this.getAllSubscription(this.pageParams);
    })
  }
}
