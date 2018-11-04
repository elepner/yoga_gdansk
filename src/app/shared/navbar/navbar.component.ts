import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  sectionKeys = ['home', 'gallery']
  sections = {
    'home' : {
      name: 'Home'
    },
    'gallery' : {
      name: 'Gallery'
    }
  }

  constructor() { }

  ngOnInit() {
  }

}
