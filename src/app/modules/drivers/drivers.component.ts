import { CurrencyPipe, DatePipe, NgClass, NgFor, NgIf } from '@angular/common';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
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
  imports: [TranslocoModule, DatePipe, MatIconModule, MatDatepickerModule, FormsModule, ReactiveFormsModule, MatSelectModule, NoDataPlaceholderComponent, DetailDriverComponent, MatButtonModule, NgFor, NgIf, MatTableModule, NgClass, CurrencyPipe, MatFormFieldModule, MatInputModule, MatTableModule, MatSortModule, MatPaginatorModule, MatMenuModule, MatSlideToggleModule],
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
  pageParams = {
    page: 0,
    limit: 10,
    perPage: 10,
    sortBy: 'id',
    sortType: 'asc'
  };
  displayedColumns: string[] = ['id','full_name', 'phone', 'type_transport', 'register_date', 'last_enter', 'status', 'subscription', 'actions'];
  @ViewChild(MatPaginator) paginator: MatPaginator;

  dataSource = new MatTableDataSource<DriverModel>([]);
  constructor(
    private _driversService: DriversService, protected _dialog: MatDialog, private _typeService:TypesService, private cdr: ChangeDetectorRef,) {
  }


  ngOnInit() {
    this.getAllDrivers(this.pageParams);
    this._typeService.getTransportKinds().subscribe((response:any) => {
      this.transportKinds = response.data;
    })
    this.cdr.detectChanges()
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

  verification(driverId?: number, transportId?: number) {
    const dialog = this._dialog.open(AddVerificationComponent, {
      minWidth: '60vw',
      maxWidth: '80vw',
      minHeight: '60vh',
      maxHeight: '100vh',
      disableClose: true,
      autoFocus: false,
      data: { driverId, transportId },
    })
    dialog.afterClosed()
      .subscribe(() => {
        this.getAllDrivers(this.pageParams);
      })
  }

  getAllDrivers(params?) {
    this._driversService.getAll(Object.assign(this.filters, params)).subscribe((response:any) => {
      this.dataSource.data = response?.data?.content;
      this.pageParams.limit = response?.data?.per_page;
      this.pageParams.page = response?.data?.pageIndex;
    });
  }


  onPageChange(event: PageEvent): void {
    this.pageParams.limit = event.pageSize;
    this.pageParams.perPage = event.pageSize;
    this.pageParams.page = event.pageIndex;
    this.getAllDrivers(this.pageParams);
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
        this.getAllDrivers(this.pageParams);
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
        this.getAllDrivers(this.pageParams);
      })
  }
  active(id:number){
    this._driversService.active(id).subscribe(() => {
      this.getAllDrivers(this.pageParams);
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
        this.getAllDrivers(this.pageParams);
      })
  }

  addTransport(driverId?: number, transportId?: number) {
    const dialogRef = this._dialog.open(AddTransportComponent, {
      minWidth: '70vw',
      maxWidth: '90vw',
      minHeight: '60vh',
      maxHeight: '100vh',
      disableClose: true,
      autoFocus: false,
      data: { driverId, transportId },
    });
    dialogRef.afterClosed()
      .subscribe(() => {
        this.getAllDrivers(this.pageParams);
      })
  }

  delete(id: number) {
    this._driversService.delete(id).subscribe(() => {
      this.getAllDrivers(this.pageParams);
    })
  }
}

