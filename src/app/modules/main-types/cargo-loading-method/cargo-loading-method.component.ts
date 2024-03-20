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
import { NoDataPlaceholderComponent } from 'app/shared/components/no-data-placeholder/no-data-placeholder.component';
import { CargoLoadingMethodService } from './services/cargo-loading-method.service';
import { AddCargoLoadingMethodComponent } from './components/add-cargo-loading-method/add-cargo-loading-method.component';
import { CargoLoadingModel } from './models/cargo-loading.model';

@Component({
  selector: 'app-cargo-loading-method',
  templateUrl: './cargo-loading-method.component.html',
  styleUrls: ['./cargo-loading-method.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [TranslocoModule, MatIconModule, MatButtonModule, NoDataPlaceholderComponent, NgFor, NgIf, MatTableModule, NgClass, CurrencyPipe, MatFormFieldModule, MatInputModule, MatTableModule, MatSortModule, MatPaginatorModule, MatMenuModule, MatSlideToggleModule],
})
export class CargoLoadingMethodComponent extends UnsubscribeAble implements OnInit {
  displayedColumns: string[] = ['name', 'actions'];
  @ViewChild(MatPaginator) paginator: MatPaginator;
  pageParams = {
    page: 0,
    limit: 10,
    perPage: 10,
    sortBy: 'id',
    sortType: 'desc'
  };
  dataSource = new MatTableDataSource<CargoLoadingModel>([]);
  constructor(private _cargoLoadingService: CargoLoadingMethodService, protected _dialog?: MatDialog) {
    super();
  }

  ngOnInit() {
    this.getAllCargoStatus(this.pageParams);
  }

  getAllCargoStatus(params?) {
    this._cargoLoadingService.getAll(params).subscribe((response) => {
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
    const dialog = this._dialog.open(AddCargoLoadingMethodComponent, {
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
    const dialogRef = this._dialog.open(AddCargoLoadingMethodComponent, {
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
    this._cargoLoadingService.delete(id).subscribe(() => {
      this.getAllCargoStatus(this.pageParams);
    })
  }
}