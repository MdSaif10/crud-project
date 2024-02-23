import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProfileComponent } from './components/profile/profile.component';

const routes: Routes = [
  {
    path:'orders',
    loadChildren: ()=> import ('./orders/orders.module').then(m => m.OrdersModule)
  },
  {
    path: 'customers',
    loadChildren: ()=> import ('./customers/customers.module').then(m => m.CustomersModule)
  },
  {
    path: 'products',
    loadChildren: ()=> import ('./products/products.module').then(m=> m.ProductsModule)
  },
  {
    path: 'profile',
    component: ProfileComponent
  }
  
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
