import { Component } from '@angular/core';
import { AddtionalWeatherInterface } from '../../Models/addtional-weather-interface';

@Component({
  selector: 'app-addtional-weather',
  imports: [],
  templateUrl: './addtional-weather.html',
  styleUrl: './addtional-weather.css',
})
export class AddtionalWeather {

  addtionalWeatherData: AddtionalWeatherInterface[] = [
    { Label: 'Feels Like', Value: 69, Unit: '%' },
    { Label: 'Humidity', Value: 65, Unit: '%' },
    { Label: 'Wind Speed', Value: 15, Unit: 'mph' },  
    { Label: 'Precipitation', Value: 0, Unit: 'in' },
  ];

}
