// product-list.component.ts
import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../shared/services/product.service';
import { Product } from '../../shared/models/product.model';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products: Product[] = [];
  selectedCategoryId: number = 0; // Categoria selecionada para filtragem

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    // Carregar produtos ao iniciar o componente
    this.getProducts();
  }

  // Método para obter a lista de produtos com base em uma categoria específica
  getProducts(): void {
    if (this.selectedCategoryId) {
      this.productService.getProductList(this.selectedCategoryId).subscribe(
        (data: Product[]) => this.products = data,
        (error: any) => console.error('Erro ao buscar produtos', error)
      );
    } else {
      // Exibir todos os produtos caso não haja uma categoria selecionada
      this.productService.getAllProducts().subscribe(
        (data: Product[]) => this.products = data,
        (error: any) => console.error('Erro ao buscar todos os produtos', error)
      );
    }
  }

  // Método para adicionar um produto ao carrinho
  addToCart(product: Product): void {
    console.log(`${product.name} adicionado ao carrinho`);
  }
}
