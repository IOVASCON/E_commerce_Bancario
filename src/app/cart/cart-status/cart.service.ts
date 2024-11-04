import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { CartItem } from './cart-item.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cartItems: CartItem[] = [];
  private totalPriceSubject: BehaviorSubject<number> = new BehaviorSubject<number>(0);
  private totalQuantitySubject: BehaviorSubject<number> = new BehaviorSubject<number>(0);

  totalPrice$ = this.totalPriceSubject.asObservable();
  totalQuantity$ = this.totalQuantitySubject.asObservable();

  constructor() {}

  /**
   * Obtém os itens do carrinho.
   */
  getCartItems(): CartItem[] {
    return this.cartItems;
  }

  /**
   * Adiciona um item ao carrinho e atualiza o total.
   * @param item O item a ser adicionado ao carrinho.
   */
  addToCart(item: CartItem): void {
    const existingItem = this.cartItems.find(cartItem => cartItem.id === item.id);

    if (existingItem) {
      existingItem.quantity++;
    } else {
      this.cartItems.push({ ...item, quantity: 1 });
    }

    this.computeCartTotals();
  }

  /**
   * Computa os totais do carrinho (preço total e quantidade total).
   */
  private computeCartTotals(): void {
    const totalPrice = this.cartItems.reduce((sum, item) => sum + item.quantity * item.unitPrice, 0);
    const totalQuantity = this.cartItems.reduce((sum, item) => sum + item.quantity, 0);

    this.totalPriceSubject.next(totalPrice);
    this.totalQuantitySubject.next(totalQuantity);
  }

  /**
   * Decrementa a quantidade de um item no carrinho.
   * @param item O item a ser decrementado.
   */
  decrementQuantity(item: CartItem): void {
    const cartItem = this.cartItems.find(cartItem => cartItem.id === item.id);

    if (cartItem) {
      cartItem.quantity--;

      if (cartItem.quantity === 0) {
        this.removeFromCart(cartItem.id); // Remove o item se a quantidade for 0
      } else {
        this.computeCartTotals();
      }
    }
  }

  /**
   * Remove um item do carrinho com base no ID.
   * @param itemId O ID do item a ser removido.
   */
  removeFromCart(itemId: number): void {
    this.cartItems = this.cartItems.filter(item => item.id !== itemId);
    this.computeCartTotals();
  }
}
