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
import { MatSelectModule } from '@angular/material/select';
import { NoDataPlaceholderComponent } from 'app/shared/components/no-data-placeholder/no-data-placeholder.component';
import { DriverVerifyModel } from './models/driver-verify.model';
import { DriverVerifyService } from './services/driver-verify.service';
import { AddDriverVerifyComponent } from './components/add-driver-verify/add-driver-verify.component';

@Component({
  selector: 'app-driver-verify',
  templateUrl: './driver-verify.component.html',
  styleUrls: ['./driver-verify.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [TranslocoModule, MatIconModule, MatSelectModule, NoDataPlaceholderComponent, MatButtonModule, NgFor, NgIf, MatTableModule, NgClass, CurrencyPipe, MatFormFieldModule, MatInputModule, MatTableModule, MatSortModule, MatPaginatorModule, MatMenuModule, MatSlideToggleModule],

})
export class DriverVerifyComponent implements OnInit {
  cities: any[] = [];
  displayedColumns: string[] = ['id', 'full_name', 'action'];
  @ViewChild(MatPaginator) paginator: MatPaginator;

  dataSource = new MatTableDataSource<DriverVerifyModel>([]);
  constructor(
    private _diverVerifyService: DriverVerifyService, protected _dialog?: MatDialog) {
  }

  ngOnInit() {
    this.getAllDriverVerify();
  }

  getAllDriverVerify() {
    this._diverVerifyService.getAll().subscribe((response) => {
      this.dataSource.data = response?.data;
    });
  }

  detail() {
    this._dialog.open(AddDriverVerifyComponent, {
      width: '800px',
      height: '600px',
      autoFocus: false,
    })
  }

  delete(id: number) {
    this._diverVerifyService.delete(id).subscribe(() => {
      this.getAllDriverVerify()
    })
  }
}



