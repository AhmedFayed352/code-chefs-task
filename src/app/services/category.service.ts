import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, shareReplay } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private _HttpClient:HttpClient) { }

  getCategories() : Observable<any> {
    return this._HttpClient.get("http://foodsystem.tryasp.net/Category").pipe(
      shareReplay()
    );
  }
}
