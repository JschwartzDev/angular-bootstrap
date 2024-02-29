import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-first-slider',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './first-slider.component.html',
  styleUrl: './first-slider.component.scss',
})
export class FirstSliderComponent {
  images: any = [
    'https://m.media-amazon.com/images/I/51WnvXCQHcL._SY500__AC_SY200_.jpg',
    'https://m.media-amazon.com/images/I/41Gg2jRd6YL._SY500__AC_SY200_.jpg',
    'https://m.media-amazon.com/images/I/41RNhq8lcmL._SY500__AC_SY200_.jpg',
    'https://m.media-amazon.com/images/I/41JpXx-8NsL._SY500__AC_SY200_.jpg',
    'https://m.media-amazon.com/images/I/41i3FSMekgL._SY500__AC_SY200_.jpg',
    'https://m.media-amazon.com/images/I/31H6Mgu96TL._SY500__AC_SY200_.jpg',
    'https://m.media-amazon.com/images/I/51+e2x8GSNL._SY500__AC_SY200_.jpg',
    'https://m.media-amazon.com/images/I/41l7ZJdrNYL._SY500__AC_SY200_.jpg',
  ];

  next() {
    let removedElement = this.images.shift();
    this.images.push(removedElement);
  }

  prev() {
    let removedElement = this.images.pop();
    this.images.unshift(removedElement);
  }
}
