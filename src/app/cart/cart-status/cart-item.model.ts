import { Product } from '../../shared/models/product.model'; // Caminho corrigido

export class CartItem {
  id: number;
  name: string;
  imageUrl: string;
  unitPrice: number;
  quantity: number;
  productType: string;

  constructor(product: Product, productType: string) {
    this.id = product.id;
    this.name = product.name;
    this.imageUrl = product.imageUrl;
    this.unitPrice = product.unitPrice;
    this.quantity = 1;
    this.productType = productType;
  }
}
