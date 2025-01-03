import { CurrencyPipe, DatePipe, NgClass, NgFor, NgIf } from '@angular/common';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { TranslocoModule } from '@ngneat/transloco';
import { MatPaginator, MatPaginatorModule, PageEvent } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatMenuModule } from '@angular/material/menu';
import { MatDialog } from '@angular/material/dialog';
import { MatSelectModule } from '@angular/material/select';
import { NoDataPlaceholderComponent } from 'app/shared/components/no-data-placeholder/no-data-placeholder.component';
import { DriverModel } from 'app/modules/drivers/models/driver.model';
import { AddAgentDriverComponent } from '../add-agent-driver/add-agent-driver.component';
import { AgentService } from '../../services/agent.service';
import { AgentTransactionComponent } from '../agent-transaction/agent-transaction.component';
import { ActivatedRoute } from '@angular/router';
import { AddAgentSubscriptionComponent } from '../add-agent-subscription/add-agent-subscription.component';
import { ConnectDriverComponent } from '../connect-driver/connect-driver.component';
import { AddBalanceAgentComponent } from '../add-balance-agent/add-balance-agent.component';
import { FuseUtilsService } from '@fuse/services/utils';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { DetailDriverComponent } from 'app/modules/drivers/components/detail-driver/detail-driver.component';
import { animate, state, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-agent-driver-list',
  templateUrl: './agent-driver-list.component.html',
  styleUrls: ['./agent-driver-list.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [TranslocoModule, DatePipe, MatDatepickerModule, FormsModule, ReactiveFormsModule, MatIconModule, MatSelectModule, NoDataPlaceholderComponent, MatButtonModule, NgFor, NgIf, MatTableModule, NgClass, CurrencyPipe, MatFormFieldModule, MatInputModule, MatTableModule, MatSortModule, MatPaginatorModule, MatMenuModule, MatSlideToggleModule],
  animations: [
    trigger('showHideFilter', [
      state('show', style({
        height: '*',
        opacity: 1,
        visibility: 'visible'
      })),
      state('hide', style({
        height: '0',
        opacity: 0,
        visibility: 'hidden'
      })),
      transition('show <=> hide', animate('300ms ease-in-out'))
    ])
  ]
})
export class AgentDriverListComponent implements OnInit {
  balances: [];
  cities: any[] = [];
  id: number;
  showFilter: boolean = false;
  filters = {
    driverId: '',
    firstName: '',
    phoneNumber: '',
    createdAtFrom: '',
    createdAtTo: '',
  };
  pageParams = {
    agentId: 0,
    pageIndex: 1,
    pageSize: 10,
    perPage: 10,
    totalPagesCount: 1,
    sortBy: 'id',
    sortType: 'desc'
  };
  displayedColumns: string[] = ['index', 'id', 'full_name', 'phone', 'register_date', 'last_enter', 'actions'];
  @ViewChild(MatPaginator) paginator: MatPaginator;
  dataSource = new MatTableDataSource<DriverModel>([]);
  constructor(private _router: ActivatedRoute,
    private utilsService: FuseUtilsService,
    private _cdr: ChangeDetectorRef,
    private _agentService: AgentService, protected _dialog?: MatDialog) {
    this._router.params.subscribe((params) => {
      this.id = params.id;
      this.pageParams.agentId = params.id;
    })
  }

  ngOnInit() {
    this.getBalance(this.id)
    this.getAllAgentsDrivers(this.pageParams);
  }


  clearFilters() {
    this.filters = {
      driverId: '',
      firstName: '',
      phoneNumber: '',
      createdAtFrom: '',
      createdAtTo: ''
    };
    this.getAllAgentsDrivers(this.pageParams);
  }

  hasPermission(permission): boolean {
    return this.utilsService.hasPermission(permission)
  }

  getAllAgentsDrivers(params?) {
    this._agentService.getAllByAgent(Object.assign(this.filters, params)).subscribe((response: any) => {
      this.dataSource.data = response?.data;
      this.pageParams.totalPagesCount = response?.data.totalPagesCount;
      this._cdr.detectChanges()
    });
  }

  onPageChange(event: PageEvent): void {
    this.pageParams.pageSize = event.pageSize;
    this.pageParams.pageIndex = event.pageIndex + 1;
    this.getAllAgentsDrivers(this.pageParams);
  }

  getBalance(id: number) {
    this._agentService.getAgentbalance(id).subscribe((response) => {
      this.balances = response?.data;
      this._cdr.detectChanges()
      console.log(this.balances)
    });
  }

  detail(id: number) {
    this._dialog.open(DetailDriverComponent, {
      width: '500px',
      height: '100vh',
      autoFocus: false,
      data: id,
      position: {
        top: '0',
        right: '0',
      },
      maxHeight: '100%'
    }).afterClosed()
      .subscribe(() => {
        this.getAllAgentsDrivers(this.id)
      })
  }

  connect() {
    this._dialog.open(ConnectDriverComponent, {
      minWidth: '25vw',
      maxWidth: '35vw',
      minHeight: '20vh',
      maxHeight: '30vh',
      data: { agentId: this.id },
    }).afterClosed()
      .subscribe(() => {
        this.getAllAgentsDrivers(this.id)
      })
  }

  transaction() {
    const dialog = this._dialog.open(AgentTransactionComponent, {
      minWidth: '70vw',
      maxWidth: '90vw',
      minHeight: '60vh',
      maxHeight: '80vh',
      data: this.id,
      autoFocus: false,
    })
    dialog.afterClosed()
      .subscribe(() => {
        this.getAllAgentsDrivers(this.id)
      })
  }

  add() {
    const dialog = this._dialog.open(AddAgentDriverComponent, {
      minWidth: '45vw',
      maxWidth: '60vw',
      minHeight: '60vh',
      maxHeight: '80vh',
      autoFocus: false,
      data: { id: this.id },
    })
    dialog.afterClosed()
      .subscribe(() => {
        this.getAllAgentsDrivers(this.id)
      })
  }

  addBalanse() {
    const dialog = this._dialog.open(AddBalanceAgentComponent, {
      minWidth: '30vw',
      maxWidth: '40vw',
      minHeight: '40vh',
      maxHeight: '60vh',
      autoFocus: false,
      data: { id: this.id },
    })
    dialog.afterClosed()
      .subscribe(() => {
        this.getAllAgentsDrivers(this.id)
        this.getBalance(this.id)
      })
  }


  addSubsciption(id: number) {
    const dialog = this._dialog.open(AddAgentSubscriptionComponent, {
      minWidth: '35vw',
      maxWidth: '40vw',
      minHeight: '30vh',
      maxHeight: '40vh',
      autoFocus: false,
      data: { agentId: this.id, driverId: id },
    })
    dialog.afterClosed()
      .subscribe(() => {
        this.getAllAgentsDrivers(this.id)
      })
  }

  delete(id: number) {
    this._agentService.delete(id).subscribe(() => {
      this.getAllAgentsDrivers(this.id)
    })
  }
}

