import { CurrencyPipe, NgClass, NgFor, NgIf } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnInit, TemplateRef, ViewChild, ViewEncapsulation } from '@angular/core';
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
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'app/core/auth/auth.service';

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
  displayedColumns: string[] = ['full_name', 'sum', 'date', 'type', 'status', 'actions'];
  @ViewChild(MatPaginator) paginator: MatPaginator;
  dataSource = new MatTableDataSource<any>([]);
  @ViewChild("dialogRef") dialogRef: TemplateRef<any>;
  @ViewChild("dialogPreview") dialogPreview: TemplateRef<any>;

  fileApi = 'https://merchant.tirgo.io/api/v1/file/download/';
  selectedFileNames: any;
  passportFile: FileList;
  passportNames: string[] = [];

  certificateFile: FileList;
  certificateNames: string[] = [];

  phone2: boolean = false;
  factAddressShow: boolean = false;
  bankAccountCurrency: boolean = false;
  data
  transactionRequest: any[] = [];
  transaction: any;
  balance: any;
  frozenBalance: any;
  image: any;

  form: FormGroup = new FormGroup({
    email: new FormControl('', [Validators.required]),
    companyName: new FormControl('', [Validators.required]),
    supervisorFirstName: new FormControl('', [Validators.required]),
    responsiblePersonFistName: new FormControl('', [Validators.required]),
    bankName: new FormControl('', [Validators.required]),
    inn: new FormControl('', [Validators.required]),
    oked: new FormControl('', [Validators.required]),
    mfo: new FormControl('', [Validators.required]),
    phoneNumber: new FormControl('', [Validators.required]),
    dunsNumber: new FormControl(),
    notes: new FormControl(),
    logoFilePath: new FormControl('', [Validators.required]),
    registrationCertificateFilePath: new FormControl('', [Validators.required]),
    passportFilePath: new FormControl('', [Validators.required]),

  })


  sizespage = [
    50, 100, 200, 500, 1000, 5000
  ]
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    // private list: ListService,
    // public helper: HelperService,
    private dialog: MatDialog,
    private toastr: ToastrService,
    private authService: AuthService
  ) { }
  ngOnInit(): void {
    this.data = { supervisor_passport: '', certificate_registration: '' }
    // this.getData();
    // this.getTransactions();
    // this.getBalance();
  }

  // getData() {
  //   this.helper.loadingCreate();
  //   this.route.params.subscribe((res: any) => {
  //     this.data.id = res.id
  //     if (res) {
  //       this.helper.loadingClose();
  //       this.list.getMerchantById(res.id).subscribe((data: any) => {
  //         if (data)
  //           this.data = data;
  //       })
  //     }
  //   })
  // }

  // editMerchant() {
  //   this.helper.loadingCreate();
  //   this.list.editMerchant(this.data).subscribe((res: any) => {
  //     if (res) {
  //       this.helper.loadingClose();
  //       this.toastr.success('Успешно обновлен');
  //       this.router.navigate(['/moderation'])
  //     }
  //   })
  // }

  // getTransactions() {
  //   this.list.getTransactionByMerchant(this.data.id).subscribe((res) => {
  //     if (res) {
  //       this.transactionRequest = res.data;
  //     }
  //   })
  // }

  // getBalance() {
  //   this.list.getMerchantBalance(this.data.id).subscribe((res) => {
  //     if(res.success) {
  //       this.balance = res.data.activeBalance;
  //       this.frozenBalance = res.data.frozenBalance;
  //     }
  //   })
  // }

  addPhone() {
    this.data.phoneNumbers.push('');
  }

  selectPassport(event: any): void {
    this.passportNames = [];
    this.passportFile = event.target.files;

    if (this.passportFile && this.passportFile[0]) {
      const numberOfFiles = this.passportFile.length;
      for (let i = 0; i < numberOfFiles; i++) {
        const reader = new FileReader();
        reader.onload = (e: any) => {
        };
        reader.readAsDataURL(this.passportFile[i]);
        this.passportNames.push(this.passportFile[i].name);
      }
    }
  }

  get f() {
    return this.form.controls
  }

  onFileSelected(event: any, type: string): void {
    const file: File = event.target.files[0];
    switch (type) {
      case 'logoFilePath':
        this.form.patchValue({
          logoFilePath: file
        });
      case 'registrationCertificateFilePath':
        this.form.patchValue({
          registrationCertificateFilePath: file
        });
      case 'passportFilePath':
        this.form.patchValue({
          passportFilePath: file
        });
    }
  }

  getImageUrl(formname:string): string {
    const file = this.form.get(`${formname}`).value;
    console.log(file)
    if (file instanceof File) {
      return URL.createObjectURL(file);
    }
    return '';
  }
  selectCertificate(event: any): void {
    this.certificateNames = [];
    this.certificateFile = event.target.files;

    if (this.certificateFile && this.certificateFile[0]) {
      const numberOfFiles = this.certificateFile.length;
      for (let i = 0; i < numberOfFiles; i++) {
        const reader = new FileReader();
        reader.onload = (e: any) => {
        };
        reader.readAsDataURL(this.certificateFile[i]);
        this.certificateNames.push(this.certificateFile[i].name);
      }
    }
  }

  goToColumn(item) {
    if (!item.verified && !item.rejected) {
      this.transaction = item;
      console.log(this.transaction);

      const dialogRef = this.dialog.open(this.dialogRef, {
        data: item,
      });
      dialogRef.afterClosed().subscribe(() => {
        // this.getTransactions()
      });
    }
  }

  editMerchant() {

  }
  async handlePage(e: any) {
    // this.helper.global_loading = true;
    // let from = e.pageIndex * e.pageSize
    // let newusers = await this.list.getAllMerchants().toPromise();
    // this.helper.merchants = newusers.data;
    // this.helper.merchants_count = newusers.data_count;
    // this.helper.global_loading = false;
  }

  verifyTransaction(id) {
    // this.list.verifyTransaction(id).subscribe((res) => {
    //   if (res) {
    //     this.getBalance();
    //     this.dialog.closeAll();
    //     this.toastr.success('Успешно завершено')
    //   }
    // })
  }

  rejectTransaction(id) {
    // this.list.rejectTransaction(id).subscribe((res) => {
    //   if (res) {
    //     this.dialog.closeAll();
    //     this.toastr.success('Успешно завершено')
    //   }
    // })
  }

  addItem() {
    this.data.bankAccounts.push({ account: '', currencyName: 'USD' });
  }

  removeItem(i) {
    this.data.bankAccounts.splice(1, i);
  }

  preview(image?: string): void {
    if (image) {
      this.image = image;
      const dialog = this.dialog.open(this.dialogPreview, {
        data: image,
        height: "600px",
        width: "800px",
        panelClass: 'custom-dialog-class',
      });
    }

  }

  selectFile(event: any, name: string) {
    if (name == "logoFilePath") this.selectedFileNames = event.target.files[0].name;
    if (name == "registrationCertificateFilePath")
      this.certificateNames = event.target.files[0].name;
    if (name == "passportFilePath")
      this.passportNames = event.target.files[0].name;

    const file = event.target.files[0];
    const formData = new FormData();
    formData.append("file", file, file.name);
    // this.authService.fileUpload(formData).subscribe(
    //   (response) => {
    //     if (response) {
    //       this.toastr.success('Файл успешно загружен')
    //       this.data[name] = response.filename;
    //     }
    //   },
    //   (error) => {
    //       this.toastr.error(error.message)
    //   }
    // );
  }

}

