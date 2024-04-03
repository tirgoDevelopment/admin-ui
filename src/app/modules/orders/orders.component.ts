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
import { NgxPermissionsService } from 'ngx-permissions';
import { FuseUtilsService } from '@fuse/services/utils';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss'],
  encapsulation: ViewEncapsulation.None,
  standalone: true,
  imports: [TranslocoModule, DatePipe, MatIconModule, MatTooltipModule, MatDatepickerModule, FormsModule, ReactiveFormsModule, MatSelectModule, NoDataPlaceholderComponent, MatButtonModule, NgFor, NgIf, MatTableModule, NgClass, CurrencyPipe, MatFormFieldModule, MatInputModule, MatTableModule, MatSortModule, MatPaginatorModule, MatMenuModule, MatSlideToggleModule],
})
export class OrdersComponent implements OnInit {
  isLoading: boolean = false;
 
  displayedColumns: string[] = ['index', 
  'id', 'sendLocation', 'cargoDeliveryLocation',
   'status', 'date_send', 'offeredPrice', 
   'secure_transaction', 'type_cargo', 'transport_type',

    'client', 'actions'];
  currentUser: any;
  transportKinds: any[] = [];
  transportTypes: any[] = [];
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
    page: 0,
    limit: 10,
    totalPagesCount:1,
    sortBy: 'id',
    sortType: 'desc'
  };

  @ViewChild(MatPaginator) paginator: MatPaginator;

  dataSource = new MatTableDataSource<OrderModel>([]);
  constructor(
    private utilsService: FuseUtilsService,
    private orderService: OrdersService,
    private _permissionService: NgxPermissionsService,
    private authService: AuthService,
    private dialog: MatDialog,
    private _typeService: TypesService) { }
  ngOnInit(): void {
    this.currentUser = jwtDecode(this.authService.accessToken);
    this.getOrders();
    this._typeService.getTransportKinds().subscribe((response: any) => {
      this.transportKinds = response.data;
    })
    this._typeService.getTransportTypes().subscribe((response: any) => {
      this.transportTypes = response.data;
    })
  }

  hasPermission(permission): boolean {
    return this.utilsService.hasPermission(permission)
}

  detail(id: number): void {
    const dialog = this.dialog.open(OrderDetailComponent, {
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
  }

  filterDrivers() {
  }

  onPageChange(event: PageEvent): void {
    this.pageParams.limit = event.pageSize;
    this.pageParams.page = event.pageIndex;
    this.getOrders(this.pageParams);
  }
  getOrders(params?) {
    this.isLoading = true;
    this.orderService.getOrders(Object.assign(this.filters,params)).subscribe((res: any) => {
      console.log(res)
      if (res && res.success) {
        this.isLoading = false;
        this.dataSource = res.data.content;
      }
      else {
        this.isLoading = false;
        this.dataSource.data = [];
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
      case 'waiting':
        return "Ожидающий";
      case 1:
        return "Выполняется";
      case 2:
        return "Выполнен";
      case 3:
        return "Завершен";
      case 4:
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
    this.orderService.cancelOrder(row.id).subscribe((res: any) => {
      if (res && res.success) {
        this.getOrders(this.pageParams);
      }
    })
  }

  edit(row) {
    const dialogRef = this.dialog.open(CreateOrderComponent, {
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
    const dialogRef = this.dialog.open(CreateOrderComponent, {
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