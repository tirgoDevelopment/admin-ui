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
import { ClientService } from './services/client.service';
import { ClientModel } from './models/client.model';
import { AddClientComponent } from './components/add-client/add-client.component';
import { FuseDrawerComponent } from '@fuse/components/drawer';
import { ClientDetailComponent } from './components/client-detail/client-detail.component';
import { MatSelectModule } from '@angular/material/select';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [TranslocoModule, MatIconModule, MatSelectModule, ClientDetailComponent, MatButtonModule, NgFor, NgIf, MatTableModule, NgClass, CurrencyPipe, MatFormFieldModule, MatInputModule, MatTableModule, MatSortModule, MatPaginatorModule, MatMenuModule, MatSlideToggleModule],
})
export class ClientsComponent implements OnInit {
  cities: any[] = [];
  @ViewChild('settingsDrawer') settingsDrawer: FuseDrawerComponent;
  displayedColumns: string[] = ['full_name', 'phone', 'city', 'register_date', 'last_enter', 'rating', 'actions'];
  @ViewChild(MatPaginator) paginator: MatPaginator;

  dataSource = new MatTableDataSource<ClientModel>([]);
  constructor(
    private _clientService: ClientService, protected _dialog?: MatDialog) {
  }


  ngOnInit() {
    this.getAllAdmin();
  }

  getAllAdmin() {
    this._clientService.getAll().subscribe((response) => {
      this.dataSource.data = response.data;
    });
  }


  detail() {
    this._dialog.open(ClientDetailComponent, {
      width: '500px',
      height: '100vh',
      position: {
        top: '0',
        right: '0',
      },
      maxHeight:'100%'
    })
  }


  add() {
    const dialog = this._dialog.open(AddClientComponent, {
      width: '800px',
      height: '500px',
    })
    dialog.afterClosed()
      .subscribe(() => {
        this.getAllAdmin()
      })
  }

  edit(row: any[]) {
    const dialogRef = this._dialog.open(AddClientComponent, {
      width: '800px',
      height: '500px',
      data: row,
    });
    dialogRef.afterClosed()
      .subscribe(() => {
        this.getAllAdmin()
      })
  }

  delete(id: number) {
    this._clientService.delete(id).subscribe(() => {
      this.getAllAdmin()
    })
  }
}

