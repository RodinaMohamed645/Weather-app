import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './shared/Component/header/header';
import { Search } from "./Features/Weather/Components/search/search";
import { HourlyForcast } from './Features/Weather/Components/hourly-forcast/hourly-forcast';
import { CurrentWeather } from './Features/Weather/Components/current-weather/current-weather';
import { AddtionalWeather } from './Features/Weather/Components/addtional-weather/addtional-weather';
import { DailyForcast } from './Features/Weather/Components/daily-forcast/daily-forcast';

@Component({
  selector: 'app-root',
  imports: [ Header, Search,HourlyForcast,CurrentWeather,AddtionalWeather,DailyForcast],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('weather-app');
}
