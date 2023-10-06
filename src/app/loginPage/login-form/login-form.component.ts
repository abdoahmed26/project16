import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent {
  constructor(private router:Router){
  }
  loginData : any = {username : '', password : ''};
  myarr : any[] = [];
  mydataArr: any;
  isvalid : boolean = false;
  isvalidEmail : boolean = false;
  isvalidPass : boolean = false;
  print(data : any) {
    if(window.localStorage.getItem('userRegis')){
      this.mydataArr = window.localStorage.getItem('userRegis');
      this.mydataArr = JSON.parse(this.mydataArr);
      let i;
      for(i=0; i<this.mydataArr.length; i++){
        if(this.mydataArr[i].email === data.email && this.mydataArr[i].password === data.password){
          this.isvalid = false;
          this.isvalidEmail = false;
          this.isvalidPass = false;
          if(data.email.includes("admin")){
            this.router.navigate(['/adminPage']);
          }
          else{
            this.router.navigate(['/productList']);
          }
          return;
        }
        if(this.mydataArr[i].email === data.email && this.mydataArr[i].password !== data.password){
          this.isvalidPass = true;
          this.isvalid = false;
          this.isvalidEmail = false;
          return;
        }
        if(this.mydataArr[i].email !== data.email && this.mydataArr[i].password === data.password){
          this.isvalidEmail = true;
          this.isvalidPass = false;
          this.isvalid = false;
          return;
        }
      }
      if(i===this.mydataArr.length){
        this.isvalid = true;
        this.isvalidEmail = false;
        this.isvalidPass = false;
      }
      // window.localStorage.clear();
      // this.myarr.push(data);
      // console.log(this.myarr);
      // window.localStorage.setItem("userLogin",JSON.stringify(this.myarr));
      // this.isvalid = false;
    }
    else{
      this.isvalid = true;
    }
  }
}
