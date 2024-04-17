import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';

import { API_URL } from '../constants/apiUrl.constant';
import { Observable } from 'rxjs';
import { iApiResponse } from '../interfaces/apiResponse.interface';

@Injectable({
  providedIn: 'root',
})
export class LoadDataService {
  private http = inject(HttpClient);

  public getTemperatureData(): Observable<iApiResponse> {
    const url: string = `${API_URL}/bedrooms/sensor/`;

    const queryParams: HttpParams = new HttpParams()
      .set('location', 'Recámara 3')
      .set('sensorName', 'Temperatura y Humedad');

    return this.http.get<iApiResponse>(url, {
      params: queryParams
    });
  }
}
