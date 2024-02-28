import { Routes } from '@angular/router';
import { HomePageComponent } from './components/home-page/home-page.component';
import { AmazonComponent } from './components/amazon/amazon.component';

export const routes: Routes = [
  { path: 'home', component: HomePageComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'amazon', component: AmazonComponent },
];
