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
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatRadioModule } from '@angular/material/radio';
import { MerchantService } from '../../services/merchant.service';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { TypesService } from 'app/shared/services/types.service';

@Component({
    selector: 'app-create-transaction',
    templateUrl: './create-transaction.component.html',
    styleUrls: ['./create-transaction.component.scss'],
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush,
    standalone: true,
    imports: [TranslocoModule, NgClass, NgxMatSelectSearchModule, MatProgressSpinnerModule, MatRadioModule, MatDatepickerModule, NgxMatIntlTelInputComponent, MatInputModule, MatIconModule, MatSelectModule, MatButtonModule, ReactiveFormsModule, MatDialogModule, FormsModule, NgFor, NgIf, MatTableModule, NgClass, CurrencyPipe, MatFormFieldModule, MatInputModule, MatTableModule, MatSortModule, MatPaginatorModule, MatMenuModule, MatSlideToggleModule, HeaderTextComponent],
})
export class CreateTransactionComponent {
    currencies: any;
    transactionType: string = '';
    form: FormGroup = new FormGroup({
        merchantId: new FormControl(+this.data.merchantId, [Validators.required]),
        transactionType: new FormControl('topupAccount', [Validators.required]),
        amount: new FormControl(null, [Validators.required]),
        currencyId: new FormControl('', [Validators.required]),
        comment: new FormControl('')
    })

    constructor(
        @Inject(MAT_DIALOG_DATA) public data: any,
        private _toaster: ToastrService,
        private _merChantService: MerchantService,
        private _dialog: MatDialog,
        private typesService: TypesService) {
        this.typesService.getCurrencies().subscribe((res: any) => {
            this.currencies = res.data;
            this.form.patchValue({
                currencyId: this.currencies[0].id,
            })
        })
    }

    create() {
        this.form.patchValue({
            amount: +this.form.value.amount
        })
        this.form.disable();
        this._merChantService.createTransaction(this.form.value).subscribe((res:any) => {
          if(res && res.success) {
            this.form.enable();
            this._toaster.success('Транзакция успешно создана');
            this._dialog.closeAll();
          }
        },err => {
          this.form.enable();
          this._toaster.error(err.error.message);
        })
    }

    closeModal() {
        this._dialog.closeAll();
    }

}

