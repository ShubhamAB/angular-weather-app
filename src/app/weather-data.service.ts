import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class WeatherDataService {
  private apiBase =
    'https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/';

  private apiSuffix =
    '?unitGroup=us&key=2TDPGV469PYFAVR8KHB9H3FVP&contentType=json';
  private apiUrl =
    'https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/mumbai?unitGroup=us&key=2TDPGV469PYFAVR8KHB9H3FVP&contentType=json';
  constructor(private http: HttpClient) {}

  getWeatherData(): Observable<any> {
    return this.http.get(this.apiUrl);
  }

  //dynamic weather data using city name
  fetchWeatherData(city: string): Observable<any> {
    // return this.http.get(this.baseUrl);//--- IGNORE ---
    const url = `${this.apiBase}${encodeURIComponent(city)}${this.apiSuffix}`;
    return this.http.get(url);
  }
}
