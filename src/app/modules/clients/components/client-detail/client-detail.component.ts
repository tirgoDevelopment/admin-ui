import { DatePipe, NgClass, NgFor, NgIf } from '@angular/common';
import { Component, Inject, OnInit, ViewEncapsulation } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MAT_DIALOG_DATA, MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { FuseDrawerComponent } from '@fuse/components/drawer';
import { TranslocoModule } from '@ngneat/transloco';
import { ClientService } from '../../services/client.service';
import { ClientModel } from '../../models/client.model';
import { MatInputModule } from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-client-detail',
  templateUrl: './client-detail.component.html',
  styleUrls: ['./client-detail.component.scss'],
  encapsulation: ViewEncapsulation.None,
  standalone: true,
  imports: [MatIconModule, DatePipe, NgIf, MatDialogModule, MatInputModule, FormsModule, ReactiveFormsModule, TranslocoModule, FuseDrawerComponent, MatButtonModule, NgFor, NgClass, MatTooltipModule],
})
export class ClientDetailComponent implements OnInit {
  client: ClientModel;
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
  }
}
