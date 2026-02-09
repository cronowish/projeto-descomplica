import { Routes } from '@angular/router';
import { Home } from './features/home/home';
import { About } from './features/about/about';
import { Auth } from './features/auth/auth';
import { Cart } from './features/cart/cart';
import { Courses } from './features/courses/courses';
import { Profile } from './features/profile/profile';
import { NotFound } from './features/not-found/not-found';
import { authGuard } from './core/guards/auth.guard';

export const routes: Routes = [
    { path: '', component: Home },
    { path: 'about', component: About },
    { path: 'auth', component: Auth },
    { path: 'cart', component: Cart, canActivate: [authGuard] },
    { path: 'courses', component: Courses, canActivate: [authGuard] },
    { path: 'profile', component: Profile, canActivate: [authGuard] },
    { path: '**', redirectTo: 'courses' }
];
