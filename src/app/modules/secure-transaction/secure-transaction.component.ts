import { CurrencyPipe, NgClass, NgFor, NgIf } from '@angular/common';
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
import { MatDialog } from '@angular/material/dialog';
import { MatSelectModule } from '@angular/material/select';
import { NoDataPlaceholderComponent } from 'app/shared/components/no-data-placeholder/no-data-placeholder.component';
import { SecureTransactionService } from './services/secure-transaction.service';
import { SecureTransactionModel } from './models/secure-transaction.model';
import { DetailSecureTransactionComponent } from './components/detail-secure-transaction/detail-secure-transaction.component';


@Component({
  selector: 'app-secure-transaction',
  templateUrl: './secure-transaction.component.html',
  styleUrls: ['./secure-transaction.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [TranslocoModule, MatIconModule, MatSelectModule, NoDataPlaceholderComponent, DetailSecureTransactionComponent, MatButtonModule, NgFor, NgIf, MatTableModule, NgClass, CurrencyPipe, MatFormFieldModule, MatInputModule, MatTableModule, MatSortModule, MatPaginatorModule, MatMenuModule, MatSlideToggleModule],

})
export class SecureTransactionComponent implements OnInit {
  cities: any[] = [];
  displayedColumns: string[] = ['id', 'client', 'from_where', 'where', 'cargo_type', 'type_transport', 'secure_transaction', 'date_creation', 'shipment_date', 'suggested_cost', 'status_processing', 'status','actions'];
  @ViewChild(MatPaginator) paginator: MatPaginator;

  dataSource = new MatTableDataSource<SecureTransactionModel>([]);
  constructor(
    private _secureTransactionService: SecureTransactionService, protected _dialog?: MatDialog) {
  }


  ngOnInit() {
    this.getAllTransaction();
  }

  getAllTransaction() {
    this._secureTransactionService.getAll().subscribe((response) => {
      this.dataSource.data = response.data;
    });
  }


  detail() {
    this._dialog.open(DetailSecureTransactionComponent, {
      width: '500px',
      height: '100vh',
      autoFocus: false,
      position: {
        top: '0',
        right: '0',
      },
      maxHeight:'100%'
    })
  }



  delete(id: number) {
    this._secureTransactionService.delete(id).subscribe(() => {
      this.getAllTransaction()
    })
  }

}
