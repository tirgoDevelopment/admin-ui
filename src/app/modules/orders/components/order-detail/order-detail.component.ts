import { DatePipe, NgClass, NgFor, NgIf } from '@angular/common';
import { Component, Inject, OnInit, ViewEncapsulation } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MAT_DIALOG_DATA, MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatTooltipModule } from '@angular/material/tooltip';
import { FuseDrawerComponent } from '@fuse/components/drawer';
import { TranslocoModule } from '@ngneat/transloco';
import { AngularYandexMapsModule } from 'angular8-yandex-maps';
import { ClientModel } from 'app/modules/clients/models/client.model';
import { ClientService } from 'app/modules/clients/services/client.service';
import { DriverModel } from 'app/modules/drivers/models/driver.model';

@Component({
  selector: 'app-order-detail',
  templateUrl: './order-detail.component.html',
  styleUrls: ['./order-detail.component.scss'],
  encapsulation: ViewEncapsulation.None,
  standalone: true,
  imports: [MatIconModule, DatePipe, NgIf, MatFormFieldModule, MatInputModule, MatSelectModule, FormsModule, ReactiveFormsModule, AngularYandexMapsModule, MatDialogModule, TranslocoModule, FuseDrawerComponent, MatButtonModule, NgFor, NgClass, MatTooltipModule],

})
export class OrderDetailComponent implements OnInit {
  assign: boolean = false;
  client: ClientModel;
  driverid: number;
  price: string;
  drivers: DriverModel[];
  constructor(@Inject(MAT_DIALOG_DATA) public data: any, private _clientService: ClientService) {
    this.getClient(data);
  }
  ngOnInit(): void {
  }

  getClient(id: any) {
    this._clientService.get(id).subscribe((response) => {
      this.client = response.data
    });
  }
  submit() {
    this.assign = !this.assign;
  }

  saveNewDriver() {

  }
}
