import { CurrencyPipe, NgClass, NgFor, NgIf } from '@angular/common';
import { Component, Inject, OnInit, ViewEncapsulation } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MAT_DIALOG_DATA, MatDialogModule } from '@angular/material/dialog';
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
import { DriversService } from 'app/modules/drivers/services/drivers.service';
import { NgxMatIntlTelInputComponent } from 'ngx-mat-intl-tel-input';
import { NgxMatSelectSearchModule } from 'ngx-mat-select-search';


@Component({
  selector: 'app-tracking-driver-detail',
  templateUrl: './tracking-driver-detail.component.html',
  styleUrls: ['./tracking-driver-detail.component.scss'],
  encapsulation: ViewEncapsulation.Emulated,
  standalone: true,
  imports: [TranslocoModule, NgClass, NgxMatSelectSearchModule,  NgxMatIntlTelInputComponent, MatInputModule, MatIconModule, MatSelectModule, MatButtonModule, ReactiveFormsModule, MatDialogModule, FormsModule, NgFor, NgIf, MatTableModule, NgClass, CurrencyPipe, MatFormFieldModule, MatInputModule, MatTableModule, MatSortModule, MatPaginatorModule, MatMenuModule, MatSlideToggleModule],
})
export class TrackingDriverDetailComponent implements OnInit {
  constructor(@Inject(MAT_DIALOG_DATA) public data: any, private _driverService: DriversService) {
    // this.getDriver(data.id);
  }
  getDriver(id: any) {
    this._driverService.get(id).subscribe((response) => {
      console.log(response);
    });
  }
  ngOnInit(): void {
  }

  submit() {
  }
}
