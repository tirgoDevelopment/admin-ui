import { AsyncPipe, CurrencyPipe, NgClass, NgFor, NgIf } from '@angular/common';
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
import { Inject } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialog, MatDialogModule } from '@angular/material/dialog';
import { HeaderTextComponent } from 'app/shared/components/header-text/header-text.component';
import { MatSelectModule } from '@angular/material/select';
import { MessageComponent } from 'app/shared/components/message/message.component';
import { DriversService } from 'app/modules/drivers/services/drivers.service';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { DriverMerchantService } from '../../services/driver-merchant.service';
import { Subject, catchError, debounceTime, of, switchMap } from 'rxjs';

@Component({
  selector: 'app-assign-driver',
  templateUrl: './assign-driver.component.html',
  styleUrls: ['./assign-driver.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [TranslocoModule, AsyncPipe, MatIconModule, MatAutocompleteModule, MatSelectModule, MatButtonModule, ReactiveFormsModule, MatDialogModule, FormsModule, NgFor, NgIf, MatTableModule, NgClass, CurrencyPipe, MatFormFieldModule, MatInputModule, MatTableModule, MatSortModule, MatPaginatorModule, MatMenuModule, MatSlideToggleModule, HeaderTextComponent],
})
export class AssignDriverComponent implements OnInit {
  cargoGroup = [];
  loading: boolean = false;
  dirverList: any[] = [];
  driverInfo: any[];
  merchantList: any[] = [];
  form: FormGroup = new FormGroup({
    merchantId: new FormControl('', [Validators.required]),
    driverId: new FormControl('', [Validators.required]),
    fullName: new FormControl(''),
  })
  private searchdriverSubject = new Subject<number>();
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private _driverService: DriversService,
    private _merchantService: DriverMerchantService,
    private _cdr: ChangeDetectorRef,
    private _dialog: MatDialog) {
    if (this.data) {
      this.form.patchValue({
        merchantId: this.data,
      });
    }

    this.searchdriverSubject
    .pipe(
      debounceTime(300),
      switchMap((findText: number) => {
        return this._driverService.get(findText).pipe(
          catchError(() => of([])),
        );
      })
    )
    .subscribe((res: any) => {
      this.driverInfo.push(res.data);
      this._cdr.detectChanges()
    });
  }

  ngOnInit(): void {
    this._driverService.getAll().subscribe((res: any) => {
      this.dirverList = res.data.content
    })
    this._merchantService.Verified().subscribe((response: any) => {
      this.merchantList = response?.data.content;
    });
  }

  get f() {
    return this.form.controls
  }
  findDriver(ev: any): void {
    this.driverInfo = [];
    this.form.patchValue({
      driverId: ev.target.value
    })
    const findText = ev.target.value.toString().trim().toLowerCase();
    this.searchdriverSubject.next(findText);
  }
  displayDriverFn(driver: any): string {
    return driver ? driver.id + ' - ' + driver.firstName + ' ' + driver.lastName : '';
  }
  submit() {
    if (this.form.valid) {
    } else {
      this._dialog.open(MessageComponent, {
        width: '500px',
        height: '450px',
        data: {
          text: 'Вы должны ввести все обязательные поля',
        }
      })
    }
  }
}

