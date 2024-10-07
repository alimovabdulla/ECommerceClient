import { Routes } from '@angular/router';
import { LayoutComponent } from './admin/layout/layout.component';
import { DashboardComponent } from './admin/components/dashboard/dashboard.component';
import { CustomerComponent } from './admin/components/customers/customer.component';
import { OrdersComponent } from './admin/components/orders/orders.component';
import { BasketsComponent } from './ui/components/baskets/baskets.component';
import { HomeComponent } from './ui/components/home/home.component';
import { ProductsComponent } from './ui/components/products/products.component';

 export const routes: Routes = [
  {
    path: 'admin',
    component: LayoutComponent,
    children: [
      { path: '', component: DashboardComponent },
      { path: 'customer', component: CustomerComponent },
      { path: 'order', component: OrdersComponent },
      { path: 'product', component: ProductsComponent },
    ],
  },
  // UI Routes
  { path: '', component: HomeComponent },
  { path: 'products', component: ProductsComponent },
  { path: 'basket', component: BasketsComponent },
];