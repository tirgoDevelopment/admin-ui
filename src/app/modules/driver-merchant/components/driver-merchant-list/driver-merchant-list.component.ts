import { CurrencyPipe, DatePipe, NgClass, NgFor, NgIf } from '@angular/common';
import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { TranslocoModule } from '@ngneat/transloco';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatMenuModule } from '@angular/material/menu';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSelectModule } from '@angular/material/select';
import { RouterLink } from '@angular/router';
import { DialogRef } from '@angular/cdk/dialog';
import { DriverMerchantService } from '../../services/driver-merchant.service';

@Component({
  selector: 'app-driver-merchant-list',
  templateUrl: './driver-merchant-list.component.html',
  styleUrls: ['./driver-merchant-list.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [TranslocoModule, RouterLink, DatePipe, MatIconModule, MatDialogModule, MatSelectModule, MatButtonModule, NgFor, NgIf, MatTableModule, NgClass, CurrencyPipe, MatFormFieldModule, MatInputModule, MatTableModule, MatSortModule, MatPaginatorModule, MatMenuModule, MatSlideToggleModule],
})
export class DriverMerchantListComponent {
  driverMerchants:any;
  constructor(private _driverMerchantService: DriverMerchantService,
    public dialogref: DialogRef) {
    this.unverifiedMerchants()
  }

  unverifiedMerchants() {
    this._driverMerchantService.unVerified().subscribe(res => {
      this.driverMerchants = res.data
    })
  }
}
