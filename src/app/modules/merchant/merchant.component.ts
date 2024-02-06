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
import { MatSelectModule } from '@angular/material/select';
import { NoDataPlaceholderComponent } from 'app/shared/components/no-data-placeholder/no-data-placeholder.component';
import { DriversService } from '../drivers/services/drivers.service';
import { DriverModel } from '../drivers/models/driver.model';
import { MerchantListComponent } from './components/merchant-list/merchant-list.component';
@Component({
  selector: 'app-merchant',
  templateUrl: './merchant.component.html',
  styleUrls: ['./merchant.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [TranslocoModule, MatIconModule, MatSelectModule, NoDataPlaceholderComponent, MatButtonModule, NgFor, NgIf, MatTableModule, NgClass, CurrencyPipe, MatFormFieldModule, MatInputModule, MatTableModule, MatSortModule, MatPaginatorModule, MatMenuModule, MatSlideToggleModule],
})
export class MerchantComponent implements OnInit {
  cities: any[] = [];
  displayedColumns: string[] = ['full_name', 'entity', 'balance', 'loads', 'last_enter', 'actions'];
  @ViewChild(MatPaginator) paginator: MatPaginator;
  dataSource = new MatTableDataSource<DriverModel>([]);
  constructor(private _driversService: DriversService, protected _dialog?: MatDialog) {
  }

  ngOnInit() {
    this.getAllDrivers();
  }

  getAllDrivers() {
    this._driversService.getAll().subscribe((response) => {
      console.log(response)
      this.dataSource.data = response?.data;
    });
  }

  requests() {
    const dialog = this._dialog.open(MerchantListComponent, {
      minWidth: '40vw',
      maxWidth: '50vw',
      minHeight: '42vh',
      maxHeight: '80vh',
      autoFocus: false,
    })
    dialog.afterClosed()
      .subscribe(() => {
        this.getAllDrivers()
      })
  }

  delete(id: number) {
    this._driversService.delete(id).subscribe(() => {
      this.getAllDrivers()
    })
  }
}

