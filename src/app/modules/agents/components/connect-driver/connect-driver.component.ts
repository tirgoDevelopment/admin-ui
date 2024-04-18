import { CurrencyPipe, JsonPipe, NgClass, NgFor, NgIf } from '@angular/common';
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
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialog, MatDialogModule } from '@angular/material/dialog';
import { HeaderTextComponent } from 'app/shared/components/header-text/header-text.component';
import { ToastrService } from 'ngx-toastr';
import { MatSelectModule } from '@angular/material/select';
import { NgxMatSelectSearchModule } from 'ngx-mat-select-search';
import { MatRadioModule } from '@angular/material/radio';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { NgxMatIntlTelInputComponent } from 'ngx-mat-intl-tel-input';
import { TypesService } from 'app/shared/services/types.service';
import { AgentService } from '../../services/agent.service';
import { DriversService } from 'app/modules/drivers/services/drivers.service';
import { Subject, catchError, debounceTime, of, switchMap } from 'rxjs';
import { DriverModel } from 'app/modules/drivers/models/driver.model';
import { MessageComponent } from 'app/shared/components/message/message.component';
import { MatAutocompleteModule } from '@angular/material/autocomplete';

@Component({
  selector: 'app-connect-driver',
  templateUrl: './connect-driver.component.html',
  styleUrls: ['./connect-driver.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [TranslocoModule, NgClass, JsonPipe, MatAutocompleteModule, NgxMatSelectSearchModule, NgFor, FormsModule, ReactiveFormsModule, MatRadioModule, MatDatepickerModule, NgxMatIntlTelInputComponent, MatInputModule, MatIconModule, MatSelectModule, MatButtonModule, ReactiveFormsModule, MatDialogModule, FormsModule, NgFor, NgIf, MatTableModule, NgClass, CurrencyPipe, MatFormFieldModule, MatInputModule, MatTableModule, MatSortModule, MatPaginatorModule, MatMenuModule, MatSlideToggleModule, HeaderTextComponent],
})
export class ConnectDriverComponent implements OnInit {
  subscription: any;
  edit: boolean = false;
  form: FormGroup = new FormGroup({
    driverId: new FormControl(''),
    agentId: new FormControl(''),
  })
  dirverList: any[] = [];
  driverInfo: any[];
  private searchdriverSubject = new Subject<number>();
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private _toaster: ToastrService,
    private _agentService: AgentService,
    private _typeService: TypesService,
    private _driverService: DriversService,
    private _cdr: ChangeDetectorRef,
    private _dialog: MatDialog) {
    if (this.data) {
      this.form.patchValue({
        agentId: this.data?.agentId,
      });
    }
    this.getSubscription();
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
      this.form.patchValue({
        driverId: this.driverInfo[0].id
      })
      this._cdr.detectChanges()
    });
  }


  ngOnInit(): void {
    // this.form.get('driverId').valueChanges.pipe(
    //   debounceTime(300),
    //   switchMap(driverId => this._dirfverService.get(driverId))
    // ).subscribe(response => {
    //   if (response.success) {
    //     this.driverInfo = response.data;
    //   }
    // });
  }

  getSubscription() {
    this._typeService.getSubscription().subscribe((response: any) => {
      this.subscription = response.data;
      this._cdr.detectChanges();
    })
  }

  get f() {
    return this.form.controls
  }

  findDriver(ev: any): void {
    this.driverInfo = [];

    const findText = ev.target.value.toString().trim().toLowerCase();
    if (findText != '' || findText != null || findText != undefined) {
      this.searchdriverSubject.next(findText);
    }
  }
  displayDriverFn(driver: any): string {
    return driver ? driver.id + ' - ' + driver.firstName + ' ' + driver.lastName : '';
  }
  submit() {
    
    if (this.form.valid) {
      this._agentService.connectToAgent(this.form.value).subscribe(res => {
        if (res.success) {
          this._dialog.closeAll()
          this.form.reset()
          this._toaster.success('Водитель успешно добавлена')
        } else {
          this._toaster.error('Невозможно сохранить водитель')
        }
      })
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


