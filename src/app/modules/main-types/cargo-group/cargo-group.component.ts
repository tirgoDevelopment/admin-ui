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
import { CargoGroupService } from './services/cargo-group.service';
import { CargoGroupModel } from './models/cargo-group.model';
import { AddCargoGroupComponent } from './components/add-cargo-group/add-cargo-group.component';
import { NoDataPlaceholderComponent } from 'app/shared/components/no-data-placeholder/no-data-placeholder.component';

@Component({
  selector: 'app-cargo-group',
  templateUrl: './cargo-group.component.html',
  styleUrls: ['./cargo-group.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [TranslocoModule, MatIconModule, MatButtonModule, NoDataPlaceholderComponent, NgFor, NgIf, MatTableModule, NgClass, CurrencyPipe, MatFormFieldModule, MatInputModule, MatTableModule, MatSortModule, MatPaginatorModule, MatMenuModule, MatSlideToggleModule],
})
export class CargoGroupComponent extends UnsubscribeAble implements OnInit {
  displayedColumns: string[] = ['id', 'name', 'actions'];
     pageParams = {
    pageIndex: 1,
    pageSize: 10,
    totalPagesCount:1,
    sortBy: 'id',
    sortType: 'desc'
  };

  @ViewChild(MatPaginator) paginator: MatPaginator;

  dataSource = new MatTableDataSource<CargoGroupModel>([]);
  constructor(private _cargoGroupService: CargoGroupService, protected _dialog?: MatDialog) {
    super();
  }

  ngOnInit() {
    this.getAllCargoGroup(this.pageParams);
  }

  onPageChange(event: PageEvent): void {
    this.pageParams.pageSize = event.pageSize;
    this.pageParams.pageIndex = event.pageIndex+1;
    this.getAllCargoGroup(this.pageParams);
  }

  
  getAllCargoGroup(params?) {
    this._cargoGroupService.getAll(params).subscribe((response:any) => {
      this.dataSource.data = response.data;
      this.pageParams.pageSize = response?.data?.pageSize;
      this.pageParams.pageIndex = response?.data?.pageIndex;
      this.pageParams.totalPagesCount = response?.data?.totalPagesCount;
    });
  }

  add() {
    const dialog = this._dialog.open(AddCargoGroupComponent, {
      minWidth: '20vw',
      maxWidth: '25vw',
      minHeight: '30vh',
      maxHeight: '60vh',
      autoFocus: false,
    })
    dialog.afterClosed()
      .subscribe(() => {
        this.getAllCargoGroup(this.pageParams);
      })
  }

  edit(row: any[]) {
    const dialogRef = this._dialog.open(AddCargoGroupComponent, {
      minWidth: '20vw',
      maxWidth: '25vw',
      minHeight: '30vh',
      maxHeight: '60vh',
      autoFocus: false,
      data: row,
    });
    dialogRef.afterClosed()
      .subscribe(() => {
        this.getAllCargoGroup(this.pageParams);
      })
  }

  delete(id: number) {
    this._cargoGroupService.delete(id).subscribe(() => {
      this.getAllCargoGroup(this.pageParams);
    })
  }
}

