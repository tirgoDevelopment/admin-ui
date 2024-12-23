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
import { CurrencyService } from './services/currency.service';
import { CurrencyModel } from './models/currency.model';
import { AddCurrencyComponent } from './components/add-currency/add-currency.component';
import { NoDataPlaceholderComponent } from 'app/shared/components/no-data-placeholder/no-data-placeholder.component';

@Component({
  selector: 'app-currency',
  templateUrl: './currency.component.html',
  styleUrls: ['./currency.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [TranslocoModule, MatIconModule, MatButtonModule, NoDataPlaceholderComponent, NgFor, NgIf, MatTableModule, NgClass, CurrencyPipe, MatFormFieldModule, MatInputModule, MatTableModule, MatSortModule, MatPaginatorModule, MatMenuModule, MatSlideToggleModule],

})
export class CurrencyComponent extends UnsubscribeAble implements OnInit {
  displayedColumns: string[] = [ 'name','code', 'actions'];
  @ViewChild(MatPaginator) paginator: MatPaginator;
     pageParams = {
    pageIndex: 1,
    pageSize: 10,
    totalPagesCount:1,
    sortBy: 'id',
    sortType: 'desc'
  };

  dataSource = new MatTableDataSource<CurrencyModel>([]);
  constructor(private _currencyService: CurrencyService, protected _dialog?: MatDialog) {
    super();
  }

  ngOnInit() {
    this.getAllCurrency(this.pageParams);
  }

  getAllCurrency(params?) {
    this._currencyService.getAll(params).subscribe((response:any) => {
      this.dataSource.data = response.data;
      this.pageParams.pageSize = response?.data?.pageSize;
      this.pageParams.pageIndex = response?.data?.pageIndex;
      this.pageParams.totalPagesCount = response?.data?.totalPagesCount;
    });
  }

  
  onPageChange(event: PageEvent): void {
    this.pageParams.pageSize = event.pageSize;
    this.pageParams.pageIndex = event.pageIndex+1;
    this.getAllCurrency(this.pageParams);
  }
  
  
  add() {
    const dialog = this._dialog.open(AddCurrencyComponent, {
      minWidth: '25vw',
      maxWidth: '30vw',
      minHeight: '30vh',
      maxHeight: '80vh',
      autoFocus: false,
    })
    dialog.afterClosed()
      .subscribe(() => {
        this.getAllCurrency(this.pageParams);
      })
  }

  edit(row: any[]) {
    const dialogRef = this._dialog.open(AddCurrencyComponent, {
      minWidth: '25vw',
      maxWidth: '30vw',
      minHeight: '30vh',
      maxHeight: '80vh',
      autoFocus: false,
      data: row,
    });
    dialogRef.afterClosed()
      .subscribe(() => {
        this.getAllCurrency(this.pageParams);
      })
  }

  delete(id: number) {
    this._currencyService.delete(id).subscribe(() => {
      this.getAllCurrency(this.pageParams);
    })
  }
}