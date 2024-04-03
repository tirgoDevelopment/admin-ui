import { CurrencyPipe, DatePipe, NgClass, NgFor, NgIf } from '@angular/common';
import { ChangeDetectionStrategy, Component, ViewChild, ViewEncapsulation } from '@angular/core';
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
import { ClientService } from './services/client.service';
import { ClientModel } from './models/client.model';
import { AddClientComponent } from './components/add-client/add-client.component';
import { ClientDetailComponent } from './components/client-detail/client-detail.component';
import { MatSelectModule } from '@angular/material/select';
import { NoDataPlaceholderComponent } from 'app/shared/components/no-data-placeholder/no-data-placeholder.component';
import { SendPushComponent } from './components/send-push/send-push.component';
import { BlockClientComponent } from './components/block-client/block-client.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { NgxPermissionsService } from 'ngx-permissions';
import { FuseUtilsService } from '@fuse/services/utils';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [TranslocoModule, MatIconModule, DatePipe, MatDatepickerModule, FormsModule, ReactiveFormsModule, NoDataPlaceholderComponent, MatSelectModule, ClientDetailComponent, MatButtonModule, NgFor, NgIf, MatTableModule, NgClass, CurrencyPipe, MatFormFieldModule, MatInputModule, MatTableModule, MatSortModule, MatPaginatorModule, MatMenuModule, MatSlideToggleModule],
})
export class ClientsComponent {
  cities: any[] = [];
  filters = {
    clientId: '',
    firstName: '',
    phoneNumber: '',
    createdAtFrom: '',
    createdAtTo: '',
    lastLoginFrom: '',
    lastLoginTo: '',
  };
  pageParams = {
    page: 0,
    limit: 10,
    totalPagesCount: 1,
    sortBy: 'id',
    sortType: 'desc'
  };

  displayedColumns: string[] = ['index', 'id', 'full_name', 'phone', 'register_date', 'last_enter', 'status', 'actions'];
  @ViewChild(MatPaginator) paginator: MatPaginator;
  dataSource = new MatTableDataSource<ClientModel>([]);
  constructor(
    private _clientService: ClientService,
    private utilsService: FuseUtilsService,
    private _permissionService: NgxPermissionsService,
    protected _dialog?: MatDialog) {
    this.getAllClient(this.pageParams);
  }

  getAllClient(params?) {
    this._clientService.getAll(Object.assign(this.filters, params)).subscribe((response: any) => {
      this.dataSource.data = response?.data?.content;
      this.pageParams.limit = response?.data?.per_page;
      this.pageParams.page = response?.data?.pageIndex;
      this.pageParams.totalPagesCount = response?.data?.totalPagesCount;
    });
  }

  hasPermission(permission): boolean {
    return this.utilsService.hasPermission(permission)
}

  clearFilters() {
    this.filters = {
      clientId: '',
      firstName: '',
      phoneNumber: '',
      createdAtFrom: '',
      createdAtTo: '',
      lastLoginFrom: '',
      lastLoginTo: '',
    };
    this.getAllClient(this.pageParams)
  }

  filterClients() {

  }

  onPageChange(event: PageEvent): void {
    this.pageParams.limit = event.pageSize;

    this.pageParams.page = event.pageIndex;
    this.getAllClient(this.pageParams);
  }

  send() {
    this._dialog.open(SendPushComponent, {
      minWidth: '25vw',
      maxWidth: '35vw',
      minHeight: '35vh',
      maxHeight: '60vh',
      autoFocus: false,
    })
  }

  detail(id: number) {
    this._dialog.open(ClientDetailComponent, {
      width: '500px',
      height: '100vh',
      autoFocus: false,
      data: id,
      position: {
        top: '0',
        right: '0',
      },
      maxHeight: '100%'
    }).afterClosed().subscribe(() => {
      this.getAllClient(this.pageParams);
    })
  }

  block(id: number) {
    const dialog = this._dialog.open(BlockClientComponent, {
      minWidth: '20vw',
      maxWidth: '40vw',
      minHeight: '42vh',
      maxHeight: '85vh',
      data: id,
      autoFocus: false,
    })
    dialog.afterClosed()
      .subscribe(() => {
        this.getAllClient(this.pageParams);
      })
  }

  active(id: number) {
    this._clientService.active(id).subscribe(() => {
      this.getAllClient(this.pageParams);
    })
  }

  add() {
    const dialog = this._dialog.open(AddClientComponent, {
      minWidth: '40vw',
      maxWidth: '50vw',
      minHeight: '42vh',
      maxHeight: '85vh',
      autoFocus: false,
    })
    dialog.afterClosed()
      .subscribe(() => {
        this.getAllClient(this.pageParams);
      })
  }

  edit(row: any[]) {
    const dialogRef = this._dialog.open(AddClientComponent, {
      minWidth: '40vw',
      maxWidth: '50vw',
      minHeight: '42vh',
      maxHeight: '85vh',
      autoFocus: false,
      data: row,
    });
    dialogRef.afterClosed()
      .subscribe(() => {
        this.getAllClient(this.pageParams);
      })
  }

  delete(id: number) {
    this._clientService.delete(id).subscribe(() => {
      this.getAllClient(this.pageParams);
    })
  }
}

