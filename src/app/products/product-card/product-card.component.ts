import { Component , Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent {
  @Input() movie:any;
  constructor(private route:Router){
  }
  goto(){
    this.route.navigate([`/productDetails/${this.movie.id}`])
  }
}
