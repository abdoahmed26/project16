import { Component } from '@angular/core';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-rejser-form',
  templateUrl: './rejser-form.component.html',
  styleUrls: ['./rejser-form.component.css']
})
export class RejserFormComponent {
  constructor(private router:Router){
  }
  regiData : any = {username : '', email : '' , password : '' , confPass : ''};
  myarr : any[] = [];
  myData : any;
  isvalid : boolean = false;
  print(data : any) {
    // window.localStorage.clear();
    if(data.password === data.confPass){
      if(window.localStorage.getItem("userRegis")){
        this.myData = (window.localStorage.getItem("userRegis"));
        this.myData = JSON.parse(this.myData);
        for(let i=0;i<this.myData.length;i++){
          this.myarr.push(this.myData[i]);
        }
      }
      this.myarr.push(data);
      window.localStorage.setItem("userRegis",JSON.stringify(this.myarr));
      this.isvalid = false;
      if(data.email.includes("admin")){
        this.router.navigate(['/adminPage']);
      }
      else{
        this.router.navigate(['/productList']);
      }
    }
    else{
      this.isvalid = true;
    }
  }
}
