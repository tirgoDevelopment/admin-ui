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
import { FormArray, FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialog, MatDialogModule } from '@angular/material/dialog';
import { HeaderTextComponent } from 'app/shared/components/header-text/header-text.component';
import { ToastrService } from 'ngx-toastr';
import { MatSelectModule } from '@angular/material/select';
import { NgxMatIntlTelInputComponent } from 'ngx-mat-intl-tel-input';
import { AgentService } from '../../services/agent.service';
import { PasswordGenerator } from 'app/shared/functions/password-generator';
import { TypesService } from 'app/shared/services/types.service';

@Component({
  selector: 'app-add-agent',
  templateUrl: './add-agent.component.html',
  styleUrls: ['./add-agent.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [TranslocoModule, NgxMatIntlTelInputComponent, MatInputModule, MatIconModule, MatSelectModule, MatButtonModule, ReactiveFormsModule, MatDialogModule, FormsModule, NgFor, NgIf, MatTableModule, NgClass, CurrencyPipe, MatFormFieldModule, MatInputModule, MatTableModule, MatSortModule, MatPaginatorModule, MatMenuModule, MatSlideToggleModule, HeaderTextComponent],
})

export class AddAgentComponent {
  edit: boolean = false;
  currencies: any;
  registrationCertificateFilePath: string;
  managerPassportFilePath: string;
  passwordGenerator = new PasswordGenerator();
  form: FormGroup = new FormGroup({
    id: new FormControl(''),
    username: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required, Validators.minLength(6)]),
    companyName: new FormControl('', [Validators.required]),
    legalAddress: new FormControl('', [Validators.required]),
    physicalAddress: new FormControl('', [Validators.required]),
    managerFirstName: new FormControl('', [Validators.required]),
    managerLastName: new FormControl('', [Validators.required]),
    inn: new FormControl('', [Validators.required]),
    oked: new FormControl('', [Validators.required]),
    mfo: new FormControl('', [Validators.required]),
    bankAccounts: new FormArray([]),
    bankBranchName: new FormControl('', [Validators.required]),
    registrationCertificateFilePath: new FormControl('', [Validators.required]),
    managerPassportFilePath: new FormControl('', [Validators.required]),
    phoneNumber: new FormControl('', [Validators.required]),
  })
  constructor(
    private fb: FormBuilder,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private _toaster: ToastrService,
    private _agentService: AgentService,
    private _typeService: TypesService,
    private _dialog: MatDialog) {
    this._typeService.getCurrencies().subscribe((response: any) => {
      this.currencies = response.data;
    })
    if (this.data) {
      this.edit = true;
      console.log(this.data);
      this.getAgentById(this.data.id);
    }
    this.addItem()
  }
  getAgentById(id: number): void {
    console.log(id);
    // this.form.patchValue({
    //   techPassportFrontFilePath: 'new value for techPassportFrontFilePath',
    //   id: 'new value for techPassportFrontFilePath',
    //   username: 'new value for techPassportFrontFilePath',
    //   companyName: 'new value for techPassportFrontFilePath',
    //   legalAddress: 'new value for techPassportFrontFilePath',
    //   physicalAddress: 'new value for techPassportFrontFilePath',
    //   managerFirstName: 'new value for techPassportFrontFilePath',
    //   managerLastName: 'new value for techPassportFrontFilePath',
    //   inn: 'new value for techPassportFrontFilePath',
    //   oked: 'new value for techPassportFrontFilePath',
    //   mfo: 'new value for techPassportFrontFilePath',
    //   bankBranchName: 'new value for techPassportFrontFilePath',
    //   phoneNumber: 'new value for techPassportFrontFilePath',
    //   registrationCertificateFilePath: 'new value for techPassportFrontFilePath',
    //   managerPassportFilePath: 'new value for techPassportFrontFilePath',
    // });
    this._agentService.get(id).subscribe(res => {
      this.registrationCertificateFilePath = res.data.registrationCertificateFilePath;
      this.managerPassportFilePath = res.data.managerPassportFilePath;
      if (res.success) {
        this.form.patchValue({
          id: res.data.id,
          username: res.data.username,
          phoneNumber: res.data.phoneNumber,
          companyName: res.data.companyName,
          legalAddress: res.data.legalAddress,
          physicalAddress: res.data.physicalAddress,
          managerFirstName: res.data.managerFirstName,
          managerLastName: res.data.managerLastName,
          inn: res.data.inn,
          oked: res.data.oked,
          mfo: res.data.mfo,
          bankBranchName: res.data.bankBranchName,
          bankAccounts: res.data.bankAccounts,
          registrationCertificateFilePath: res.data.registrationCertificateFilePath,
          managerPassportFilePath: res.data.managerPassportFilePath,
        });
      }
    })
  }

  getImageUrl(formname: string): string {
    const file = this.form.get(`${formname}`).value;
    if (file instanceof File) {
      return URL.createObjectURL(file);
    }
    return '';
  }


  get itemsFormArray() {
    return this.form.get('bankAccounts') as FormArray;
  }

  addItem() {
    this.itemsFormArray.push(this.createItem());
  }
  createItem(): FormGroup {
    return this.fb.group({
      currencyId: ['', Validators.required],
      account: ['', Validators.required]
    });
  }

  removeItem(index: number) {
    this.itemsFormArray.removeAt(index);
  }

  onFileSelected(event: any, type: string): void {
    const file: File = event.target.files[0];
    switch (type) {
      case 'registrationCertificateFilePath':
        this.form.patchValue({
          registrationCertificateFilePath: file
        });
      case 'managerPassportFilePath':
        this.form.patchValue({
          managerPassportFilePath: file
        });
    }
  }

  get f() {
    return this.form.controls
  }

  submit() {
    const formData = new FormData();
    formData.append('id', this.form.get('id').value);
    formData.append('username', this.form.get('username').value);
    formData.append('companyName', this.form.get('companyName').value);
    formData.append('password', this.form.get('password').value);
    formData.append('bankAccounts', JSON.stringify(this.form.get('bankAccounts').value));
    formData.append('legalAddress', this.form.get('legalAddress').value);
    formData.append('physicalAddress', this.form.get('physicalAddress').value);
    formData.append('managerFirstName', this.form.get('managerFirstName').value);
    formData.append('managerLastName', this.form.get('managerLastName').value);
    formData.append('inn', this.form.get('inn').value);
    formData.append('oked', this.form.get('oked').value);
    formData.append('mfo', this.form.get('mfo').value);
    formData.append('bankBranchName', this.form.get('bankBranchName').value);
    formData.append('phoneNumber', this.form.get('phoneNumber').value);
    if (typeof this.form.get('registrationCertificateFilePath')?.value === "string") {
      formData.append('registrationCertificateFilePath', this.form.get('registrationCertificateFilePath')?.value);
    } else {
      // formData.append('registrationCertificateFilePath', this.form.get('registrationCertificateFilePath')?.value, String(new Date().getTime()));
    }
    if (typeof this.form.get('managerPassportFilePath')?.value === "string") {
      formData.append('managerPassportFilePath', this.form.get('managerPassportFilePath')?.value);
    } else {
      // formData.append('managerPassportFilePath', this.form.get('managerPassportFilePath')?.value, String(new Date().getTime()));
    }
    if (this.form.value.id) {
      this._agentService.update(this.form.value).subscribe(res => {
        if (res.success) {
          this._dialog.closeAll()
          this._toaster.success('Агент успешно обновлена')
        } else {
          this._toaster.error('Невозможно сохранить агент')
        }
      })
    } else {
      this._agentService.create(formData).subscribe(res => {
        if (res.success) {
          this._dialog.closeAll()
          this.form.reset()
          this._toaster.success('Агент успешно добавлена')
        } else {
          this._toaster.error('Невозможно сохранить агент')
        }
      })
    }
  }

  generate() {
    this.form.patchValue({
      password: this.passwordGenerator.generateRandomPassword(),
    });
  }
}

