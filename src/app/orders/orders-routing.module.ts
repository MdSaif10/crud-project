import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OrdersComponent } from './orders.component';
import { ListOrdersComponent } from './list-orders/list-orders.component';


const routes: Routes = [
  {
    path: '',
    component: OrdersComponent
  },
  {
    path: 'list-orders',
    component: ListOrdersComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OrdersRoutingModule { }