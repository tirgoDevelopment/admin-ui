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
import { CargoPackagesService } from '../../services/cargo-packages.service';
import { MessagesComponent } from 'app/shared/components/common/messages/messages.component';

@Component({
  selector: 'app-add-cargo-packages',
  templateUrl: './add-cargo-packages.component.html',
  styleUrls: ['./add-cargo-packages.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [TranslocoModule, MatIconModule, MatButtonModule, ReactiveFormsModule, MatDialogModule, FormsModule, NgFor, NgIf, MatTableModule, NgClass, CurrencyPipe, MatFormFieldModule, MatInputModule, MatTableModule, MatSortModule, MatPaginatorModule, MatMenuModule, MatSlideToggleModule, HeaderTextComponent],
})
export class AddCargoPackagesComponent {
  edit: boolean = false;
  form: FormGroup = new FormGroup({
    id: new FormControl(''),
    name: new FormControl('', [Validators.required]),
    code: new FormControl('', [Validators.required]),
  })
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private _toaster: ToastrService,
    private _cargoPackageService: CargoPackagesService,
    private _dialog: MatDialog) {
    if (this.data) {
      this.edit = true;
      this.form.patchValue({
        id: this.data?.id,
        name: this.data?.name,
      });
    }
  }


  get f() {
    return this.form.controls
  }

  submit() {
    if (this.form.valid) {
      if (this.form.value.id) {
        this._cargoPackageService.update(this.form.value).subscribe(res => {
          if (res.success) {
            this._dialog.closeAll()
            this._toaster.success('Статус груза успешно обновлена')
          } else {
            this._toaster.error('Невозможно сохранить статус груза')
          }
        })
      } else {
        this._cargoPackageService.create(this.form.value).subscribe(res => {
          if (res.success) {
            this._dialog.closeAll()
            this.form.reset()
            this._toaster.success('Статус груза успешно добавлена')
          } else {
            this._toaster.error('Невозможно сохранить статус груза')
          }
        })
      }
    } else {
      this._dialog.open(MessagesComponent, {
        width: '500px',
        height: '450px',
        data: {
          text: 'Вы должны ввести все обязательные поля',
        }
      })
    }
  }

}
