import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  socialNetworks = [{
    'type': 'vk',
    'url': 'https://vk.com/yoga_gdansk'
  },{
    'type': 'facebook',
    'url': 'https://www.facebook.com/groups/yogagdansk/'
  },{
    'type': 'instagram',
    'url': 'https://www.instagram.com/yoga_gdansk/'
  },]

  constructor() { }

  ngOnInit() {
  }

}
