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
import { AdminsService } from '../../services/admins.service';
import { MatSelectModule } from '@angular/material/select';
import { NgxMatIntlTelInputComponent } from 'ngx-mat-intl-tel-input';
import { RoleService } from 'app/modules/main-types/role/services/role.service';
import { PasswordGenerator } from 'app/shared/functions/password-generator';
import { MessageComponent } from 'app/shared/components/message/message.component';
@Component({
  selector: 'app-add-admins',
  templateUrl: './add-admins.component.html',
  styleUrls: ['./add-admins.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.Default,
  standalone: true,
  imports: [TranslocoModule, NgxMatIntlTelInputComponent, MatInputModule, MatIconModule, MatSelectModule, MatButtonModule, ReactiveFormsModule, MatDialogModule, FormsModule, NgFor, NgIf, MatTableModule, NgClass, CurrencyPipe, MatFormFieldModule, MatInputModule, MatTableModule, MatSortModule, MatPaginatorModule, MatMenuModule, MatSlideToggleModule, HeaderTextComponent],
})
export class AddAdminsComponent implements OnInit {
  roles = [];
  edit: boolean = false;
  passwordGenerator = new PasswordGenerator();
  form: FormGroup = new FormGroup({
    id: new FormControl(''),
    fullName: new FormControl('', [Validators.required]),
    phone: new FormControl('', [Validators.required]),
    roleId: new FormControl('', [Validators.required]),
    username: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required, Validators.minLength(8), Validators.maxLength(16)]),
  })
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private _toaster: ToastrService,
    private _adminService: AdminsService,
    private _roleService: RoleService,
    private _cdr: ChangeDetectorRef,
    private _dialog: MatDialog) {}
  ngOnInit(): void {
    this.getRoles()
    if (this.data) {
      this.edit = true;
      this.form.patchValue({
        id: this.data?.id,
        fullName: this.data?.fullName,
        phone: this.data?.phone,
        roleId: this.data?.user?.role?.id,
        username: this.data?.username,
        password: this.data?.password,
      });
      this._cdr.detectChanges();
    }
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
    if (this.form.valid) {
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
      password: this.passwordGenerator.generateRandomPassword(),
    });
  }

}

