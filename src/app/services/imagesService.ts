import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ImageService {
  private http = inject(HttpClient);
  constructor() {}
  getImages() {
    return this.http.get(`${environment.apiUrl}/images`);
  }
}
