import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  cardsContent = [{
    title: 'Joga for Every(Body)',
    text: 'Whether you are looking for a challenging workout, to improve your flexibility, or just reduce your stress level, we have the class for you.'
  }, {
    title: 'Non-Heated & Non-Competitive',
    text: 'We are constantly being told how welcoming our studio is. Our students benefit from the comfortable atmosphere where they can develop their yoga practice at their own pace.'
  }, {
    title: 'Any place in Gdansk',
    text: 'We have classes in several places of Gdansk. Prymorze, Zaspa & Aniolki'
  }]

  constructor() { }

  ngOnInit() {
  }

}
