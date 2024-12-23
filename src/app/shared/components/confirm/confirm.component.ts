import { DialogModule } from '@angular/cdk/dialog';
import { ChangeDetectionStrategy, Component, Inject, ViewEncapsulation } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { TranslocoModule } from '@ngneat/transloco';

@Component({
  selector: 'app-confirm',
  templateUrl: './confirm.component.html',
  styleUrls: ['./confirm.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports:[DialogModule, FormsModule, MatDialogModule, TranslocoModule, MatButtonModule ]
})
export class ConfirmComponent {
   constructor(@Inject(MAT_DIALOG_DATA) public data: any, public dialogRef: MatDialogRef<ConfirmComponent>) { 
    console.log(data)
   }
   closeDialog(result: boolean): void {
    this.dialogRef.close(result);
  }
}
