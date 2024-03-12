import { AsyncPipe, CurrencyPipe, NgClass, NgFor, NgIf } from '@angular/common';
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
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
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
import { forkJoin, isObservable } from 'rxjs';
import { removeDuplicateKeys } from 'app/shared/functions/remove-dublicates-formData';
import { PipeModule } from 'app/shared/pipes/pipe.module';
import { MatOptionModule } from '@angular/material/core';

@Component({
  selector: 'app-add-transport',
  templateUrl: './add-transport.component.html',
  styleUrls: ['./add-transport.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [TranslocoModule, AsyncPipe,PipeModule, MatOptionModule, NgClass, NgFor, MatSelectModule, NgxMatSelectSearchModule, MatRadioModule, MatDatepickerModule, NgxMatIntlTelInputComponent, MatInputModule, MatIconModule, MatSelectModule, MatButtonModule, ReactiveFormsModule, MatDialogModule, FormsModule, NgFor, NgIf, MatTableModule, NgClass, CurrencyPipe, MatFormFieldModule, MatInputModule, MatTableModule, MatSortModule, MatPaginatorModule, MatMenuModule, MatSlideToggleModule, HeaderTextComponent],
})
export class AddTransportComponent implements OnInit {
  form: FormGroup;
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
  formData = new FormData();
  techPassportFrontFilePath: string;
  techPassportBackFilePath: string;
  transportFrontFilePath: string;
  goodsTransportationLicenseCardFilePath: string;
  driverLicenseFilePath: string;
  passportFilePath: string;

  constructor(
    public fb: FormBuilder,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private _toaster: ToastrService,
    private _driverService: DriversService,
    private _typesService: TypesService,
    private _subscriptionService: SubscriptionService,
    private _cdr: ChangeDetectorRef,
    private _dialog: MatDialog) {
      this.form = this.fb.group({
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
        transportFrontFilePath: new FormControl('', [Validators.required]),
        goodsTransportationLicenseCardFilePath: new FormControl('', [Validators.required]),
        driverLicenseFilePath: new FormControl('', [Validators.required]),
        passportFilePath: new FormControl('', [Validators.required]),
      })
    this.form.patchValue({
      driverId: data?.driverId,
      id: data.transportId
    })
    if (data.transportId) {
      this.edit = true;
    }
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
      this._driverService.getTransportWithDriver(this.f.driverId.value, this.f.id.value).subscribe(res => {
        this.techPassportFrontFilePath = res.data[0].techPassportFrontFilePath;
        this.techPassportBackFilePath = res.data[0].techPassportBackFilePath;
        this.transportFrontFilePath = res.data[0].transportFrontFilePath;
        this.goodsTransportationLicenseCardFilePath = res.data[0].goodsTransportationLicenseCardFilePath;
        this.driverLicenseFilePath = res.data[0].driverLicenseFilePath;
        this.passportFilePath = res.data[0].passportFilePath;
        this.edit = true;
        this.form.get('transportKindIds').setValue(res.data[0]?.transportKinds)
        this.form.get('loadingMethodIds').setValue(res.data[0]?.cargoLoadMethods)
        this.form.get('transportTypeIds').setValue(res.data[0]?.transportTypes)
        this.form.get('cargoTypeIds').setValue(res.data[0]?.cargoTypes)
        this.form.patchValue({
          name: res.data[0]?.name,
          isHook: res.data[0]?.isHook,
          isAdr: res.data[0]?.isAdr,
          cubicCapacity: res.data[0]?.cubicCapacity,
          stateNumber: res.data[0]?.stateNumber,
          techPassportFrontFilePath: res.data[0]?.techPassportFrontFilePath,
          techPassportBackFilePath: res.data[0]?.techPassportBackFilePath,
          transportFrontFilePath: res.data[0]?.transportFrontFilePath,
          goodsTransportationLicenseCardFilePath: res.data[0]?.goodsTransportationLicenseCardFilePath,
          driverLicenseFilePath: res.data[0]?.driverLicenseFilePath,
          passportFilePath: res.data[0]?.passportFilePath,
          refrigeratorFrom: res.data[0]?.refrigeratorFrom,
          refrigeratorTo: res.data[0]?.refrigeratorTo,
          refrigeratorCount: res.data[0]?.refrigeratorCount,
        })
      })
      
      this._cdr.detectChanges()
    }
  }


  selectFile(event: any, name: string) {
    const file: File = event.target.files[0];
    if (file) {
      this.formData.append(name, file, new Date().getTime().toString() + '.jpg');
      const reader = new FileReader();
      reader.onload = () => {
        this[name] = reader.result;
        this._cdr.detectChanges();
      };
      reader.readAsDataURL(file);
    }
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
      case 'transportFrontFilePath':
        this.form.patchValue({
          transportFrontFilePath: file
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
    this.formData.append('id', this.form.get('id').value);
    this.formData.append('driverId', this.form.get('driverId').value);
    this.formData.append('name', this.form.get('name').value);
    this.formData.append('cubicCapacity', this.form.get('cubicCapacity').value);
    this.formData.append('stateNumber', this.form.get('stateNumber').value);
    this.form.get('refrigeratorFrom').value ? this.formData.append('refrigeratorFrom', this.form.get('refrigeratorFrom').value) : ''
    this.form.get('refrigeratorTo').value ? this.formData.append('refrigeratorTo', this.form.get('refrigeratorTo').value) : ''
    this.form.get('refrigeratorCount').value ? this.formData.append('refrigeratorCount', this.form.get('refrigeratorCount').value) : ''
    this.form.get('isHook').value ? this.formData.append('isHook', this.form.get('isHook').value) : ''
    // if (this.form.get('id').value) {
    //   this.formData.append('transportKindIds', JSON.stringify(this.setIds(this.form.get('transportKindIds').value)));
    //   this.formData.append('transportTypeIds', JSON.stringify(this.setIds(this.form.get('transportTypeIds').value)));
    //   this.formData.append('loadingMethodIds', JSON.stringify(this.setIds(this.form.get('loadingMethodIds').value)));
    //   // formData.append('loadingMethodIds', JSON.stringify(this.form.get('loadingMethodIds').value));
    //   this.formData.append('cargoTypeIds', JSON.stringify(this.setIds(this.form.get('cargoTypeIds').value)));
    // } else {
      this.formData.append('transportKindIds', JSON.stringify(this.form.get('transportKindIds').value));
      this.formData.append('transportTypeIds', JSON.stringify(this.form.get('transportTypeIds').value));
      this.formData.append('loadingMethodIds', JSON.stringify(this.form.get('loadingMethodIds').value));
      this.formData.append('cargoTypeIds', JSON.stringify(this.form.get('cargoTypeIds').value));
    // }

    if (typeof this.form.get('techPassportFrontFilePath')?.value === "string") {
      this.formData.append('techPassportFrontFilePath', this.form.get('techPassportFrontFilePath')?.value);
    } else {
      // formData.append('techPassportFrontFilePath', this.form.get('techPassportFrontFilePath')?.value, String(new Date().getTime()));
    }
    if (typeof this.form.get('techPassportBackFilePath')?.value === "string") {
      this.formData.append('techPassportBackFilePath', this.form.get('techPassportBackFilePath')?.value);
    } else {
      // formData.append('techPassportBackFilePath', this.form.get('techPassportBackFilePath')?.value, String(new Date().getTime()));
    }

    if (typeof this.form.get('transportFrontFilePath')?.value === "string") {
      this.formData.append('transportFrontFilePath', this.form.get('transportFrontFilePath')?.value);
    } else {
      // formData.append('transportFrontFilePath', this.form.get('transportFrontFilePath')?.value, String(new Date().getTime()));
    }

    if (typeof this.form.get('goodsTransportationLicenseCardFilePath')?.value === "string") {
      this.formData.append('goodsTransportationLicenseCardFilePath', this.form.get('goodsTransportationLicenseCardFilePath')?.value);
    } else {
      // formData.append('goodsTransportationLicenseCardFilePath', this.form.get('goodsTransportationLicenseCardFilePath')?.value, String(new Date().getTime()));
    }

    if (typeof this.form.get('driverLicenseFilePath')?.value === "string") {
      this.formData.append('driverLicenseFilePath', this.form.get('driverLicenseFilePath')?.value);
    } else {
      // formData.append('driverLicenseFilePath', this.form.get('driverLicenseFilePath')?.value, String(new Date().getTime()));
    }

    if (typeof this.form.get('passportFilePath')?.value === "string") {
      this.formData.append('passportFilePath', this.form.get('passportFilePath')?.value);
    } else {
      // formData.append('passportFilePath', this.form.get('passportFilePath')?.value, String(new Date().getTime()));
    }
    // techPassportFrontFilePath: string;
    // techPassportBackFilePath: string;
    // transportFrontFilePath: string;
    // goodsTransportationLicenseCardFilePath: string;
    // driverLicenseFilePath: string;
    // passportFilePath: string;
    const uniqueFormData = removeDuplicateKeys(this.formData);
    if (this.form.value.id) {
      this._driverService.updateTransport(uniqueFormData)
        .pipe(res => {
          if (isObservable(res)) {
            // this.formData = removeUnselected(this.formData,['techPassportFrontFilePath', 'techPassportBackFilePath','transportFrontFilePath', 'goodsTransportationLicenseCardFilePath', 'driverLicenseFilePath', 'passportFilePath']);
            return res
          } else {
            return res
          }
        }).subscribe(res => {
          if (res.success) {
            this._dialog.closeAll()
            this._toaster.success('Водитель успешно обновлена')
          } else {
            this._toaster.error('Невозможно сохранить водитель')
          }
        })
    } else {
      this._driverService.createTransport(uniqueFormData)
        .pipe(res => {
          if (isObservable(res)) {
            // this.formData = removeUnselected(this.formData,['techPassportFrontFilePath', 'techPassportBackFilePath','transportFrontFilePath', 'goodsTransportationLicenseCardFilePath', 'driverLicenseFilePath', 'passportFilePath']);
            return res
          } else {
            return res
          }
        }).subscribe(res => {
          if (res.success) {
            this._dialog.closeAll()
            this._toaster.success('Добавление транспорта  успешно')
          } else {
            this._toaster.error('Невозможно сохранить водитель')
          }
        })
    }
  }

  trackByFn(item: any): number {
    return item.id;
  }

  compareFn(a, b) {
    if (a && b) {
      return a === b.id;
    }
  }


  setIds(ids: any[]) {
    return ids.map(item => item.id);
  }

}