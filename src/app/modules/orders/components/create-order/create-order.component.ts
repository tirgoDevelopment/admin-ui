import { NgFor, NgIf } from '@angular/common';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
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
import { CountryService } from 'app/shared/services/country.service';
import { NgxMatIntlTelInputComponent } from 'ngx-mat-intl-tel-input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { ToastrService } from 'ngx-toastr';
import { AgreementComponent } from '../agreement/agreement.component';
import { TypesService } from 'app/shared/services/types.service';
import { OrdersService } from '../../services/orders.service';
import { forkJoin } from 'rxjs';

@Component({
  selector: 'create-order',
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
  currencies: any;
  cargoTypes: any;
  transportKinds: any;
  transportTypes: any;
  packagesTypes:any;
  cargoLoadingMethods:any;

  isAutotransport: any;
  isRefrigerator: any;
  isRefrigeratorMode: boolean = false;
  isCistern: any;
  isContainer: any;

  constructor(
    private dialogRef: MatDialogRef<CreateOrderComponent>,
    private formBuilder: FormBuilder,
    private orderService: OrdersService,
    private typesService: TypesService,
    private countryService: CountryService,
    private toastr: ToastrService,
    private dialog: MatDialog
  ) { }

  ngOnInit() {
    this.form = this.formBuilder.group({
      sendDate: [null],
      loadingLocation: [null],
      deliveryLocation: [null],
      selectedLocations: [[]],
      customsPlaceLocation: [null],
      customsClearancePlaceLocation: [null],
      additionalLoadingLocation: [null],
      additionalDeliveryLocation: [null],
      isUrgent: [true],
      isTwoDays: [false],
      isAdr: [false],
      isCarnetTir: [false],
      isGlonas: [false],
      isParanom: [false],

      offeredPrice: [null],
      offeredPriceCurrencyId: [null],
      inAdvancePrice: [0],
      inAdvancePriceCurrencyId: [null],
      paymentMethod: ['cash'],
      isSafeTransaction: [false],

      transportKindIds: [null, Validators.required],
      transportTypeIds: [null, Validators.required],
      refrigeratorFrom: [null],
      refrigeratorTo: [null],
      refrigeratorCount: [null],
      isHook: [null],
      cargoTypeId: [null, Validators.required],
      cargoWeight: [null, Validators.required],
      cargoLength: [null],
      cargoWidth: [null],
      cargoHeight: [null],
      cubature: [null],
      cargoPackageId: [null],
      loadingMethodId: [null]
    })
    this.changeValue();
    forkJoin({
      currencies: this.typesService.getCurrencies(),
      cargoTypes: this.typesService.getCargoTypes(),
      transportTypes: this.typesService.getTransportTypes(),
      packagesTypes: this.typesService.getPackages(),
      cargoLoadingMethods: this.typesService.getCargoLoadingMethod(),
      transportKinds: this.typesService.getTransportKinds(),
    }).subscribe({
      next: (results: any) => {
        this.currencies = results.currencies.data;
        this.cargoTypes = results.cargoTypes.data;
        this.transportTypes = results.transportTypes.data;
        this.packagesTypes = results.packagesTypes.data;
        this.cargoLoadingMethods = results.cargoLoadingMethods.data;
        this.transportKinds = results.transportKinds.data;
        this.form.patchValue({
          offeredPriceCurrencyId: this.currencies[0].id,
          inAdvancePriceCurrencyId: this.currencies[0].id
        });
      },
      error: (error: any) => {
        console.error('Error fetching currencies and cargo types:', error);
      }
    });
  }

  createOrder() {
    // this.orderService.createOrder(this.form.value).subscribe((res: any) => {
    //   this.toastr.success('Created');
    // })
    // this.closeModal();
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
    this.form.get('isSafeTransaction').valueChanges.subscribe((value) => {
      if (value) {
        this.agreementModal();
      }
    });

    this.form.get('transportKindIds').valueChanges.subscribe((values) => {
      this.isAutotransport = values.includes('Автовоз');
      this.isRefrigerator = values.includes('Рефрежатор');
      this.isCistern = values.includes('Цистерна');
      this.isContainer = values.includes('Контейнеровоз');
    });
  }
  findCity(ev: any) {
    try {
      const findText = ev.target.value.toString().trim().toLowerCase();
      if (findText.length >= 2) {
        this.viewText = true;
        this.countryService.findCity(findText).subscribe((res: any) => {
          this.findList = res;
        })
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
        this.form.get('isSafeTransaction')?.setValue(false);
      }
    });
  }
  getDynamicLabel(location: string): string {
    switch (location) {
      case 'customsPlaceLocation':
        return 'Место затаможки';
      case 'customsClearancePlaceLocation':
        return 'Место растаможки';
      case 'additionalLoadingLocation':
        return 'Дополнительное место погрузки';
      case 'additionalDeliveryLocation':
        return 'Дополнительное место погрузки';
      default:
        return null;
    }
  }
  onCheckboxChange(event: any) {
    this.isRefrigeratorMode = event.checked;
  }
}
