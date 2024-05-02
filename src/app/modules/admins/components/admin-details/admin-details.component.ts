import { DatePipe, NgClass, NgFor, NgIf } from '@angular/common';
import { Component, Inject, OnInit, ViewEncapsulation } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MAT_DIALOG_DATA, MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { FuseDrawerComponent } from '@fuse/components/drawer';
import { TranslocoModule } from '@ngneat/transloco';
import { MatInputModule } from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ImagePriviewComponent } from 'app/shared/components/image-priview/image-priview.component';
import { ClientService } from 'app/modules/clients/services/client.service';
import { AdminBlockComponent } from '../admin-block/admin-block.component';
import { AdminModel } from '../../models/admin.model';
import { AdminsService } from '../../services/admins.service';

@Component({
  selector: 'app-admin-details',
  templateUrl: './admin-details.component.html',
  styleUrls: ['./admin-details.component.scss'],
  
  encapsulation: ViewEncapsulation.Emulated,
  standalone: true,
  imports: [MatIconModule, DatePipe, NgIf, MatDialogModule, MatInputModule, FormsModule, ReactiveFormsModule, TranslocoModule, FuseDrawerComponent, MatButtonModule, NgFor, NgClass, MatTooltipModule],
})
export class AdminDetailsComponent implements OnInit {
  admin: AdminModel;
  constructor(@Inject(MAT_DIALOG_DATA) public data: any, private _adminService: AdminsService, private _dialog: MatDialog) {
    this.getClient(data);
  }
  ngOnInit(): void {
  }

  getClient(id: any) {
    this._adminService.get(id).subscribe((response) => {
      this.admin = response.data;
    });
  }



  preview(fileName: string) {
    console.log(fileName);
    
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

}
