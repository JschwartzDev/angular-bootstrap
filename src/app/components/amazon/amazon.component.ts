import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../header/header.component';

@Component({
  selector: 'app-amazon',
  standalone: true,
  imports: [HeaderComponent, CommonModule],
  templateUrl: './amazon.component.html',
  styleUrl: './amazon.component.scss',
})
export class AmazonComponent {
  subNavText: string[] = [
    'All',
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

  rightIsClicked: boolean = false;
  leftIsClicked: boolean = false;

  clickedLeftSliderBtn() {
    this.leftIsClicked = !this.leftIsClicked;
  }

  clickedRightSliderBtn() {
    this.rightIsClicked = !this.rightIsClicked;
  }
}
