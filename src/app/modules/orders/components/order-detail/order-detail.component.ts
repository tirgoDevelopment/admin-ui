import { NgClass, NgFor, NgIf } from '@angular/common';
import { Component, Inject, OnInit, ViewEncapsulation } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MAT_DIALOG_DATA, MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatTabsModule } from '@angular/material/tabs';
import { MatTooltipModule } from '@angular/material/tooltip';
import { FuseDrawerComponent } from '@fuse/components/drawer';
import { TranslocoModule } from '@ngneat/transloco';
import { AngularYandexMapsModule } from 'angular8-yandex-maps';
import { OrdersService } from '../../services/orders.service';
import { TypesService } from 'app/shared/services/types.service';
import { PipeModule } from 'app/shared/pipes/pipe.module';
import { ClientDetailComponent } from 'app/modules/clients/components/client-detail/client-detail.component';
import { DriverModel } from 'app/modules/drivers/models/driver.model';
import { AssignDriverComponent } from '../assign-driver/assign-driver.component';
import { DetailDriverComponent } from 'app/modules/drivers/components/detail-driver/detail-driver.component';
import { MerchantDetailComponent } from 'app/modules/merchant/components/merchant-detail/merchant-detail.component';

@Component({
  selector: 'app-order-detail',
  templateUrl: './order-detail.component.html',
  styleUrls: ['./order-detail.component.scss'],
  encapsulation: ViewEncapsulation.Emulated,
  standalone: true,
  imports: [MatIconModule, MatTabsModule, NgIf, PipeModule, MatFormFieldModule, MatInputModule, MatSelectModule, FormsModule, ReactiveFormsModule, AngularYandexMapsModule, MatDialogModule, TranslocoModule, FuseDrawerComponent, MatButtonModule, NgFor, NgClass, MatTooltipModule],
})
export class OrderDetailComponent implements OnInit {
  driverInfo: DriverModel;
  currencies: any;
  editing: boolean = false;
  originalAmount: number;
  editedAmount: number;
  originalCurrencyId: string;
  editedCurrencyId: string;
  driverId: number;
  clientId: number;
  merchantClientId: number;
  orderId: number;
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private orderService: OrdersService,
    private typesService: TypesService,
    protected _dialog?: MatDialog) {
    this.orderId = data
  }

  ngOnInit(): void {
    this.typesService.getCurrencies().subscribe((res: any) => {
      if (res.success) {
        this.currencies = res.data;
      }
    })
    this.getOrderById();
  }
  getOrderById() {
    this.orderService.getOrderById(this.orderId).subscribe((res: any) => {
      if (res.success) {
        this.data = res.data;
        this.clientId = res.data?.client?.id;
        this.merchantClientId = res.data?.clientMerchant.id;
        this.updateDriverOffers();
      }
    })
  }
  clientInfo(clientId: number) {
    this._dialog.open(ClientDetailComponent, {
      width: '500px',
      height: '100vh',
      autoFocus: false,
      data: clientId,
      position: {
        top: '0',
        right: '0',
      },
      maxHeight: '100%'
    }).afterClosed().subscribe(() => {
      this.getOrderById();
    })
  }

  merchantclientInfo(merchantClientId: number) {
    this._dialog.open(MerchantDetailComponent, {
      width: '500px',
      height: '100vh',
      autoFocus: false,
      data: merchantClientId,
      position: {
        top: '0',
        right: '0',
      },
      maxHeight: '100%'
    }).afterClosed().subscribe(() => {
      this.getOrderById();
    })
  }

  driverDetail(driverid: number) {
    this._dialog.open(DetailDriverComponent, {
      width: '500px',
      height: '100vh',
      autoFocus: false,
      data: driverid,
      position: {
        top: '0',
        right: '0',
      },
      maxHeight: '100%'
    }).afterClosed().subscribe(() => {
      this.getOrderById();
    })
  }

  assignDriver(orderId: number) {
    this._dialog.open(AssignDriverComponent, {
      width: '500px',
      height: '100vh',
      autoFocus: false,
      data: orderId,
      position: {
        top: '0',
        right: '0',
      },
      maxHeight: '100%'
    }).afterClosed().subscribe(() => {
      this.getOrderById();
      this.updateDriverOffers();
    })
  }

  cancelOrder(id) {
    this.orderService.cancelOrder(id).subscribe((res: any) => {
      if (res.success) {
        this.getOrderById();
      }
    })
  }

  updateDriverOffers() {
    if (this.data.driverOffers && Array.isArray(this.data.driverOffers)) {
      this.data.driverOffers = this.data.driverOffers.find(offer => offer.accepted == true);
      console.log(this.data.driverOffers);
      this.driverId = this.data.driverOffers?.driver?.id;
    }
  }
}
