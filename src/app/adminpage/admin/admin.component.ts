import { Component } from '@angular/core';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent {
  addFilm:any[]=[];
  updateFilm:any[]=[];
  deleteFilm:any[]=[];
  addFood:any[]=[];
  updateFood:any[]=[];
  deleteFood:any[]=[];
  adminData:any = {id:'',img:'',title:'',des:'',pric:''};
  constructor(){
    if(window.localStorage.getItem("addFilm")){
      // window.localStorage.removeItem("addFilm");
      let myadd = window.localStorage.getItem("addFilm");
      myadd = JSON.parse(myadd!);
      for(let i=0; i<myadd!.length; i++){
        this.addFilm.push(myadd![i]);
      }
    }
    if(window.localStorage.getItem("updateFilm")){
      // window.localStorage.removeItem("updateFilm");
      let myup = window.localStorage.getItem("updateFilm");
      myup = JSON.parse(myup!);
      for(let i=0; i<myup!.length; i++){
        this.updateFilm.push(myup![i]);
      }
    }
    if(window.localStorage.getItem("deleteFilm")){
      // window.localStorage.removeItem("deleteFilm");
      let mydel = window.localStorage.getItem("deleteFilm");
      mydel = JSON.parse(mydel!);
      for(let i=0; i<mydel!.length; i++){
        this.deleteFilm.push(mydel![i]);
      }
    }
    if(window.localStorage.getItem("addFood")){
      // window.localStorage.removeItem("addFood");
      let myaddFood = window.localStorage.getItem("addFood");
      myaddFood = JSON.parse(myaddFood!);
      for(let i=0; i<myaddFood!.length; i++){
        this.addFood.push(myaddFood![i]);
      }
    }
    if(window.localStorage.getItem("updateFood")){
      // window.localStorage.removeItem("updateFood");
      let myupFood = window.localStorage.getItem("updateFood");
      myupFood = JSON.parse(myupFood!);
      for(let i=0; i<myupFood!.length; i++){
        this.updateFood.push(myupFood![i]);
      }
    }
    if(window.localStorage.getItem("deleteFood")){
      // window.localStorage.removeItem("deleteFood");
      let mydelFood = window.localStorage.getItem("deleteFood");
      mydelFood = JSON.parse(mydelFood!);
      for(let i=0; i<mydelFood!.length; i++){
        this.deleteFood.push(mydelFood![i]);
      }
    }
  }
  show(oper:any){
    let myId = document.querySelector(".myId");
    let myTot = document.querySelectorAll(".myTot");
    let myUp = document.querySelector(".myUp");
    if(oper==="delete"){
      myId?.classList.remove("d-none");
      myId?.classList.add("d-block");
      myTot?.forEach(ele=>{
        ele.classList.add("d-none");
      })
      myUp?.classList.add("d-none");
    }
    else if(oper==="update"){
      myId?.classList.add("d-block");
      myId?.classList.remove("d-none");
      myUp?.classList.add("d-block");
      myUp?.classList.remove("d-none");
      myTot?.forEach(ele=>{
        ele.classList.add("d-none");
      })
    }
    else{
      myUp?.classList.add("d-none");
      myId?.classList.remove("d-none");
      myId?.classList.add("d-block");
      myTot?.forEach(ele=>{
        ele.classList.remove("d-none");
        ele.classList.add("d-block");
      })
    }
  }
  getData(depart:any,oper:any,data:any,sub:any,done:any):void {
    sub.classList.add("d-none");
    done.classList.remove("d-none");
    done.classList.add("d-inline-block");
    setTimeout(() => {
      sub.classList.add("d-inline-block");
      sub.classList.remove("d-none");
      done.classList.add("d-none");
    }, 1500);
    if(depart.value === "film"){
      if(oper.value === "add"){
        this.addFilm.push(data);
        window.localStorage.setItem("addFilm", JSON.stringify(this.addFilm));
      }
      else if(oper.value === "update"){
        this.updateFilm.push(data);
        window.localStorage.setItem("updateFilm", JSON.stringify(this.updateFilm));
      }
      else if(oper.value === "delete"){
        this.deleteFilm.push(data);
        window.localStorage.setItem('deleteFilm', JSON.stringify(this.deleteFilm));
      }
    }
    else if(depart.value === "food"){
      if(oper.value === "add"){
        this.addFood.push(data);
        window.localStorage.setItem("addFood", JSON.stringify(this.addFood));
      }
      else if(oper.value === "update"){
        this.updateFood.push(data);
        window.localStorage.setItem("updateFood", JSON.stringify(this.updateFood));
      }
      else if(oper.value === "delete"){
        this.deleteFood.push(data);
        window.localStorage.setItem('deleteFood', JSON.stringify(this.deleteFood));
      }
    }
    this.adminData = {id:'',img:'',title:'',des:'',pric:''};
  }
  upDate(update:any,img:any,title:any,des:any,pric:any){
    if(update.value === img.id){
      img.classList.add("d-block");
      img.classList.remove("d-none");
    }
    else if(update.value === title.id){
      title.classList.add("d-block");
      title.classList.remove("d-none");
    }
    else if(update.value === des.id){
      des.classList.add("d-block");
      des.classList.remove("d-none");
    }
    else if(update.value === pric.id){
      pric.classList.add("d-block");
      pric.classList.remove("d-none");
    }
    else{
      img.classList.add("d-none");
      title.classList.add("d-none");
      des.classList.add("d-none");
      pric.classList.add("d-none");
    }
  }
}
