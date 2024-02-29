import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navigation',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './navigation.component.html',
  styleUrl: './navigation.component.scss',
})
export class NavigationComponent {
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
  ];
}
