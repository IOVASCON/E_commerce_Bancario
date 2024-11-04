// product.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from '../models/product.model';
import { ProductCategory } from '../models/product-category.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private baseUrl = '/api/products'; // URL da API (utilizando proxy para localhost)
  private categoryUrl = '/api/product-categories'; // URL da API para categorias de produtos

  constructor(private httpClient: HttpClient) {}

  // Método para obter a lista de produtos por categoria
  getProductList(categoryId: number): Observable<Product[]> {
    const searchUrl = `${this.baseUrl}/search/findByCategoryId?id=${categoryId}`;
    return this.httpClient.get<Product[]>(searchUrl);
  }

  // Método para obter todos os produtos
  getAllProducts(): Observable<Product[]> {
    return this.httpClient.get<Product[]>(this.baseUrl);
  }

  // Método para obter todas as categorias de produtos
  getProductCategories(): Observable<ProductCategory[]> {
    return this.httpClient.get<ProductCategory[]>(this.categoryUrl);
  }

  // Método para buscar produtos por palavra-chave
  searchProducts(keyword: string): Observable<Product[]> {
    const searchUrl = `${this.baseUrl}/search/findByNameContaining?name=${keyword}`;
    return this.httpClient.get<Product[]>(searchUrl);
  }
}
