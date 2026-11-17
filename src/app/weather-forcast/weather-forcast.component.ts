import { Component, OnInit } from '@angular/core';
import { WeatherDataService } from '../weather-data.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-weather-forcast',
  templateUrl: './weather-forcast.component.html',
  styleUrls: ['./weather-forcast.component.css'],
})
export class WeatherForcastComponent {
  // readonly FileIcon = FileIcon;
  title = 'weather_forcast';

  weatherData: any;
  errorMessage: string | undefined;
  dateTime: string | undefined;
  cityName: string | undefined;
  cityInput: string = '';
  lastUpdated: Date | undefined;
  isLoading: boolean = false;
  error: string | null = null;

  constructor(private weatherService: WeatherDataService) {}

  ngOnInit() {
    this.getWeatherData();
    this.fetchWeatherData();

    this.lastUpdated = new Date();
  }
  getWeatherData() {
    this.weatherService.getWeatherData().subscribe({
      next: (data) => {
        this.weatherData = data;
        let noOfCities = data.address.length;
        console.log('the no of cities found is ', noOfCities);
        console.log(this.weatherData);
        this.cityName = data.resolvedAddress;
        console.log('the city name is ', this.cityName);
      },
      error: (err) => {
        this.errorMessage = 'Failed to fetch weather data.';
      },
    });
  }

  fahrenheitToCelsius(fahrenheit: number): number {
    return Math.round(((fahrenheit - 32) * 5) / 9);
  }

  fetchWeatherData() {
    // this.isLoading = true;
    // this.error = null;
    if (!this.cityInput) return;

    this.weatherService.fetchWeatherData(this.cityInput).subscribe({
      next: (data) => {
        this.weatherData = data;
        console.log(this.weatherData);

        this.cityName = data.resolvedAddress;
        if (this.cityName !== this.cityInput) {
          console.log('the city name is ', this.cityName);
          alert('City not found, showing results for ' + this.cityName);
        }
        // this.isLoading = false;
      },
      error: (err) => {
        this.errorMessage = 'Failed to fetch weather data.';
      },
    });
  }

  //ui
  refreshWeather(): void {
    this.getWeatherData();
    this.cityInput = '';
  }

  getWeatherIconName(condition: string): string {
    const lowerCondition = condition.toLowerCase();

    if (lowerCondition.includes('sunny') || lowerCondition.includes('clear')) {
      return 'sun';
    } else if (lowerCondition.includes('rain')) {
      return 'cloud-rain';
    } else if (lowerCondition.includes('snow')) {
      return 'snowflake';
    } else if (
      lowerCondition.includes('storm') ||
      lowerCondition.includes('thunder')
    ) {
      return 'zap';
    } else {
      return 'cloud';
    }
  }

  getWeatherIconClass(condition: string): string {
    const lowerCondition = condition.toLowerCase();

    if (lowerCondition.includes('sunny') || lowerCondition.includes('clear')) {
      return 'icon-sunny';
    } else if (lowerCondition.includes('rain')) {
      return 'icon-rainy';
    } else if (lowerCondition.includes('snow')) {
      return 'icon-snowy';
    } else if (
      lowerCondition.includes('storm') ||
      lowerCondition.includes('thunder')
    ) {
      return 'icon-stormy';
    } else {
      return 'icon-cloudy';
    }
  }
  formatDate(dateString: string): string {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      weekday: 'short',
      month: 'short',
      day: 'numeric',
    });
  }
}
