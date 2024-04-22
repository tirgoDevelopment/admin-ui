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
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { HeaderTextComponent } from 'app/shared/components/header-text/header-text.component';
import { MatSelectModule } from '@angular/material/select';
import { DriversService } from 'app/modules/drivers/services/drivers.service';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { Subject, catchError, debounceTime, of, switchMap } from 'rxjs';
import { isObject } from 'lodash';
import { ToastrService } from 'ngx-toastr';

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
  driverList: any[] = [];
  driverInfo: any[] = [];
  merchantList: any[] = [];
  form: FormGroup = new FormGroup({
    driverMerchantId: new FormControl('', [Validators.required]),
    driverIds: new FormControl(''),
    drivers: new FormControl(''),
  })
  private searchdriverSubject = new Subject<number>();
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private _driverService: DriversService,
    private _toaster: ToastrService,
    private _cdr: ChangeDetectorRef,
    private _dialog: MatDialogRef<AssignDriverComponent>) {
    if (this.data) {
      this.form.patchValue({
        driverMerchantId: this.data,
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
        if (res != null) {
          if (isObject(res.data)) {
            this.driverInfo.push(res.data);
            this._cdr.detectChanges();
          }
        } else {
          this._toaster.info('Ничего не найдено')
        }
      });
  }
  ngOnInit(): void {
    this.form.get('drivers').valueChanges.subscribe(value => {
      if (isObject(value)) {
        this.driverList.push(value)
      }
    });
  }
  get f() {
    return this.form.controls
  }

  removeDriver(index: number): void {
    this.driverList.splice(index, 1);
  }

  findDriver(ev: any): void {
    this.driverInfo = []
    const findText = ev.target.value.toString().trim().toLowerCase();
    if (findText != '' || findText != null || findText != undefined) {
      this.searchdriverSubject.next(findText);
    }
  }

  displayDriverFn(driver: any): string {
    return driver ? driver.id + ' - ' + driver.firstName + ' ' + driver.lastName : '';
  }

  submit() {
    this.form.patchValue({
      driverIds: this.setIds(this.driverList),
    })
    this.form.removeControl('drivers');
    if (this.form.valid) {
      this._driverService.assignDriver(this.form.value).subscribe(res => {
        if (res.success) {
          this._dialog.close();
          this._toaster.success('Водитель успешно назначен')
        } else {
          this._toaster.error('Водитель не может быть успешно назначен')
        }
      })
    }
  }

  setIds(ids: any[]) {
    return ids.map(item => item.id);
  }
}

