import { AsyncPipe } from '@angular/common';
import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { PipeModule } from 'app/shared/pipes/pipe.module';
import { FileUrlService } from 'app/shared/services/file-url.service';

@Component({
  selector: 'app-image-priview',
  templateUrl: './image-priview.component.html',
  styleUrls: ['./image-priview.component.scss'],
  standalone: true,
  imports:[PipeModule, AsyncPipe, MatDialogModule, MatIconModule],
})
export class ImagePriviewComponent {
  image: string = '';
  keyName: string = '';
  fileName: string = '';
  file_url = ''
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private _fileUrlService: FileUrlService,
    public dialog: MatDialog) {
    this.keyName = this.data.keyName
    this.fileName = this.data.fileName
  }
}
