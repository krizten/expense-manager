import { Component, OnInit } from '@angular/core';

interface Review {
  avatar: string;
  rating: 1 | 2 | 3 | 4 | 5;
  author: string;
  title: string;
  comment: string;
}

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html'
})
export class LandingPageComponent implements OnInit {
  effect = 'scrollx';

  reviews: Review[] = [
    {
      avatar: 'http://layerdrops.com/opins/images/testi-1-2.jpg',
      rating: 4, author: 'Sara Johnson',
      title: 'Awesome App',
      comment: `Awesome app. Though we need more questions and like more of interview related questions
    will be a plus point. Looking forward for next update of the app` },
    {
      avatar: 'http://layerdrops.com/opins/images/testi-1-3.jpg',
      rating: 5, author: 'Steve Smith',
      title: 'Game Changer',
      comment: `The app's design is excellent! More questions are required to be added and maybe a
      notes section where you can revise. Over all well done.` },
    {
      avatar: 'http://layerdrops.com/opins/images/testi-1-4.jpg',
      rating: 4, author: 'Jeremy Walker',
      title: 'Just Perfect!',
      comment: `Very fast, smooth, user interactive, logically persistent across navigations, simple app, also compaired to peer apps.`
    },
    {
      avatar: 'http://layerdrops.com/opins/images/testi-1-1.jpg',
      rating: 5,
      author: 'Stacey Mark',
      title: 'Nice App You Got!',
      comment: `Its a nice app and bank for business transactions. Its a good one to go with it. Especially the POS machine.`
    }
  ];

  constructor() { }

  ngOnInit() { }

  getRatingStars(rating: number): string {
    let ratingStars: string;

    if (rating < 5) {
      ratingStars = '★'.repeat(rating) + '☆'.repeat(5 - rating);
      return ratingStars;
    }
    ratingStars = '★'.repeat(5);
    return ratingStars;
  }
}
