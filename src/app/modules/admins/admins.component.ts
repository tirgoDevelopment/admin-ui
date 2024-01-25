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
import { AdminsService } from './services/admins.service';
import { AdminModel } from './models/admin.model';
import { AddAdminsComponent } from './components/add-admins/add-admins.component';

@Component({
  selector: 'app-admins',
  templateUrl: './admins.component.html',
  styleUrls: ['./admins.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [TranslocoModule, MatIconModule, MatButtonModule, NgFor, NgIf, MatTableModule, NgClass, CurrencyPipe, MatFormFieldModule, MatInputModule, MatTableModule, MatSortModule, MatPaginatorModule, MatMenuModule, MatSlideToggleModule],
})
export class AdminsComponent extends UnsubscribeAble implements OnInit {
  displayedColumns: string[] = ['full_name', 'login', 'role', 'register_date', 'last_enter', 'actions'];
  @ViewChild(MatPaginator) paginator: MatPaginator;

  dataSource = new MatTableDataSource<AdminModel>([]);
  constructor(private _admninService: AdminsService, protected _dialog?: MatDialog) {
    super();
  }

  ngOnInit() {
    this.getAllAdmin();
  }

  getAllAdmin() {
    this._admninService.getAll().subscribe((response) => {
      this.dataSource.data = response.data;
    });
  }

  add() {
    const dialog = this._dialog.open(AddAdminsComponent, {
      width: '800px',
      height: '500px',
    })
    dialog.afterClosed()
      .subscribe(() => {
        this.getAllAdmin()
      })
  }

  edit(row: any[]) {
    const dialogRef = this._dialog.open(AddAdminsComponent, {
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
    this._admninService.delete(id).subscribe(() => {
      this.getAllAdmin()
    })
  }
}

