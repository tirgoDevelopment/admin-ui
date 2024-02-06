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

@Component({
  selector: 'app-add-client',
  templateUrl: './add-client.component.html',
  styleUrls: ['./add-client.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [TranslocoModule, NgxMatSelectSearchModule, MatAutocompleteModule, NgxMatIntlTelInputComponent, MatInputModule, MatIconModule, MatSelectModule, MatButtonModule, ReactiveFormsModule, MatDialogModule, FormsModule, NgFor, NgIf, MatTableModule, NgClass, CurrencyPipe, MatFormFieldModule, MatInputModule, MatTableModule, MatSortModule, MatPaginatorModule, MatMenuModule, MatSlideToggleModule, HeaderTextComponent],
})
export class AddClientComponent {
  findList: any[] | undefined = [];
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
      this.form.patchValue({
        id: this.data?.id,
        full_name: this.data?.full_name,
        phoneNumber: this.data?.phoneNumber,
        role: this.data?.role,
        login: this.data?.login,
        password: this.data?.password,
        passport: this.data?.passport,
      });
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
      // const formData = new FormData();
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
    const formData = new FormData();
    formData.forEach((value, key) => {
      this.form.get(key)?.setValue(value);
    });
    formData.append('file', this.form.get('passport').value, String(new Date().getTime()));
    if (this.form.value.id) {
      this._clientService.update(formData).subscribe(res => {
        if (res.success) {
          this._dialog.closeAll()
          this._toaster.success('Пользователь успешно обновлена')
        } else {
          this._toaster.error('Невозможно сохранить пользователь')
        }
      })
    } else {
      this._clientService.create(formData).subscribe(res => {
        if (res.success) {
          this._dialog.closeAll()
          this.form.reset()
          this._toaster.success('Пользователь успешно добавлена')
        } else {
          this._toaster.error('Невозможно сохранить пользователь')
        }
      })
    }
  }

}