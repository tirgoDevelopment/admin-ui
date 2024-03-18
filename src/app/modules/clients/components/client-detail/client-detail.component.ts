import { DatePipe, NgClass, NgFor, NgIf } from '@angular/common';
import { Component, Inject, OnInit, ViewEncapsulation } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MAT_DIALOG_DATA, MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { FuseDrawerComponent } from '@fuse/components/drawer';
import { TranslocoModule } from '@ngneat/transloco';
import { ClientService } from '../../services/client.service';
import { ClientModel } from '../../models/client.model';
import { MatInputModule } from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BlockClientComponent } from '../block-client/block-client.component';
import { SendPushComponent } from '../send-push/send-push.component';
import { ImagePriviewComponent } from 'app/shared/components/image-priview/image-priview.component';

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
  constructor(@Inject(MAT_DIALOG_DATA) public data: any, private _clientService: ClientService, private _dialog: MatDialog) {
    this.getClient(data);
  }
  ngOnInit(): void {
  }

  getClient(id: any) {
    this._clientService.get(id).subscribe((response) => {
      this.client = response.data;
      console.log(this.client);
    });
  }

  block() {
    const dialog = this._dialog.open(BlockClientComponent, {
      minWidth: '20vw',
      maxWidth: '40vw',
      minHeight: '42vh',
      maxHeight: '85vh',
      data: this.client.id,
      autoFocus: false,
    })
    dialog.afterClosed()
      .subscribe(() => {
        this._dialog.closeAll()
      })
  }

  active(){
    this._clientService.active(Number(this.client.id)).subscribe(() => {
      this._dialog.closeAll()
    })
  }
  preview(fileName: string) {
    const dialog = this._dialog.open(ImagePriviewComponent, {
      minWidth: '60vw',
      maxWidth: '80vw',
      minHeight: '60vh',
      maxHeight: '80vh',
      data: { keyName: 'client', fileName: fileName },
      autoFocus: false,
    })
    dialog.afterClosed()
      .subscribe(() => {
      })
  }

  send() {
    const dialog = this._dialog.open(SendPushComponent, {
      minWidth: '20vw',
      maxWidth: '40vw',
      minHeight: '42vh',
      maxHeight: '85vh',
      data: this.client.id,
      autoFocus: false,
    })
    dialog.afterClosed()
      .subscribe(() => {
        this._dialog.closeAll()
      })
  }
}
