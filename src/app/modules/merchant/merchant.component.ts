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
import { MerchantListComponent } from './components/merchant-list/merchant-list.component';
import { RouterLink } from '@angular/router';
import { MerchantService } from './services/merchant.service';
import { MerchantModel } from './models/merchanr.model';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BlockMerchantComponent } from './components/block-merchant/block-merchant.component';
@Component({
  selector: 'app-merchant',
  templateUrl: './merchant.component.html',
  styleUrls: ['./merchant.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [TranslocoModule, RouterLink, MatIconModule, FormsModule, ReactiveFormsModule, MatSelectModule, NoDataPlaceholderComponent, MatButtonModule, NgFor, NgIf, MatTableModule, NgClass, CurrencyPipe, MatFormFieldModule, MatInputModule, MatTableModule, MatSortModule, MatPaginatorModule, MatMenuModule, MatSlideToggleModule],
})
export class MerchantComponent implements OnInit {
  cities: any[] = [];
  transportKinds: any[] = [];
  transportTypes: any[] = [];
  filters = {
    orderId: '',
    statusId: '',
    loadingLocation: '',
    deliveryLocation: '',
    transportKindId: '',
    transportTypeId: '',
    createdBy: '',
    createdAt: '',
    sendDate: '',
    merchantOrder: ''
  };
  displayedColumns: string[] = ['id', 'full_name', 'entity', 'balance', 'last_enter', 'status', 'actions'];
  @ViewChild(MatPaginator) paginator: MatPaginator;
  dataSource = new MatTableDataSource<MerchantModel>([]);
  constructor(private _merchantService: MerchantService, protected _dialog?: MatDialog) {
  }

  clearFilters() {
    this.filters = {
      orderId: '',
      statusId: '',
      loadingLocation: '',
      deliveryLocation: '',
      transportKindId: '',
      transportTypeId: '',
      createdBy: '',
      createdAt: '',
      sendDate: '',
      merchantOrder: ''
    };
  }

  filterDrivers() {

  }


  ngOnInit() {
    this.getAllMerchants();
  }

  getAllMerchants() {
    this._merchantService.Verified(this.filters).subscribe((response) => {
      this.dataSource.data = response?.data;
    });
  }



  block(id: number) {
    const dialog = this._dialog.open(BlockMerchantComponent, {
      minWidth: '20vw',
      maxWidth: '40vw',
      minHeight: '42vh',
      maxHeight: '85vh',
      data: id,
      autoFocus: false,
    })
    dialog.afterClosed()
      .subscribe(() => {
        this.getAllMerchants()
      })
  }
  active(id: number) {
    this._merchantService.active(id).subscribe(() => {
      this.getAllMerchants()
    })
  }
  requests() {
    const dialog = this._dialog.open(MerchantListComponent, {
      minWidth: '40vw',
      maxWidth: '50vw',
      minHeight: '42vh',
      maxHeight: '80vh',
      autoFocus: false,
    })
    dialog.afterClosed()
      .subscribe(() => {
        this.getAllMerchants()
      })
  }

  delete(id: number) {
    this._merchantService.delete(id).subscribe((response) => {
      if (response.status) {
        this.getAllMerchants()
      }
    })
  }
}

