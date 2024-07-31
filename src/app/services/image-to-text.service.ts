import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, map } from 'rxjs';
import { Observable } from 'rxjs/internal/Observable';
import { of } from 'rxjs/internal/observable/of';
import { Itt } from '../models/itt';

@Injectable({
  providedIn: 'root'
})
export class ImageToTextService {
  private url = 'http://localhost:5000/itt';
  public text = new BehaviorSubject<String>("Hello. How can I help you?");

  constructor(private http: HttpClient) { }

  public itt() {
    this.text.next(this.text.getValue() + " again");
  }

  public processImage(file: File): Observable<any> {
      let formData:FormData = new FormData();
      formData.append("file", file, file.name);

      return this.http.post(this.url, formData).pipe(
        map(response => {
          const itt: Itt = response as Itt;
          this.text.next(itt.message);
        })
      );
  }
}
