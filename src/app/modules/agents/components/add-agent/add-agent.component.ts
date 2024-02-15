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
import { AgentService } from '../../services/agent.service';
import { PasswordGenerator } from 'app/shared/functions/password-generator';

@Component({
  selector: 'app-add-agent',
  templateUrl: './add-agent.component.html',
  styleUrls: ['./add-agent.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [TranslocoModule, NgxMatIntlTelInputComponent, MatInputModule, MatIconModule, MatSelectModule, MatButtonModule, ReactiveFormsModule, MatDialogModule, FormsModule, NgFor, NgIf, MatTableModule, NgClass, CurrencyPipe, MatFormFieldModule, MatInputModule, MatTableModule, MatSortModule, MatPaginatorModule, MatMenuModule, MatSlideToggleModule, HeaderTextComponent],
})

export class AddAgentComponent {
  roles = [];
  edit: boolean = false;
  passwordGenerator = new PasswordGenerator();
  form: FormGroup = new FormGroup({
    id: new FormControl(''),
    username: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required, Validators.minLength(6), Validators.maxLength(10), Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{6,10}$')]),
    companyName: new FormControl('', [Validators.required]),
    legalAddress: new FormControl('', [Validators.required]),
    actualAddress: new FormControl('', [Validators.required]),
    supervisorFirstName: new FormControl('', [Validators.required]),
    supervisorLastName: new FormControl('', [Validators.required]),
    inn: new FormControl('', [Validators.required]),
    oked: new FormControl('', [Validators.required]),
    mfo: new FormControl('', [Validators.required]),
    bankName: new FormControl('', [Validators.required]),
    registrationCertificate: new FormControl('', [Validators.required]),
    passportOwner: new FormControl('', [Validators.required]),
  })
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private _toaster: ToastrService,
    private _agentService: AgentService,
    private _roleService: RoleService,
    private _dialog: MatDialog) {
    if (this.data) {
      this.edit = true;
      this.form.patchValue({
        id: this.data?.id,
        companyName: this.data?.companyName,
        legalAddress: this.data?.legalAddress,
        actualAddress: this.data?.actualAddress,
        supervisorFirstName: this.data?.supervisorFirstName,
        supervisorLastName: this.data?.supervisorLastName,
        inn: this.data?.inn,
        oked: this.data?.oked,
        mfo: this.data?.mfo,
        bankName: this.data?.bankName,
        registrationCertificate: this.data?.registrationCertificate,
        passportOwner: this.data?.passportOwner,
      });
    }
    this.getRoles()
  }

  getRoles() {
    this._roleService.getAll().subscribe(res => {
      this.roles = res.data
    })
  }

  onFileSelected(event: any, type: string): void {
    const file: File = event.target.files[0];
    switch (type) {
      case 'registrationCertificate':
        this.form.patchValue({
          registrationCertificate: file
        });
      case 'passportOwner':
        this.form.patchValue({
          passportOwner: file
        });
    }
  }

  getImageUrl(formname:string): string {
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
    if (this.form.value.id) {
      this._agentService.update(this.form.value).subscribe(res => {
        if (res.success) {
          this._dialog.closeAll()
          this._toaster.success('Админ успешно обновлена')
        } else {
          this._toaster.error('Невозможно сохранить админ')
        }
      })
    } else {
      this._agentService.create(this.form.value).subscribe(res => {
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


}

