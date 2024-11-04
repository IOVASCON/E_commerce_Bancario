import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {
  checkoutForm!: FormGroup;  // Usando o operador '!' para informar que será inicializado no ngOnInit

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.checkoutForm = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      address: this.formBuilder.group({
        street: ['', Validators.required],
        city: ['', Validators.required],
        postalCode: ['', Validators.required]
      }),
      paymentMethod: ['', Validators.required]
    });
  }

  onSubmit(): void {
    if (this.checkoutForm.valid) {
      // Lógica para processar o checkout
      console.log('Checkout realizado com sucesso!', this.checkoutForm.value);
    }
  }
}
