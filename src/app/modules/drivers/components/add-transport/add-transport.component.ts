import { CurrencyPipe, NgClass, NgFor, NgIf } from '@angular/common';
import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
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
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
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
  imports: [TranslocoModule, NgClass, NgFor, NgxMatSelectSearchModule, MatRadioModule, MatDatepickerModule, NgxMatIntlTelInputComponent, MatInputModule, MatIconModule, MatSelectModule, MatButtonModule, ReactiveFormsModule, MatDialogModule, FormsModule, NgFor, NgIf, MatTableModule, NgClass, CurrencyPipe, MatFormFieldModule, MatInputModule, MatTableModule, MatSortModule, MatPaginatorModule, MatMenuModule, MatSlideToggleModule, HeaderTextComponent],

})
export class AddTransportComponent {
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
    driver_lisense: new FormControl('', [Validators.required]),
    passport: new FormControl('', [Validators.required]),
    registration_certificate: new FormControl('', [Validators.required]),
    transportKindIds: new FormControl('', [Validators.required]),
    transportTypeIds: new FormControl('', [Validators.required]),
    refrigeratorFrom: new FormControl(''),
    refrigeratorTo: new FormControl(''),
    refrigeratorCount: new FormControl(''),
    isHook: new FormControl(''),
    cargoTypeId: new FormControl('', [Validators.required]),
    cargoWeight: new FormControl('', [Validators.required]),
    cargoLength: new FormControl(''),
    cargoWidth: new FormControl(''),
    cargoHeight: new FormControl(''),
    cubature: new FormControl(''),
    cargoPackageId: new FormControl(''),
    loadingMethodId: new FormControl(''),
    isAdr: new FormControl(''),
  })
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private _toaster: ToastrService,
    private _driverService: DriversService,
    private _typesService: TypesService,
    private _subscriptionService: SubscriptionService,
    private _dialog: MatDialog) {
    this.form.patchValue({
      driverId: data
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



  changeValue() {
    this.form.get('transportKindIds').valueChanges.subscribe((values) => {
      this.isAutotransport = values.includes('Автовоз');
      this.isRefrigerator = values.includes('Рефрежатор');
      this.isCistern = values.includes('Цистерна');
      this.isContainer = values.includes('Контейнеровоз');
    });
  }

  onFileSelected(event: any, type: string): void {
    const file: File = event.target.files[0];
    if (file) {
      if (type === 'driver_lisense') {
        this.form.patchValue({
          driver_lisense: file
        });
      } else if (type === 'passport') {
        this.form.patchValue({
          passport: file
        });
      } else {
        this.form.patchValue({
          registration_certificate: file
        });
      }
    }
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
    // const formData = new FormData();
    // formData.forEach((value, key) => {
    //   this.form.get(key)?.setValue(value);
    // });
    if (this.form.value.id) {
      this._driverService.update(this.form.value).subscribe(res => {
        console.log(res)
        if (res.success) {
          this._dialog.closeAll()
          this._toaster.success('Водитель успешно обновлена')
        } else {
          this._toaster.error('Невозможно сохранить водитель')
        }
      })
    } else {
      this._driverService.create(this.form.value).subscribe(res => {
        // console.log(res)
        // if (res.success) {
        this._dialog.closeAll()
        this.form.reset()
        this._toaster.success('Водитель успешно добавлена')
        // } else {
        //   this._toaster.error('Невозможно сохранить водитель')
        // }
      })
    }
  }

  trackByFn(index: number, item: any): number {
    return item.id;
  }

}