import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MydataService } from 'src/app/service/mydata.service';

@Component({
  selector: 'app-product-dtl',
  templateUrl: './product-dtl.component.html',
  styleUrls: ['./product-dtl.component.css']
})
export class ProductDtlComponent {
  alldata:any;
  myPro:any;
  movie:any;
  Food:any[]=[];
  chair:any[]=[];
  arrSave:any[] = [];
  constructor(private active:ActivatedRoute,private data:MydataService){
    this.active.params.subscribe(ele=>{
      this.myPro=ele;
      // console.log(this.myPro);
    })
    this.alldata = data.getAllPro();
    for(let i=0;i<this.alldata.length;i++){
      if(+this.myPro.id==this.alldata[i].id){
        this.movie = this.alldata[i];
      }
    }
    this.Food = data.getAllFood();
    for(let x=1;x<=50;x++){
      this.chair.push(x);
    }
    if(window.localStorage.getItem("ticket")){
      // window.localStorage.removeItem("ticket");
      let myarr = window.localStorage.getItem("ticket");
      myarr = JSON.parse(myarr!);
      console.log(myarr);
      for(let i=0;i<myarr!.length;i++){
        this.arrSave.push(myarr![i]);
      }
      // console.log(this.arrSave);
    }
    if(window.localStorage.getItem("addFood")){
      // window.localStorage.removeItem("addFood");
      let food = window.localStorage.getItem("addFood");
      food = JSON.parse(food!);
      let arrFood:any[] = [];
      for(let i=0;i<food!.length;i++){
        arrFood.push(food![i]);
      }
      for(let x=0;x<arrFood.length;x++){
        this.Food.push(arrFood[x]);
      }
    }
    if(window.localStorage.getItem("deleteFood")){
      // window.localStorage.removeItem("deleteFood");
      let mydel = window.localStorage.getItem("deleteFood");
      mydel = JSON.parse(mydel!);
      let myarr:any []=[];
      for(let i=0; i<mydel!.length; i++){
        myarr.push(mydel![i]);
      }
      for(let i=0; i<myarr.length; i++){
        this.Food = this.Food.filter(ele=>{
          return +ele.id !== +myarr[i].id;
        })
      }
    }
    if(window.localStorage.getItem("updateFood")){
      // window.localStorage.removeItem("updateFood");
      let mydel = window.localStorage.getItem("updateFood");
      mydel = JSON.parse(mydel!);
      let myarr:any []=[];
      for(let i=0; i<mydel!.length; i++){
        myarr.push(mydel![i]);
      }
      for(let i=0; i<myarr.length; i++){
        for(let j=0; j<this.Food.length;j++){
          if(+this.Food[j].id === +myarr[i].id){
            if(myarr[i].image.length>1){
              this.Food[j].image = myarr[i].image;
            }
            if(myarr[i].title.length>1){
              this.Food[j].title = myarr[i].title;
            }
            if(myarr[i].description.length>1){
              this.Food[j].description = myarr[i].description;
            }
            if(`${myarr[i].price}`.length>=1){
              this.Food[j].price = myarr[i].price;
            }
          }
        }
      }
    }
  }
  getCart(){
    let btnCart = document.querySelector('.btnCart');
    let btnDone = document.querySelector('.btnDone');
    btnCart!.classList.add("d-none");
    btnDone!.classList.remove("d-none");
    btnDone!.classList.add("d-inline-block");
    let mycart = document.querySelector(".cart");
    mycart?.classList.add("active");
    let mytkit = document.querySelector(".mytkit");
    let div = document.createElement("div");
    div.style.marginBottom = "30px";
    let myImg = document.createElement("img");
    myImg.src = `https://image.tmdb.org/t/p/original${this.movie.image}`;
    myImg.style.width = "150px";
    myImg.style.height = "170px";
    myImg.style.marginBottom = "15px";
    div?.appendChild(myImg);
    let hSix= document.createElement("h6");
    hSix.className = "nameOfMovie";
    hSix.innerHTML = this.movie.title;
    hSix.style.color = "white";
    div?.appendChild(hSix);
    let pOne = document.createElement("p");
    pOne.className = "myPrice";
    pOne.innerHTML = "$";
    let span = document.createElement("span");
    span.className = "pric";
    span.innerHTML = this.movie.price;
    pOne.style.color = "rgb(248 3 3)";
    pOne.appendChild(span);
    div?.appendChild(pOne);
    let myInput = document.createElement("div");
    let inp = document.createElement("input");
    inp.type = "number";
    inp.value = "1";
    inp.className="input";
    inp.style.width = "50px";
    inp.style.outline = "none";
    inp.style.marginTop = "0px";
    inp.style.backgroundColor = "white";
    inp.style.color = "black";
    inp.oninput = function(){
      let total = document.querySelector(".total");
      let num = 0;
      let mypri = document.querySelectorAll(".pric");
      let myinp = document.querySelectorAll("input");
      for(let i=0;i<mypri.length;i++){
        num += parseFloat(mypri[i].innerHTML) * parseInt(myinp[i].value)||0;
      }
      total!.innerHTML = `${num.toFixed(2)}`;
    }
    myInput.appendChild(inp);
    div.appendChild(myInput);
    let btn = document.createElement("button");
    btn.innerHTML = "Delete";
    btn.className = "btn btn-danger px-2 py-1 mt-3";
    btn.onclick = function(){
      div.remove();
      let total = document.querySelector(".total");
      let mynum = parseFloat(total!.innerHTML);
      mynum -= parseFloat(span.innerHTML) * parseInt(inp.value);
      total!.innerHTML = `${mynum.toFixed(2)}`;
      btnCart!.classList.add("d-inline-block");
      btnCart!.classList.remove("d-none");
      btnDone!.classList.add("d-none");
    }
    div.appendChild(btn);
    mytkit?.appendChild(div);
    let total = document.querySelector(".total");
    let mynum = parseFloat(total!.innerHTML);
    mynum += parseFloat(this.movie.price);
    total!.innerHTML = `${mynum.toFixed(2)}`;
  }
  openCart(){
    let buying = document.querySelector(".buying");
    buying?.classList.add("acti");
  }
  closeCart(){
    let buying = document.querySelector(".buying");
    buying?.classList.remove("acti");
  }
  calc(num:any){
    let pric = document.querySelector(".pric");
    let total = document.querySelector(".total");
    let myTot = parseInt(num||0) * parseFloat(pric!.innerHTML);
    total!.innerHTML = `${myTot.toFixed(2)}`;
  }
  showDay(value:any){
    let day = document.querySelector(".day");
    day!.innerHTML = value;
  }
  showTime(value:any){
    let time = document.querySelector(".time");
    time!.innerHTML = value;
  }
  chooseChair(cha:any){
    cha.classList.add("bg-warning");
    let mychair = document.querySelector(".mychair");
    let spanCha = document.createElement("span");
    spanCha.className = "numOfChair";
    spanCha.innerHTML = cha.innerHTML;
    spanCha.style.color = "white";
    spanCha.classList.add("bg-warning");
    spanCha.style.padding = "6px 10px";
    spanCha.style.borderRadius = "5px";
    spanCha.style.marginRight = "5px";
    mychair!.appendChild(spanCha);
    let btn = document.querySelector(".dele");
    btn!.addEventListener("click",function(){
      mychair!.innerHTML = "";
      let btnCha = document.querySelectorAll(".btnCha");
      for(let i=0; i<btnCha.length; i++){
        btnCha[i].classList.remove("bg-warning");
      }
    })
  }
  getFood(food:any){
    let myFood = document.querySelector(".myFood");
    let nameFood = food.title;
    let priceFood = food.price;
    let btnCart = document.querySelector(`#btnFood${food.id}`);
    let btntom = document.querySelector(`#btntom${food.id}`);
    btnCart!.classList.add("d-none");
    btntom!.classList.remove("d-none");
    btntom!.classList.add("d-inline-block");
    let div = document.createElement("div");
    div.style.marginBottom = "16px";
    let hSix= document.createElement("h6");
    hSix.className = "nameOfFood";
    hSix.innerHTML = nameFood;
    hSix.style.color = "white";
    div?.appendChild(hSix);
    let pOne = document.createElement("p");
    pOne.className = "myPrice";
    pOne.innerHTML = "$";
    let span = document.createElement("span");
    span.className = "pric";
    span.innerHTML = priceFood;
    pOne.style.color = "rgb(248 3 3)";
    pOne.appendChild(span);
    div?.appendChild(pOne);
    let myInput = document.createElement("div");
    let inp = document.createElement("input");
    inp.type = "number";
    inp.value = "1";
    inp.className="input";
    inp.style.width = "50px";
    inp.style.outline = "none";
    inp.style.marginTop = "0px";
    inp.style.backgroundColor = "white";
    inp.style.color = "black";
    inp.oninput = function(){
      let total = document.querySelector(".total");
      let num = 0;
      let mypri = document.querySelectorAll(".pric");
      let myinp = document.querySelectorAll("input");
      for(let i=0;i<mypri.length;i++){
        num += parseFloat(mypri[i].innerHTML) * parseInt(myinp[i].value)||0;
      }
      total!.innerHTML = `${num.toFixed(2)}`;
    }
    myInput.appendChild(inp);
    div.appendChild(myInput);
    let btn = document.createElement("button");
    btn.innerHTML = "Delete";
    btn.className = "btn btn-danger px-2 py-1 mt-3";
    btn.onclick = function(){
      div.remove();
      let total = document.querySelector(".total");
      let mynum = parseFloat(total!.innerHTML);
      mynum -= parseFloat(span.innerHTML) * parseInt(inp.value);
      total!.innerHTML = `${mynum.toFixed(2)}`;
      btnCart!.classList.add("d-inline-block");
      btnCart!.classList.remove("d-none");
      btntom!.classList.add("d-none");
    }
    div.appendChild(btn);
    let total = document.querySelector(".total");
    let mynum = parseFloat(total!.innerHTML);
    mynum += parseFloat(priceFood);
    total!.innerHTML = `${mynum.toFixed(2)}`;
    myFood?.appendChild(div);
  }
  save(eve:any){
    let save = eve.target;
    let saveTom = eve.target.parentElement.lastElementChild;
    save!.classList.add("d-none");
    saveTom!.classList.remove("d-none");
    saveTom!.classList.add("d-inline-block");
    setTimeout(function(){
      save!.classList.remove("d-none");
      save!.classList.add("d-inline-block");
      saveTom!.classList.add("d-none");
    },2000)
    let day = document.querySelector(".day");
    let time = document.querySelector(".time");
    let total = document.querySelector(".total");
    let nameOfMovie = document.querySelector(".nameOfMovie");
    let numOfChair = document.querySelectorAll(".numOfChair");
    let arrChair:any = [];
    numOfChair.forEach(ele=>{
      arrChair.push(ele.innerHTML);
    })
    let nameOfFood = document.querySelectorAll(".nameOfFood");
    let arrFood:any = [];
    nameOfFood.forEach(ele=>{
      arrFood.push(ele.innerHTML);
    })
    let object = {
      id : this.movie.id,
      dayOfShow : day!.innerHTML,
      timeOfShow : time!.innerHTML,
      name: nameOfMovie!.innerHTML,
      price: parseFloat(total!.innerHTML).toFixed(2),
      numOfChair: arrChair,
      nameOfFood: arrFood
    }
    this.arrSave.push(object);
    console.log(this.arrSave);
    window.localStorage.setItem("ticket",JSON.stringify(this.arrSave));
  }
}
