import { NgFor, NgIf } from '@angular/common';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDialog, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSelectModule } from '@angular/material/select';
import { RouterLink } from '@angular/router';
import { fuseAnimations } from '@fuse/animations';
import { FuseAlertComponent } from '@fuse/components/alert';
// import { CountryService } from 'app/shared/services/country.service';
import { NgxMatIntlTelInputComponent } from 'ngx-mat-intl-tel-input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { ToastrService } from 'ngx-toastr';
import { AgreementComponent } from '../agreement/agreement.component';
// import { CurrencyService } from 'app/shared/services/currency.service';
// import { TypesService } from 'app/shared/services/types.service';

@Component({
  selector: 'auth-create-order',
  templateUrl: './create-order.component.html',
  styleUrls: ['./create-order.component.scss'],
  encapsulation: ViewEncapsulation.None,
  animations: fuseAnimations,
  standalone: true,
  imports: [RouterLink, NgIf, NgFor, MatDatepickerModule, MatSelectModule, MatAutocompleteModule, MatDialogModule, FuseAlertComponent, FormsModule, ReactiveFormsModule, MatFormFieldModule, MatInputModule, MatButtonModule, MatIconModule, MatCheckboxModule, MatProgressSpinnerModule, NgxMatIntlTelInputComponent],
})
export class CreateOrderComponent implements OnInit {
  form: FormGroup;
  loading: boolean = false;
  findList: any[] | undefined = [];
  viewText = false;
  currentStep = 1;
  currencies:any;

  constructor(
    private dialogRef: MatDialogRef<CreateOrderComponent>,
    private formBuilder: FormBuilder,
    // private currencyService: CurrencyService,
    // private typesService: TypesService,
    // private countryService: CountryService,
    private toastr: ToastrService,
    private dialog: MatDialog
  ) { }

  ngOnInit() {
    this.form = this.formBuilder.group({
      loadingLocation: [''],
      deliveryLocation: [''],
      isUrgent: [true],
      isTwoDays: [false],
      adr: [false],
      isCashlessPayment: [false],
      offeredPrice: [''],
      offeredPriceCurrencyId: [''],
      inAdvancePrice: [0],
      inAdvancePriceCurrencyId: [''],
      cargoTypeId: [''],
      cargoWeight: [''],
      cargoLength: [''],
      cargoWidth: [''],
      cargoHeight: [''],
      secure_transaction: [false]
    })
    this.changeValue();
    this.getCurrencies();
    this.getCargoTypes();
  }
  getCurrencies() {
    // this.currencyService.getCurrencies().subscribe((currencies: any) => {
    //   this.currencies = currencies.data;
    //   this.form.patchValue({
    //     offeredPriceCurrencyId: this.currencies[0].id,
    //     inAdvancePriceCurrencyId: this.currencies[0].id
    //   })
    // });
  }
  getCargoTypes() {
    // this.typesService.getCargoTypes().subscribe((res:any) => {

    // })
  }
  createOrder() {
    this.toastr.success('Created');
    this.closeModal();
  }
  nextStep() {
    if (this.currentStep < 3) {
      this.currentStep++;
    }
  }
  previousStep() {
    if (this.currentStep > 1) {
      this.currentStep--;
    }
  }
  changeValue() {
    this.form.get('isUrgent').valueChanges.subscribe((value) => {
      if (value) {
        this.form.get('isTwoDays').setValue(false);
      }
    });
    this.form.get('isTwoDays').valueChanges.subscribe((value) => {
      if (value) {
        this.form.get('isUrgent').setValue(false);
      }
    });
    this.form.get('secure_transaction').valueChanges.subscribe((value) => {
      if (value) {
        this.agreementModal();
      }
    });
  }
  findCity(ev: any) {
    try {
      const findText = ev.target.value.toString().trim().toLowerCase();
      if (findText.length >= 2) {
        this.viewText = true;
        // this.countryService.findCity(findText).subscribe((res: any) => {
        //   this.findList = res;
        // })
        // } else {
        //   this.viewText = false;
        //   this.findList = [];
      }
    } catch (error) {
      console.error("Error fetching city data:", error);
    }
  }
  closeModal() {
    this.dialogRef.close();
  }
  agreementModal() {
    const dialogRef: MatDialogRef<AgreementComponent> = this.dialog.open(AgreementComponent, {
      autoFocus: false,
      disableClose: true,
      width: '600px'
    });
    dialogRef.afterClosed().subscribe((res: any) => {
      if (res === 'close') {
        this.form.get('secure_transaction')?.setValue(false);
      } 
    });
  }
}