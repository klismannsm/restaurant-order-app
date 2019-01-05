import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { OrderService } from '../services/order.service';
import Order from '../models/Order';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss']
})
export class OrdersComponent implements OnInit {
  angForm: FormGroup;
  orders: Order[];
  order: Order;

  constructor(private formBuilder: FormBuilder, private orderService: OrderService) {
    this.createForm();
  }

  createForm() {
    this.angForm = this.formBuilder.group({
      order_data: ['', Validators.required],
    });
  }

  getOrders() {
    this.orderService.getOrders()
      .subscribe((data: Order[]) => {
        this.orders = data;
    });
  }

  addOrder(input) {
    this.orderService.addOrder(input)
      .subscribe((order: Order) => {
        this.order = order;
        this.getOrders();
      });
  }


  ngOnInit() {
    this.getOrders();
  }
}
