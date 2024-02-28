import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../header/header.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { BackgroundCarouselComponent } from './components/background-carousel/background-carousel.component';

@Component({
  selector: 'app-amazon',
  standalone: true,
  imports: [
    HeaderComponent,
    CommonModule,
    NavigationComponent,
    BackgroundCarouselComponent,
  ],
  templateUrl: './amazon.component.html',
  styleUrl: './amazon.component.scss',
  providers: [],
})
export class AmazonComponent {
  subNavText: string[] = [
    'Medical care',
    'Prime video',
    'Gift Cards',
    'Customer Service',
    'Groceries',
    'Household, Health & Baby Care',
    'Livestreams',
    'Buy Again',
    'Amazon Home',
    'Amazon Business',
    'Shop Black Owned Businesses',
  ];

  bgImgSrcs: string[] = [
    'https://m.media-amazon.com/images/I/6103XTOauAL._SX3000_.jpg',
    'https://m.media-amazon.com/images/I/71zjoCL+cXL._SX3000_.jpg',
    'https://m.media-amazon.com/images/I/71CX5ePtA7L._SX3000_.jpg',
  ];

  images: string[] = [
    'https://m.media-amazon.com/images/I/51WnvXCQHcL._SY500__AC_SY200_.jpg',
    'https://m.media-amazon.com/images/I/41Gg2jRd6YL._SY500__AC_SY200_.jpg',
    'https://m.media-amazon.com/images/I/41RNhq8lcmL._SY500__AC_SY200_.jpg',
    'https://m.media-amazon.com/images/I/41JpXx-8NsL._SY500__AC_SY200_.jpg',
    'https://m.media-amazon.com/images/I/41i3FSMekgL._SY500__AC_SY200_.jpg',
    'https://m.media-amazon.com/images/I/31H6Mgu96TL._SY500__AC_SY200_.jpg',
    'https://m.media-amazon.com/images/I/51+e2x8GSNL._SY500__AC_SY200_.jpg',
    'https://m.media-amazon.com/images/I/41l7ZJdrNYL._SY500__AC_SY200_.jpg',
  ];

  firstSliderCount: number = 0;

  rightIsClicked: boolean = false;
  leftIsClicked: boolean = false;

  clickedLeftSliderBtn() {
    this.leftIsClicked = !this.leftIsClicked;
  }

  clickedRightSliderBtn() {
    this.rightIsClicked = !this.rightIsClicked;
  }

  checkCount() {
    this.firstSliderCount === 0
      ? this.firstSliderCount++
      : this.firstSliderCount--;
  }
}
