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
import { RoleService } from './services/role.service';
import { RoleModel } from './models/role.model';
import { MatMenuModule } from '@angular/material/menu';
import { MatDialog } from '@angular/material/dialog';
import { AddRoleComponent } from './components/add-role/add-role.component';
import { UnsubscribeAble } from 'app/shared/components/unsubscribe-able.component';
import { NoDataPlaceholderComponent } from 'app/shared/components/no-data-placeholder/no-data-placeholder.component';
@Component({
  selector: 'app-role',
  templateUrl: './role.component.html',
  styleUrls: ['./role.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [TranslocoModule, MatIconModule, MatButtonModule, NoDataPlaceholderComponent, NgFor, NgIf, MatTableModule, NgClass, CurrencyPipe, MatFormFieldModule, MatInputModule, MatTableModule, MatSortModule, MatPaginatorModule, MatMenuModule, MatSlideToggleModule],
})
export class RoleComponent extends UnsubscribeAble implements OnInit {
   // dashboardPage: this.f?.dashboardPage.value,
  // archivedPage: this.f?.archivedPage.value,
  // orderPage: this.f?.orderPage.value,
  // referencesPage: this.f?.referencesPage.value,
  // activePage: this.f?.activePage.value,
  // adminAgentPage: this.f?.adminAgentPage.value,
  displayedColumns: string[] = [
    'role', 'add_driver', 'add_client', 'add_order', 'cancel_order', 
    'send_push', 'chat', 'tracking', 'registr_merchant', 'driver_merchant_page', 
    'client_merchant_page','driver_verification','agent_page',
    'dashboard_page','archived_page','order_page','reference_page','active_page','admin_agent_page',
    'actions'
  ];
  @ViewChild(MatPaginator) paginator: MatPaginator;
  dataSource = new MatTableDataSource<RoleModel>([]);
  constructor(private _roleService: RoleService, protected _dialog?: MatDialog) {
    super();
  }

  ngOnInit() {
    this.getAllRoles();
  }

  getAllRoles() {
    this._roleService.getAll().subscribe((response) => {
      this.dataSource.data = response.data;
    });
  }

  add() {
    const dialog = this._dialog.open(AddRoleComponent, {
      minWidth: '40vw',
      maxWidth: '50vw',
      minHeight: '35vh',
      maxHeight: '80vh',
      autoFocus: false,
    })
    dialog.afterClosed()
      .subscribe(() => {
        this.getAllRoles()
      })
  }

  edit(row: any[]) {
    const dialogRef = this._dialog.open(AddRoleComponent, {
      minWidth: '40vw',
      maxWidth: '50vw',
      minHeight: '35vh',
      maxHeight: '80vh',
      autoFocus: false,
      data: row,
    });
    dialogRef.afterClosed()
      .subscribe(() => {
        this.getAllRoles()
      })
  }

  delete(id: number) {
    this._roleService.delete(id).subscribe(() => {
      this.getAllRoles()
    })
  }
}
