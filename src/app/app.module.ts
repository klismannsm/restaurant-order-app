import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { SlimLoadingBarModule } from 'ng2-slim-loading-bar';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OrdersComponent } from './orders/orders.component';
import { OrderService } from './services/order.service';

@NgModule({
  declarations: [
    AppComponent,
    OrdersComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SlimLoadingBarModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [OrderService],
  bootstrap: [AppComponent]
})
export class AppModule { }
