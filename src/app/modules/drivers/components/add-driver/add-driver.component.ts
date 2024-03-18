import { CurrencyPipe, JsonPipe, NgClass, NgFor, NgIf } from '@angular/common';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ViewEncapsulation } from '@angular/core';
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
import { isObservable } from 'rxjs';
import { ConfirmComponent } from 'app/shared/components/confirm/confirm.component';
import { AddTransportComponent } from '../add-transport/add-transport.component';
import { removeDuplicateKeys } from 'app/shared/functions/remove-dublicates-formData';
@Component({
  selector: 'app-add-driver',
  templateUrl: './add-driver.component.html',
  styleUrls: ['./add-driver.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [TranslocoModule, NgClass, JsonPipe, NgxMatSelectSearchModule, MatRadioModule, MatDatepickerModule, NgxMatIntlTelInputComponent, MatInputModule, MatIconModule, MatSelectModule, MatButtonModule, ReactiveFormsModule, MatDialogModule, FormsModule, NgFor, NgIf, MatTableModule, NgClass, CurrencyPipe, MatFormFieldModule, MatInputModule, MatTableModule, MatSortModule, MatPaginatorModule, MatMenuModule, MatSlideToggleModule, HeaderTextComponent],

})
export class AddDriverComponent {
  findList: any[] | undefined = [];
  passwordGenerator = new PasswordGenerator();
  viewText = false;
  formData = new FormData();
  public citiesSelected: FormControl = new FormControl();
  public selectTechnicalRoomFilterCtrl: FormControl = new FormControl();
  passport: string;
  driverLicense: string;

  roles = [];
  subscription = [];
  edit: boolean = false;
  form: FormGroup = new FormGroup({
    id: new FormControl(''),
    firstName: new FormControl('', [Validators.required]),
    lastName: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    phoneNumbers: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required, Validators.maxLength(6)]),
    driverLicense:new FormControl('', [Validators.required]),
    passport: new FormControl('', [Validators.required]),
  })
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private _toaster: ToastrService,
    private _driverService: DriversService,
    private _subscriptionService: SubscriptionService,
    private _cdr: ChangeDetectorRef,
    private _dialog: MatDialog) {
    if (this.data) {
      this.edit = true;
      this._driverService.get(this.data).subscribe((response) => {
        console.log(response);
        this.passport = response.data?.passport;
        this.driverLicense = response.data?.driverLicense;
        this.form.patchValue({
          id: response.data?.id,
          firstName: response.data?.firstName,
          lastName: response.data?.lastName,
          email: response.data?.email,
          phoneNumbers: response.data?.phoneNumbers[0]?.phoneNumber,
          password: response.data?.password,
          passportFile: response.data?.passport,
          driverLicense: response.data?.driverLicense,
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

  selectFile(event: any, name: string) {
    const file: File = event.target.files[0];
    if (file) {
      this.formData.append(name, file, new Date().getTime().toString() + '.jpg');
      const reader = new FileReader();
      reader.onload = () => {
        this[name] = reader.result;
        this._cdr.detectChanges();
      };
      reader.readAsDataURL(file);
    }
  }
  get f() {
    return this.form.controls
  }

  submit() {
    console.log(this.form)
    console.log(this.form.valid);

    this.formData.append('id', this.form.get('id').value);
    this.formData.append('firstName', this.form.get('firstName').value);
    this.formData.append('lastName', this.form.get('lastName').value);
    this.formData.append('email', this.form.get('email').value);
    this.formData.append('phoneNumbers', JSON.stringify([this.form.get('phoneNumbers').value]));
    this.formData.append('password', this.form.get('password').value);
    if (typeof this.form.get('passportFile')?.value === "string") {
      this.formData.append('passportFile', this.form.get('passportFile')?.value);
    } else {
      // formData.append('techPassportFrontFilePath', this.form.get('techPassportFrontFilePath')?.value, String(new Date().getTime()));
    }
    if (typeof this.form.get('driverLicense')?.value === "string") {
      this.formData.append('driverLicense', this.form.get('driverLicense')?.value);
    } else {
      // formData.append('techPassportBackFilePath', this.form.get('techPassportBackFilePath')?.value, String(new Date().getTime()));
    }
    const uniqueFormData = removeDuplicateKeys(this.formData);
    if (this.form.value.id) {
      this._driverService.update(this.formData)
        .pipe(res => {
          if (isObservable(res)) {
            this.formData = new FormData();
            return res
          } else {
            return res
          }
        }).subscribe(res => {
          if (res.success) {
            this._dialog.closeAll()
            this.form.reset()
            this._toaster.success('Водитель успешно обновлена')
          } else {
            this.form.reset()
            this._toaster.error('Невозможно сохранить водитель')
          }
        })
    } else {
      this._driverService.create(uniqueFormData)
        .pipe(res => {
          if (isObservable(res)) {
            this.formData = new FormData();
            return res
          } else {
            return res
          }
        }).subscribe((res: any) => {
          this._dialog.open(ConfirmComponent, {
            width: '500px',
            height: '450px',
            data: {
              text: 'Вы хотите добавить транспорт?',
            }
          }).afterClosed().subscribe(data => {
            if (data) {
              const dialogRef = this._dialog.open(AddTransportComponent, {
                minWidth: '70vw',
                maxWidth: '90vw',
                minHeight: '60vh',
                maxHeight: '100vh',
                disableClose: true,
                autoFocus: false,
                data: { driverId: res.data.id },
              }).afterClosed().subscribe(() => {
                this._dialog.closeAll()
              })
            } else {
              this.form.reset()
              this._dialog.closeAll()
            }
          })
        })

      // console.log(res)
      // if (res.success) {
      this.form.reset()
      this._dialog.closeAll()
      this.form.reset()
      this._toaster.success('Водитель успешно добавлена')
      // } else {
      //   this._toaster.error('Невозможно сохранить водитель')
      // }
    }
  }

}