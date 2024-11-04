import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; // Adicione ReactiveFormsModule
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { CartDetailsComponent } from './cart/cart-details/cart-details.component';
import { CartStatusComponent } from './cart/cart-status/cart-status.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { ProductDetailsComponent } from './products/product-details/product-details.component';
import { ProductListComponent } from './products/product-list/product-list.component';

@NgModule({
  declarations: [
    AppComponent,
    CartDetailsComponent,
    CartStatusComponent,
    CheckoutComponent,
    ProductDetailsComponent,
    ProductListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule, // Certifique-se de que ReactiveFormsModule está aqui
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
