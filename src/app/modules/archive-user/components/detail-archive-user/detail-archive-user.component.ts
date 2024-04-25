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
import { NgxMatIntlTelInputComponent } from 'ngx-mat-intl-tel-input';
import { NgxMatSelectSearchModule } from 'ngx-mat-select-search';
import { ArchiveUserService } from '../../services/archive-user.service';
import { ImagePriviewComponent } from 'app/shared/components/image-priview/image-priview.component';
import { DriversService } from 'app/modules/drivers/services/drivers.service';

@Component({
  selector: 'app-detail-archive-user',
  templateUrl: './detail-archive-user.component.html',
  styleUrls: ['./detail-archive-user.component.scss'],
  encapsulation: ViewEncapsulation.Emulated,
  standalone: true,
  imports: [TranslocoModule, NgxMatSelectSearchModule, NgFor, NgIf, DatePipe, NgxMatIntlTelInputComponent, MatInputModule, MatIconModule, MatSelectModule, MatButtonModule, ReactiveFormsModule, MatDialogModule, FormsModule, NgFor, NgIf, MatTableModule, NgClass, CurrencyPipe, MatFormFieldModule, MatInputModule, MatTableModule, MatSortModule, MatPaginatorModule, MatMenuModule, MatSlideToggleModule],

})
export class DetailArchiveUserComponent implements OnInit {
  archiveUser: any;
  constructor(@Inject(MAT_DIALOG_DATA) public data: any,
    private _archiveService: ArchiveUserService,
    private _dialog: MatDialog,
    private _driverService: DriversService
  ) {
    this.getClient(data);
  }
  getClient(id: any) {
    this._archiveService.get(id).subscribe((response) => {
      this.archiveUser = response.data
    });
  }
  ngOnInit(): void {
  }


  previewClient(fileName: string) {
    console.log(fileName)
    const dialog = this._dialog.open(ImagePriviewComponent, {
      minWidth: '60vw',
      maxWidth: '80vw',
      minHeight: '60vh',
      maxHeight: '80vh',
      data: { keyName: 'client', fileName: fileName },
      autoFocus: false,
    })
    dialog.afterClosed()
      .subscribe(() => {
      })
  }

  restore(detail: any) {
    let body = {
      userId: detail.id,
      userType: detail.userType,
    }
    this._archiveService.restore(body).subscribe((response) => {
      if (response.success) {
        this._dialog.closeAll()
      }
    })
  }


  previewDriver(fileName: string) {
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
      })
  }

  previewAgent(fileName: string) {
    const dialog = this._dialog.open(ImagePriviewComponent, {
      minWidth: '60vw',
      maxWidth: '80vw',
      minHeight: '60vh',
      maxHeight: '80vh',
      data: { keyName: 'agent', fileName: fileName },
      autoFocus: false,
    })
    dialog.afterClosed()
      .subscribe(() => {
      })
  }

  restoreDriver(id: number) {
    this._driverService.active(id).subscribe((response) => {
      if (response.success) {
        this._dialog.closeAll()
      }
    })
  }


  submit() {
  }
}