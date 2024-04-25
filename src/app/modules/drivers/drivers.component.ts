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
import { FuseUtilsService } from '@fuse/services/utils';
import { MatTooltipModule } from '@angular/material/tooltip';
import { animate, state, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-drivers',
  templateUrl: './drivers.component.html',
  styleUrls: ['./drivers.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [TranslocoModule, MatTooltipModule, DatePipe, MatIconModule, MatDatepickerModule, FormsModule, ReactiveFormsModule, MatSelectModule, NoDataPlaceholderComponent, DetailDriverComponent, MatButtonModule, NgFor, NgIf, MatTableModule, NgClass, CurrencyPipe, MatFormFieldModule, MatInputModule, MatTableModule, MatSortModule, MatPaginatorModule, MatMenuModule, MatSlideToggleModule],
  animations: [
    trigger('showHideFilter', [
      state('show', style({
        height: '*',
        opacity: 1,
        visibility: 'visible'
      })),
      state('hide', style({
        height: '0',
        opacity: 0,
        visibility: 'hidden'
      })),
      transition('show <=> hide', animate('300ms ease-in-out'))
    ])
  ]
})
export class DriversComponent implements OnInit {
  cities: any[] = [];
  transportKinds: any[] = [];
  filters = {
    driverId: '',
    firstName: '',
    phoneNumber: '',
    transportKindId: '',
    isSubscribed: '',
    isVerified: '',
    createdAtFrom: '',
    createdAtTo: '',
    lastLoginFrom: '',
    lastLoginTo: '',
  };
  totalPagesCount = 1;
  pageParams = {
    pageIndex: 1,
    pageSize: 10,
    sortBy: 'id',
    sortType: 'desc'
  };
  showFilter: boolean = false;
  displayedColumns: string[] = ['index', 'id', 'full_name', 'phone', 'type_transport', 'register_date', 'last_enter', 'status', 'subscription', 'actions'];
  @ViewChild(MatPaginator) paginator: MatPaginator;

  dataSource = new MatTableDataSource<DriverModel>([]);
  constructor(
    private _driversService: DriversService,
    protected _dialog: MatDialog,
    private _typeService: TypesService,
    private utilsService: FuseUtilsService,
    private _cdr: ChangeDetectorRef) {
  }

  ngOnInit() {
    this.getAllDrivers(this.pageParams);
    this._typeService.getTransportKinds().subscribe((response: any) => {
      this.transportKinds = response.data;
    })
    this._cdr.detectChanges()
  }

  hasPermission(permission): boolean {
    return this.utilsService.hasPermission(permission)
  }



  tooltipText(driverTransports: any[]): string {
    if (!driverTransports || driverTransports.length === 0) {
      return '';
    }

    const tooltipArray = [];
    for (const driver of driverTransports) {
      for (const type of driver.transportTypes) {
        tooltipArray.push(type.name);
      }
    }

    return tooltipArray.join(', ');
  }
  clearFilters() {
    this.filters = {
      driverId: '',
      firstName: '',
      phoneNumber: '',
      transportKindId: '',
      isSubscribed: '',
      isVerified: '',
      createdAtFrom: '',
      createdAtTo: '',
      lastLoginFrom: '',
      lastLoginTo: '',
    };
    this.getAllDrivers(this.pageParams)
  }

  filterDrivers() {
  }

  isDateBefore(date1: string, date2: string): boolean {
    return new Date(date1) < new Date(date2);
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


  sortData(filter: string): void {
    if (filter === this.pageParams.sortBy) {
      if (this.pageParams.sortType === 'desc') {
        this.pageParams.sortType = 'asc';
      } else {
        this.pageParams.sortType = 'desc';
      }
    } else {
      this.pageParams.sortBy = filter;
      this.pageParams.sortType = 'desc';
    }
    this.getAllDrivers(this.pageParams)
  }
  getAllDrivers(params?) {
    this._driversService.getAll(Object.assign(this.filters, params)).subscribe((response: any) => {
      this.dataSource.data = response?.data?.content;
      this.pageParams.pageSize = response?.data?.pageSize;
      this.pageParams.pageIndex = response?.data?.pageIndex;
      this.totalPagesCount = response?.data?.totalPagesCount;
    });
  }


  onPageChange(event: PageEvent): void {
    this.pageParams.pageSize = event.pageSize;
    this.pageParams.pageIndex = event.pageIndex + 1;
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
  active(id: number) {
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

