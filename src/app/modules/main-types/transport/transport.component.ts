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
import { AddTransportComponent } from './components/add-transport/add-transport.component';
import { TransportService } from './services/transport.service';
import { TransportModel } from './models/transport.model';
import { NoDataPlaceholderComponent } from 'app/shared/components/no-data-placeholder/no-data-placeholder.component';

@Component({
  selector: 'app-transport',
  templateUrl: './transport.component.html',
  styleUrls: ['./transport.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [TranslocoModule, MatIconModule, MatButtonModule, NoDataPlaceholderComponent, NgFor, NgIf, MatTableModule, NgClass, CurrencyPipe, MatFormFieldModule, MatInputModule, MatTableModule, MatSortModule, MatPaginatorModule, MatMenuModule, MatSlideToggleModule],

})
export class TransportComponent extends UnsubscribeAble implements OnInit {
  displayedColumns: string[] = ['name', 'actions'];
  pageParams = {
    page: 1,
    limit: 10,
    perPage: 10,
    sortBy: 'id',
    sortType: 'asc'
  };
  // displayedColumns: string[] = ['name', 'load_side', 'volume', 'capacity','actions'];
  @ViewChild(MatPaginator) paginator: MatPaginator;

  dataSource = new MatTableDataSource<TransportModel>([]);
  constructor(private _transportService: TransportService, protected _dialog?: MatDialog) {
    super();
  }

  ngOnInit() {
    this.getAllTransport(this.pageParams);
  }

  getAllTransport(params?) {
    this._transportService.getAll(params).subscribe((response) => {
      this.dataSource.data = response.data;
    });
  }


  onPageChange(event: PageEvent): void {
    this.pageParams.limit = event.pageSize;
    this.pageParams.perPage = event.pageSize;
    this.pageParams.page = event.pageIndex;
    this.getAllTransport(this.pageParams);
  }


  add() {
    const dialog = this._dialog.open(AddTransportComponent, {
      minWidth: '25vw',
      maxWidth: '30vw',
      minHeight: '20vh',
      maxHeight: '80vh',
      autoFocus: false,
    })
    dialog.afterClosed()
      .subscribe(() => {
        this.getAllTransport(this.pageParams);
      })
  }

  edit(row: any[]) {
    const dialogRef = this._dialog.open(AddTransportComponent, {
      minWidth: '25vw',
      maxWidth: '30vw',
      minHeight: '20vh',
      maxHeight: '80vh',
      autoFocus: false,
      data: row,
    });
    dialogRef.afterClosed()
      .subscribe(() => {
        this.getAllTransport(this.pageParams);
      })
  }

  delete(id: number) {
    this._transportService.delete(id).subscribe(() => {
      this.getAllTransport(this.pageParams);
    })
  }
}
