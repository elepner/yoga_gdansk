import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'yoga-room';
  sectionKeys = ['home', 'gallery']
  sections = {
    'home' : {
      name: 'Home'
    },
    'gallery' : {
      name: 'Gallery'
    }
  }
}
