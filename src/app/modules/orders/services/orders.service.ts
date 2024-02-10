import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { env } from "app/environmens/environment";

@Injectable({ providedIn: 'root' })

export class OrdersService {
  constructor(
    private http: HttpClient
  ) { }

  getOrders() {
    return this.http.get(env.orderApiUrl+'/orders/all');
  }
  getOrdersByMerchant(id) {
    return this.http.get(env.orderApiUrl + '/orders/clients/all-orders?userId=' + id);
  }
  getOrderById(id) {
    return this.http.get(env.orderApiUrl + '/orders/id?id=' + id);
  }
  createOrder(data) {
    return this.http.post(env.orderApiUrl + '/orders',data)
  }
}