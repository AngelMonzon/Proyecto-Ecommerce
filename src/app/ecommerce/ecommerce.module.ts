import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

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
import { PrimengModule } from '../primeng/primeng.module';
import { AdComponent } from './components/ad/ad.component';
import { OffersComponent } from './components/offers/offers.component';

//PrimeNg



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
    AdComponent,
    OffersComponent,


  ],
  imports: [
    CommonModule,
    EcommerceRoutingModule,
    FormsModule,
    PrimengModule,
  ]
})
export class EcommerceModule { }
