import { CurrencyPipe, DatePipe, NgClass, NgFor, NgIf } from '@angular/common';
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
import { MatSelectModule } from '@angular/material/select';
import { NoDataPlaceholderComponent } from 'app/shared/components/no-data-placeholder/no-data-placeholder.component';
import { MerchantListComponent } from './components/merchant-list/merchant-list.component';
import { RouterLink } from '@angular/router';
import { MerchantService } from './services/merchant.service';
import { MerchantModel } from './models/merchanr.model';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BlockMerchantComponent } from './components/block-merchant/block-merchant.component';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { NgxPermissionsModule } from 'ngx-permissions';
import { FuseUtilsService } from '@fuse/services/utils';
import { MerchantDetailComponent } from './components/merchant-detail/merchant-detail.component';
import { animate, state, style, transition, trigger } from '@angular/animations';
@Component({
  selector: 'app-merchant',
  templateUrl: './merchant.component.html',
  styleUrls: ['./merchant.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [TranslocoModule, DatePipe, RouterLink, NgxPermissionsModule, MatIconModule, MatDatepickerModule, FormsModule, ReactiveFormsModule, MatSelectModule, NoDataPlaceholderComponent, MatButtonModule, NgFor, NgIf, MatTableModule, NgClass, CurrencyPipe, MatFormFieldModule, MatInputModule, MatTableModule, MatSortModule, MatPaginatorModule, MatMenuModule, MatSlideToggleModule],
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
export class MerchantComponent implements OnInit {
  cities: any[] = [];
  transportKinds: any[] = [];
  transportTypes: any[] = [];
  filters = {
    merchantid: '',
    companyName: '',
    createdAtFrom: '',
    createdAtTo: '',
  };
  displayedColumns: string[] = ['index', 'id', 'full_name', 'companyName', 'entity', 'balance', 'register_date',  'status', 'actions'];
  @ViewChild(MatPaginator) paginator: MatPaginator;
  dataSource = new MatTableDataSource<MerchantModel>([]);
  showFilter: boolean = false;

  constructor(
    private _merchantService: MerchantService,
    private utilsService: FuseUtilsService,
    protected _dialog?: MatDialog) { }

  clearFilters() {
    this.filters = {
      merchantid: '',
      companyName: '',
      createdAtFrom: '',
      createdAtTo: '',
    };
    this.getAllMerchants(this.pageParams)
  }

  hasPermission(permission): boolean {
    return this.utilsService.hasPermission(permission)
  }

  pageParams = {
    pageIndex: 1,
    pageSize: 10,
    totalPagesCount: 1,
    sortBy: 'id',
    sortType: 'desc'
  };
  filterDrivers() { }

  onPageChange(event: PageEvent): void {
    this.pageParams.pageSize = event.pageSize;
    this.pageParams.pageIndex = event.pageIndex + 1;
    this.getAllMerchants(this.pageParams);
  }

  ngOnInit() {
    this.getAllMerchants(this.pageParams);
  }
  getAllMerchants(params?) {
    this._merchantService.Verified(Object.assign(this.filters, params)).subscribe((response: any) => {
      this.dataSource.data = response?.data?.content;
      this.pageParams.pageSize = response?.data?.pageSize;
      this.pageParams.pageIndex = response?.data?.pageIndex;
      this.pageParams.totalPagesCount = response?.data?.totalPagesCount;
    });
  }
  block(id: number) {
    const dialog = this._dialog.open(BlockMerchantComponent, {
      minWidth: '20vw',
      maxWidth: '40vw',
      minHeight: '30vh',
      maxHeight: '50vh',
      data: id,
      autoFocus: false,
    })
    dialog.afterClosed()
      .subscribe(() => {
        this.getAllMerchants(this.pageParams);
      })
  }
  detail(id: number) {
    this._dialog.open(MerchantDetailComponent, {
      width: '500px',
      height: '100vh',
      autoFocus: false,
      data: id,
      position: {
        top: '0',
        right: '0',
      },
      maxHeight: '100%'
    }).afterClosed().subscribe(() => {
      this.getAllMerchants(this.pageParams);
    })
  }
  active(id: number) {
    this._merchantService.active(id).subscribe(() => {
      this.getAllMerchants(this.pageParams);
    })
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
        this.getAllMerchants(this.pageParams);
      })
  }
  delete(id: number) {
    this._merchantService.delete(id).subscribe((response) => {
      if (response.success) {
        this.getAllMerchants(this.pageParams);
      }
    })
  }
}

