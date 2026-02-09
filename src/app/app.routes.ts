import { Routes } from '@angular/router';
import { Home } from './features/home/home';
import { About } from './features/about/about';
import { Auth } from './features/auth/auth';
import { Cart } from './features/cart/cart';
import { NotFound } from './features/not-found/not-found';

export const routes: Routes = [
    { path: '', component: Home },
    { path: 'about', component: About },
    { path: 'auth', component: Auth },
    { path: 'cart', component: Cart },
    { path: '**', component: NotFound }
];
