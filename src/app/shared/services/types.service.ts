import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { env } from "app/environmens/environment";

@Injectable({ providedIn: 'root' })

export class TypesService {

  constructor(private http: HttpClient) { }

  getTransportTypes() {
    return this.http.get(env.references + '/references/transport-types/all');
  }
  getTransportKinds() {
    return this.http.get(env.references + '/references/transport-kinds/all');
  }
  getCargoTypes() {
    return this.http.get(env.references + '/references/cargo-type-groups/all');
  }
  getCurrencies() {
    return this.http.get(env.references + '/references/currencies/all');
  }
  getPackages() {
    return this.http.get(env.references + '/references/cargo-packages/all');
  }
  getCargoLoadingMethod() {
    return this.http.get(env.references + '/references/cargo-loading-method/all');
  }

  getSubscription() {
    return this.http.get(env.references + '/references/subscriptions/all');
  }
}