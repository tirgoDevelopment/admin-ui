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
import { UnsubscribeAble } from 'app/shared/components/unsubscribe-able.component';
import { AddTransportComponent } from './components/add-transport/add-transport.component';
import { TransportService } from './services/transport.service';
import { TransportModel } from './models/transport.model';

@Component({
  selector: 'app-transport',
  templateUrl: './transport.component.html',
  styleUrls: ['./transport.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [TranslocoModule, MatIconModule, MatButtonModule, NgFor, NgIf, MatTableModule, NgClass, CurrencyPipe, MatFormFieldModule, MatInputModule, MatTableModule, MatSortModule, MatPaginatorModule, MatMenuModule, MatSlideToggleModule],

})
export class TransportComponent extends UnsubscribeAble implements OnInit {
  displayedColumns: string[] = ['name', 'actions'];
  // displayedColumns: string[] = ['name', 'load_side', 'volume', 'capacity','actions'];
  @ViewChild(MatPaginator) paginator: MatPaginator;

  dataSource = new MatTableDataSource<TransportModel>([]);
  constructor(private _transportService: TransportService, protected _dialog?: MatDialog) {
    super();
  }

  ngOnInit() {
    this.getAllTransport();
  }

  getAllTransport() {
    this._transportService.getAll().subscribe((response) => {
      this.dataSource.data = response.data;
    });
  }

  add() {
    const dialog = this._dialog.open(AddTransportComponent, {
      width: '400px',
      height: '230px',
      autoFocus: false,
    })
    dialog.afterClosed()
      .subscribe(() => {
        this.getAllTransport()
      })
  }

  edit(row: any[]) {
    const dialogRef = this._dialog.open(AddTransportComponent, {
      width: '400px',
      height: '230px',
      autoFocus: false,
      data: row,
    });
    dialogRef.afterClosed()
      .subscribe(() => {
        this.getAllTransport()
      })
  }

  delete(id: number) {
    this._transportService.delete(id).subscribe(() => {
      this.getAllTransport()
    })
  }
}
