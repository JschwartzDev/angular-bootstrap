import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-background-carousel',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './background-carousel.component.html',
  styleUrl: './background-carousel.component.scss',
})
export class BackgroundCarouselComponent {
  bgImgSrcs: string[] = [
    'https://m.media-amazon.com/images/I/6103XTOauAL._SX3000_.jpg',
    'https://m.media-amazon.com/images/I/71zjoCL+cXL._SX3000_.jpg',
    'https://m.media-amazon.com/images/I/71CX5ePtA7L._SX3000_.jpg',
  ];

  rightIsClicked: boolean = false;
  leftIsClicked: boolean = false;

  clickedLeftSliderBtn() {
    this.leftIsClicked = !this.leftIsClicked;
  }

  clickedRightSliderBtn() {
    this.rightIsClicked = !this.rightIsClicked;
  }
}
