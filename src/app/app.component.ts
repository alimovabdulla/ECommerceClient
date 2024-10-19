import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { LayoutComponent } from './admin/layout/layout.component';
import { SidebarComponent } from './admin/layout/components/sidebar/sidebar.component';
import { ProductsComponent } from './ui/components/products/products.component';
import { AlertifyOptions, AlertifyService } from './services/admin/alertify.service';
import { ToastrService } from 'ngx-toastr';
import { CommonModule } from '@angular/common';
import { NgxSpinnerModule } from 'ngx-spinner';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    LayoutComponent,
    SidebarComponent,
    RouterModule,
    ProductsComponent,
     CommonModule,
    NgxSpinnerModule
    
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  
  constructor(   ) {
     
  }

  title = 'ECommerceClient';
}
