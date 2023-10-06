import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginFormComponent } from './loginPage/login-form/login-form.component';
import { RejserFormComponent } from './loginPage/rejser-form/rejser-form.component';
import { ProductListComponent } from './products/product-list/product-list.component';
import { ProductDtlComponent } from './products/product-dtl/product-dtl.component';
import { AdminComponent } from './adminpage/admin/admin.component';

const routes: Routes = [
  {path:"" , redirectTo : "login", pathMatch: "full"},
  {path: "login" , component : LoginFormComponent},
  {path: "register" , component : RejserFormComponent},
  {path: "productList" , component : ProductListComponent},
  {path:"adminPage", component : AdminComponent },
  {path:"productDetails/:id", component: ProductDtlComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
