import { NgFor, NgIf } from '@angular/common';
import { AfterViewInit, Component, ElementRef, Inject, OnInit, Renderer2, ViewChild, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MAT_DIALOG_DATA, MatDialog, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSelect, MatSelectModule } from '@angular/material/select';
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
import { Observable, Subject, catchError, debounceTime, distinctUntilChanged, forkJoin, isObservable, of, switchMap, tap } from 'rxjs';
import { TranslocoModule } from '@ngneat/transloco';
import { ClientService } from 'app/modules/clients/services/client.service';
import { ClientModel } from 'app/modules/clients/models/client.model';
import { MessagesComponent } from 'app/shared/components/common/messages/messages.component';

@Component({
  selector: 'create-order',
  templateUrl: './create-order.component.html',
  styleUrls: ['./create-order.component.scss'],
  encapsulation: ViewEncapsulation.None,
  animations: fuseAnimations,
  standalone: true,
  imports: [RouterLink, NgIf, NgFor, MatCheckboxModule, TranslocoModule, MatSelectModule, MatInputModule, MatFormFieldModule,
    MatIconModule, FormsModule, ReactiveFormsModule, MatDatepickerModule, MatSelectModule, MatAutocompleteModule, MatDialogModule, FuseAlertComponent, FormsModule, ReactiveFormsModule, MatFormFieldModule, MatInputModule, MatButtonModule, MatIconModule, MatCheckboxModule, MatProgressSpinnerModule, NgxMatIntlTelInputComponent],
})
export class CreateOrderComponent implements OnInit {
  inputVisited: boolean = false;
  selectedPrefix: string;
  inputText: string;
  prefixes: string[] = ['Mr.', 'Mrs.', 'Ms.', 'Dr.', 'Prof.'];
  form: FormGroup;
  loading: boolean = false;
  findList: any[] | undefined = [];
  viewText = false;
  currentStep = 1;
  currentUser: any;
  currencies: any;
  cargoTypes: any;
  transportKinds: any;
  transportTypes: any;
  packagesTypes: any;
  cargoLoadingMethods: any;
  users: any;
  isAutotransport: any;
  isRefrigerator: any;
  isRefrigeratorMode: boolean = false;
  isCistern: any;
  isContainer: any;
  clientInfo: ClientModel;
  private searchSubject = new Subject<string>();
  constructor(
    private dialogRef: MatDialogRef<CreateOrderComponent>,
    private formBuilder: FormBuilder,
    private _orderService: OrdersService,
    private _typesService: TypesService,
    private _clientService: ClientService,
    private toastr: ToastrService,
    private dialog: MatDialog,
    @Inject(MAT_DIALOG_DATA) public data: any) {
    this.searchSubject
      .pipe(
        debounceTime(300),
        distinctUntilChanged(),
        tap(() => this.loading = true),
        switchMap((findText: string) => {
          return this.findCities(findText.trim().toLowerCase()).pipe(
            catchError(() => of([])),
            tap(() => this.loading = false)
          );
        })
      )
      .subscribe((res: any) => {
        this.findList = res.data;
      });
    if (this.data) {
      this.getOrderById(this.data.id);
    }
  }

  onInputFocus() {
    this.inputVisited = true;
  }

  getOrderById(id: number): void {
    this._orderService.getOrderById(id).subscribe((res: any) => {
      if (res.success) {
        this.form.patchValue({
          id: res.data?.id,
          clientId: res.data?.clientMerchant?.id,
          sendDate: res.data?.sendDate,
          loadingLocation: res.data?.loadingLocation,
          deliveryLocation: res.data?.deliveryLocation,
          selectedLocations: [
            res.data?.customsPlaceLocation ? 'customsPlaceLocation' : null,
            res.data?.customsClearancePlaceLocation ? 'customsClearancePlaceLocation' : null,
            res.data?.additionalLoadingLocation ? 'additionalLoadingLocation' : null,
            res.data?.additionalDeliveryLocation ? 'additionalDeliveryLocation' : null,
          ].filter(location => location !== null),
          customsPlaceLocation: res.data?.customsPlaceLocation,
          customsClearancePlaceLocation: res.data?.customsClearancePlaceLocation,
          additionalLoadingLocation: res.data?.additionalLoadingLocation,
          additionalDeliveryLocation: res.data?.additionalDeliveryLocation,
          isUrgent: res.data?.isUrgent,
          isTwoDays: res.data?.isTwoDays,
          isAdr: res.data?.isAdr,
          isCarnetTir: res.data?.isCarnetTir,
          isGlonas: res.data?.isGlonas,
          isParanom: res.data?.isParanom,
          offeredPrice: res.data?.offeredPrice,
          offeredPriceCurrencyId: res.data?.offeredPriceCurrency.id,
          inAdvancePrice: res.data?.inAdvancePrice,
          inAdvancePriceCurrencyId: res.data?.inAdvancePriceCurrency.id,
          paymentMethod: res.data?.paymentMethod,
          isSafeTransaction: res.data?.isSafeTransaction,
          transportKindIds: res.data?.transportKinds,
          transportTypeIds: res.data?.transportTypes,
          refrigeratorFrom: res.data?.refrigeratorFrom,
          refrigeratorTo: res.data?.refrigeratorTo,
          refrigeratorCount: res.data?.refrigeratorCount,
          isHook: res.data?.isHook,
          cargoTypeId: res.data?.cargoType,
          cargoWeight: res.data?.cargoWeight,
          cargoLength: res.data?.cargoLength,
          cargoWidth: res.data?.cargoWidth,
          cargoHeight: res.data?.cargoHeight,
          cubature: res.data?.cubature,
          cargoPackageId: res.data?.cargoPackage,
          loadingMethodId: res.data?.loadingMethod,
        });
      }
    })
  }

  ngOnInit() {
    this.form = this.formBuilder.group({
      id: [null],
      clientId: [null],
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
      currencies: this._typesService.getCurrencies(),
      cargoTypes: this._typesService.getCargoTypes(),
      transportTypes: this._typesService.getTransportTypes(),
      packagesTypes: this._typesService.getPackages(),
      cargoLoadingMethods: this._typesService.getCargoLoadingMethod(),
      transportKinds: this._typesService.getTransportKinds(),
      users: this._clientService.getAll()
    }).subscribe({
      next: (results: any) => {
        this.currencies = results.currencies.data;
        this.cargoTypes = results.cargoTypes.data;
        this.transportTypes = results.transportTypes.data;
        this.packagesTypes = results.packagesTypes.data;
        this.cargoLoadingMethods = results.cargoLoadingMethods.data;
        this.transportKinds = results.transportKinds.data;
        this.users = results.users;
        this.form.patchValue({
          offeredPriceCurrencyId: this.currencies[0].id,
          inAdvancePriceCurrencyId: this.currencies[0].id
        });
      },
      error: (error: any) => {
        console.error('Error fetching currencies and cargo types:', error);
      }
    });

    this.form.get('clientId').valueChanges.subscribe(response => {
      this._clientService.get(response).subscribe({
        next: (response: any) => {
          if (response.success) {
            this.clientInfo = response.data;
          } else {
            this.clientInfo = null;
          }
        },
        error: (error: any) => {
          // this.toastr.error(error.message)
          console.error('Error fetching client info:', error);
        }
      });
    });
  }


  trackByFn(item: any): number {
    return item.id;
  }

  compareFn(a?, b?) {
    if (a && b) {
      return a === b.id;
    }
  }

  compareFin(a?, b?) {
    if (a && b) {
      return a === b;
    }
  }

  setIds(ids: any[]) {
    return ids.map(item => item.id);
  }

  setId(item: any) {
    return item.id;
  }

  createOrder() {
    const optionalFields = ['customsPlaceLocation', 'customsClearancePlaceLocation', 'additionalLoadingLocation', 'additionalDeliveryLocation'];
    for (const field of optionalFields) {
      if (this.form.value[field]) {
        this.form.patchValue({
          [field]: {
            name: this.form.value[field].displayName,
            latitude: this.form.value[field].latitude,
            longitude: this.form.value[field].longitude,
          },
        });
      }
    }
    this.form.patchValue({
      loadingLocation: {
        name: this.form.value.loadingLocation.displayName,
        latitude: this.form.value.loadingLocation.latitude,
        longitude: this.form.value.loadingLocation.longitude,
      },
      deliveryLocation: {
        name: this.form.value.deliveryLocation.displayName,
        latitude: this.form.value.deliveryLocation.latitude,
        longitude: this.form.value.deliveryLocation.longitude,
      }
    });
    if (this.form.get('id').value) {
      this.form.patchValue({
        transportKindIds: this.setIds(this.form.get('transportKindIds').value),
        transportTypeIds: this.setIds(this.form.get('transportTypeIds').value),
        cargoTypeId: this.setId(this.form.get('cargoTypeId').value),
        cargoPackageId: this.setId(this.form.get('cargoPackageId').value),
        loadingMethodId: this.setId(this.form.get('loadingMethodId').value),
      })
    }
    if (this.form.valid) {
      if (this.form.value.id) {
        this._orderService.updateOrder(this.form.value).subscribe((res: any) => {
          if (res.success) {
            this.dialog.closeAll();
            this.toastr.success('Заказ успешно изменен');
          }
        })
      } else {
        this._orderService.createOrder(this.form.value).subscribe((res: any) => {
          if (res.success) {
            this.dialog.closeAll();
            this.toastr.success('Заказ успешно создан');
          }
        })
      }
    } else {
      this.dialog.open(MessagesComponent, {
        width: '500px',
        height: '450px',
        data: {
          text: 'Вы должны ввести все обязательные поля',
        }
      })
    }
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
      if (values.length == 1) {
        console.log(this.transportKinds);
        let tranportKind = this.transportKinds.find(x => x.id == values);
        this.isAutotransport = tranportKind?.name?.includes('Автовоз');
        this.isRefrigerator = tranportKind?.name?.includes('Рефрижератор');
        this.isCistern = tranportKind?.name?.includes('Цистерна');
        this.isContainer = tranportKind?.name?.includes('Контейнеровоз');
      } else {
        values.forEach(x => {
          console.log(this.transportKinds);
          let tranportKind = this.transportKinds.find(y => y.id == x);
          console.log(tranportKind?.name?.includes('Рефрежератор'));
          this.isAutotransport = this.isAutotransport || tranportKind?.name?.includes('Автовоз');
          this.isRefrigerator = this.isRefrigerator || tranportKind?.name?.includes('Рефрижератор');
          this.isCistern = this.isCistern || tranportKind?.name?.includes('Цистерна');
          this.isContainer = this.isContainer || tranportKind?.name?.includes('Контейнеровоз');
        });
      }
    })
  }

  findCity(ev: any): void {
    const findText = ev.target.value.toString().trim().toLowerCase();
    this.searchSubject.next(findText);
  }

  displayFn(city: any): string {
    return city ? city.displayName : '';
  }
  findCities(findText: string): Observable<any> {
    if (!findText) {
      return of({ data: [] });
    } else {
      return this._typesService.getCities(findText, 'en');
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
