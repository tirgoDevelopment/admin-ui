import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-image-priview',
  templateUrl: './image-priview.component.html',
  styleUrls: ['./image-priview.component.scss'],
  standalone:true
})
export class ImagePriviewComponent {
  image: string = '';
  file_url = ''
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    public dialog: MatDialog){
      this.image=this.data
      console.log(this.image)
    }
}
