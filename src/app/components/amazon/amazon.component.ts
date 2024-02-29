import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../header/header.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { BackgroundCarouselComponent } from './components/background-carousel/background-carousel.component';
import { FirstSliderComponent } from './components/first-slider/first-slider.component';

@Component({
  selector: 'app-amazon',
  standalone: true,
  imports: [
    HeaderComponent,
    CommonModule,
    NavigationComponent,
    BackgroundCarouselComponent,
    FirstSliderComponent,
  ],
  templateUrl: './amazon.component.html',
  styleUrl: './amazon.component.scss',
  providers: [],
})
export class AmazonComponent {}
