import { CurrencyPipe, NgClass, NgFor, NgIf } from '@angular/common';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit, ViewEncapsulation } from '@angular/core';
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
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { HeaderTextComponent } from 'app/shared/components/header-text/header-text.component';
import { MatSelectModule } from '@angular/material/select';
import { NgxMatIntlTelInputComponent } from 'ngx-mat-intl-tel-input';
import { NgxMatSelectSearchModule } from 'ngx-mat-select-search';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatRadioModule } from '@angular/material/radio';
import { ImagePriviewComponent } from 'app/shared/components/image-priview/image-priview.component';
import { ActivatedRoute, Router } from '@angular/router';
import { MerchantModel } from 'app/modules/merchant/models/merchanr.model';
import { DriverMerchantService } from '../../services/driver-merchant.service';

@Component({
  selector: 'app-driver-merchant-confirm',
  templateUrl: './driver-merchant-confirm.component.html',
  styleUrls: ['./driver-merchant-confirm.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [TranslocoModule, NgClass, NgFor, MatSelectModule, NgxMatSelectSearchModule, MatRadioModule, MatDatepickerModule, NgxMatIntlTelInputComponent, MatInputModule, MatIconModule, MatSelectModule, MatButtonModule, ReactiveFormsModule, MatDialogModule, FormsModule, NgFor, NgIf, MatTableModule, NgClass, CurrencyPipe, MatFormFieldModule, MatInputModule, MatTableModule, MatSortModule, MatPaginatorModule, MatMenuModule, MatSlideToggleModule, HeaderTextComponent],
})
export class DriverMerchantConfirmComponent implements OnInit {
  merchant: MerchantModel;
  id: number;
  constructor(
    public dialog: MatDialog,
    private driverMerchantService: DriverMerchantService,
    private router: Router,
    private _cdr: ChangeDetectorRef,
    private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const param = params.id;
      this.id = param;
      this.getMerchant(Number(param));
    });
  }

  getMerchant(id: number) {
    this.driverMerchantService.get(id).subscribe((responce:any) => {
      this.merchant = responce.data;
      this._cdr.detectChanges();
    })
  }

  privew(image?: string): void {
    this.dialog.open(ImagePriviewComponent, {
      minHeight: '50vh',
      maxHeight: "90vh",
      minWidth: '50vw',
      maxWidth: "90vw",
      data: { keyName: 'driver_merchant', fileName: image },
    })
  }

  approve() {
    this.driverMerchantService.verify(this.id).subscribe(responce => {
      this.merchant = responce.data;
      if (responce.success) {
        this.router.navigate(['/driver-merchants'])
      }
    })
  }

  reject() {
    this.driverMerchantService.reject(this.id).subscribe(responce => {
      this.merchant = responce.data;
      if (responce.success) {
        this.router.navigate(['/driver-merchants'])
      }
    })
  }
}
