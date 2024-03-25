import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoriesComponent } from './components/categories/categories.component';
import { HeaderComponent } from './components/header/header.component';
import { SearchBoxComponent } from './components/search-box/search-box.component';
import { SideBarComponent } from './components/side-bar/side-bar.component';
import { AdministrationComponent } from './pages/administration/administration.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { LayoutPageComponent } from './pages/layout-page/layout-page.component';
import { ListProductsComponent } from './pages/list-products/list-products.component';
import { OrderConfirmationComponent } from './pages/order-confirmation/order-confirmation.component';
import { PaymentComponent } from './pages/payment/payment.component';
import { ProductDetailsComponent } from './pages/product-details/product-details.component';
import { UserProfileComponent } from './pages/user-profile/user-profile.component';
import { ShoppingCartComponent } from './pages/shopping-cart/shopping-cart.component';
import { EcommerceRoutingModule } from './ecommerce-routing.module';



@NgModule({
  declarations: [
    CategoriesComponent,
    HeaderComponent,
    SearchBoxComponent,
    SideBarComponent,
    AdministrationComponent,
    HomePageComponent,
    LayoutPageComponent,
    ListProductsComponent,
    OrderConfirmationComponent,
    PaymentComponent,
    ProductDetailsComponent,
    ShoppingCartComponent,
    UserProfileComponent,

  ],
  imports: [
    CommonModule,
    EcommerceRoutingModule
  ]
})
export class EcommerceModule { }
