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
    price: '80',
    hint: 'For beginners'
  },{
    type: '8 classes',
    price: '160',
    hint: 'Optimal choice'
  },{
    type: '12 classes',
    price: '200',
    hint: 'For advanced practioners'
  },{
    type: 'Open class',
    price: '240',
    hint: 'Visit our classes on any day at any time'
  },]
}
