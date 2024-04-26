import { CurrencyPipe, DatePipe, NgClass, NgFor, NgIf } from '@angular/common';
import { Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatPaginator, MatPaginatorModule, PageEvent } from '@angular/material/paginator';
import { OrdersService } from './services/orders.service';
import { jwtDecode } from 'jwt-decode';
import { AuthService } from 'app/core/auth/auth.service';
import { MatDialog } from '@angular/material/dialog';
import { CreateOrderComponent } from './components/create-order/create-order.component';
import { TranslocoModule } from '@ngneat/transloco';
import { OrderDetailComponent } from './components/order-detail/order-detail.component';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { TypesService } from 'app/shared/services/types.service';
import { MatSelectModule } from '@angular/material/select';
import { NoDataPlaceholderComponent } from 'app/shared/components/no-data-placeholder/no-data-placeholder.component';
import { MatInputModule } from '@angular/material/input';
import { MatSortModule } from '@angular/material/sort';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { OrderModel } from './models/order.model';
import { MatTooltipModule } from '@angular/material/tooltip';
import { FuseUtilsService } from '@fuse/services/utils';
import { CargoStatusService } from '../main-types/cargo-status/services/cargo-status.service';
import { animate, state, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss'],
  encapsulation: ViewEncapsulation.None,
  standalone: true,
  imports: [TranslocoModule, DatePipe, MatIconModule, MatTooltipModule, MatDatepickerModule, FormsModule, ReactiveFormsModule, MatSelectModule, NoDataPlaceholderComponent, MatButtonModule, NgFor, NgIf, MatTableModule, NgClass, CurrencyPipe, MatFormFieldModule, MatInputModule, MatTableModule, MatSortModule, MatPaginatorModule, MatMenuModule, MatSlideToggleModule],
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
export class OrdersComponent implements OnInit {
  isLoading: boolean = false;
  showFilter: boolean = false;

  displayedColumns: string[] = ['index',
    'id', 'sendLocation', 'cargoDeliveryLocation',
    'status', 'date_send', 'offeredPrice',
    'secure_transaction', 'type_cargo', 'transport_cargo',
    'client', 'actions'];
  currentUser: any;
  transportKinds: any[] = [];
  transportTypes: any[] = [];
  cargoStatuses: any[] = [];
  filters = {
    orderId: '',
    statusId: '',
    loadingLocation: '',
    deliveryLocation: '',
    transportKindId: '',
    transportTypeId: '',
    createdBy: '',
    createdAt: '',
    sendDate: '',
    merchantOrder: ''
  };

  pageParams = {
    pageIndex: 1,
    pageSize: 10,
    totalPagesCount: 1,
    sortBy: 'id',
    sortType: 'desc'
  };

  @ViewChild(MatPaginator) paginator: MatPaginator;

  dataSource: any = new MatTableDataSource<OrderModel>([]);
  constructor(
    private _utilsService: FuseUtilsService,
    private _orderService: OrdersService,
    private _authService: AuthService,
    private _dialog: MatDialog,
    private _cargostatusService: CargoStatusService,
    private _typeService: TypesService) { }
  ngOnInit(): void {
    this.currentUser = jwtDecode(this._authService.accessToken);
    this.getOrders();
    this._typeService.getTransportKinds().subscribe((response: any) => {
      this.transportKinds = response.data;
    })
    this._typeService.getTransportTypes().subscribe((response: any) => {
      this.transportTypes = response.data;
    })
    this._cargostatusService.getAll().subscribe((response: any) => {
      this.cargoStatuses = response.data;
    })
  }

  hasPermission(permission): boolean {
    return this._utilsService.hasPermission(permission)
  }

  detail(id: number): void {
    const dialog = this._dialog.open(OrderDetailComponent, {
      width: '500px',
      height: '100vh',
      autoFocus: false,
      position: {
        top: '0',
        right: '0',
      },
      maxHeight: '100%',
      data: id
    })
    dialog.afterClosed()
      .subscribe(() => {
        console.log('close')
        this.getOrders(this.pageParams);
      })
  }

  clearFilters() {
    this.filters = {
      orderId: '',
      statusId: '',
      loadingLocation: '',
      deliveryLocation: '',
      transportKindId: '',
      transportTypeId: '',
      createdBy: '',
      createdAt: '',
      sendDate: '',
      merchantOrder: ''
    };
    this.getOrders(this.pageParams)
  }

  filterDrivers() {
  }

  tooltipTextTransportTypes(row: any): string {
    if (row.transportTypes) {
      return row.transportTypes.map(type => type.name).join(', ');
    } else {
      return '';
    }
  }

  tooltipTextTransportKinds(row: any): string {
    if (row.transportTypes) {
      return row.transportTypes.map(type => type.name).join(', ');
    } else {
      return '';
    }
  }
  onPageChange(event: PageEvent): void {
    this.pageParams.pageSize = event.pageSize;
    this.pageParams.pageIndex = event.pageIndex + 1;
    this.getOrders(this.pageParams);
  }
  getOrders(params?) {
    this.isLoading = true;
    this._orderService.getOrders(Object.assign(this.filters, params)).subscribe((res: any) => {
      if (res && res.success) {
        this.isLoading = false;
        this.dataSource = res.data.content;
      }
      else {
        this.isLoading = false;
        this.dataSource = [];
      }
    })
    this.isLoading = false;
  }
  addTwoDays(date: Date): Date {
    const result = new Date(date);
    result.setDate(result.getDate() + 2);
    return result;
  }
  statusOrderCheck(params) {
    switch (params) {
      case 'Ожидающий':
        return "Ожидающий";
      case 'Выполняется':
        return "Выполняется";
      case 'Выполнен':
        return "Выполнен";
      case 'Завершен':
        return "Завершен";
      case 'Отменен':
        return "Отменен";
      default:
        return "Не определен";
    }
  }
  returnClassStatusOrder(params) {
    switch (params) {
      case 'waiting':
        return "status-order-blue";
      case 1:
        return "status-order-yellow";
      case 2:
        return "status-order-green";
      case 3:
        return "status-order-info";
      case 4:
        return "status-order-red";
      default:
        return "status-order";
    }
  }
  cancel(row) {
    this._orderService.cancelOrder(row.id).subscribe((res: any) => {
      if (res && res.success) {
        this.getOrders(this.pageParams);
      }
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
    this.getOrders(this.pageParams)
  }

  edit(row) {
    const dialogRef = this._dialog.open(CreateOrderComponent, {
      minWidth: '50vw',
      maxWidth: '70vw',
      minHeight: '50vh',
      maxHeight: '95vh',
      autoFocus: false,
      disableClose: true,
      data: row
    });
    dialogRef.afterClosed().subscribe(result => {
      this.getOrders(this.pageParams);
    });
  }

  createOrderModal() {
    const dialogRef = this._dialog.open(CreateOrderComponent, {
      minWidth: '50vw',
      maxWidth: '70vw',
      minHeight: '50vh',
      maxHeight: '95vh',
      autoFocus: false,
      disableClose: true,
    });
    dialogRef.afterClosed().subscribe(result => {
      this.getOrders(this.pageParams);
    });
  }

}