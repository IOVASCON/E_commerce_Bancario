import { Component, OnInit } from '@angular/core';
import { CartService } from './cart.service';

@Component({
  selector: 'app-cart-status',
  templateUrl: './cart-status.component.html',
  styleUrls: ['./cart-status.component.css']
})
export class CartStatusComponent implements OnInit {
  totalPrice: number = 0;
  totalQuantity: number = 0;

  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    // Assinatura dos Observables com o sufixo $
    this.cartService.totalPrice$.subscribe((price: number) => (this.totalPrice = price));
    this.cartService.totalQuantity$.subscribe((quantity: number) => (this.totalQuantity = quantity));
  }
}
