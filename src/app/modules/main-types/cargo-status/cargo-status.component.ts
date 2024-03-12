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
import { CargoStatusService } from './services/cargo-status.service';
import { CargoStatusModel } from './models/cargo-status.model';
import { AddCargoStatusComponent } from './components/add-cargo-status/add-cargo-status.component';
import { NoDataPlaceholderComponent } from 'app/shared/components/no-data-placeholder/no-data-placeholder.component';

@Component({
  selector: 'app-cargo-status',
  templateUrl: './cargo-status.component.html',
  styleUrls: ['./cargo-status.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [TranslocoModule, MatIconModule, MatButtonModule, NoDataPlaceholderComponent, NgFor, NgIf, MatTableModule, NgClass, CurrencyPipe, MatFormFieldModule, MatInputModule, MatTableModule, MatSortModule, MatPaginatorModule, MatMenuModule, MatSlideToggleModule],

})
export class CargoStatusComponent extends UnsubscribeAble implements OnInit {
  displayedColumns: string[] = ['name', 'code', 'color', 'actions'];
  @ViewChild(MatPaginator) paginator: MatPaginator;
  pageParams = {
    page: 1,
    limit: 10,
    perPage: 10,
    sortBy: 'id',
    sortType: 'asc'
  };
  dataSource = new MatTableDataSource<CargoStatusModel>([]);
  constructor(private _cargoStatusService: CargoStatusService, protected _dialog?: MatDialog) {
    super();
  }

  ngOnInit() {
    this.getAllCargoStatus(this.pageParams);
  }

  getAllCargoStatus(params?) {
    this._cargoStatusService.getAll(params).subscribe((response) => {
      this.dataSource.data = response.data;
    });
  }
  
  onPageChange(event: PageEvent): void {
    this.pageParams.limit = event.pageSize;
    this.pageParams.perPage = event.pageSize;
    this.pageParams.page = event.pageIndex;
    this.getAllCargoStatus(this.pageParams);
  }

  add() {
    const dialog = this._dialog.open(AddCargoStatusComponent, {
      minWidth: '25vw',
      maxWidth: '30vw',
      minHeight: '20vh',
      maxHeight: '80vh',
      autoFocus: false,
    })
    dialog.afterClosed()
      .subscribe(() => {
        this.getAllCargoStatus(this.pageParams);
      })
  }

  edit(row: any[]) {
    const dialogRef = this._dialog.open(AddCargoStatusComponent, {
      minWidth: '25vw',
      maxWidth: '30vw',
      minHeight: '20vh',
      maxHeight: '80vh',
      autoFocus: false,
      data: row,
    });
    dialogRef.afterClosed()
      .subscribe(() => {
        this.getAllCargoStatus(this.pageParams);
      })
  }

  delete(id: number) {
    this._cargoStatusService.delete(id).subscribe(() => {
      this.getAllCargoStatus(this.pageParams);
    })
  }
}