import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { env } from "app/environmens/environment";
import { Observable, map } from "rxjs";

@Injectable({ providedIn: 'root' })

export class CountryService {
  constructor(private http: HttpClient) { }

  findCity(query: any): Observable<any[]> {
    const sUrl = env.apiUrl + '/cargo/find-city';
    const body = JSON.stringify({
       query
    });
    return this.http.post<any>(sUrl, body)
       .pipe(map(res => {
          if (res.success) {
             return res.data.suggestions;
          } else {
             return [];
          }
       }));
 }

 getCities(city,lang) {
   return this.http.get(env.apiUrl + '/references/cities?city='+city+'&lang='+lang);
 }
}
