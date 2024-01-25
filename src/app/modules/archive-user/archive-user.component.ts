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
import { FuseDrawerComponent } from '@fuse/components/drawer';
import { MatSelectModule } from '@angular/material/select';
import { ArchiveUserService } from './services/archive-user.service';
import { ArchiveUserModel } from './models/archive-user.model';
import { DetailArchiveUserComponent } from './components/detail-archive-user/detail-archive-user.component';

@Component({
  selector: 'app-archive-user',
  templateUrl: './archive-user.component.html',
  styleUrls: ['./archive-user.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [TranslocoModule, MatIconModule, MatSelectModule, MatButtonModule, NgFor, NgIf, MatTableModule, NgClass, CurrencyPipe, MatFormFieldModule, MatInputModule, MatTableModule, MatSortModule, MatPaginatorModule, MatMenuModule, MatSlideToggleModule],

})
export class ArchiveUserComponent implements OnInit {
  cities: any[] = [];
  @ViewChild('settingsDrawer') settingsDrawer: FuseDrawerComponent;
  displayedColumns: string[] = ['iso','full_name', 'phone', 'type', 'moderation', 'register_date', 'last_enter', 'order', 'geolocation'];;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  dataSource = new MatTableDataSource<ArchiveUserModel>([]);
  constructor(
    private _archiveUserService: ArchiveUserService, protected _dialog?: MatDialog) {
  }

  detail() {
    this._dialog.open(DetailArchiveUserComponent, {
      width: '500px',
      height: '100vh',
      position: {
        top: '0',
        right: '0',
      },
      maxHeight:'100%'
    })
  }

  ngOnInit() {
    this.getAllAdmin();
  }

  getAllAdmin() {
    this._archiveUserService.getAll().subscribe((response) => {
      this.dataSource.data = response.data;
    });
  }
}


