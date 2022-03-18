import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class CalculatorService {

  readonly baseUrl = environment.backendBaseUrl + '/calculator';

  constructor(private httpClient: HttpClient) {
  }

  getResult(expression): Observable<any> {
    return this.httpClient.post<any>(this.baseUrl, { operation: expression });
  }
}

