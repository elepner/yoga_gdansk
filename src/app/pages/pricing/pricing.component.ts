import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pricing',
  templateUrl: './pricing.component.html',
  styleUrls: ['./pricing.component.scss']
})
export class PricingComponent {
  constructor() { }

  prices = [{
    type: 'Single visit',
    price: '30',
    hint: 'No obligations'
  }, {
    type: '4 classes',
    price: '100',
    hint: 'For beginners'
  },{
    type: '6 classes',
    price: '120',
    hint: 'Optimal choice'
  },{
    type: '8 classes',
    price: '150',
    hint: 'For advanced practioners'
  },{
    type: 'Open class',
    price: '210',
    hint: 'Visit our classes on any day at any time'
  },]
}
