import { CurrencyPipe, NgClass, NgFor, NgIf } from '@angular/common';
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
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { RouterLink } from '@angular/router';
import { MerchantService } from '../merchant/services/merchant.service';
import { MerchantModel } from '../merchant/models/merchanr.model';
import { DriverMerchantListComponent } from './components/driver-merchant-list/driver-merchant-list.component';
import { BlockMerchantComponent } from '../merchant/components/block-merchant/block-merchant.component';
import { NoDataPlaceholderComponent } from 'app/shared/components/no-data-placeholder/no-data-placeholder.component';
import { NgxPermissionsModule, NgxPermissionsService } from 'ngx-permissions';
import { DriverMerchantService } from './services/driver-merchant.service';

@Component({
  selector: 'app-driver-merchant',
  templateUrl: './driver-merchant.component.html',
  styleUrls: ['./driver-merchant.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.Default,
  standalone: true,
  imports: [TranslocoModule, RouterLink,NgxPermissionsModule, MatIconModule, MatDatepickerModule, FormsModule, ReactiveFormsModule, MatSelectModule, NoDataPlaceholderComponent, MatButtonModule, NgFor, NgIf, MatTableModule, NgClass, CurrencyPipe, MatFormFieldModule, MatInputModule, MatTableModule, MatSortModule, MatPaginatorModule, MatMenuModule, MatSlideToggleModule],
})
export class DriverMerchantComponent {
  cities: any[] = [];
  transportKinds: any[] = [];
  transportTypes: any[] = [];
  filters = {
    merchantid: '',
    companyName: '',
    createdAtFrom: '',
    createdAtTo: '',
  };
  displayedColumns: string[] = ['index', 'id', 'companyName', 'register_date', 'actions'];
  @ViewChild(MatPaginator) paginator: MatPaginator;
  dataSource = new MatTableDataSource<MerchantModel>([]);
  constructor(
     private _merchantService: DriverMerchantService,
     private _permissionService: NgxPermissionsService,
    protected _dialog?: MatDialog) {
  }

  clearFilters() {
    this.filters = {
      merchantid: '',
      companyName: '',
      createdAtFrom: '',
      createdAtTo: '',
    };
  }

  pageParams = {
    page: 0,
    limit: 10,
    totalPagesCount:1,
    sortBy: 'id',
    sortType: 'desc'
  };
  filterDrivers() {}

  onPageChange(event: PageEvent): void {
    this.pageParams.limit = event.pageSize;
    this.pageParams.page = event.pageIndex;
    this.getAllMerchants(this.pageParams);
  }

  ngOnInit() {
    this.getAllMerchants(this.pageParams);
  }

  hasPermission(permission): boolean {
    let getPermissions = this._permissionService.getPermissions()
    return getPermissions.hasOwnProperty(permission)
  }

  getAllMerchants(params?) {
    this._merchantService.Verified(Object.assign(this.filters, params)).subscribe((response:any) => {
      this.dataSource.data = response?.data.content;
      this.pageParams.limit = response?.data?.per_page;
      this.pageParams.page = response?.data?.pageIndex;
      this.pageParams.totalPagesCount = response?.data?.totalPagesCount;
    });
  }



  block(id: number) {
    const dialog = this._dialog.open(BlockMerchantComponent, {
      minWidth: '20vw',
      maxWidth: '40vw',
      minHeight: '42vh',
      maxHeight: '85vh',
      data: id,
      autoFocus: false,
    })
    dialog.afterClosed()
      .subscribe(() => {
        this.getAllMerchants(this.pageParams);
      })
  }
  active(id: number) {
    this._merchantService.active(id).subscribe(() => {
      this.getAllMerchants(this.pageParams);
    })
  }
  requests() {
    const dialog = this._dialog.open(DriverMerchantListComponent, {
      minWidth: '40vw',
      maxWidth: '50vw',
      minHeight: '42vh',
      maxHeight: '80vh',
      autoFocus: false,
    })
    dialog.afterClosed()
      .subscribe(() => {
        this.getAllMerchants(this.pageParams);
      })
  }

  delete(id: number) {
    this._merchantService.delete(id).subscribe((response) => {
      if (response.status) {
        this.getAllMerchants(this.pageParams);
      }
    })
  }
}
