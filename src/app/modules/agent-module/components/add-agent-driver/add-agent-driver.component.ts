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
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialog, MatDialogModule } from '@angular/material/dialog';
import { HeaderTextComponent } from 'app/shared/components/header-text/header-text.component';
import { ToastrService } from 'ngx-toastr';
import { MatSelectModule } from '@angular/material/select';
import { DriversService } from 'app/modules/drivers/services/drivers.service';
import { NgxMatSelectSearchModule } from 'ngx-mat-select-search';
import { MatRadioModule } from '@angular/material/radio';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { NgxMatIntlTelInputComponent } from 'ngx-mat-intl-tel-input';
import { TypesService } from 'app/shared/services/types.service';
import { isObservable } from 'rxjs';
import { AgentService } from '../../services/agent.service';
import { MessageComponent } from 'app/shared/components/message/message.component';

@Component({
  selector: 'app-add-agent-driver',
  templateUrl: './add-agent-driver.component.html',
  styleUrls: ['./add-agent-driver.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [TranslocoModule, NgClass, NgxMatSelectSearchModule, MatRadioModule, MatDatepickerModule, NgxMatIntlTelInputComponent, MatInputModule, MatIconModule, MatSelectModule, MatButtonModule, ReactiveFormsModule, MatDialogModule, FormsModule, NgFor, NgIf, MatTableModule, NgClass, CurrencyPipe, MatFormFieldModule, MatInputModule, MatTableModule, MatSortModule, MatPaginatorModule, MatMenuModule, MatSlideToggleModule, HeaderTextComponent],

})
export class AddAgentDriverComponent implements OnInit {
  subscription = [];
  edit: boolean = false;
  formData = new FormData();
  passport: string;
  driverLicense: string;
  form: FormGroup = new FormGroup({
    id: new FormControl(''),
    subscriptionId: new FormControl(''),
    agentId: new FormControl(''),
    firstName: new FormControl('', [Validators.required]),
    lastName: new FormControl('', [Validators.required]),
    phoneNumbers: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required, Validators.minLength(8), Validators.maxLength(16), Validators.pattern('^[a-zA-Z0-9]+$')]),
    passport: new FormControl('', [Validators.required]),
    driverLicense: new FormControl('', [Validators.required]),
  })
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private _toaster: ToastrService,
    private _driverService: DriversService,
    private _agentsService: AgentService,
    private _typeService: TypesService,
    private _cdr: ChangeDetectorRef,
    private _dialog: MatDialog) {
    if (this.data) {
      this.form.patchValue({
        agentId: data.id
      })
    }
  }

  ngOnInit(): void {
    this.getSubscription();
  }

  getSubscription() {
    this._typeService.getSubscription().subscribe((response: any) => {
      this.subscription = response.data;
      this._cdr.detectChanges();
    })
  }

  onFileSelected(event: any, type: string): void {
    const file: File = event.target.files[0];
    switch (type) {
      case 'passport':
        this.form.patchValue({
          passport: file
        });
      case 'driverLicense':
        this.form.patchValue({
          driverLicense: file
        });
    }
  }

  selectFile(event: any, name: string) {
    console.log(name, this)
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


  getImageUrl(formname: string): string {
    const file = this.form.get(`${formname}`).value;
    if (file instanceof File) {
      return URL.createObjectURL(file);
    }
    return '';
  }

  get f() {
    return this.form.controls
  }

  submit() {
    const formData = new FormData();
    formData.append('id', this.form.get('id').value);
    formData.append('password', this.form.get('password').value);
    if(this.form.get('subscriptionId').value) {
      formData.append('subscriptionId', this.form.get('subscriptionId').value);
    }
    formData.append('lastName', this.form.get('lastName').value);
    formData.append('agentId', this.form.get('agentId').value);
    formData.append('firstName', this.form.get('firstName').value);
    formData.append('phoneNumbers', JSON.stringify([this.form.get('phoneNumbers').value]));
    formData.append('passport', this.formData.get('passport')), new Date().getTime()
    formData.append('driverLicense', this.formData.get('driverLicense')), new Date().getTime()
    // console.log(this.form.get('firstName')?.value, formData.get('firstName'))
    // if (typeof this.form.get('passportFilePath')?.value === "string") {
    //   formData.append('passportFilePath', this.form.get('passportFilePath')?.value);
    // } else {
    //   // formData.append('passportFilePath', this.form.get('passportFilePath')?.value, String(new Date().getTime()));
    // }
    // if (typeof this.form.get('driverLisenseFilePath')?.value === "string") {
    //   formData.append('driverLisenseFilePath', this.form.get('driverLisenseFilePath')?.value);
    // } else {
    //   // formData.append('driverLisenseFilePath', this.form.get('driverLisenseFilePath')?.value, String(new Date().getTime()));
    // }
    if (this.form.valid) {
      if (this.form.value.id) {
        this._driverService.update(this.formData).pipe(res => {
          if (isObservable(res)) {
            // this.formData = removeUnselected(this.formData, ['passport', 'driverLicense']);
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
        this._agentsService.createDriver(formData).pipe(res => {
          if (isObservable(res)) {
            // this.formData = removeUnselected(formData, ['passport', 'driverLicense']);
            return res
          } else {
            return res
          }
        }).subscribe(res => {
          if (res.success) {
            this._dialog.closeAll()
            this.form.reset()
            this._toaster.success('Водитель успешно добавлена')
          } else {
            this._toaster.error('Невозможно сохранить водитель')
          }
        })
      }
    } else {
      this._dialog.open(MessageComponent, {
        width: '500px',
        height: '450px',
        data: {
          text: 'Вы должны ввести все обязательные поля',
        }
      })
    }
  }

}
