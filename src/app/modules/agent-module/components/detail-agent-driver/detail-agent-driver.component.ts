import { CurrencyPipe, DatePipe, NgClass, NgFor, NgIf } from '@angular/common';
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
import { BlockDriverComponent } from 'app/modules/drivers/components/block-driver/block-driver.component';
import { DriverModel } from 'app/modules/drivers/models/driver.model';
import { DriversService } from 'app/modules/drivers/services/drivers.service';
import { ImagePriviewComponent } from 'app/shared/components/image-priview/image-priview.component';
import { NgxMatIntlTelInputComponent } from 'ngx-mat-intl-tel-input';
import { NgxMatSelectSearchModule } from 'ngx-mat-select-search';

@Component({
  selector: 'app-detail-agent-driver',
  templateUrl: './detail-agent-driver.component.html',
  styleUrls: ['./detail-agent-driver.component.scss'],
  encapsulation: ViewEncapsulation.None,
  standalone: true,
  imports: [TranslocoModule, NgClass, DatePipe, NgxMatSelectSearchModule,  NgxMatIntlTelInputComponent, MatInputModule, MatIconModule, MatSelectModule, MatButtonModule, ReactiveFormsModule, MatDialogModule, FormsModule, NgFor, NgIf, MatTableModule, NgClass, CurrencyPipe, MatFormFieldModule, MatInputModule, MatTableModule, MatSortModule, MatPaginatorModule, MatMenuModule, MatSlideToggleModule],
})
export class DetailAgentDriverComponent implements OnInit {
  driver: DriverModel;
  constructor(@Inject(MAT_DIALOG_DATA) public data: any, private _driverService: DriversService, private _dialog: MatDialog) {
    this.getDriver(data);
  }
  getDriver(id: any) {
    this._driverService.get(id).subscribe((response) => {
      this.driver = response.data;
    });
  }
  ngOnInit(): void {
  }

  block() {
    const dialog = this._dialog.open(BlockDriverComponent, {
      minWidth: '30vw',
      maxWidth: '50vw',
      minHeight: '30vh',
      maxHeight: '40vh',
      data: this.driver.id,
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

  submit() {
  }
}
