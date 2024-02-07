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
import { ClientService } from '../../services/client.service';
import { NgxMatSelectSearchModule } from 'ngx-mat-select-search';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { CountryService } from 'app/shared/services/country.service';
import { MatToolbarModule } from '@angular/material/toolbar';
@Component({
  selector: 'app-add-client',
  templateUrl: './add-client.component.html',
  styleUrls: ['./add-client.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [TranslocoModule, NgxMatSelectSearchModule, MatToolbarModule, MatAutocompleteModule, NgxMatIntlTelInputComponent, MatInputModule, MatIconModule, MatSelectModule, MatButtonModule, ReactiveFormsModule, MatDialogModule, FormsModule, NgFor, NgIf, MatTableModule, NgClass, CurrencyPipe, MatFormFieldModule, MatInputModule, MatTableModule, MatSortModule, MatPaginatorModule, MatMenuModule, MatSlideToggleModule, HeaderTextComponent],
})
export class AddClientComponent {
  findList: any[] | undefined = [];
  file: File | null = null;
  fileName: string | undefined;
  viewText = false;
  public citiesSelected: FormControl = new FormControl();
  public selectTechnicalRoomFilterCtrl: FormControl = new FormControl();

  roles = [];
  edit: boolean = false;
  form: FormGroup = new FormGroup({
    id: new FormControl(''),
    firstName: new FormControl('', [Validators.required]),
    lastName: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    phoneNumber: new FormControl('', [Validators.required]),
    citizenship: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required, Validators.maxLength(6)]),
    passport: new FormControl(''),
  })
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private countryService: CountryService,
    private _toaster: ToastrService,
    private _clientService: ClientService,
    private _dialog: MatDialog) {
    if (this.data) {
      this.edit = true;
      this._clientService.get(this.data.id).subscribe((res: any) => {
        this.form.patchValue({
          id: res.data?.id,
          firstName: res.data?.firstName,
          lastName: res.data?.lastName,
          phoneNumber: res.data?.phoneNumbers[0].phoneNumber,
          email: res.data?.email,
          citizenship: res.data?.citizenship,
          passport: res.data?.passport,
          password: res.data?.password,
        });
      })

    }
  }

  findCity(ev: any) {
    try {
      const findText = ev.target.value.toString().trim().toLowerCase();
      if (findText.length >= 2) {
        this.viewText = true;
        this.countryService.findCity(findText).subscribe((res: any) => {
          this.findList = res;
        })
      } else {
        this.viewText = false;
        this.findList = [];
      }
    } catch (error) {
      console.error("Error fetching city data:", error);
    }
  }

  onPassportSelected(event: any): void {
    const passportInput = event.target;

    if (passportInput.files && passportInput.files.length > 0) {
      const passportFile = passportInput.files[0];
      const files: File = event.target.files[0];
      if (files) {
        this.file = files;
      }
      // const formData = new FormData();
      this.fileName = passportFile.name;
      const file = new File([passportFile], passportFile.name, { type: passportFile.type });
      // formData.append('file',file, String(new Date().getTime()));
      this.form.get('passport').setValue(file);
      console.log(this.form.get('passport').value);
    }
  }

  get f() {
    return this.form.controls
  }

  submit() {
    if (this.form.value.id) {
      this._clientService.update(this.form.value).subscribe(res => {
        if (res.success) {
          this._dialog.closeAll()
          this._toaster.success('Пользователь успешно обновлена')
        } else {
          this._toaster.error('Невозможно сохранить пользователь')
          // this.form.patchValue({
          //   phoneNumbers: [
          //     ...this.form.get('phoneNumbers').value
          //   ]
          // })
        }
      })
    } else {
      const formData = new FormData();
      formData.append('password', this.form.get('password').value);
      formData.append('passport', this.form.get('passport')?.value, String(new Date().getTime()));
      formData.append('id', this.form.get('id').value);
      formData.append('firstName', this.form.get('firstName').value);
      formData.append('lastName', this.form.get('lastName').value);
      formData.append('phoneNumber', this.form.get('phoneNumber').value);
      formData.append('email', this.form.get('email').value);
      formData.append('citizenship', this.form.get('citizenship').value);
      this._clientService.create(formData).subscribe(res => {
        if (res.success) {
          this._dialog.closeAll()
          this.form.reset()
          this._toaster.success('Пользователь успешно добавлена')
        } else {
          this._toaster.error('Невозможно сохранить пользователь');
          // this.form.patchValue({
          //   phoneNumbers: [
          //     ...this.form.get('phoneNumbers').value
          //   ]
          // })
        }
      })
    }
  }

}