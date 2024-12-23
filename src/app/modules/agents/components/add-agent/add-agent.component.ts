import { CommonModule, CurrencyPipe, NgClass, NgFor, NgIf } from '@angular/common';
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
import { FormArray, FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialog, MatDialogModule } from '@angular/material/dialog';
import { HeaderTextComponent } from 'app/shared/components/header-text/header-text.component';
import { ToastrService } from 'ngx-toastr';
import { MatSelectModule } from '@angular/material/select';
import { NgxMatIntlTelInputComponent } from 'ngx-mat-intl-tel-input';
import { AgentService } from '../../services/agent.service';
import { PasswordGenerator } from 'app/shared/functions/password-generator';
import { TypesService } from 'app/shared/services/types.service';
import { removeDuplicateKeys } from 'app/shared/functions/remove-dublicates-formData';
import { MessageComponent } from 'app/shared/components/message/message.component';
import { PipeModule } from 'app/shared/pipes/pipe.module';
import { FileUrlService } from 'app/shared/services/file-url.service';
import { CountryService } from 'app/shared/services/country.service';

@Component({
  selector: 'app-add-agent',
  templateUrl: './add-agent.component.html',
  styleUrls: ['./add-agent.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [TranslocoModule, CommonModule, NgxMatIntlTelInputComponent, MatInputModule, MatIconModule, MatSelectModule, MatButtonModule, ReactiveFormsModule, MatDialogModule, FormsModule, NgFor, NgIf, MatTableModule, NgClass, CurrencyPipe, MatFormFieldModule, MatInputModule, MatTableModule, MatSortModule, MatPaginatorModule, MatMenuModule, MatSlideToggleModule, PipeModule, HeaderTextComponent],
})

export class AddAgentComponent implements OnInit {
  edit: boolean = false;
  currencies: any;
  passwordGenerator = new PasswordGenerator();
  registrationCertificateFilePath: string;
  managerPassportFilePath: string;
  formData = new FormData();
  currencyId: any;
  form: FormGroup = new FormGroup({
    id: new FormControl(''),
    username: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required, Validators.minLength(8), Validators.maxLength(16), Validators.pattern('^[a-zA-Z0-9]+$')]),
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
    private _counterService: CountryService,
    private _typeService: TypesService,
    private _cdr: ChangeDetectorRef,
    private _dialog: MatDialog,
    protected fileService: FileUrlService) {
    this._typeService.getCurrencies().subscribe((response: any) => {
      this.currencies = response.data;
      this.currencyId = this.currencies[0].id
      this.addItemFirst()
    })
    if (this.data) {
      this.edit = true;
      this.getAgentById(this.data.id);
    }
  }
  ngOnInit(): void {

  }
  getAgentById(id: number): void {
    this._agentService.get(id).subscribe(res => {
      this.registrationCertificateFilePath = res.data.registrationCertificateFilePath;
      this.managerPassportFilePath = res.data.managerPassportFilePath;
      if (res.success) {
        this._counterService.getJSONFromLocal().subscribe((data: any) => {
          let phone = this._counterService.getCountryCode(String(res.data?.phoneNumber), data);
          this.form.patchValue({
            id: res.data.id,
            username: res.data.username,
            phoneNumber: String(res.data?.phoneNumber).replace(phone, ''),
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
        })
      }
    })
  }

  selectFile(event: any, name: string) {
    const file: File = event.target.files[0];
    if (file) {
      this.formData.append(name, file, new Date().getTime().toString() + '.jpg');
      this.form.patchValue({
        [name]: file
      })
      const reader = new FileReader();
      reader.onload = () => {
        this[name] = reader.result;
        this._cdr.detectChanges();
      };
      reader.readAsDataURL(file);
    }
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
    this._cdr.detectChanges()
  }
  addItemFirst() {
    this.itemsFormArray.push(this.createItemFIrst(this.currencyId));
    this._cdr.detectChanges()
  }
  createItem(): FormGroup {
    return this.fb.group({
      currencyId: ['', Validators.required],
      account: ['', Validators.required]
    });
  }
  createItemFIrst(currencyId): FormGroup {
    return this.fb.group({
      currencyId: [currencyId, Validators.required],
      account: ['', Validators.required]
    });
  }

  removeItem(index: number) {
    this.itemsFormArray.removeAt(index);
  }

  get f() {
    return this.form.controls
  }

  submit() {
    this.formData.append('id', this.form.get('id').value);
    this.formData.append('username', this.form.get('username').value);
    this.formData.append('companyName', this.form.get('companyName').value);
    this.formData.append('password', this.form.get('password').value);
    this.formData.append('bankAccounts', JSON.stringify(this.form.get('bankAccounts').value));
    this.formData.append('legalAddress', this.form.get('legalAddress').value);
    this.formData.append('physicalAddress', this.form.get('physicalAddress').value);
    this.formData.append('managerFirstName', this.form.get('managerFirstName').value);
    this.formData.append('managerLastName', this.form.get('managerLastName').value);
    this.formData.append('inn', this.form.get('inn').value);
    this.formData.append('oked', this.form.get('oked').value);
    this.formData.append('mfo', this.form.get('mfo').value);
    this.formData.append('bankBranchName', this.form.get('bankBranchName').value);
    this.formData.append('phoneNumber', this.form.get('phoneNumber').value);
    if (typeof this.form.get('registrationCertificateFilePath')?.value === "string") {
      this.formData.append('registrationCertificateFilePath', this.form.get('registrationCertificateFilePath')?.value);
    } else {
      // this.formData.append('registrationCertificateFilePath', this.form.get('registrationCertificateFilePath')?.value, String(new Date().getTime()));
    }
    if (typeof this.form.get('managerPassportFilePath')?.value === "string") {
      this.formData.append('managerPassportFilePath', this.form.get('managerPassportFilePath')?.value);
    } else {
      // this.formData.append('managerPassportFilePath', this.form.get('managerPassportFilePath')?.value, String(new Date().getTime()));
    }
    const uniqueFormData = removeDuplicateKeys(this.formData);
    console.log(this.form)
    if (this.form.valid) {
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
        this._agentService.create(uniqueFormData).subscribe(res => {
          if (res.success) {
            this._dialog.closeAll()
            this.form.reset()
            this._toaster.success('Агент успешно добавлена')
          } else {
            this._toaster.error('Невозможно сохранить агент')
          }
        })
      }
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

  generate() {
    this.form.patchValue({
      password: this.passwordGenerator.generateRandomPassword(),
    });
  }
}

