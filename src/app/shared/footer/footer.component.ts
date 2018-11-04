import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  socialNetworks = [{
    'type': 'vk',
    'url': ''
  },{
    'type': 'facebook',
    'url': ''
  },{
    'type': 'instagram',
    'url': ''
  },]

  constructor() { }

  ngOnInit() {
  }

}
