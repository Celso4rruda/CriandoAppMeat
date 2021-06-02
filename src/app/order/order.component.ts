import { Component, OnInit } from '@angular/core';
import { RadionOption } from 'app/shared/radio/radion-option.model';

@Component({
  selector: 'mt-order',
  templateUrl: './order.component.html'
})
export class OrderComponent implements OnInit {

  paymentOptions: RadionOption[] = [
    {label: 'Dinheiro', value: 'MON'},
    {label: 'Cartão de Débito', value: 'DEB'},
    {label: 'Cartão Refeição', value: 'REF'}

  ]

  constructor() { }

  ngOnInit() {
  }

}
