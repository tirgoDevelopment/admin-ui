import { CurrencyPipe, NgClass, NgFor, NgIf } from '@angular/common';
import {
    ChangeDetectionStrategy,
    Component,
    ViewEncapsulation
} from '@angular/core';
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
import {
    FormControl,
    FormGroup,
    FormsModule,
    ReactiveFormsModule,
    Validators,
} from '@angular/forms';
import {
    MAT_DIALOG_DATA,
    MatDialog,
    MatDialogModule,
} from '@angular/material/dialog';
import { HeaderTextComponent } from 'app/shared/components/header-text/header-text.component';
import { ToastrService } from 'ngx-toastr';
import { RoleService } from '../../services/role.service';
import { MessagesComponent } from 'app/shared/components/common/messages/messages.component';

@Component({
    selector: 'app-add-role',
    templateUrl: './add-role.component.html',
    styleUrls: ['./add-role.component.scss'],
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush,
    standalone: true,
    imports: [
        TranslocoModule,
        MatIconModule,
        MatButtonModule,
        ReactiveFormsModule,
        MatDialogModule,
        FormsModule,
        NgFor,
        NgIf,
        MatTableModule,
        NgClass,
        CurrencyPipe,
        MatFormFieldModule,
        MatInputModule,
        MatTableModule,
        MatSortModule,
        MatPaginatorModule,
        MatMenuModule,
        MatSlideToggleModule,
        HeaderTextComponent,
    ],
})
export class AddRoleComponent {
    edit: boolean = false;
    form: FormGroup = new FormGroup({
        id: new FormControl(''),
        name: new FormControl('', [Validators.required]),
        addDriver: new FormControl(''),
        addClient: new FormControl(''),
        addOrder: new FormControl(''),
        cancelOrder: new FormControl(''),
        seeDriversInfo: new FormControl(''),
        seeClientsInfo: new FormControl(''),
        sendPush: new FormControl(''),
        tracking: new FormControl(''),
        chat: new FormControl(''),
        clientMerchantFinance: new FormControl(''),
        driverMerchantFinance: new FormControl(''),
        registerClientMerchant: new FormControl(''),
        registerDriverMerchant: new FormControl(''),
        verifyDriver: new FormControl(''),
        clientMerchantList: new FormControl(''),
        driverMerchantList: new FormControl(''),
        adminPage: new FormControl(''),
        finRequest: new FormControl(''),
        driverMerchantPage: new FormControl(''),
        clientMerchantPage: new FormControl(''),
        driverVerification: new FormControl(''),
        driverFinance: new FormControl(''),
        agentPage: new FormControl(''),

        dashboardPage: new FormControl(''),
        archivedPage: new FormControl(''),
        orderPage: new FormControl(''),
        referencesPage: new FormControl(''),
        activePage: new FormControl(''),
        adminAgentPage: new FormControl(''),
        AttachDriverAgent: new FormControl(''),
        addBalanceAgent: new FormControl(''),
        seeTransactionAgent: new FormControl(''),
        seePaymentTransactionAdmin: new FormControl(''),
        seeServiceTransactionAdmin: new FormControl(''),
    });
    constructor(
        @Inject(MAT_DIALOG_DATA) public data: any,
        private _toaster: ToastrService,
        private roleService: RoleService,
        private _dialog: MatDialog
    ) {
        if (this.data) {
            this.edit = true;
            this.form.patchValue({
                id: this.data?.id,
                name: this.data?.name,
                addDriver: this.data?.permission?.addDriver,
                addClient: this.data?.permission?.addClient,
                addOrder: this.data?.permission?.addOrder,
                cancelOrder: this.data?.permission?.cancelOrder,
                seeDriversInfo: this.data?.permission?.seeDriversInfo,
                seeClientsInfo: this.data?.permission?.seeClientsInfo,
                sendPush: this.data?.permission?.sendPush,
                tracking: this.data?.permission?.tracking,
                chat: this.data?.permission?.chat,
                clientMerchantFinance: this.data?.permission?.clientMerchantFinance,
                driverMerchantFinance: this.data?.permission?.driverMerchantFinance,
                registerClientMerchant: this.data?.permission?.registerClientMerchant,
                registerDriverMerchant: this.data?.permission?.registerDriverMerchant,
                verifyDriver: this.data?.permission?.verifyDriver,
                clientMerchantList: this.data?.permission?.clientMerchantList,
                driverMerchantList: this.data?.permission?.driverMerchantList,
                adminPage: this.data?.permission?.adminPage,
                finRequest: this.data?.permission?.finRequest,
                driverMerchantPage: this.data?.permission?.driverMerchantPage,
                clientMerchantPage: this.data?.permission?.clientMerchantPage,
                driverVerification: this.data?.permission?.driverVerification,
                agentPage: this.data?.permission?.addDriver,
                driverFinance: this.data?.permission?.driverFinance
            });
        }
    }

    get f() {
        return this.form.controls;
    }

    submit() {
        let data = this.parseData();
        if (this.form.valid) {
            if (data.id) {
                this.roleService.update(data).subscribe((res) => {
                    if (res.success) {
                        this._dialog.closeAll();
                        this._toaster.success('Роль успешно обновлена');
                    } else {
                        this._toaster.error('Невозможно сохранить роль');
                    }
                });
            } else {
                this.roleService.create(data).subscribe((res) => {
                    console.log(res);
                    if (res.success) {
                        this._dialog.closeAll();
                        this.form.reset();
                        this._toaster.success('Роль успешно добавлена');
                    } else {
                        this._toaster.error('Невозможно сохранить роль');
                    }
                });
            }
        } else {
            this._dialog.open(MessagesComponent, {
                width: '500px',
                height: '450px',
                data: {
                    text: 'Вы должны ввести все обязательные поля',
                },
            });
        }
    }

    parseData() {
        let data = {
            id: this.f?.id.value ? this.f?.id.value : null,
            name: this.f.name.value,
            permission: {
                addDriver: this.f.addDriver.value,
                addClient: this.f?.addClient.value,
                addOrder: this.f?.addOrder.value,
                cancelOrder: this.f?.cancelOrder.value,
                seeDriversInfo: this.f?.seeDriversInfo.value,
                seeClientsInfo: this.f?.seeClientsInfo.value,
                sendPush: this.f?.sendPush.value,
                tracking: this.f?.tracking.value,
                chat: this.f?.chat.value,
                clientMerchantFinance: this.f?.clientMerchantFinance.value,
                driverMerchantFinance: this.f?.driverMerchantFinance.value,
                registerClientMerchant: this.f?.registerClientMerchant.value,
                registerDriverMerchant: this.f?.registerDriverMerchant.value,
                verifyDriver: this.f?.verifyDriver.value,
                clientMerchantList: this.f?.clientMerchantList.value,
                driverMerchantList: this.f?.driverMerchantList.value,
                adminPage: this.f?.adminPage.value,
                finRequest: this.f?.finRequest.value,
                driverMerchantPage: this.f?.driverMerchantPage.value,
                clientMerchantPage: this.f?.clientMerchantPage.value,
                driverVerification: this.f?.driverVerification.value,
                agentPage: this.f?.agentPage.value,
                driverFinance: this.f?.driverFinance.value
            },
        };
        return data;
    }
}
