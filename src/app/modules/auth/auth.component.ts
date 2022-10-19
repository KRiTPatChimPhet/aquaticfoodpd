import { Placeholder } from '@angular/compiler/src/i18n/i18n_ast';
import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { AuthService } from 'src/app/core/service/auth.service';
import { AuthResponseData } from 'src/app/core/type/authResponseData.type';
import { AlertComponent } from 'src/app/shared/components/alert/alert.component';
import { PlacehoderDirective } from 'src/app/shared/directives/placehoder.directive';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {

  isLoginMode = true;

  isLoading = false;

  error: string | null = null;

  @ViewChild(PlacehoderDirective, { static: true }) alertHost!: PlacehoderDirective;

  private _closeSub!: Subscription;

  constructor(private _authService: AuthService,
              private _router: Router) { }

  ngOnInit(): void {
  }

  onSwithMode(): void {
    this.isLoginMode = !this.isLoginMode;
  }

  onSubmit(authForm: NgForm): void {
    if (authForm.valid) {
      this.isLoading = true;
      const email = authForm.value.email;
      const password = authForm.value.password;
      let authObs!: Observable<AuthResponseData>;

      if (this.isLoginMode) {
        authObs = this._authService.login(email, password);
      } else {
        authObs = this._authService.signUp(email, password);
      }

      authObs.subscribe({
        next: response => {
          console.log(response);
          this.isLoading = false;
          this._router.navigate(["/aquatic-food"]);
        },
        error: errorMessage => {
          this.showErrorAlert(errorMessage);
          this.isLoading = false;
        }
      });
    }
    authForm.reset();
  }

  onHandAlert(): void {
    this.error = null;
  }

  private showErrorAlert(message: string): void {
    const viewContainerRef = this.alertHost.viewContainerRef;
    viewContainerRef.clear();

    const componentRef = viewContainerRef.createComponent<AlertComponent>(AlertComponent);
    componentRef.instance.message = message;

    this._closeSub = componentRef.instance.close.subscribe(
      () => {
        this._closeSub.unsubscribe();
        viewContainerRef.clear();
      }
    );
  }

  ngOnDestroy(): void {
    if (this._closeSub) {
      this._closeSub.unsubscribe();
    }
  }

}
