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
import { FuseDrawerComponent } from '@fuse/components/drawer';
import { MatSelectModule } from '@angular/material/select';
import { DriversService } from './services/drivers.service';
import { DriverModel } from './models/driver.model';
import { AddDriverComponent } from './components/add-driver/add-driver.component';
import { DetailDriverComponent } from './components/detail-driver/detail-driver.component';

@Component({
  selector: 'app-drivers',
  templateUrl: './drivers.component.html',
  styleUrls: ['./drivers.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [TranslocoModule, MatIconModule, MatSelectModule, DetailDriverComponent, MatButtonModule, NgFor, NgIf, MatTableModule, NgClass, CurrencyPipe, MatFormFieldModule, MatInputModule, MatTableModule, MatSortModule, MatPaginatorModule, MatMenuModule, MatSlideToggleModule],

})
export class DriversComponent implements OnInit {
  cities: any[] = [];
  @ViewChild('settingsDrawer') settingsDrawer: FuseDrawerComponent;
  displayedColumns: string[] = ['full_name', 'phone', 'city', 'register_date', 'last_enter', 'rating', 'actions'];
  @ViewChild(MatPaginator) paginator: MatPaginator;

  dataSource = new MatTableDataSource<DriverModel>([]);
  constructor(
    private _driversService: DriversService, protected _dialog?: MatDialog) {
  }


  ngOnInit() {
    this.getAllAdmin();
  }

  getAllAdmin() {
    this._driversService.getAll().subscribe((response) => {
      this.dataSource.data = response.data;
    });
  }


  detail() {
    this._dialog.open(DetailDriverComponent, {
      width: '500px',
      height: '100vh',
      autoFocus: false,
      position: {
        top: '0',
        right: '0',
      },
      maxHeight:'100%'
    })
  }


  add() {
    const dialog = this._dialog.open(AddDriverComponent, {
      width: '700px',
      height: '350px',
      autoFocus: false,
    })
    dialog.afterClosed()
      .subscribe(() => {
        this.getAllAdmin()
      })
  }

  edit(row: any[]) {
    const dialogRef = this._dialog.open(AddDriverComponent, {
      width: '700px',
      height: '350px',
      autoFocus: false,
      data: row,
    });
    dialogRef.afterClosed()
      .subscribe(() => {
        this.getAllAdmin()
      })
  }

  delete(id: number) {
    this._driversService.delete(id).subscribe(() => {
      this.getAllAdmin()
    })
  }
}

