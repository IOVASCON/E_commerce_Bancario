import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart-status/cart.service';
import { CartItem } from '../cart-status/cart-item.model';

@Component({
  selector: 'app-cart-details',
  templateUrl: './cart-details.component.html',
  styleUrls: ['./cart-details.component.css']
})
export class CartDetailsComponent implements OnInit {
  cartItems: CartItem[] = [];
  totalPrice: number = 0;
  totalQuantity: number = 0;

  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    this.loadCartDetails();
  }

  private loadCartDetails(): void {
    this.cartItems = this.cartService.getCartItems();
    this.cartService.totalPrice$.subscribe((price) => (this.totalPrice = price));
    this.cartService.totalQuantity$.subscribe((quantity) => (this.totalQuantity = quantity));
  }

  incrementQuantity(item: CartItem): void {
    this.cartService.addToCart(item);
  }

  decrementQuantity(item: CartItem): void {
    this.cartService.decrementQuantity(item);
  }

  removeItem(item: CartItem): void {
    this.cartService.removeFromCart(item.id);
  }
}
