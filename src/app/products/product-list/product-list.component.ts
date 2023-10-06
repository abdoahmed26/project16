import { Component } from '@angular/core';
import { MydataService } from 'src/app/service/mydata.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  user:any = {name:'',email:'',phone:'',message:''};
  myMovies:any[] = [];
  constructor(private data:MydataService){
    this.myMovies = data.getAllPro();
    if(window.localStorage.getItem("addFilm")){
      // window.localStorage.removeItem("addFilm");
      let myadd = window.localStorage.getItem("addFilm");
      myadd = JSON.parse(myadd!);
      for(let i = 0; i < myadd!.length; i++){
        this.myMovies.push(myadd![i]);
      }
    }
    if(window.localStorage.getItem("deleteFilm")){
      // window.localStorage.removeItem("deleteFilm");
      let mydel = window.localStorage.getItem("deleteFilm");
      mydel = JSON.parse(mydel!);
      let myarr:any []=[];
      let arr:any []=[];
      for(let i=0; i<mydel!.length; i++){
        myarr.push(mydel![i]);
      }
      for(let i=0; i<myarr.length; i++){
        this.myMovies = this.myMovies.filter(ele=>{
          return +ele.id !== +myarr[i].id;
        })
      }
    }
    if(window.localStorage.getItem("updateFilm")){
      // window.localStorage.removeItem("updateFilm");
      let mydel = window.localStorage.getItem("updateFilm");
      mydel = JSON.parse(mydel!);
      let myarr:any []=[];
      for(let i=0; i<mydel!.length; i++){
        myarr.push(mydel![i]);
      }
      for(let i=0; i<myarr.length; i++){
        for(let j=0; j<this.myMovies.length;j++){
          if(+this.myMovies[j].id === +myarr[i].id){
            if(myarr[i].image.length>1){
              this.myMovies[j].image = myarr[i].image;
            }
            if(myarr[i].title.length>1){
              this.myMovies[j].title = myarr[i].title;
            }
            if(myarr[i].description.length>1){
              this.myMovies[j].description = myarr[i].description;
            }
            if(`${myarr[i].price}`.length>=1){
              this.myMovies[j].price = myarr[i].price;
            }
          }
        }
      }
    }
  }
  send(data:any){
    let inp = document.querySelectorAll("input");
    console.log(data);
    inp.forEach(ele=>{
      ele.value = '';
    })
    this.user.message = '';
  }
}
