import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { env } from "app/environmens/environment";

@Injectable({ providedIn: 'root' })

export class TypesService {

  constructor(private http: HttpClient) { }

  getTransportTypes() {
    return this.http.get(env.adminUrl + '/transport-types');
  }
  getCargoTypes() {
    return this.http.get(env.adminUrl + '/cargo-type-groups');
  }

}