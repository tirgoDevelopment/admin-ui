import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { env } from "app/environmens/environment";

@Injectable({ providedIn: 'root' })

export class OrdersService {
  constructor(
    private http: HttpClient
  ) { }

  getOrders() {
    return 
    // return this.http.get(env.orderApiUrl+'/orders/all');
  }
  getOrdersByMerchant(id) {
    return

    // return this.http.get(env.orderApiUrl + '/orders/merchant-orders?merchantId=' + id);
  }
  getOrderById(id) {
    return

    // return this.http.get(env.orderApiUrl + '/orders/id?id=' + id);
  }
  createOrder(data) {
    return

    // return this.http.post(env.orderApiUrl + '/orders',data)
  }
}