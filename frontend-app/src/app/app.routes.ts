import { Routes } from '@angular/router';
import { LoginPage } from './login-page';
import { HomePage } from './home-page';

export const routes: Routes = [
  { path: 'login', component: LoginPage },
  { path: 'home', component: HomePage },
  { path: '', pathMatch: 'full', redirectTo: 'login' },
  { path: '**', redirectTo: 'login' },
];
