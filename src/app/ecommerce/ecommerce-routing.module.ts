import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { ListProductsComponent } from './pages/list-products/list-products.component';
import { ProductDetailsComponent } from './pages/product-details/product-details.component';
import { ShoppingCartComponent } from './pages/shopping-cart/shopping-cart.component';
import { AdministrationComponent } from './pages/administration/administration.component';
import { OrderConfirmationComponent } from './pages/order-confirmation/order-confirmation.component';
import { PaymentComponent } from './pages/payment/payment.component';
import { UserProfileComponent } from './pages/user-profile/user-profile.component';
import { LayoutPageComponent } from './pages/layout-page/layout-page.component';

export const routes: Routes = [
  {
    path: '',
    component: LayoutPageComponent,
    children: [
      { path: 'home-page', component: HomePageComponent},
      { path: 'list-products', component: ListProductsComponent},
      { path: 'product-details', component: ProductDetailsComponent },
      { path: 'shopping-cart', component: ShoppingCartComponent},
      {path: 'administration', component: AdministrationComponent},
      {path: 'order-confirmation', component: OrderConfirmationComponent},
      {path: 'payment', component: PaymentComponent},
      {path: 'user-profile', component: UserProfileComponent},
      { path: '**', redirectTo: 'home-page'},
    ]
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EcommerceRoutingModule { }
