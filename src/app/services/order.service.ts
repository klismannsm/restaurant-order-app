import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  base_url = `${environment.api_protocol}://${environment.api_url}`;
  uri = `${this.base_url}/orders`;

  constructor(private http: HttpClient) { }

  getOrders() {
    return this.http.get(this.uri);
  }

  addOrder(input) {
    const postBody = {
      Input: input,
    };
    return this.http.post(this.uri, postBody);
  }
}
