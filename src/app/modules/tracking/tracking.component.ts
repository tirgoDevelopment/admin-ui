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
import { TrackingService } from './services/tracking.service';
import { TrackingDriverDetailComponent } from './components/tracking-driver-detail/tracking-driver-detail.component';
import { AngularYandexMapsModule } from 'angular8-yandex-maps';

@Component({
  selector: 'app-tracking',
  templateUrl: './tracking.component.html',
  styleUrls: ['./tracking.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [TranslocoModule, MatIconModule, MatSelectModule, AngularYandexMapsModule, NoDataPlaceholderComponent, MatButtonModule, NgFor, NgIf, MatTableModule, NgClass, CurrencyPipe, MatFormFieldModule, MatInputModule, MatTableModule, MatSortModule, MatPaginatorModule, MatMenuModule, MatSlideToggleModule],
})
export class TrackingComponent implements OnInit {
  cities: any[] = [];
  constructor(private _trackingService: TrackingService, protected _dialog?: MatDialog) {
  }

  ngOnInit() {
    // this.getAllTracking();
  }

  getAllTracking() {
    this._trackingService.getAll().subscribe((response) => {
    });
  }


  detail() {
    this._dialog.open(TrackingDriverDetailComponent, {
      width: '500px',
      height: '100vh',
      autoFocus: false,
      position: {
        top: '0',
        right: '0',
      },
      maxHeight:'100%'
    })
  }

}

