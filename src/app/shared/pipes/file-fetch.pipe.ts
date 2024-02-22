import { Pipe, PipeTransform } from '@angular/core';
import { FileUrlService } from '../services/file-url.service';
import { Observable } from 'rxjs';

@Pipe({
  name: 'fileFetch'
})
export class FileFetchPipe implements PipeTransform {

  constructor(private fileService: FileUrlService) { }

  transform(fileName: string, keyName): Observable<string> {
    console.log(keyName, fileName);
    return this.fileService.getFileUrl(keyName, fileName)
  }

}
