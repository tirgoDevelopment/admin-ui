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
import { AddCargoPackagesComponent } from './components/add-cargo-packages/add-cargo-packages.component';
import { CargoPackagesService } from './services/cargo-packages.service';
import { CargoPackagesModel } from './models/cargo-packages.model';
@Component({
  selector: 'app-cargo-packages',
  templateUrl: './cargo-packages.component.html',
  styleUrls: ['./cargo-packages.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [TranslocoModule, MatIconModule, MatButtonModule, NoDataPlaceholderComponent, NgFor, NgIf, MatTableModule, NgClass, CurrencyPipe, MatFormFieldModule, MatInputModule, MatTableModule, MatSortModule, MatPaginatorModule, MatMenuModule, MatSlideToggleModule],
})
export class CargoPackagesComponent extends UnsubscribeAble implements OnInit {
  displayedColumns: string[] = ['name',  'actions'];
  @ViewChild(MatPaginator) paginator: MatPaginator;
     pageParams = {
    pageIndex: 1,
    pageSize: 10,
    totalPagesCount:1,
    sortBy: 'id',
    sortType: 'desc'
  };

  dataSource = new MatTableDataSource<CargoPackagesModel>([]);
  constructor(private _cargoPackageService: CargoPackagesService, protected _dialog?: MatDialog) {
    super();
  }

  ngOnInit() {
    this.getAllCargoStatus(this.pageParams);
  }

  getAllCargoStatus(params?) {
    this._cargoPackageService.getAll(params).subscribe((response:any) => {
      this.dataSource.data = response.data;
      this.pageParams.pageSize = response?.data?.pageSize;
      this.pageParams.pageIndex = response?.data?.pageIndex;
      this.pageParams.totalPagesCount = response?.data?.totalPagesCount;
    });
  }
  
  onPageChange(event: PageEvent): void {
    this.pageParams.pageSize = event.pageSize;
    this.pageParams.pageIndex = event.pageIndex+1;
    this.getAllCargoStatus(this.pageParams);
  }

  add() {
    const dialog = this._dialog.open(AddCargoPackagesComponent, {
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
    const dialogRef = this._dialog.open(AddCargoPackagesComponent, {
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
    this._cargoPackageService.delete(id).subscribe(() => {
      this.getAllCargoStatus(this.pageParams);
    })
  }
}