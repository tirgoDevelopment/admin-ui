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
import { CargoGroupService } from './services/cargo-group.service';
import { CargoGroupModel } from './models/cargo-group.model';
import { AddCargoGroupComponent } from './components/add-cargo-group/add-cargo-group.component';

@Component({
  selector: 'app-cargo-group',
  templateUrl: './cargo-group.component.html',
  styleUrls: ['./cargo-group.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [TranslocoModule, MatIconModule, MatButtonModule, NgFor, NgIf, MatTableModule, NgClass, CurrencyPipe, MatFormFieldModule, MatInputModule, MatTableModule, MatSortModule, MatPaginatorModule, MatMenuModule, MatSlideToggleModule],

})
export class CargoGroupComponent extends UnsubscribeAble implements OnInit {
  displayedColumns: string[] = ['id', 'name', 'actions'];
  @ViewChild(MatPaginator) paginator: MatPaginator;

  dataSource = new MatTableDataSource<CargoGroupModel>([]);
  constructor(private _cargoGroupService: CargoGroupService, protected _dialog?: MatDialog) {
    super();
  }

  ngOnInit() {
    this.getAllTruck();
  }

  getAllTruck() {
    this._cargoGroupService.getAll().subscribe((response) => {
      this.dataSource.data = response.data;
    });
  }

  add() {
    const dialog = this._dialog.open(AddCargoGroupComponent, {
      width: '500px',
      height: '280px',
    })
    dialog.afterClosed()
      .subscribe(() => {
        this.getAllTruck()
      })
  }

  edit(row: any[]) {
    const dialogRef = this._dialog.open(AddCargoGroupComponent, {
      width: '500px',
      height: '280px',
      data: row,
    });
    dialogRef.afterClosed()
      .subscribe(() => {
        this.getAllTruck()
      })
  }

  delete(id: number) {
    this._cargoGroupService.delete(id).subscribe(() => {
      this.getAllTruck()
    })
  }
}

