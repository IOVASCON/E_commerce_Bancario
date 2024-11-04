import { Component, Input } from '@angular/core';
import { Product } from '../../shared/models/product.model';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent {
  @Input() product!: Product;  // Usando o operador '!' para indicar que será inicializado externamente
}
