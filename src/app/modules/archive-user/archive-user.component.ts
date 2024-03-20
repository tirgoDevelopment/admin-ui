import { CurrencyPipe, DatePipe, NgClass, NgFor, NgIf, NgSwitch, NgSwitchCase } from '@angular/common';
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
import { FuseDrawerComponent } from '@fuse/components/drawer';
import { MatSelectModule } from '@angular/material/select';
import { ArchiveUserModel } from './models/archive-user.model';
import { DetailArchiveUserComponent } from './components/detail-archive-user/detail-archive-user.component';
import { ArchiveUserService } from './services/archive-user.service';
import { NoDataPlaceholderComponent } from 'app/shared/components/no-data-placeholder/no-data-placeholder.component';

@Component({
  selector: 'app-archive-user',
  templateUrl: './archive-user.component.html',
  styleUrls: ['./archive-user.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [TranslocoModule, MatIconModule, DatePipe, NoDataPlaceholderComponent, MatSelectModule, NgSwitchCase, NgSwitch, MatButtonModule, NgFor, NgIf, MatTableModule, NgClass, CurrencyPipe, MatFormFieldModule, MatInputModule, MatTableModule, MatSortModule, MatPaginatorModule, MatMenuModule, MatSlideToggleModule],
})
export class ArchiveUserComponent implements OnInit {
  cities: any[] = [];
  displayedColumns: string[] = ['index', 'id', 'full_name', 'phone', 'type', 'register_date', 'actions'];
  pageParams = {
    page: 0,
    limit: 10,
    totalPagesCount: 1,
    sortBy: 'id',
    sortType: 'desc'
  };
  @ViewChild(MatPaginator) paginator: MatPaginator;

  dataSource = new MatTableDataSource<ArchiveUserModel>([]);
  constructor(private _archiveUserService: ArchiveUserService, protected _dialog?: MatDialog) {
  }

  onPageChange(event: PageEvent): void {
    this.pageParams.limit = event.pageSize;

    this.pageParams.page = event.pageIndex;
    this.getAllArchiveUsers(this.pageParams);
  }

  detail(id: number) {
    this._dialog.open(DetailArchiveUserComponent, {
      width: '500px',
      height: '100vh',
      autoFocus: false,
      data: id,
      position: {
        top: '0',
        right: '0',
      },
      maxHeight: '100%'
    })
  }

  ngOnInit() {
    this.getAllArchiveUsers(this.pageParams);
  }

  getAllArchiveUsers(params) {
    this._archiveUserService.getAll(params).subscribe((response: any) => {
      this.dataSource.data = response?.data;
      this.pageParams.limit = response?.data?.per_page;
      this.pageParams.page = response?.data?.pageIndex;
      this.pageParams.totalPagesCount = response?.data?.totalPagesCount;
    });
  }
}


