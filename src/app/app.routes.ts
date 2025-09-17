import { Routes } from '@angular/router';
import { Home } from './components/home/home';
import { ProductsParent } from './components/products-parent/products-parent';
import { About } from './components/about/about';
import { NotFound } from './components/not-found/not-found';
import { ProductsDetails } from './components/products-details/products-details';
import { ProductsListService } from './components/products-list-service/products-list-service';

export const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },

  {
    path: 'home',
    component: Home,
    title: 'Home Page',
  },

  {
    path: 'products',
    component: ProductsListService,
    title: 'Products Page',
  },

  {
    path: 'products/:id',
    component: ProductsDetails,
  },

  {
    path: 'about',
    component: About,
    title: 'About Page',
  },

  { path: '**', component: NotFound },
];
