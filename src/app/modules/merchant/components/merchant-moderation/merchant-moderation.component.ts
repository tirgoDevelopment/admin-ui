import { AsyncPipe, CurrencyPipe, NgClass, NgFor, NgIf } from '@angular/common';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
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
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { HeaderTextComponent } from 'app/shared/components/header-text/header-text.component';
import { MatSelectModule } from '@angular/material/select';
import { NgxMatIntlTelInputComponent } from 'ngx-mat-intl-tel-input';
import { NgxMatSelectSearchModule } from 'ngx-mat-select-search';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatRadioModule } from '@angular/material/radio';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { MerchantService } from '../../services/merchant.service';
import { ToastrService } from 'ngx-toastr';
import { isObservable } from 'rxjs';
import { PipeModule } from 'app/shared/pipes/pipe.module';
import { MessageComponent } from 'app/shared/components/message/message.component';
import { FileUrlService } from 'app/shared/services/file-url.service';
import { CreateTransactionComponent } from '../create-transaction/create-transaction.component';
import { CountryService } from 'app/shared/services/country.service';

@Component({
  selector: 'app-merchant-moderation',
  templateUrl: './merchant-moderation.component.html',
  styleUrls: ['./merchant-moderation.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [TranslocoModule, TranslocoModule, PipeModule, AsyncPipe, RouterModule, NgClass, NgxMatSelectSearchModule, MatRadioModule, MatDatepickerModule, NgxMatIntlTelInputComponent, MatInputModule, MatIconModule, MatSelectModule, MatButtonModule, ReactiveFormsModule, MatDialogModule, FormsModule, NgFor, NgIf, MatTableModule, NgClass, CurrencyPipe, MatFormFieldModule, MatInputModule, MatTableModule, MatSortModule, MatPaginatorModule, MatMenuModule, MatSlideToggleModule, HeaderTextComponent],
})

export class MerchantModerationComponent implements OnInit {
  displayedColumns: string[] = ['full_name', 'sum', 'currencyName', 'date', 'type', 'status', 'actions'];
  @ViewChild(MatPaginator) paginator: MatPaginator;
  dataSource = new MatTableDataSource<any>([]);
  selectedFileNames: any;
  passportFile: FileList;
  certificateFile: FileList;
  data
  transactionRequest: any[] = [];
  transaction: any;
  balances: any;
  frozenBalance: any;
  id: number;
  formData = new FormData();
  logoFilePath: string;
  registrationCertificateFilePath: string;
  passportFilePath: string;
  edit: boolean = false;
  pageParams = {
    page: 0,
    limit: 10,
    totalPagesCount: 1,
    sortBy: 'id',
    sortType: 'desc'
  };
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
    protected fileService: FileUrlService,
    private router: Router,
    private _counterService: CountryService,
    private route: ActivatedRoute,
    private _dialog: MatDialog,
    private toastr: ToastrService,
    private _cdr: ChangeDetectorRef,
    private merchantService: MerchantService) {
    this.route.params.subscribe(params => {
      const param = params.id;
      this.id = param;
      this.getMerchant(Number(param));
    });
  }

  getMerchant(id: number) {
    this.edit = true
    this.merchantService.get(id).subscribe((responce: any) => {
      this.logoFilePath = responce.data?.logoFilePath;
      this.registrationCertificateFilePath = responce.data?.registrationCertificateFilePath;
      this.passportFilePath = responce.data?.passportFilePath;
      this._counterService.getJSONFromLocal().subscribe((data: any) => {
        let phoneNumber = this._counterService.getCountryCode(String(responce.data?.phoneNumber), data);
        let responsbilePersonPhoneNumber = this._counterService.getCountryCode(String(responce.data?.responsbilePersonPhoneNumber), data);
        this.form.patchValue({
          id: responce.data?.id,
          bankName: responce.data?.bankName,
          companyName: responce.data?.companyName,
          phoneNumber: String(responce.data?.phoneNumber).replace(phoneNumber, ''),
          dunsNumber: responce.data?.dunsNumber,
          email: responce.data?.email,
          supervisorFirstName: responce.data?.supervisorFirstName,
          supervisorLastName: responce.data?.supervisorLastName,
          responsiblePersonFistName: responce.data?.responsiblePersonFistName,
          responsiblePersonLastName: responce.data?.responsiblePersonLastName,
          responsbilePersonPhoneNumber: String(responce.data?.responsbilePersonPhoneNumber).replace(responsbilePersonPhoneNumber, ''),
          legalAddress: responce.data?.legalAddress,
          inn: responce.data?.inn,
          oked: responce.data?.oked,
          mfo: responce.data?.mfo,
          notes: responce.data?.notes,
          logoFilePath: responce.data?.logoFilePath,
          registrationCertificateFilePath: responce.data?.registrationCertificateFilePath,
          passportFilePath: responce.data?.passportFilePath
        })
      })
    })
  }
  ngOnInit(): void {
    this.getBalance()
    this.getTransactions()
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
  getTransactions() {
    this.merchantService.getMerchantTransactions(this.id).subscribe(res => {
      this.data = res.data.content
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
    this.formData.append('id', this.form.get('id').value);
    this.formData.append('bankName', this.form.get('bankName').value);
    this.formData.append('companyName', this.form.get('companyName').value);
    this.formData.append('phoneNumber', this.form.get('phoneNumber').value);
    this.formData.append('dunsNumber', this.form.get('dunsNumber').value);
    this.formData.append('email', this.form.get('email').value);
    this.formData.append('supervisorFirstName', this.form.get('supervisorFirstName').value);
    this.formData.append('supervisorLastName', this.form.get('supervisorLastName').value);
    this.formData.append('responsiblePersonFistName', this.form.get('responsiblePersonFistName').value);
    this.formData.append('responsiblePersonLastName', this.form.get('responsiblePersonLastName').value);
    this.formData.append('responsbilePersonPhoneNumber', this.form.get('responsbilePersonPhoneNumber').value);
    this.formData.append('legalAddress', this.form.get('legalAddress').value);
    this.formData.append('inn', this.form.get('inn').value);
    this.formData.append('oked', this.form.get('oked').value);
    this.formData.append('mfo', this.form.get('mfo').value);
    this.formData.append('notes', this.form.get('notes').value);
    if (typeof this.form.get('logoFilePath')?.value === "string") {
      this.formData.append('logoFilePath', this.form.get('logoFilePath')?.value);
    } else {
      // formData.append('logoFilePath', this.form.get('logoFilePath')?.value, String(new Date().getTime()));
    }
    if (typeof this.form.get('registrationCertificateFilePath')?.value === "string") {
      this.formData.append('registrationCertificateFilePath', this.form.get('registrationCertificateFilePath')?.value);
    } else {
      // this.formData.append('registrationCertificateFilePath', this.form.get('registrationCertificateFilePath')?.value, String(new Date().getTime()));
    }
    if (typeof this.form.get('passportFilePath')?.value === "string") {
      this.formData.append('passportFilePath', this.form.get('passportFilePath')?.value);
    } else {
      // this.formData.append('passportFilePath', this.form.get('passportFilePath')?.value, String(new Date().getTime()));
    }
      this.merchantService.updateMerchant(this.formData).pipe(res => {
        if (isObservable(res)) {
          // this.formData = removeUnselected(this.formData, ['logoFilePath', 'registrationCertificateFilePath', 'passportFilePath']);
          return res
        } else {
          return res
        }
      }).subscribe((res: any) => {
        console.log(res)
        this.toastr.success('Обновить продавца')
        if (res.success) {
          this.router.navigate(['/client-merchants'])
        }
      })
  }

  verifyTransaction(transaction) {
    // if (transaction.transactionType=='withdrawAccount' ) {
    this.merchantService.verifyTransaction(transaction).subscribe((res: any) => {
      if (res.success) {
        this.getBalance();
        this.getTransactions()
        this.toastr.success('Успешно завершено')
      } else {
        if (res.errors[0] = 'notEnoughBalance') {
          this.toastr.error('Баланса не хватает')
        } else {
          this.toastr.error('Не успешно завершено')
        }
      }
    })
    // } else {
    //   this.toastr.error('Баланса не хватает')
    // }
  }
  rejectTransaction(id) {
    this.merchantService.rejectTransaction(id).subscribe(res => {
      if (res.success) {
        this.getBalance();
        this.getTransactions()
        this.toastr.success('Успешно завершено')
      }
    })
  }

  cancelTransaction(id) {
    this.merchantService.cancelTransaction(id).subscribe(res => {
      if (res.success) {
        this.getBalance();
        this.getTransactions()
        this.toastr.success('Успешно завершено')
      }
    })
  }
  createTransaction() {
    const dialogRef = this._dialog.open(CreateTransactionComponent, {
      autoFocus: false,
      disableClose: true,
      minWidth: '30vw',
      maxWidth: '50vw',
      minHeight: '30vh',
      maxHeight: '50vh',
      data: { merchantId: this.id, balance: this.balances }
    });
    dialogRef.afterClosed().subscribe(result => {
      this.getBalance()
      this.getTransactions()
    });
  }
}

