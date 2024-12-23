import { NgIf, NgFor } from "@angular/common";
import { Component, OnInit, ViewEncapsulation } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MatAutocompleteModule } from "@angular/material/autocomplete";
import { MatButtonModule } from "@angular/material/button";
import { MatCheckboxModule } from "@angular/material/checkbox";
import { MatDatepickerModule } from "@angular/material/datepicker";
import { MatDialogModule, MatDialogRef } from "@angular/material/dialog";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatIconModule } from "@angular/material/icon";
import { MatInputModule } from "@angular/material/input";
import { MatProgressSpinnerModule } from "@angular/material/progress-spinner";
import { MatSelectModule } from "@angular/material/select";
import { RouterLink } from "@angular/router";
import { fuseAnimations } from "@fuse/animations";
import { FuseAlertComponent } from "@fuse/components/alert";
import { TranslocoModule } from "@ngneat/transloco";
import { NgxMatIntlTelInputComponent } from "ngx-mat-intl-tel-input";

@Component({
  selector: 'agreement',
  templateUrl: './agreement.component.html',
  encapsulation: ViewEncapsulation.None,
  animations: fuseAnimations,
  standalone: true,
  imports: [RouterLink, NgIf, NgFor,TranslocoModule, MatDatepickerModule, MatSelectModule, MatAutocompleteModule, MatDialogModule, FuseAlertComponent, FormsModule, ReactiveFormsModule, MatFormFieldModule, MatInputModule, MatButtonModule, MatIconModule, MatCheckboxModule, MatProgressSpinnerModule, NgxMatIntlTelInputComponent],
})
export class AgreementComponent implements OnInit {
  constructor(
    private dialogRef: MatDialogRef<AgreementComponent>
  ) { }
  ngOnInit(): void { }

  closeModal() {
    this.dialogRef.close('close');
  }
  accepted() {
    this.dialogRef.close('accept');
  }
}