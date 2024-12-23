import { HttpClient, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { createHttpParams } from "app/core/functions/http-param";
import { env } from "app/environmens/environment";

@Injectable({ providedIn: 'root' })

export class OrdersService {
  constructor(private http: HttpClient) { }

  getOrders(params?) {
    return this.http.get(env.orderApiUrl + '/orders/staffs/all-orders', { params: createHttpParams(params) });
  }

  getOrderById(id) {
    let queryParams = new HttpParams();
    queryParams = queryParams.append("orderId", id);
    return this.http.get(env.orderApiUrl + '/orders/staffs/order-by-id', { params: queryParams });
  }

  createOrder(data) {
    return this.http.post(env.orderApiUrl + '/orders/staffs', data)
  }

  appendOrder(data) {
    return this.http.post(env.orderApiUrl + '/orders/staffs/append-order', data)
  }
  cancelOrder(id) {
    let queryParams = new HttpParams();
    queryParams = queryParams.append("id", id);
    return this.http.post(env.orderApiUrl + '/orders/staffs/cancel-order', {}, { params: queryParams })
  }

  updateOrder(data) {
    return this.http.put(env.orderApiUrl + '/orders/staffs/update-order', data)
  }
}