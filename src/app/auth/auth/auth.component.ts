import { Placeholder } from '@angular/compiler/src/i18n/i18n_ast';
import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { AuthResponseData, AuthService } from 'src/app/service/auth.service';
import { AlertComponent } from 'src/app/shared/alert/alert.component';
import { PlacehoderDirective } from 'src/app/shared/placehoder.directive';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {

  isLoginMode = true;

  isLoading = false;

  error: string | null = null;

  @ViewChild(PlacehoderDirective, {static: true}) alertHost!: PlacehoderDirective;
  private closeSub!: Subscription;

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
  }

  onSwithMode() {
    this.isLoginMode = !this.isLoginMode;
  }

  onSubmit(authForm: NgForm) {
    console.log(authForm.value);
    if (authForm.valid) {
      this.isLoading = true;
      const email = authForm.value.email;
      const password = authForm.value.password;
      let authObs!: Observable<AuthResponseData>
      if (this.isLoginMode) {
        authObs = this.authService.login(email, password);
      } else {
        authObs = this.authService.signUp(email, password);
      }
      authObs.subscribe({
        next: response => {
          console.log(response);
          this.isLoading = false;
          this.router.navigate(["/aquatic-food"])
        },
        error: errorMessage => {
          this.showErrorAlert(errorMessage)
          this.isLoading = false;
        }
      });
    }
    authForm.reset();
  }

  onHandAlert() {
    this.error = null;
  }

  private showErrorAlert(message: string) {
    const viewContainerRef = this.alertHost.viewContainerRef;
    viewContainerRef.clear();

    const componentRef = viewContainerRef.createComponent<AlertComponent>(AlertComponent);
    componentRef.instance.message = message;
    this.closeSub = componentRef.instance.close.subscribe(() =>{
      this.closeSub.unsubscribe();
      viewContainerRef.clear();
    })
  }

  ngOnDestroy(): void {
    if(this.closeSub) {
      this.closeSub.unsubscribe();
    }
  }

}
