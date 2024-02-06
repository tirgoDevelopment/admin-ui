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
import { AdminsService } from '../../services/admins.service';
import { MatSelectModule } from '@angular/material/select';
import { NgxMatIntlTelInputComponent } from 'ngx-mat-intl-tel-input';
import { RoleService } from 'app/modules/main-types/role/services/role.service';
import { PasswordGenerator } from 'app/shared/functions/password-generator';
@Component({
  selector: 'app-add-admins',
  templateUrl: './add-admins.component.html',
  styleUrls: ['./add-admins.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [TranslocoModule, NgxMatIntlTelInputComponent, MatInputModule, MatIconModule, MatSelectModule, MatButtonModule, ReactiveFormsModule, MatDialogModule, FormsModule, NgFor, NgIf, MatTableModule, NgClass, CurrencyPipe, MatFormFieldModule, MatInputModule, MatTableModule, MatSortModule, MatPaginatorModule, MatMenuModule, MatSlideToggleModule, HeaderTextComponent],
})
export class AddAdminsComponent {
  roles = [];
  edit: boolean = false;
  passwordGenerator = new PasswordGenerator();
  form: FormGroup = new FormGroup({
    id: new FormControl(''),
    fullName: new FormControl('', [Validators.required]),
    phone: new FormControl('', [Validators.required]),
    roleId: new FormControl('', [Validators.required]),
    username: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required, Validators.minLength(6), Validators.maxLength(10), Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{6,10}$')]),
  })
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private _toaster: ToastrService,
    private _adminService: AdminsService,
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

  submit() {
    if (this.form.value.id) {
      this._adminService.update(this.form.value).subscribe(res => {
        if (res.success) {
          this._dialog.closeAll()
          this._toaster.success('Админ успешно обновлена')
        } else {
          this._toaster.error('Невозможно сохранить админ')
        }
      })
    } else {
      this._adminService.create(this.form.value).subscribe(res => {
        if (res.success) {
          this._dialog.closeAll()
          this.form.reset()
          this._toaster.success('Админ успешно добавлена')
        } else {
          this._toaster.error('Невозможно сохранить админ')
        }
      })
    }
  }


  generate() {
    this.form.patchValue({
      password: this.passwordGenerator.generateRandomPassword(),
    });
  }

  block(): void {
    const queryParams = {
      id: this.form.value.id,
    };
    this._adminService.block(queryParams).subscribe(res => {
      if (res.success) {
        this._toaster.success('Админ заблокирован')
      } else {
        this._toaster.error('Невозможно заблокировать админ')
      }
    })
  }
}

