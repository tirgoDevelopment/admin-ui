import { CurrencyPipe, NgClass, NgFor, NgIf } from '@angular/common';
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
import { NgxMatSelectSearchModule } from 'ngx-mat-select-search';
import { DriversService } from '../../services/drivers.service';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatRadioModule } from '@angular/material/radio';
import { SubscriptionService } from 'app/modules/main-types/subscription/services/subscription.service';
import { PasswordGenerator } from 'app/shared/functions/password-generator';
import { TypesService } from 'app/shared/services/types.service';
import { forkJoin } from 'rxjs';

@Component({
  selector: 'app-add-transport',
  templateUrl: './add-transport.component.html',
  styleUrls: ['./add-transport.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [TranslocoModule, NgClass, NgFor, MatSelectModule, NgxMatSelectSearchModule, MatRadioModule, MatDatepickerModule, NgxMatIntlTelInputComponent, MatInputModule, MatIconModule, MatSelectModule, MatButtonModule, ReactiveFormsModule, MatDialogModule, FormsModule, NgFor, NgIf, MatTableModule, NgClass, CurrencyPipe, MatFormFieldModule, MatInputModule, MatTableModule, MatSortModule, MatPaginatorModule, MatMenuModule, MatSlideToggleModule, HeaderTextComponent],

})
export class AddTransportComponent implements OnInit {
  findList: any[] | undefined = [];
  selectedFileName: string = '';
  passwordGenerator = new PasswordGenerator();
  viewText = false;
  public citiesSelected: FormControl = new FormControl();
  public selectTechnicalRoomFilterCtrl: FormControl = new FormControl();
  currencies: any;
  cargoTypes: any;
  transportKinds: any;
  transportTypes: any;
  packagesTypes: any;
  cargoLoadingMethods: any;
  isAutotransport: any;
  isRefrigerator: any;
  isRefrigeratorMode: boolean = false;
  isCistern: any;
  isContainer: any;
  roles = [];
  subscription = [];
  edit: boolean = false;

  form: FormGroup = new FormGroup({
    id: new FormControl(''),
    driverId: new FormControl(''),
    name: new FormControl('', [Validators.required]),
    cubicCapacity: new FormControl('', [Validators.required]),
    stateNumber: new FormControl('', [Validators.required]),
    transportKindIds: new FormControl([]),
    transportTypeIds: new FormControl([]),
    loadingMethodIds: new FormControl([]),
    cargoTypeIds: new FormControl([]),
    refrigeratorFrom: new FormControl(''),
    refrigeratorTo: new FormControl(''),
    refrigeratorCount: new FormControl(''),
    isHook: new FormControl(''),
    isAdr: new FormControl(false),
    techPassportFrontFilePath: new FormControl('', [Validators.required]),
    techPassportBackFilePath: new FormControl('', [Validators.required]),
    transportFilePath: new FormControl('', [Validators.required]),
    goodsTransportationLicenseCardFilePath: new FormControl('', [Validators.required]),
    driverLicenseFilePath: new FormControl('', [Validators.required]),
    passportFilePath: new FormControl('', [Validators.required]),
  })
  constructor(
    public fb: FormBuilder,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private _toaster: ToastrService,
    private _driverService: DriversService,
    private _typesService: TypesService,
    private _subscriptionService: SubscriptionService,
    private cdr: ChangeDetectorRef,
    private _dialog: MatDialog) {
    this.form.patchValue({
      driverId: data.driverId,
      id: data.transportId
    })

 

    this.changeValue();
    forkJoin({
      currencies: this._typesService.getCurrencies(),
      cargoTypes: this._typesService.getCargoTypes(),
      transportTypes: this._typesService.getTransportTypes(),
      packagesTypes: this._typesService.getPackages(),
      cargoLoadingMethods: this._typesService.getCargoLoadingMethod(),
      transportKinds: this._typesService.getTransportKinds(),
    }).subscribe({
      next: (results: any) => {
        this.currencies = results.currencies.data;
        this.cargoTypes = results.cargoTypes.data;
        this.transportTypes = results.transportTypes.data;
        this.packagesTypes = results.packagesTypes.data;
        this.cargoLoadingMethods = results.cargoLoadingMethods.data;
        this.transportKinds = results.transportKinds.data;
      },
      error: (error: any) => {
        console.error('Error fetching currencies and cargo types:', error);
      }
    });
  }

  ngOnInit(): void {
    if (this.f.id.value) {
      this.getTransport(this.f.driverId.value, this.f.id.value)
    }
  }

  getTransport(driverId: number, transportId: number) {
    this.form.patchValue({
      techPassportFrontFilePath: 'new value for techPassportFrontFilePath',
      techPassportBackFilePath: 'new value for techPassportBackFilePath',
      transportFilePath: 'new value for techPassportBackFilePath',
      goodsTransportationLicenseCardFilePath: 'new value for techPassportBackFilePath',
      driverLicenseFilePath: 'new value for techPassportBackFilePath',
      passportFilePath: 'new value for techPassportBackFilePath',
      transportKindIds: 'new value for techPassportBackFilePath',
      transportTypeIds: 'new value for techPassportBackFilePath',
      loadingMethodIds: 'new value for techPassportBackFilePath',
      cargoTypeIds: 'new value for techPassportBackFilePath',
    });
    this._driverService.getTransportWithDriver(driverId, transportId).subscribe(res => {
      this.edit=true;
      this.form.patchValue({
        name: res.data[0]?.name,
        isHook: res.data[0]?.isHook,
        isAdr: res.data[0]?.isAdr,
        cubicCapacity: res.data[0]?.cubicCapacity,
        stateNumber: res.data[0]?.stateNumber,
        techPassportFrontFilePath: res.data[0]?.techPassportFrontFilePath,
        techPassportBackFilePath: res.data[0]?.techPassportBackFilePath,
        transportFilePath: res.data[0].transportFilePath,
        goodsTransportationLicenseCardFilePath: res.data[0].goodsTransportationLicenseCardFilePath,
        driverLicenseFilePath: res.data[0].driverLicenseFilePath,
        passportFilePath: res.data[0].passportFilePath,
        transportKindIds: res.data[0]?.transportKinds,
        transportTypeIds: res.data[0]?.transportTypes,
        loadingMethodIds: res.data[0]?.cargoLoadMethods,
        cargoTypeIds: res.data[0]?.cargoTypes,
        refrigeratorFrom: res.data[0]?.refrigeratorFrom,
        refrigeratorTo: res.data[0]?.refrigeratorTo,
        refrigeratorCount: res.data[0]?.refrigeratorCount,
      })
      this.cdr.detectChanges();
    })
    this.compareFn()
  }

  changeValue() {
    this.form.get('transportKindIds').valueChanges.subscribe((values) => {
      if (values) {
        this.isAutotransport = values?.includes('Автовоз');
        this.isRefrigerator = values?.includes('Рефрежатор');
        this.isCistern = values?.includes('Цистерна');
        this.isContainer = values?.includes('Контейнеровоз');
      }
    });
  }

  onFileSelected(event: any, type: string): void {
    const file: File = event.target.files[0];
    switch (type) {
      case 'techPassportFrontFilePath':
        this.form.patchValue({
          techPassportFrontFilePath: file
        });
      case 'techPassportBackFilePath':
        this.form.patchValue({
          techPassportBackFilePath: file
        });
      case 'transportFilePath':
        this.form.patchValue({
          transportFilePath: file
        });
      case 'goodsTransportationLicenseCardFilePath':
        this.form.patchValue({
          goodsTransportationLicenseCardFilePath: file
        });
      case 'driverLicenseFilePath':
        this.form.patchValue({
          driverLicenseFilePath: file
        });
      case 'passportFilePath':
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

  generate() {
    this.form.patchValue({
      password: this.passwordGenerator.generateRandomPassword(),
    });
  }

  getSubscription() {
    this._subscriptionService.getAll().subscribe((response) => {
      this.subscription = response.data;
    })
  }
  async findCity(ev: any) {
    const findText = ev.target.value.toString().trim().toLowerCase();
    if (findText.length >= 2) {
      this.viewText = true;
      //  this.findList = await this.authService.findCity(findText).toPromise();
    } else {
      this.viewText = false;
      this.findList = [];
    }
  }
  get f() {
    return this.form.controls
  }

  submit() {
    const formData = new FormData();
    formData.append('id', this.form.get('id').value);
    formData.append('driverId', this.form.get('driverId').value);
    formData.append('name', this.form.get('name').value);
    formData.append('cubicCapacity', this.form.get('cubicCapacity').value);
    formData.append('stateNumber', this.form.get('stateNumber').value);

    formData.append('transportKindIds', JSON.stringify(this.form.get('transportKindIds').value));
    // const transportKindIds = this.form.get('transportKindIds').value;
    // if (transportKindIds) {
    //   for (const id of transportKindIds) {
    //     formData.set('transportKindIds', id);
    //   }
    // }
    formData.append('transportTypeIds', JSON.stringify(this.form.get('transportTypeIds').value));
    // const transportTypeIds = this.form.get('transportTypeIds').value;
    // if (transportTypeIds) {
    //   for (const id of transportTypeIds) {
    //     formData.set('transportTypeIds', id);
    //   }
    // }

    formData.append('loadingMethodIds', JSON.stringify(this.form.get('loadingMethodIds').value));
    // const loadingMethodIds = this.form.get('loadingMethodIds').value;
    // if (loadingMethodIds) {
    //   for (const id of loadingMethodIds) {
    //     formData.set('loadingMethodIds', id);
    //   }
    // }

    formData.append('cargoTypeIds', JSON.stringify(this.form.get('cargoTypeIds').value));
    // const cargoTypeIds = this.form.get('cargoTypeIds').value;
    // if (loadingMethodIds) {
    //   for (const id of loadingMethodIds) {
    //     formData.set('loadingMethodIds', id);
    //   }
    // }


    formData.append('refrigeratorFrom', this.form.get('refrigeratorFrom').value);
    formData.append('refrigeratorTo', this.form.get('refrigeratorTo').value);
    formData.append('refrigeratorCount', this.form.get('refrigeratorCount').value);
    formData.append('isHook', this.form.get('isHook').value);
    formData.append('isAdr', this.form.get('isAdr').value);

    formData.append('techPassportFrontFilePath', this.form.get('techPassportFrontFilePath')?.value, String(new Date().getTime()));
    formData.append('techPassportBackFilePath', this.form.get('techPassportBackFilePath')?.value, String(new Date().getTime()));
    formData.append('transportFilePath', this.form.get('transportFilePath')?.value, String(new Date().getTime()));
    formData.append('goodsTransportationLicenseCardFilePath', this.form.get('goodsTransportationLicenseCardFilePath')?.value, String(new Date().getTime()));
    formData.append('driverLicenseFilePath', this.form.get('driverLicenseFilePath')?.value, String(new Date().getTime()));
    formData.append('passportFilePath', this.form.get('passportFilePath')?.value, String(new Date().getTime()));

    if (this.form.value.id) {
      // this._driverService.update(formData).subscribe(res => {
      //   console.log(res)
      //   if (res.success) {
      //     this._dialog.closeAll()
      //     this._toaster.success('Водитель успешно обновлена')
      //   } else {
      //     this._toaster.error('Невозможно сохранить водитель')
      //   }
      // })
    } else {
      this._driverService.createTransport(formData).subscribe(res => {
        // console.log(res)
        // if (res.success) {
        this._dialog.closeAll()
        this.form.reset()
        this._toaster.success('Добавление транспорта  успешно')
        // } else {
        //   this._toaster.error('Невозможно сохранить водитель')
        // }
      })
    }
  }

  trackByFn(index: number, item: any): number {
    console.log(item, 'item')
    return item.id;
  }

  compareFn(a?, b?) {
		if (a && b) {
			return a === b.id;
		}
	}
  
  
}