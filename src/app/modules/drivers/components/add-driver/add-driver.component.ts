import { CurrencyPipe, NgClass, NgFor, NgIf } from '@angular/common';
import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
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
import { ToastrService } from 'ngx-toastr';
import { MatSelectModule } from '@angular/material/select';
import { NgxMatIntlTelInputComponent } from 'ngx-mat-intl-tel-input';
import { NgxMatSelectSearchModule } from 'ngx-mat-select-search';
import { DriversService } from '../../services/drivers.service';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatRadioModule } from '@angular/material/radio';
import { SubscriptionService } from 'app/modules/main-types/subscription/services/subscription.service';
import { PasswordGenerator } from 'app/shared/functions/password-generator';
import { DriverModel } from '../../models/driver.model';
@Component({
  selector: 'app-add-driver',
  templateUrl: './add-driver.component.html',
  styleUrls: ['./add-driver.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [TranslocoModule, NgClass, NgxMatSelectSearchModule, MatRadioModule, MatDatepickerModule, NgxMatIntlTelInputComponent, MatInputModule, MatIconModule, MatSelectModule, MatButtonModule, ReactiveFormsModule, MatDialogModule, FormsModule, NgFor, NgIf, MatTableModule, NgClass, CurrencyPipe, MatFormFieldModule, MatInputModule, MatTableModule, MatSortModule, MatPaginatorModule, MatMenuModule, MatSlideToggleModule, HeaderTextComponent],

})
export class AddDriverComponent {
  findList: any[] | undefined = [];
  passwordGenerator = new PasswordGenerator();
  viewText = false;
  public citiesSelected: FormControl = new FormControl();
  public selectTechnicalRoomFilterCtrl: FormControl = new FormControl();

  roles = [];
  subscription = [];
  edit: boolean = false;
  form: FormGroup = new FormGroup({
    id: new FormControl(''),
    firstName: new FormControl('', [Validators.required]),
    lastName: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    phoneNumbers: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required,  Validators.maxLength(6)]),
  })
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private _toaster: ToastrService,
    private _driverService: DriversService,
    private _subscriptionService: SubscriptionService,
    private _dialog: MatDialog) {
    if (this.data) {
      this.edit = true;
      this._driverService.get(this.data).subscribe((response: any) => {
        console.log(response.data, 'getAll')
        this.form.patchValue({
          id: response.data?.id,
          firstName: response.data?.firstName,
          lastName: response.data?.lastName,
          email: response.data?.email,
          // phoneNumbers: response.data?.phoneNumbers[0]?.phoneNumber,
          password: response.data?.password,
        });
      })

    }
    // this.getSubscription();
  }

  generate() {
    this.form.patchValue({
      password: this.passwordGenerator.generateRandomPassword(),
    });
  }

  getSubscription() {
    this._subscriptionService.getAll().subscribe((response) => {
      this.subscription = response.data;
    })
  }
  async findCity(ev: any) {
    const findText = ev.target.value.toString().trim().toLowerCase();
    if (findText.length >= 2) {
      this.viewText = true;
      //  this.findList = await this.authService.findCity(findText).toPromise();
    } else {
      this.viewText = false;
      this.findList = [];
    }
  }
  get f() {
    return this.form.controls
  }

  submit() {
    // const formData = new FormData();
    // formData.forEach((value, key) => {
    //   this.form.get(key)?.setValue(value);
    // });
    if (this.form.value.id) {
      this._driverService.update(this.form.value).subscribe(res => {
        console.log(res)
        if (res.success) {
          this._dialog.closeAll()
          this._toaster.success('Водитель успешно обновлена')
        } else {
          this._toaster.error('Невозможно сохранить водитель')
        }
      })
    } else {
      this._driverService.create(this.form.value).subscribe(res => {
        // console.log(res)
        // if (res.success) {
        this._dialog.closeAll()
        this.form.reset()
        this._toaster.success('Водитель успешно добавлена')
        // } else {
        //   this._toaster.error('Невозможно сохранить водитель')
        // }
      })
    }
  }

}