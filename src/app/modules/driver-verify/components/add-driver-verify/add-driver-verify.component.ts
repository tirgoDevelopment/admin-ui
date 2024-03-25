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
import { RoleService } from 'app/modules/main-types/role/services/role.service';
import { DriverVerifyService } from '../../services/driver-verify.service';
import { MessageComponent } from 'app/shared/components/message/message.component';

@Component({
  selector: 'app-add-driver-verify',
  templateUrl: './add-driver-verify.component.html',
  styleUrls: ['./add-driver-verify.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [TranslocoModule, NgxMatIntlTelInputComponent, MatInputModule, MatIconModule, MatSelectModule, MatButtonModule, ReactiveFormsModule, MatDialogModule, FormsModule, NgFor, NgIf, MatTableModule, NgClass, CurrencyPipe, MatFormFieldModule, MatInputModule, MatTableModule, MatSortModule, MatPaginatorModule, MatMenuModule, MatSlideToggleModule, HeaderTextComponent],

})
export class AddDriverVerifyComponent {

  fileName: string | undefined;
  roles = [];
  edit: boolean = false;
  form: FormGroup = new FormGroup({
    id: new FormControl(''),
    fullName: new FormControl('', [Validators.required]),
    phone: new FormControl('', [Validators.required]),
    roleId: new FormControl('', [Validators.required]),
    username: new FormControl('', [Validators.required]),
  })
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private _toaster: ToastrService,
    private _driverVerifyService: DriverVerifyService,
    private _roleService: RoleService,
    private _dialog: MatDialog) {
    if (this.data) {
      this.edit = true;
      this.form.patchValue({
        id: this.data?.id,
        fullName: this.data?.fullName,
        phone: this.data?.phone,
        roleId: this.data?.roleId,
        username: this.data?.username,
        password: this.data?.password,
      });
    }
    this.getRoles()
  }

  getRoles() {
    this._roleService.getAll().subscribe(res => {
      this.roles = res.data
    })
  }

  get f() {
    return this.form.controls
  }

  handleFileInput(event: any): void {
    const file = event.target.files[0];
    this.fileName = file ? file.name : undefined;
  }

  submit() {
    if (this.form.valid) {
    if (this.form.value.id) {
      this._driverVerifyService.update(this.form.value).subscribe(res => {
        if (res.success) {
          this._dialog.closeAll()
          this._toaster.success('Админ успешно обновлена')
        } else {
          this._toaster.error('Невозможно сохранить админ')
        }
      })
    } else {
      this._driverVerifyService.create(this.form.value).subscribe(res => {
        if (res.success) {
          this._dialog.closeAll()
          this.form.reset()
          this._toaster.success('Админ успешно добавлена')
        } else {
          this._toaster.error('Невозможно сохранить админ')
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


  generate() {
    this.form.patchValue({
      password: new Array(10).fill("0123456789ABCDEFGHKLMNPQRSTUVWXYZabcdefghikmnpqrstuvwxyz").map(x => (function (chars) { let umax = Math.pow(2, 32), r = new Uint32Array(1), max = umax - (umax % chars.length); do { crypto.getRandomValues(r); } while (r[0] > max); return chars[r[0] % chars.length]; })(x)).join('')
    })
  }


}

