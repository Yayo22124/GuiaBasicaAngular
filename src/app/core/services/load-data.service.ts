import { Injectable, inject } from '@angular/core';

import { API_URL } from '../constants/apiUrl.constant';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { iApiResponse } from '../interfaces/apiResponse.interface';

@Injectable({
  providedIn: 'root'
})
export class LoadDataService {

  private http = inject(HttpClient);

  public getTemperatureData(): Observable<iApiResponse>  {
    const url: string = `${API_URL}/character/`

    return this.http.get<iApiResponse>(url);
  }
}
