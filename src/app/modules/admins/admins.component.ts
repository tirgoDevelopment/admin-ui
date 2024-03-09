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
import { AdminsService } from './services/admins.service';
import { AdminModel } from './models/admin.model';
import { AddAdminsComponent } from './components/add-admins/add-admins.component';
import { NoDataPlaceholderComponent } from 'app/shared/components/no-data-placeholder/no-data-placeholder.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { ClientDetailComponent } from '../clients/components/client-detail/client-detail.component';
import { AdminBlockComponent } from './components/admin-block/admin-block.component';

@Component({
  selector: 'app-admins',
  templateUrl: './admins.component.html',
  styleUrls: ['./admins.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [TranslocoModule, MatIconModule, NgIf, DatePipe, FormsModule, ReactiveFormsModule, NoDataPlaceholderComponent, MatSelectModule, ClientDetailComponent, MatButtonModule, NgFor, NgIf, MatTableModule, NgClass, CurrencyPipe, MatFormFieldModule, MatInputModule, MatTableModule, MatSortModule, MatPaginatorModule, MatMenuModule, MatSlideToggleModule]

})
export class AdminsComponent extends UnsubscribeAble implements OnInit {
  pageParams = {
    page: 1,
    limit: 10,
    perPage: 10,
    sortBy: 'id',
    sortType: 'asc'
  };
  
  displayedColumns: string[] = ['full_name', 'login', 'register_date', 'last_enter', 'actions'];
  @ViewChild(MatPaginator) paginator: MatPaginator;

  dataSource = new MatTableDataSource<AdminModel>([]);
  constructor(private _admninService: AdminsService, protected _dialog?: MatDialog) {
    super();
  }

  onPageChange(event: PageEvent): void {
    this.pageParams.limit = event.pageSize;
    this.pageParams.perPage = event.pageSize;
    this.pageParams.page = event.pageIndex;
    this.getAllAdmin(this.pageParams);
  }

  ngOnInit() {
    this.getAllAdmin();
  }

  getAllAdmin(patams?) {
    this._admninService.getAll(patams).subscribe((response) => {
      this.dataSource.data = response.data;
    });
  }

  add() {
    const dialog = this._dialog.open(AddAdminsComponent, {
      minWidth: '40vw',
      maxWidth: '50vw',
      minHeight: '42vh',
      maxHeight: '80vh',
      autoFocus: false,
    })
    dialog.afterClosed()
      .subscribe(() => {
        this.getAllAdmin()
      })
  }


  block(id: number) {
    const dialog = this._dialog.open(AdminBlockComponent, {
      minWidth: '20vw',
      maxWidth: '40vw',
      minHeight: '42vh',
      maxHeight: '85vh',
      data: id,
      autoFocus: false,
    })
    dialog.afterClosed()
      .subscribe(() => {
        this.getAllAdmin()
      })
  }

  edit(row: any[]) {
    const dialogRef = this._dialog.open(AddAdminsComponent, {
      minWidth: '40vw',
      maxWidth: '50vw',
      minHeight: '42vh',
      maxHeight: '80vh',
      autoFocus: false,
      data: row,
    });
    dialogRef.afterClosed()
      .subscribe(() => {
        this.getAllAdmin()
      })
  }

  delete(id: number) {
    this._admninService.delete(id).subscribe(() => {
      this.getAllAdmin()
    })
  }
}

