import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { AquaticFoodService } from './core/service/aquatic-food.service';
import { AuthModule } from './modules/auth/auth.module';
import { SharedModule } from './shared/shared.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PageNotFoundComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    SharedModule,
    AuthModule
  ],
  providers: [AquaticFoodService,
  //   {
  //   // provide: HTTP_INTERCEPTORS,
  //   // useClass: AuthInterceptor,
  //   // multi: true
  // }
],
  bootstrap: [AppComponent],
})
export class AppModule { }
