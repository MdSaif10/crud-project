import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListOrdersComponent } from './list-orders/list-orders.component';
import { OrdersRoutingModule } from './orders-routing.module';
import { OrdersComponent } from './orders.component';

@NgModule({
  declarations: [
    OrdersComponent,
    ListOrdersComponent
  ],
  imports: [
    CommonModule,
    OrdersRoutingModule
  ],
  // exports:[
  //   ListOrdersComponent
  // ]
})
export class OrdersModule { }
