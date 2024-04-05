import { NgIf } from '@angular/common';
import { Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { FormsModule, NgForm, ReactiveFormsModule, UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { Router, RouterLink } from '@angular/router';
import { fuseAnimations } from '@fuse/animations';
import { FuseAlertComponent } from '@fuse/components/alert';
import { FuseUtilsService } from '@fuse/services/utils';
import { AuthService } from 'app/core/auth/auth.service';
import { NgxPermissionsService } from 'ngx-permissions';
import { isObservable } from 'rxjs';
import { jwtDecode } from 'jwt-decode';
import { MatSelectModule } from '@angular/material/select';

@Component({
  selector: 'auth-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss'],
  encapsulation: ViewEncapsulation.None,
  animations: fuseAnimations,
  standalone: true,
  imports: [RouterLink, FuseAlertComponent, NgIf, FormsModule, ReactiveFormsModule, MatFormFieldModule, MatInputModule, MatButtonModule, MatIconModule,
     MatCheckboxModule, MatProgressSpinnerModule, MatSelectModule],
})
export class AuthSignInComponent implements OnInit {
  @ViewChild('signInNgForm') signInNgForm: NgForm;
  signInForm: UntypedFormGroup;
  userType: string;
  constructor(
    private _authService: AuthService,
    private _formBuilder: UntypedFormBuilder,
    private _router: Router,
    private _permissionService: NgxPermissionsService,
    private utilsService: FuseUtilsService
  ) { }
  ngOnInit() {
    this.signInForm = this._formBuilder.group({
      username: ['', [Validators.required]],
      password: ['', Validators.required],
      userType: ['staff'],
    });
  }

  signIn() {
    if (this.signInForm.invalid) {
      return;
    }
    this.signInForm.disable();
    this._authService.signIn(this.signInForm.value)
    .pipe((res) => {
      if (isObservable(res)) {
        this.signInForm.enable()
      }
      return res
    })
      .subscribe(
        (response: any) => {
          const user: any = jwtDecode(response.data.token);
          if (response.data.token && user.role?.permission['agentPage'] && !user.role?.permission['adminPage']) {
            this._router.navigateByUrl('agent-module');
          } else {
            this._router.navigateByUrl('dashboards');
          }
        },
      );
  }
}
