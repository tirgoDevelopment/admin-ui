import { CurrencyPipe, NgClass, NgFor, NgIf } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { TranslocoModule } from '@ngneat/transloco';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatMenuModule } from '@angular/material/menu';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { HeaderTextComponent } from 'app/shared/components/header-text/header-text.component';
import { MatSelectModule } from '@angular/material/select';
import { NgxMatIntlTelInputComponent } from 'ngx-mat-intl-tel-input';
import { NgxMatSelectSearchModule } from 'ngx-mat-select-search';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatRadioModule } from '@angular/material/radio';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { MerchantService } from '../../services/merchant.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-merchant-moderation',
  templateUrl: './merchant-moderation.component.html',
  styleUrls: ['./merchant-moderation.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [TranslocoModule, RouterModule, NgClass, NgxMatSelectSearchModule, MatRadioModule, MatDatepickerModule, NgxMatIntlTelInputComponent, MatInputModule, MatIconModule, MatSelectModule, MatButtonModule, ReactiveFormsModule, MatDialogModule, FormsModule, NgFor, NgIf, MatTableModule, NgClass, CurrencyPipe, MatFormFieldModule, MatInputModule, MatTableModule, MatSortModule, MatPaginatorModule, MatMenuModule, MatSlideToggleModule, HeaderTextComponent],
})

export class MerchantModerationComponent implements OnInit {
  displayedColumns: string[] = ['full_name', 'sum', 'currencyName', 'date', 'type', 'status', 'actions'];
  @ViewChild(MatPaginator) paginator: MatPaginator;
  dataSource = new MatTableDataSource<any>([]);
  fileApi = 'https://merchant.tirgo.io/api/v1/file/download/';
  selectedFileNames: any;
  passportFile: FileList;

  certificateFile: FileList;

  phone2: boolean = false;
  factAddressShow: boolean = false;
  bankAccountCurrency: boolean = false;
  data
  transactionRequest: any[] = [];
  transaction: any;
  balances: any;
  frozenBalance: any;
  image: any;
  id: number;
  form: FormGroup = new FormGroup({
    id: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required]),
    companyName: new FormControl('', [Validators.required]),
    supervisorFirstName: new FormControl('', [Validators.required]),
    supervisorLastName: new FormControl('', [Validators.required]),
    responsiblePersonFistName: new FormControl('', [Validators.required]),
    responsiblePersonLastName: new FormControl('', [Validators.required]),
    responsbilePersonPhoneNumber: new FormControl('', [Validators.required]),
    legalAddress: new FormControl('', [Validators.required]),
    bankName: new FormControl('', [Validators.required]),
    inn: new FormControl('', [Validators.required]),
    oked: new FormControl('', [Validators.required]),
    mfo: new FormControl('', [Validators.required]),
    phoneNumber: new FormControl('', [Validators.required]),
    dunsNumber: new FormControl('', [Validators.required]),
    notes: new FormControl('', [Validators.required]),
    logoFilePath: new FormControl('', [Validators.required]),
    registrationCertificateFilePath: new FormControl('', [Validators.required]),
    passportFilePath: new FormControl('', [Validators.required]),
  })
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private toastr:ToastrService,
    private merchantService: MerchantService) {

    this.route.params.subscribe(params => {
      const param = params.id;
      this.id = param;
      this.getMerchant(Number(param));
    });
  }

  getMerchant(id: number) {
    this.form.patchValue({
      techPassportFrontFilePath: 'new value for techPassportFrontFilePath',
      id: 'new value for techPassportFrontFilePath',
      bankName: 'new value for techPassportFrontFilePath',
      companyName: 'new value for techPassportFrontFilePath',
      phoneNumber: 'new value for techPassportFrontFilePath',
      dunsNumber: 'new value for techPassportFrontFilePath',
      email: 'new value for techPassportFrontFilePath',
      supervisorFirstName: 'new value for techPassportFrontFilePath',
      supervisorLastName: 'new value for techPassportFrontFilePath',
      responsiblePersonFistName: 'new value for techPassportFrontFilePath',
      responsiblePersonLastName: 'new value for techPassportFrontFilePath',
      responsbilePersonPhoneNumber: 'new value for techPassportFrontFilePath',
      inn: 'new value for techPassportFrontFilePath',
      oked: 'new value for techPassportFrontFilePath',
      mfo: 'new value for techPassportFrontFilePath',
      notes: 'new value for techPassportFrontFilePath',
      logoFilePath: 'new value for techPassportFrontFilePath',
      registrationCertificateFilePath: 'new value for techPassportFrontFilePath',
      passportFilePath: 'new value for techPassportFrontFilePath',
      legalAddress: 'new value for techPassportFrontFilePath',
    });
    this.merchantService.get(id).subscribe(responce => {
      this.form.patchValue({
        id: responce.data.id,
        bankName: responce.data.bankName,
        companyName: responce.data.companyName,
        phoneNumber: responce.data.phoneNumber,
        dunsNumber: responce.data.dunsNumber,
        email: responce.data.email,
        supervisorFirstName: responce.data.supervisorFirstName,
        supervisorLastName: responce.data.supervisorLastName,
        responsiblePersonFistName: responce.data.responsiblePersonFistName,
        responsiblePersonLastName: responce.data.responsiblePersonLastName,
        responsbilePersonPhoneNumber: responce.data.responsbilePersonPhoneNumber,
        legalAddress: responce.data.legalAddress,
        inn: responce.data.inn,
        oked: responce.data.oked,
        mfo: responce.data.mfo,
        notes: responce.data.notes,
        logoFilePath: responce.data?.logoFilePath,
        registrationCertificateFilePath: responce.data?.registrationCertificateFilePath,
        passportFilePath: responce.data?.passportFilePath
      })
    })
  }
  ngOnInit(): void {
    this.getTransactions()
    this.getBalance()
  }

  getTransactions() {
    this.merchantService.getMerchantTransactions(this.id).subscribe(res => {
      this.data = res.data
      this.dataSource = new MatTableDataSource(this.data);
      this.dataSource.paginator = this.paginator;
    })
  }

  getBalance() {
    this.merchantService.getMerchantBalanse(this.id).subscribe(res => {
      this.balances = res.data
    })
  }

  get f() {
    return this.form.controls
  }

  onFileSelected(event: any, type: string): void {
    const file: File = event.target.files[0];
    if (type == 'logoFilePath') {
      this.form.patchValue({
        logoFilePath: file
      });
    } else if (type == 'registrationCertificateFilePath') {
      this.form.patchValue({
        registrationCertificateFilePath: file
      });
    }
    else if (type == 'passportFilePath') {
      this.form.patchValue({
        passportFilePath: file
      });
    }
  }

  getImageUrl(formname: string): string {
    const file = this.form.get(`${formname}`).value;
    if (file instanceof File) {
      return URL.createObjectURL(file);
    }
    return '';
  }

  editMerchant() {
    const formData = new FormData();
    formData.append('id', this.form.get('id').value);
    formData.append('bankName', this.form.get('bankName').value);
    formData.append('companyName', this.form.get('companyName').value);
    formData.append('phoneNumber', this.form.get('phoneNumber').value);
    formData.append('dunsNumber', this.form.get('dunsNumber').value);
    formData.append('email', this.form.get('email').value);
    formData.append('supervisorFirstName', this.form.get('supervisorFirstName').value);
    formData.append('supervisorLastName', this.form.get('supervisorLastName').value);
    formData.append('responsiblePersonFistName', this.form.get('responsiblePersonFistName').value);
    formData.append('responsiblePersonLastName', this.form.get('responsiblePersonLastName').value);
    formData.append('responsbilePersonPhoneNumber', this.form.get('responsbilePersonPhoneNumber').value);
    formData.append('legalAddress', this.form.get('legalAddress').value);
    formData.append('inn', this.form.get('inn').value);
    formData.append('oked', this.form.get('oked').value);
    formData.append('mfo', this.form.get('mfo').value);
    formData.append('notes', this.form.get('notes').value);
    if (typeof this.form.get('logoFilePath')?.value === "string") {
      formData.append('logoFilePath', this.form.get('logoFilePath')?.value);
    } else {
      formData.append('logoFilePath', this.form.get('logoFilePath')?.value, String(new Date().getTime()));
    }
    if (typeof this.form.get('registrationCertificateFilePath')?.value === "string") {
      formData.append('registrationCertificateFilePath', this.form.get('registrationCertificateFilePath')?.value);
    } else {
      formData.append('registrationCertificateFilePath', this.form.get('registrationCertificateFilePath')?.value, String(new Date().getTime()));
    }
    if (typeof this.form.get('passportFilePath')?.value === "string") {
      formData.append('passportFilePath', this.form.get('passportFilePath')?.value);
    } else {
      formData.append('passportFilePath', this.form.get('passportFilePath')?.value, String(new Date().getTime()));
    }
    this.merchantService.updateMerchant(formData).subscribe((res: any) => {
      console.log(res)
      if (res.success) {
        this.router.navigate(['/merchants'])
      }
    })
  }

  verifyTransaction(transaction) {
    if (transaction.transactionType=='topupAccount') {
      this.merchantService.verifyTransaction(transaction.id).subscribe((res:any) => {
        if (res.success) {
          this.getBalance();
          this.toastr.success('Успешно завершено')
        } else {
          if (res.errors[0] = 'notEnoughBalance') {
            this.toastr.error('Баланса не хватает')
          } else {
            this.toastr.error('Не успешно завершено')
          }
        }
      })
    } else {
      this.toastr.error('Баланса не хватает')
    }
  }
  rejectTransaction(id) {
    this.merchantService.rejectTransaction(id).subscribe(res => {})
  }

  cancelTransaction(id) {
    this.merchantService.cancelTransaction(id).subscribe(res => {})
  }
}

