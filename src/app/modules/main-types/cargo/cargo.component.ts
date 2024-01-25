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
import { CargoService } from './services/cargo.service';
import { CargoModel } from './models/cargo.model';
import { AddCargoComponent } from './components/add-cargo/add-cargo.component';


@Component({
  selector: 'app-cargo',
  templateUrl: './cargo.component.html',
  styleUrls: ['./cargo.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [TranslocoModule, MatIconModule, MatButtonModule, NgFor, NgIf, MatTableModule, NgClass, CurrencyPipe, MatFormFieldModule, MatInputModule, MatTableModule, MatSortModule, MatPaginatorModule, MatMenuModule, MatSlideToggleModule],

})
export class CargoComponent extends UnsubscribeAble implements OnInit {
  displayedColumns: string[] = ['id', 'name', 'actions'];
  @ViewChild(MatPaginator) paginator: MatPaginator;

  dataSource = new MatTableDataSource<CargoModel>([]);
  constructor(private _cargoService: CargoService, protected _dialog?: MatDialog) {
    super();
  }

  ngOnInit() {
    this.getAllTruck();
  }

  getAllTruck() {
    this._cargoService.getAll().subscribe((response) => {
      this.dataSource.data = response.data;
    });
  }

  add() {
    const dialog = this._dialog.open(AddCargoComponent, {
      width: '500px',
      height: '310px',
      autoFocus: false,
    })
    dialog.afterClosed()
      .subscribe(() => {
        this.getAllTruck()
      })
  }

  edit(row: any[]) {
    const dialogRef = this._dialog.open(AddCargoComponent, {
      width: '500px',
      height: '310px',
      autoFocus: false,
      data: row,
    });
    dialogRef.afterClosed()
      .subscribe(() => {
        this.getAllTruck()
      })
  }

  delete(id: number) {
    this._cargoService.delete(id).subscribe(() => {
      this.getAllTruck()
    })
  }
}

