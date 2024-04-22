import { BlockMerchantComponent } from '../block-merchant/block-merchant.component';
import { ImagePriviewComponent } from 'app/shared/components/image-priview/image-priview.component';
import { CommonModule, CurrencyPipe, DatePipe, NgClass, NgFor, NgIf } from '@angular/common';
import { Component, Inject, OnInit, ViewEncapsulation } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MAT_DIALOG_DATA, MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatMenuModule } from '@angular/material/menu';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSelectModule } from '@angular/material/select';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { TranslocoModule } from '@ngneat/transloco';
import { NgxMatIntlTelInputComponent } from 'ngx-mat-intl-tel-input';
import { NgxMatSelectSearchModule } from 'ngx-mat-select-search';
import { PipeModule } from 'app/shared/pipes/pipe.module';
import { FileUrlService } from 'app/shared/services/file-url.service';
import { MerchantModel } from '../../models/merchanr.model';
import { MerchantService } from '../../services/merchant.service';
@Component({
  selector: 'app-merchant-detail',
  templateUrl: './merchant-detail.component.html',
  styleUrls: ['./merchant-detail.component.scss'],
  encapsulation: ViewEncapsulation.Emulated,
  standalone: true,
  imports: [TranslocoModule, PipeModule, CommonModule, NgClass, DatePipe, FormsModule, ReactiveFormsModule, MatInputModule, NgxMatSelectSearchModule, NgxMatIntlTelInputComponent, MatInputModule, MatIconModule, MatSelectModule, MatButtonModule, ReactiveFormsModule, MatDialogModule, FormsModule, NgFor, NgIf, MatTableModule, NgClass, CurrencyPipe, MatFormFieldModule, MatInputModule, MatTableModule, MatSortModule, MatPaginatorModule, MatMenuModule, MatSlideToggleModule],
})
export class MerchantDetailComponent implements OnInit {
  merchant: MerchantModel;
  merchantId: any;
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private _merchantService: MerchantService,
    private _dialog: MatDialog,
    private fileService: FileUrlService) {
    this.getMerchants(data);
    this.merchantId = data
  }
  getMerchants(id: any) {
    this._merchantService.get(id).subscribe((response) => {
      console.log(response.data)
      this.merchant = response.data;
    });
  }
  ngOnInit(): void {
  }

  downloadPhoto(fileName) {
    this.fileService.downloadImage('driver', fileName)
  }
  block() {
    const dialog = this._dialog.open(BlockMerchantComponent, {
      minWidth: '20vw',
      maxWidth: '30vw',
      minHeight: '30vh',
      maxHeight: '45vh',
      data: this.merchant.id,
      autoFocus: false,
    })
    dialog.afterClosed()
      .subscribe(() => {
        this._dialog.closeAll()
      })
  }
  preview(fileName: string) {
    const dialog = this._dialog.open(ImagePriviewComponent, {
      minWidth: '60vw',
      maxWidth: '80vw',
      minHeight: '60vh',
      maxHeight: '80vh',
      data: { keyName: 'driver', fileName: fileName },
      autoFocus: false,
    })
    dialog.afterClosed()
      .subscribe(() => {
        this._dialog.closeAll()
      })
  }


  active(id: number) {
    this._merchantService.active(id).subscribe(() => {
      this._dialog.closeAll()
    })
  }

  submit() {
  }
}

