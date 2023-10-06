import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginFormComponent } from './loginPage/login-form/login-form.component';
import { RejserFormComponent } from './loginPage/rejser-form/rejser-form.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule , ReactiveFormsModule } from '@angular/forms';
import { ProductListComponent } from './products/product-list/product-list.component';
import { ProductCardComponent } from './products/product-card/product-card.component';
import { AdminComponent } from './adminpage/admin/admin.component';
import { ProductDtlComponent } from './products/product-dtl/product-dtl.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginFormComponent,
    RejserFormComponent,
    ProductListComponent,
    ProductCardComponent,
    AdminComponent,
    ProductDtlComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
