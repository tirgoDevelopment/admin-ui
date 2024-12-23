import { CurrencyPipe, DatePipe, NgClass, NgFor, NgIf } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { TranslocoModule } from '@ngneat/transloco';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatMenuModule } from '@angular/material/menu';
import { Inject } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialog, MatDialogModule } from '@angular/material/dialog';
import { HeaderTextComponent } from 'app/shared/components/header-text/header-text.component';
import { MatSelectModule } from '@angular/material/select';
import { AgentService } from '../../services/agent.service';

@Component({
  selector: 'app-agent-transaction',
  templateUrl: './agent-transaction.component.html',
  styleUrls: ['./agent-transaction.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [TranslocoModule, MatIconModule, NgFor, DatePipe, MatSelectModule, MatButtonModule, ReactiveFormsModule, MatDialogModule, FormsModule, NgFor, NgIf, MatTableModule, NgClass, CurrencyPipe, MatFormFieldModule, MatInputModule, MatTableModule, MatSortModule, MatPaginatorModule, MatMenuModule, MatSlideToggleModule, HeaderTextComponent],
})
export class AgentTransactionComponent implements OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  dataSource = new MatTableDataSource<any>([]);
  subscrition_count: any;
  displayedColumns: string[] = ['index', 'admin', 'agent', 'amount', 'type', 'driverId', 'date'];
  constructor(@Inject(MAT_DIALOG_DATA) public data: any, private _agentService: AgentService, private _dialog: MatDialog) {
  }

  ngOnInit(): void {
    this.getTransactions(this.data);
  }


  getTransactions(id) {
    this._agentService.getAgentTransactions(id).subscribe((res: any) => {
      this.dataSource.data = res.data.content;
    })
  }

}
