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
import { TransportCargoService } from './services/transport-cargo.service';
import { TransportCargoModel } from './models/transport-cargo.model';
import { AddTransportCargoComponent } from './components/add-transport-cargo/add-transport-cargo.component';

@Component({
  selector: 'app-transport-cargo',
  templateUrl: './transport-cargo.component.html',
  styleUrls: ['./transport-cargo.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [TranslocoModule, MatIconModule, MatButtonModule, NgFor, NgIf, MatTableModule, NgClass, CurrencyPipe, MatFormFieldModule, MatInputModule, MatTableModule, MatSortModule, MatPaginatorModule, MatMenuModule, MatSlideToggleModule],
})
export class TransportCargoComponent extends UnsubscribeAble implements OnInit {
  displayedColumns: string[] = ['name', 'is_mode', 'count', 'description','actions'];
  @ViewChild(MatPaginator) paginator: MatPaginator;

  dataSource = new MatTableDataSource<TransportCargoModel>([]);
  constructor(private _transportCargoService: TransportCargoService, protected _dialog?: MatDialog) {
    super();
  }

  ngOnInit() {
    this.getAllTransport();
  }

  getAllTransport() {
    this._transportCargoService.getAll().subscribe((response) => {
      this.dataSource.data = response.data;
    });
  }

  add() {
    const dialog = this._dialog.open(AddTransportCargoComponent, {
      width: '600px',
      height: '400px',
      autoFocus: false,
    })
    dialog.afterClosed()
      .subscribe(() => {
        this.getAllTransport()
      })
  }

  edit(row: any[]) {
    const dialogRef = this._dialog.open(AddTransportCargoComponent, {
      width: '600px',
      height: '400px',
      autoFocus: false,
      data: row,
    });
    dialogRef.afterClosed()
      .subscribe(() => {
        this.getAllTransport()
      })
  }

  delete(id: number) {
    this._transportCargoService.delete(id).subscribe(() => {
      this.getAllTransport()
    })
  }
}
