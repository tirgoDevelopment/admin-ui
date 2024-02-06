import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({ providedIn: 'root' })

export class OrdersService {
  constructor(
    private http: HttpClient
  ) { }

  // getOrders() {
  //   return this.http.get(env.apiUrl+'/cargo/all');
  // }
  // getOrdersByMerchant(id) {
  //   return this.http.get(env.apiUrl + '/cargo/merchant?id=' + id);
  // }
  // getOrderById(id) {
  //   return this.http.get(env.apiUrl + '/cargo/id?id=' + id);
  // }
}