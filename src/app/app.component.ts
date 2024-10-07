import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { LayoutComponent } from "./admin/layout/layout.component";
import { SidebarComponent } from "./admin/layout/components/sidebar/sidebar.component";
import { ProductsComponent } from './ui/components/products/products.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, LayoutComponent, SidebarComponent, SidebarComponent,RouterModule, ProductsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'ECommerceClient';
}
