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
import { AgentService } from '../../services/agent.service';
import { TypesService } from 'app/shared/services/types.service';
import { MessageComponent } from 'app/shared/components/message/message.component';

@Component({
  selector: 'app-add-balance-agent',
  templateUrl: './add-balance-agent.component.html',
  styleUrls: ['./add-balance-agent.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [TranslocoModule, NgxMatIntlTelInputComponent, NgFor, MatInputModule, MatIconModule, MatSelectModule, MatButtonModule, ReactiveFormsModule, MatDialogModule, FormsModule, NgFor, NgIf, MatTableModule, NgClass, CurrencyPipe, MatFormFieldModule, MatInputModule, MatTableModule, MatSortModule, MatPaginatorModule, MatMenuModule, MatSlideToggleModule, HeaderTextComponent],

})
export class AddBalanceAgentComponent {
  edit: boolean = false;
  transactionTypes = ['topupAccount', 'withdrawAccount', 'secureTransaction', 'topUpAgentAccount', 'driverSubscriptionPayment']
  currencies: any;
  form: FormGroup = new FormGroup({
    amount: new FormControl('', [Validators.required]),
    transactionType: new FormControl('', [Validators.required]),
    currencyId: new FormControl('', [Validators.required]),
    agentId: new FormControl('', [Validators.required]),
  })
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private _toaster: ToastrService,
    private _agentService: AgentService,
    private _typeService: TypesService,
    private _dialog: MatDialog) {
    this.form.patchValue({
      agentId: Number(data.id)
    })
    this._typeService.getCurrencies().subscribe((response: any) => {
      this.currencies = response.data;
    })

  }

  get f() {
    return this.form.controls
  }

  submit() {
    if (this.form.valid) {
      this._agentService.CreateBalanseAgent(this.form.value).subscribe(res => {
        if (res.success) {
          this._dialog.closeAll()
          this.form.reset()
          this._toaster.success('Агент успешно добавлена')
        } else {
          this._toaster.error('Невозможно сохранить агент')
        }
      })
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

