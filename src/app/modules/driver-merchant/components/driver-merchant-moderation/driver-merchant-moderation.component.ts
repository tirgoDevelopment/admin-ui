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
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { HeaderTextComponent } from 'app/shared/components/header-text/header-text.component';
import { MatSelectModule } from '@angular/material/select';
import { NgxMatIntlTelInputComponent } from 'ngx-mat-intl-tel-input';
import { NgxMatSelectSearchModule } from 'ngx-mat-select-search';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatRadioModule } from '@angular/material/radio';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { isObservable } from 'rxjs';
import { DriverMerchantService } from '../../services/driver-merchant.service';
import { removeDuplicateKeys } from 'app/shared/functions/remove-dublicates-formData';
import { PipeModule } from 'app/shared/pipes/pipe.module';
import { FileUrlService } from 'app/shared/services/file-url.service';
import { CountryService } from 'app/shared/services/country.service';

@Component({
  selector: 'app-driver-merchant-moderation',
  templateUrl: './driver-merchant-moderation.component.html',
  styleUrls: ['./driver-merchant-moderation.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [TranslocoModule, PipeModule, AsyncPipe, RouterModule, NgClass, NgxMatSelectSearchModule, MatRadioModule, MatDatepickerModule, NgxMatIntlTelInputComponent, MatInputModule, MatIconModule, MatSelectModule, MatButtonModule, ReactiveFormsModule, MatDialogModule, FormsModule, NgFor, NgIf, MatTableModule, NgClass, CurrencyPipe, MatFormFieldModule, MatInputModule, MatTableModule, MatSortModule, MatPaginatorModule, MatMenuModule, MatSlideToggleModule, HeaderTextComponent],
})
export class DriverMerchantModerationComponent implements OnInit {
  displayedColumns: string[] = ['full_name', 'sum', 'currencyName', 'date', 'type', 'status', 'actions'];
  @ViewChild(MatPaginator) paginator: MatPaginator;
  dataSource = new MatTableDataSource<any>([]);
  passportFile: FileList;
  certificateFile: FileList;
  data
  transactionRequest: any[] = [];
  transaction: any;
  balances: any;
  frozenBalance: any;
  image: any;
  id: number;
  formData = new FormData();
  logoFilePath: string;
  registrationCertificateFilePath: string;
  passportFilePath: string;
  internationalCargoLisensePath: string;
  edit: boolean = false;
  form: FormGroup = new FormGroup({
    merchantId: new FormControl(''),
    email: new FormControl(''),
    companyName: new FormControl(''),
    supervisorFirstName: new FormControl(''),
    supervisorLastName: new FormControl(''),
    responsiblePersonFistName: new FormControl(''),
    responsiblePersonLastName: new FormControl(''),
    responsbilePersonPhoneNumber: new FormControl(''),
    legalAddress: new FormControl(''),
    factAddress: new FormControl(''),
    postalCode: new FormControl(''),
    garageAddress: new FormControl(''),
    bankName: new FormControl(''),
    bankBranchName: new FormControl(''),
    inn: new FormControl(''),
    oked: new FormControl(''),
    mfo: new FormControl(''),
    taxPayerCode: new FormControl(''),
    phoneNumber: new FormControl(''),
    dunsNumber: new FormControl(''),
    ibanNumber: new FormControl(''),
    internationalCargoLisensePath: new FormControl(''),
    logoFilePath: new FormControl(''),
    registrationCertificateFilePath: new FormControl(''),
    passportFilePath: new FormControl(''),
  })
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private toastr: ToastrService,
    private _cdr: ChangeDetectorRef,
    protected fileService: FileUrlService,
    private _counterService: CountryService,
    private driverMerchantService: DriverMerchantService) {
    this.route.params.subscribe(params => {
      const param = params.id;
      this.id = param;
      this.getMerchant(Number(param));
    });
  }

  getMerchant(id: number) {
    this.edit = true
    this.driverMerchantService.get(id).subscribe((responce: any) => {
      this.internationalCargoLisensePath = responce.data?.transportationCertificateFilePath;
      this.logoFilePath = responce.data?.logoFilePath;
      this.passportFilePath = responce.data?.passportFilePath;
      this.registrationCertificateFilePath = responce.data?.registrationCertificateFilePath;
      this._counterService.getJSONFromLocal().subscribe((data: any) => {
        let phoneNumber = this._counterService.getCountryCode(String(responce.data?.phoneNumber), data);
        let responsbilePersonPhoneNumber = this._counterService.getCountryCode(String(responce.data?.responsbilePersonPhoneNumber), data);
        this.form.patchValue({
          merchantId: responce.data?.id,
          bankName: responce.data?.bankName,
          bankBranchName: responce.data?.bankBranchName,
          companyName: responce.data?.companyName,
          phoneNumber: String(responce.data?.phoneNumber).replace(phoneNumber, ''),
          dunsNumber: responce.data?.dunsNumber,
          ibanNumber: responce.data?.ibanNumber,
          taxPayerCode: responce.data?.taxPayerCode,
          email: responce.data?.email,
          supervisorFirstName: responce.data?.supervisorFirstName,
          supervisorLastName: responce.data?.supervisorLastName,
          responsiblePersonFistName: responce.data?.responsiblePersonFistName,
          responsiblePersonLastName: responce.data?.responsiblePersonLastName,
          responsbilePersonPhoneNumber: String(responce.data?.responsbilePersonPhoneNumber).replace(responsbilePersonPhoneNumber, ''),
          legalAddress: responce.data?.legalAddress,
          factAddress: responce.data?.factAddress,
          postalCode: responce.data?.postalCode,
          garageAddress: responce.data?.garageAddress,
          inn: responce.data?.inn,
          oked: responce.data?.oked,
          mfo: responce.data?.mfo,
          internationalCargoLisensePath: responce.data?.transportationCertificateFilePath,
          logoFilePath: responce.data?.logoFilePath,
          registrationCertificateFilePath: responce.data?.registrationCertificateFilePath,
          passportFilePath: responce.data?.passportFilePath
        })
      })
    })
  }
  ngOnInit(): void {
    this.getTransactions()
    this.getBalance()
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
    this.driverMerchantService.getMerchantTransactions(this.id).subscribe(res => {
      if (res.status) {
        this.data = res.data
        this.dataSource = new MatTableDataSource(this.data);
        this.dataSource.paginator = this.paginator;
      } else {
        this.data = []
        this.dataSource = new MatTableDataSource(this.data);
        this.dataSource.paginator = this.paginator;
      }
    })
  }

  getBalance() {
    this.driverMerchantService.getMerchantBalanse(this.id).subscribe(res => {
      this.balances = res.data
    })
  }

  get f() {
    return this.form.controls
  }

  getImageUrl(formname: string): string {
    const file = this.form.get(`${formname}`).value;
    if (file instanceof File) {
      return URL.createObjectURL(file);
    }
    return '';
  }

  editMerchant() {
    this.formData.append('merchantId', this.form.get('merchantId').value);
    this.formData.append('bankName', this.form.get('bankName').value);
    this.formData.append('bankBranchName', this.form.get('bankBranchName').value);
    this.formData.append('companyName', this.form.get('companyName').value);
    this.formData.append('phoneNumber', this.form.get('phoneNumber').value);
    this.formData.append('dunsNumber', this.form.get('dunsNumber').value);
    this.formData.append('ibanNumber', this.form.get('ibanNumber').value);
    this.formData.append('taxPayerCode', this.form.get('taxPayerCode').value);
    this.formData.append('email', this.form.get('email').value);
    this.formData.append('supervisorFirstName', this.form.get('supervisorFirstName')?.value);
    this.formData.append('supervisorLastName', this.form.get('supervisorLastName')?.value);
    this.formData.append('responsiblePersonFistName', this.form.get('responsiblePersonFistName')?.value);
    this.formData.append('responsiblePersonLastName', this.form.get('responsiblePersonLastName')?.value);
    this.formData.append('responsbilePersonPhoneNumber', this.form.get('responsbilePersonPhoneNumber')?.value);
    this.formData.append('legalAddress', this.form.get('legalAddress').value);
    this.formData.append('factAddress', this.form.get('factAddress').value);
    this.formData.append('postalCode', this.form.get('postalCode').value);
    this.formData.append('garageAddress', this.form.get('garageAddress').value);
    this.formData.append('inn', this.form.get('inn').value);
    this.formData.append('oked', this.form.get('oked').value);
    this.formData.append('mfo', this.form.get('mfo').value);
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

    if (typeof this.form.get('internationalCargoLisensePath')?.value === "string") {
      this.formData.append('internationalCargoLisensePath', this.form.get('internationalCargoLisensePath')?.value);
    } else {
      // this.formData.append('passportFilePath', this.form.get('passportFilePath')?.value, String(new Date().getTime()));
    }

    const uniqueFormData = removeDuplicateKeys(this.formData);
    this.driverMerchantService.updateMerchant(uniqueFormData).pipe(res => {
      if (isObservable(res)) {
        // this.formData = removeUnselected(this.formData, ['logoFilePath', 'registrationCertificateFilePath', 'passportFilePath']);
        return res
      } else {
        return res
      }
    }).subscribe((res: any) => {
      if (res.success) {
        this.router.navigate(['/driver-merchants'])
      }
    })

  }

  verifyTransaction(transaction) {
    // if (transaction.transactionType=='withdrawAccount' ) {
    this.driverMerchantService.verifyTransaction(transaction).subscribe((res: any) => {
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
    this.driverMerchantService.rejectTransaction(id).subscribe(res => {
      if (res.success) {
        this.getBalance();
        this.getTransactions()
        this.toastr.success('Успешно завершено')
      }
    })
  }

  cancelTransaction(id) {
    this.driverMerchantService.cancelTransaction(id).subscribe(res => {
      if (res.success) {
        this.getBalance();
        this.getTransactions()
        this.toastr.success('Успешно завершено')
      }
    })
  }
}

