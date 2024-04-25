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
import { DriversService } from '../../services/drivers.service';
import { DriverModel } from '../../models/driver.model';
import { BlockDriverComponent } from '../block-driver/block-driver.component';
import { ImagePriviewComponent } from 'app/shared/components/image-priview/image-priview.component';
import { AddTransportComponent } from '../add-transport/add-transport.component';
import { PipeModule } from 'app/shared/pipes/pipe.module';
import { FileUrlService } from 'app/shared/services/file-url.service';
import { AssignTmcComponent } from '../assign-tmc/assign-tmc.component';

@Component({
  selector: 'app-detail-driver',
  templateUrl: './detail-driver.component.html',
  styleUrls: ['./detail-driver.component.scss'],
  encapsulation: ViewEncapsulation.Emulated,
  standalone: true,
  imports: [TranslocoModule, PipeModule, CommonModule, NgClass, DatePipe, FormsModule, ReactiveFormsModule, MatInputModule, NgxMatSelectSearchModule, NgxMatIntlTelInputComponent, MatInputModule, MatIconModule, MatSelectModule, MatButtonModule, ReactiveFormsModule, MatDialogModule, FormsModule, NgFor, NgIf, MatTableModule, NgClass, CurrencyPipe, MatFormFieldModule, MatInputModule, MatTableModule, MatSortModule, MatPaginatorModule, MatMenuModule, MatSlideToggleModule],
})
export class DetailDriverComponent implements OnInit {
  driver: DriverModel;
  driverId: any;
  constructor(@Inject(MAT_DIALOG_DATA) public data: any, private _driverService: DriversService, private _dialog: MatDialog, private fileService: FileUrlService) {
    this.getDriver(data);
    this.driverId = data
  }
  getDriver(id: any) {
    this._driverService.get(id).subscribe((response) => {
      this.driver = response.data;
    });
  }
  ngOnInit(): void {
  }

  downloadPhoto(fileName) {
    this.fileService.downloadImage('driver', fileName)
  }
  block() {
    const dialog = this._dialog.open(BlockDriverComponent, {
      minWidth: '20vw',
      maxWidth: '30vw',
      minHeight: '30vh',
      maxHeight: '45vh',
      data: this.driver.id,
      autoFocus: false,
    })
    dialog.afterClosed()
      .subscribe(() => {
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

  addTransport() {
    const dialogRef = this._dialog.open(AddTransportComponent, {
      minWidth: '70vw',
      maxWidth: '90vw',
      minHeight: '60vh',
      maxHeight: '100vh',
      disableClose: true,
      autoFocus: false,
      data: { driverId: this.driverId },
    }).afterClosed().subscribe(() => {
    })
  }

  active(id: number) {
    this._driverService.active(id).subscribe(() => {
      this._dialog.closeAll()
    })
  }
  addTransportEdit() {
    const dialogRef = this._dialog.open(AddTransportComponent, {
      minWidth: '70vw',
      maxWidth: '90vw',
      minHeight: '60vh',
      maxHeight: '100vh',
      disableClose: true,
      autoFocus: false,
      data: { driverId: this.driverId, edit: true },
    }).afterClosed().subscribe(() => {
    })
  }

  assignMerchantDriver(id: number) {
    this._dialog.open(AssignTmcComponent, {
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
    })
  }
  submit() {
  }
}
