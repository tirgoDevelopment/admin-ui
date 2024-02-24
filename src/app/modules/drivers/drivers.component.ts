import { CurrencyPipe, DatePipe, NgClass, NgFor, NgIf } from '@angular/common';
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
import { DriversService } from './services/drivers.service';
import { DriverModel } from './models/driver.model';
import { AddDriverComponent } from './components/add-driver/add-driver.component';
import { DetailDriverComponent } from './components/detail-driver/detail-driver.component';
import { NoDataPlaceholderComponent } from 'app/shared/components/no-data-placeholder/no-data-placeholder.component';
import { SendPushComponent } from './components/send-push/send-push.component';
import { AddTransportComponent } from './components/add-transport/add-transport.component';
import { BlockDriverComponent } from './components/block-driver/block-driver.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddVerificationComponent } from './components/add-verification/add-verification.component';
import { TypesService } from 'app/shared/services/types.service';
import { MatDatepickerModule } from '@angular/material/datepicker';

@Component({
  selector: 'app-drivers',
  templateUrl: './drivers.component.html',
  styleUrls: ['./drivers.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [TranslocoModule, DatePipe, MatIconModule,  MatDatepickerModule, FormsModule, ReactiveFormsModule, MatSelectModule, NoDataPlaceholderComponent, DetailDriverComponent, MatButtonModule, NgFor, NgIf, MatTableModule, NgClass, CurrencyPipe, MatFormFieldModule, MatInputModule, MatTableModule, MatSortModule, MatPaginatorModule, MatMenuModule, MatSlideToggleModule],
})
export class DriversComponent implements OnInit {
  cities: any[] = [];
  transportKinds: any[] = [];
  filters = {
    driverId: '',
    firstName:'',
    phoneNumber: '',
    transportKindId: '',
    isSubscribed: '',
    isVerified:'',
    createdFrom: '',
    createdAtTo: '',
    lastLoginFrom: '',
    lastLoginTo: '',
  };
  displayedColumns: string[] = ['id','full_name', 'phone', 'type_transport', 'register_date', 'last_enter', 'status', 'subscription', 'actions'];
  @ViewChild(MatPaginator) paginator: MatPaginator;

  dataSource = new MatTableDataSource<DriverModel>([]);
  constructor(
    private _driversService: DriversService, protected _dialog: MatDialog, private _typeService:TypesService) {
  }


  ngOnInit() {
    this.getAllDrivers();
    this._typeService.getTransportKinds().subscribe((response:any) => {
      this.transportKinds = response.data;
    })
  }

  clearFilters() {
    this.filters = {
      driverId: '',
      firstName:'',
      phoneNumber: '',
      transportKindId: '',
      isSubscribed: '',
      isVerified:'',
      createdFrom: '',
      createdAtTo: '',
      lastLoginFrom: '',
      lastLoginTo: '',
    };
  }

  filterDrivers() {

  }

  verification(row) {
    const dialog = this._dialog.open(AddVerificationComponent, {
      minWidth: '60vw',
      maxWidth: '80vw',
      minHeight: '60vh',
      maxHeight: '100vh',
      disableClose: true,
      autoFocus: false,
      data: row
    })
    dialog.afterClosed()
      .subscribe(() => {
        this.getAllDrivers()
      })
  }

  getAllDrivers() {
    this._driversService.getAll(this.filters).subscribe((response) => {
      this.dataSource.data = response?.data;
    });
  }


  send() {
    this._dialog.open(SendPushComponent, {
      minWidth: '20vw',
      maxWidth: '30vw',
      minHeight: '30vh',
      maxHeight: '50vh',
      autoFocus: false,
    })
  }

  detail(id: number) {
    this._dialog.open(DetailDriverComponent, {
      width: '500px',
      height: '100vh',
      autoFocus: false,
      data: id,
      position: {
        top: '0',
        right: '0',
      },
      maxHeight: '100%'
    })
  }

  add() {
    const dialog = this._dialog.open(AddDriverComponent, {
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

  block(id: number) {
    const dialog = this._dialog.open(BlockDriverComponent, {
      minWidth: '20vw',
      maxWidth: '40vw',
      minHeight: '42vh',
      maxHeight: '85vh',
      data: id,
      autoFocus: false,
    })
    dialog.afterClosed()
      .subscribe(() => {
        this.getAllDrivers()
      })
  }
  active(id:number){
    this._driversService.active(id).subscribe(() => {
      this.getAllDrivers()
    })
  }

  edit(id: number) {
    const dialogRef = this._dialog.open(AddDriverComponent, {
      minWidth: '40vw',
      maxWidth: '50vw',
      minHeight: '42vh',
      maxHeight: '80vh',
      autoFocus: false,
      data: id,
    });
    dialogRef.afterClosed()
      .subscribe(() => {
        this.getAllDrivers()
      })
  }

  addTransport(driverId?: number, transportId?: number) {
    const dialogRef = this._dialog.open(AddTransportComponent, {
      minWidth: '50vw',
      maxWidth: '70vw',
      minHeight: '60vh',
      maxHeight: '100vh',
      disableClose: true,
      autoFocus: false,
      data: { driverId, transportId },
    });
    dialogRef.afterClosed()
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

