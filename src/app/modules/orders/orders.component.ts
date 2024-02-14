import { DatePipe, NgClass, NgFor, NgIf } from '@angular/common';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatRippleModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatTableModule } from '@angular/material/table';
import { MatTabsModule } from '@angular/material/tabs';
import { NgApexchartsModule } from 'ng-apexcharts';
import { MatPaginatorModule } from '@angular/material/paginator';
import { OrdersService } from './services/orders.service';
import { jwtDecode } from 'jwt-decode';
import { AuthService } from 'app/core/auth/auth.service';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatDialog } from '@angular/material/dialog';
import { CreateOrderComponent } from './components/create-order/create-order.component';
import { TranslocoModule } from '@ngneat/transloco';
import { OrderDetailComponent } from './components/order-detail/order-detail.component';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss'],
  encapsulation: ViewEncapsulation.None,
  standalone: true,
  imports: [ReactiveFormsModule, TranslocoModule, FormsModule, MatProgressSpinnerModule, DatePipe, MatPaginatorModule, MatFormFieldModule, MatIconModule, MatButtonModule, MatRippleModule, MatMenuModule, MatTabsModule, MatButtonToggleModule, NgApexchartsModule, NgFor, NgIf, MatTableModule, NgClass],
})
export class OrdersComponent implements OnInit {
  isLoading: boolean = false;
  dataSource: any[];
  displayedColumns: string[] = ['index', 'id', 'sendLocation', 'cargoDeliveryLocation', 'status', 'date_send', 'offeredPrice', 'secure_transaction', 'type_cargo', 'transport_type', 'client'];
  currentUser: any;
  constructor(
    private orderService: OrdersService,
    private authService: AuthService,
    private dialog: MatDialog
  ) { }
  ngOnInit(): void {
    this.currentUser = jwtDecode(this.authService.accessToken);
    this.getOrders();
  }

  detail(){
    const dialog = this.dialog.open(OrderDetailComponent, {
      width: '500px',
      height: '100vh',
      autoFocus: false,
      position: {
        top: '0',
        right: '0',
      },
      maxHeight: '100%'
    })
    dialog.afterClosed()
      .subscribe(() => {
        this.getOrders()
      })
  }

  getOrders() {
    this.isLoading = true;
    this.orderService.getOrdersByMerchant(this.currentUser.userId).subscribe((res: any) => {
      if (res && res.success) {
        this.isLoading = false;
        this.dataSource = res.data;
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
  createOrderModal() {
    const dialogRef = this.dialog.open(CreateOrderComponent, {
      autoFocus: false,
      disableClose: true,
    });
    dialogRef.afterClosed().subscribe(result => {
      this.getOrders();
      // this.verifyPhoneForm.enable();
    });
  }

}