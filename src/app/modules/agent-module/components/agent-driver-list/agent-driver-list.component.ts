import { CurrencyPipe, DatePipe, NgClass, NgFor, NgIf } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
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
import { DetailAgentDriverComponent } from '../detail-agent-driver/detail-agent-driver.component';
import { AgentService } from '../../services/agent.service';
import { AgentTransactionComponent } from '../agent-transaction/agent-transaction.component';
import { ActivatedRoute } from '@angular/router';
import { AddAgentSubscriptionComponent } from '../add-agent-subscription/add-agent-subscription.component';
import { ConnectDriverComponent } from '../connect-driver/connect-driver.component';

@Component({
  selector: 'app-agent-driver-list',
  templateUrl: './agent-driver-list.component.html',
  styleUrls: ['./agent-driver-list.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [TranslocoModule, DatePipe, MatIconModule, MatSelectModule, NoDataPlaceholderComponent, MatButtonModule, NgFor, NgIf, MatTableModule, NgClass, CurrencyPipe, MatFormFieldModule, MatInputModule, MatTableModule, MatSortModule, MatPaginatorModule, MatMenuModule, MatSlideToggleModule],

})
export class AgentDriverListComponent implements OnInit {
  pageParams = {
    agentId: 0,
    page: 1,
    limit: 10,
    perPage: 10,
    sortBy: 'id',
    sortType: 'asc'
  };
  balances: [];
  cities: any[] = [];
  id: number;
  displayedColumns: string[] = ['full_name', 'phone', 'register_date', 'last_enter', 'actions'];
  @ViewChild(MatPaginator) paginator: MatPaginator;
  dataSource = new MatTableDataSource<DriverModel>([]);
  constructor(private _router: ActivatedRoute, private _agentService: AgentService, protected _dialog?: MatDialog) {
    this._router.params.subscribe((params) => {
      console.log(params);
      this.id = params.id;
    })
  }

  ngOnInit() {
    this.getAllDrivers(this.id);
    this.getBalance(this.id)
  }

  onPageChange(event: PageEvent): void {
    this.pageParams.limit = event.pageSize;
    this.pageParams.perPage = event.pageSize;
    this.pageParams.page = event.pageIndex;
    this.getAllDrivers(this.pageParams);
  }

  getAllDrivers(params) {
    this._agentService.getAllByAgent(params).subscribe((response) => {
      this.dataSource.data = response?.data;
    });
  }

  getBalance(id: number) {
    this._agentService.getAgentbalance(id).subscribe((response) => {
      this.balances = response?.data;
    });
  }

  detail(id:number) {
    this._dialog.open(DetailAgentDriverComponent, {
      width: '500px',
      height: '100vh',
      autoFocus: false,
      data:id,
      position: {
        top: '0',
        right: '0',
      },
      maxHeight: '100%'
    })
  }

  connect() {
    this._dialog.open(ConnectDriverComponent, {
      minWidth: '25vw',
      maxWidth: '40vw',
      minHeight: '30vh',
      maxHeight: '60vh',
      data: { agentId: this.id },
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
        this.getAllDrivers(this.pageParams);
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
        this.getAllDrivers(this.pageParams);
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
        this.getAllDrivers(this.pageParams);
      })
  }

  delete(id: number) {
    this._agentService.delete(id).subscribe(() => {
      this.getAllDrivers(this.pageParams);
    })
  }
}

