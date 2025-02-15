import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import type { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FileService {
  private readonly httpClient = inject(HttpClient);

  loadFile(filePath: string): Observable<string> {
    return this.httpClient.get(filePath, { responseType: 'text' });
  }
}
