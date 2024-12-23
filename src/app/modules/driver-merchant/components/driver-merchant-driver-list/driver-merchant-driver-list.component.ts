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
import { NoDataPlaceholderComponent } from 'app/shared/components/no-data-placeholder/no-data-placeholder.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TypesService } from 'app/shared/services/types.service';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { FuseUtilsService } from '@fuse/services/utils';
import { MatTooltipModule } from '@angular/material/tooltip';
import { DriversService } from 'app/modules/drivers/services/drivers.service';
import { DriverModel } from 'app/modules/drivers/models/driver.model';
import { DetailDriverComponent } from 'app/modules/drivers/components/detail-driver/detail-driver.component';
import { BlockDriverComponent } from 'app/modules/drivers/components/block-driver/block-driver.component';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-driver-merchant-driver-list',
  templateUrl: './driver-merchant-driver-list.component.html',
  styleUrls: ['./driver-merchant-driver-list.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [TranslocoModule, MatTooltipModule, DatePipe, MatIconModule, MatDatepickerModule, FormsModule, ReactiveFormsModule, MatSelectModule, NoDataPlaceholderComponent, DetailDriverComponent, MatButtonModule, NgFor, NgIf, MatTableModule, NgClass, CurrencyPipe, MatFormFieldModule, MatInputModule, MatTableModule, MatSortModule, MatPaginatorModule, MatMenuModule, MatSlideToggleModule],
})
export class DriverMerchantDriverListComponent implements OnInit {
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
  pageParams = {
    pageIndex: 1,
    pageSize: 10,
    totalPagesCount: 1,
    sortBy: 'id',
    sortType: 'desc'
  };
  id: number
  displayedColumns: string[] = ['index', 'id', 'full_name', 'phone', 'type_transport', 'register_date', 'last_enter', 'status', 'subscription', 'actions'];
  @ViewChild(MatPaginator) paginator: MatPaginator;

  dataSource = new MatTableDataSource<DriverModel>([]);
  constructor(
    private _router: ActivatedRoute,
    private _driversService: DriversService,
    protected _dialog: MatDialog,
    private _typeService: TypesService,
    private utilsService: FuseUtilsService,
    private cdr: ChangeDetectorRef) {
    this._router.params.subscribe((params) => {
      this.id = params.id;
    })
  }

  ngOnInit() {
    this.getAllDrivers(this.id);
    this._typeService.getTransportKinds().subscribe((response: any) => {
      this.transportKinds = response.data;
    })
    this.cdr.detectChanges()
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

  getAllDrivers(id?) {
    this._driversService.getMerchantDrivers(id).subscribe((response: any) => {
      console.log(response)
      this.dataSource.data = response?.data?.content;
      this.pageParams.pageSize = response?.data?.pageSize;
      this.pageParams.pageIndex = response?.data?.pageIndex;
      this.pageParams.totalPagesCount = response?.data?.totalPagesCount;
    });
  }


  onPageChange(event: PageEvent): void {
    this.pageParams.pageSize = event.pageSize;
    this.pageParams.pageIndex = event.pageIndex + 1;
    this.getAllDrivers(this.pageParams);
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


  delete(id: number) {
    this._driversService.delete(id).subscribe(() => {
      this.getAllDrivers(this.pageParams);
    })
  }
}
