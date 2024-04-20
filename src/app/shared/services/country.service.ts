import { HttpClient } from "@angular/common/http";
import { CSP_NONCE, Injectable } from "@angular/core";
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

   getCities(city, lang) {
      return this.http.get(env.apiUrl + '/references/cities?city=' + city + '&lang=' + lang);
   }

   public getJSONFromLocal() {
      return this.http.get("./assets/json/code.json")
   }

   getCountryCode(phoneNumber: string, countries?: any): string | null {
      const numericPhoneNumber = phoneNumber.replace(/\D/g, '');
      for (const country of countries) {
         const dialCode = country.dial_country_code;
         if (numericPhoneNumber.startsWith(dialCode)) {
            return dialCode;
         }
         const regionCodes = country.dial_region_codes || [];
         for (const regionCode of regionCodes) {
            const fullDialCode = dialCode + regionCode;
            if (numericPhoneNumber.startsWith(fullDialCode)) {
               return fullDialCode;
            }
         }
      }
      return null;
   }
}
