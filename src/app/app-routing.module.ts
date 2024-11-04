import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartDetailsComponent } from './cart/cart-details/cart-details.component';
import { CartStatusComponent } from './cart/cart-status/cart-status.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { ProductDetailsComponent } from './products/product-details/product-details.component';
import { ProductListComponent } from './products/product-list/product-list.component';

const routes: Routes = [
  { path: '', redirectTo: '/products', pathMatch: 'full' },
  { path: 'products', component: ProductListComponent },
  { path: 'product/:id', component: ProductDetailsComponent },
  { path: 'cart', component: CartDetailsComponent },
  { path: 'checkout', component: CheckoutComponent },
  { path: '**', redirectTo: '/products' } // redireciona para a lista de produtos para rotas não encontradas
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
