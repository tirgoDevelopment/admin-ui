import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { env } from 'app/environmens/environment';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FileUrlService {

  constructor(private http: HttpClient) { }

  getFileUrl(keyName: string, fileName: string): Observable<any> {
    console.log(keyName, fileName);
    return this.http.get(env.references + `/references/files/${keyName}/${fileName}`, { responseType: 'blob' }) 
    .pipe(
      map((blob: Blob) => {
        console.log(blob);
        return URL.createObjectURL(blob);
      })
    );;
  }
}
