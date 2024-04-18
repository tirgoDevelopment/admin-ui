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
import { UnsubscribeAble } from 'app/shared/components/unsubscribe-able.component';
import { NoDataPlaceholderComponent } from 'app/shared/components/no-data-placeholder/no-data-placeholder.component';
import { AgentService } from './services/agent.service';
import { AgentModel } from './models/agent.model';
import { AddAgentComponent } from './components/add-agent/add-agent.component';
import { RouterLink, RouterModule } from '@angular/router';
import { AgentBlockComponent } from './components/agent-block/agent-block.component';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-agents',
  templateUrl: './agents.component.html',
  styleUrls: ['./agents.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [TranslocoModule, DatePipe, RouterLink, MatDatepickerModule, FormsModule, ReactiveFormsModule, MatIconModule, RouterModule, NoDataPlaceholderComponent, MatButtonModule, NgFor, NgIf, MatTableModule, NgClass, CurrencyPipe, MatFormFieldModule, MatInputModule, MatTableModule, MatSortModule, MatPaginatorModule, MatMenuModule, MatSlideToggleModule],
})
export class AgentsComponent extends UnsubscribeAble implements OnInit {
  balances: any;
  filters = {
    agentId: '',
    username: '',
    createdAtFrom: '',
    createdAtTo: '',
  };
  pageParams = {
    pageIndex: 1,
    pageSize: 10,
    totalPagesCount: 1,
    sortBy: 'id',
    sortType: 'desc'
  };
  displayedColumns: string[] = ['index', 'id', 'full_name', 'login', 'register_date', 'last_enter', 'status', 'actions'];
  @ViewChild(MatPaginator) paginator: MatPaginator;

  dataSource = new MatTableDataSource<AgentModel>([]);
  constructor(private _agentService: AgentService, protected _dialog?: MatDialog) {
    super();
  }

  clearFilters() {
    this.filters = {
      agentId: '',
      username: '',
      createdAtFrom: '',
      createdAtTo: '',
    };
  }

  filterDrivers() {

  }
  ngOnInit() {
    this.getAllAgents(this.pageParams);
  }

  getAllAgents(params?) {
    this._agentService.getAll(Object.assign(this.filters, params)).subscribe((response: any) => {
      this.dataSource.data = response?.data.content;
      this.pageParams.pageSize = response?.data?.pageSize;
      this.pageParams.pageIndex = response?.data?.pageIndex;
      this.pageParams.totalPagesCount = response?.data?.totalPagesCount;
    });
  }

  onPageChange(event: PageEvent): void {
    this.pageParams.pageSize = event.pageSize;
    this.pageParams.pageIndex = event.pageIndex + 1;
    this.getAllAgents(this.pageParams);
  }

  add() {
    const dialog = this._dialog.open(AddAgentComponent, {
      minWidth: '80vw',
      maxWidth: '90vw',
      minHeight: '50vh',
      maxHeight: '90vh',
      autoFocus: false,
    })
    dialog.afterClosed()
      .subscribe(() => {
        this.getAllAgents(this.pageParams);
      })
  }

  block(id: number) {
    const dialog = this._dialog.open(AgentBlockComponent, {
      minWidth: '20vw',
      maxWidth: '40vw',
      minHeight: '42vh',
      maxHeight: '85vh',
      data: id,
      autoFocus: false,
    })
    dialog.afterClosed()
      .subscribe(() => {
        this.getAllAgents(this.pageParams);
      })
  }


  active(id: number) {
    this._agentService.active(id).subscribe(() => {
      this.getAllAgents(this.pageParams);
    })
  }

  edit(row: any[]) {
    const dialogRef = this._dialog.open(AddAgentComponent, {
      minWidth: '80vw',
      maxWidth: '90vw',
      minHeight: '50vh',
      maxHeight: '90vh',
      autoFocus: false,
      data: row,
    });
    dialogRef.afterClosed()
      .subscribe(() => {
        this.getAllAgents(this.pageParams);
      })
  }

  delete(id: number) {
    this._agentService.delete(id).subscribe(() => {
      this.getAllAgents(this.pageParams);
    })
  }
}


