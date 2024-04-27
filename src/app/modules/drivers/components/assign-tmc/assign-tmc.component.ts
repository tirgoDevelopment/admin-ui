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
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { HeaderTextComponent } from 'app/shared/components/header-text/header-text.component';
import { MatSelectModule } from '@angular/material/select';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { DriverMerchantService } from 'app/modules/driver-merchant/services/driver-merchant.service';
import { Subject, catchError, debounceTime, of, switchMap } from 'rxjs';
import { DriversService } from '../../services/drivers.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-assign-tmc',
  templateUrl: './assign-tmc.component.html',
  styleUrls: ['./assign-tmc.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [TranslocoModule, AsyncPipe, MatIconModule, MatAutocompleteModule, MatSelectModule, MatButtonModule, ReactiveFormsModule, MatDialogModule, FormsModule, NgFor, NgIf, MatTableModule, NgClass, CurrencyPipe, MatFormFieldModule, MatInputModule, MatTableModule, MatSortModule, MatPaginatorModule, MatMenuModule, MatSlideToggleModule, HeaderTextComponent],

})
export class AssignTmcComponent implements OnInit {
  form: FormGroup;
  cargoGroup = [];
  loading: boolean = false;
  dirverList: any[] = [];
  merchantInfo: any[];
  merchantList: any[] = [];
  private searchdriverSubject = new Subject<number>();
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private _driverService: DriversService,
    private _merchantService: DriverMerchantService,
    public _dialog: MatDialogRef<AssignTmcComponent>,
    private _toaster: ToastrService,
    private _fb: FormBuilder,
    private _cdr: ChangeDetectorRef) {
    this.form = this._fb.group({
      driverMerchantId: new FormControl('', [Validators.required]),
      driverIds: new FormControl([]),
    })
    if (this.data) {
      this.form.patchValue({
        driverIds: [this.data],
      });
    }
    this.searchdriverSubject
      .pipe(
        debounceTime(300),
        switchMap((findText: number) => {
          return this._merchantService.get(findText).pipe(
            catchError(() => of([])),
          );
        })
      )
      .subscribe((res: any) => {
        if (res.data) {
          this.merchantInfo.push(res.data);
          this.form.patchValue({
            driverMerchantId: this.merchantInfo[0]?.id
          })
          this._cdr.detectChanges()
        } else {
          // this._toaster.info('Ничего не найдено')
        }
      });
  }

  ngOnInit(): void {

  }

  get f() {
    return this.form.controls
  }

  findDriver(ev: any): void {
    this.merchantInfo = [];
    const findText = ev.target.value.toString().trim().toLowerCase();
    if (findText != '' || findText != null || findText != undefined) {
      this.searchdriverSubject.next(findText);
    }
  }

  displayDriverFn(driver: any): string {
    return driver ? driver.id + ' ' + driver.companyType + ' ' + driver.companyName : '';
  }
  submit() {
    this._driverService.assignDriver(this.form.value).subscribe((res: any) => {
      if (res.success) {
        this._dialog.close();
        this._toaster.success('Водитель успешно назначен')
      } else {
        this._toaster.error('Водитель не может быть успешно назначен')
      }
    })
  }
}
