import { Routes } from '@angular/router';
import { HomePageComponent } from './components/home-page/home-page.component';
import { AboutPageComponent } from './components/about-page/about-page.component';

export const routes: Routes = [
    {path:'home', component: HomePageComponent},
    {path:'', redirectTo: '/home', pathMatch: 'full'},
    {path:'about', component: AboutPageComponent}
];
