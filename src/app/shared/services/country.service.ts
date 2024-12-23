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

   getCities(city, lang) {
      return this.http.get(env.apiUrl + '/references/cities?city=' + city + '&lang=' + lang);
   }

   public getJSONFromLocal() {
      return this.http.get("./assets/json/code.json")
   }

   /**
    * Returns the country code from a given phone number.
    * 
    * @param {string} phoneNumber - the phone number to check
    * @param {any} countries - an array of countries to search through
    * @returns {string|null} the country code if found, otherwise null
    */
   getCountryCode(phoneNumber: string, countries?: any): string | null {
      const numericPhoneNumber = phoneNumber.replace(/\D/g, '');
      for (const country of countries) {
         const dialCode = country.dial_country_code;
         // Check if the number starts with the country code
         if (numericPhoneNumber.startsWith(dialCode)) {
            return dialCode;
         }
         // Check if the number starts with a region code of the country
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
