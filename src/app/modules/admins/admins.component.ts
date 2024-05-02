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
import { animate, state, style, transition, trigger } from '@angular/animations';
import { AdminDetailsComponent } from './components/admin-details/admin-details.component';

@Component({
  selector: 'app-admins',
  templateUrl: './admins.component.html',
  styleUrls: ['./admins.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [TranslocoModule, MatIconModule, NgIf, DatePipe, FormsModule, ReactiveFormsModule, NoDataPlaceholderComponent, MatSelectModule, ClientDetailComponent, MatButtonModule, NgFor, NgIf, MatTableModule, NgClass, CurrencyPipe, MatFormFieldModule, MatInputModule, MatTableModule, MatSortModule, MatPaginatorModule, MatMenuModule, MatSlideToggleModule],
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
export class AdminsComponent extends UnsubscribeAble implements OnInit {
  pageParams = {
    pageIndex: 1,
    pageSize: 10,
    totalPagesCount: 1,
    sortBy: 'id',
    sortType: 'desc'
  };

  displayedColumns: string[] = ['index', 'id', 'full_name', 'login', 'register_date', 'last_enter', 'actions'];
  @ViewChild(MatPaginator) paginator: MatPaginator;

  dataSource = new MatTableDataSource<AdminModel>([]);
  constructor(private _admninService: AdminsService, protected _dialog?: MatDialog) {
    super();
  }

  onPageChange(event: PageEvent): void {
    this.pageParams.pageSize = event.pageSize;
    this.pageParams.pageIndex = event.pageIndex + 1;
    this.getAllAdmin(this.pageParams);
  }

  ngOnInit() {
    this.getAllAdmin(this.pageParams);
  }

  getAllAdmin(params?) {
    this._admninService.getAll(params).subscribe((response: any) => {
      this.dataSource.data = response.data.content;
      this.pageParams.pageSize = response?.data?.pageSize;
      this.pageParams.pageIndex = response?.data?.pageIndex;
      this.pageParams.totalPagesCount = response?.data?.totalPagesCount;
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
        this.getAllAdmin(this.pageParams);
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
        this.getAllAdmin(this.pageParams);
      })
  }

  detail(id: number) {
    this._dialog.open(AdminDetailsComponent, {
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
      this.getAllAdmin(this.pageParams);
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
        this.getAllAdmin(this.pageParams);
      })
  }

  delete(id: number) {
    this._admninService.delete(id).subscribe(() => {
      this.getAllAdmin(this.pageParams);
    })
  }
}

