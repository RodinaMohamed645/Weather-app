import { Component } from '@angular/core';
import { MatIconModule, MatIconRegistry } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { DomSanitizer } from '@angular/platform-browser';
import { MatMenuModule } from "@angular/material/menu";
// import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-hourly-forcast',
  imports: [MatListModule, MatIconModule, MatMenuModule ],
  templateUrl: './hourly-forcast.html',
  styleUrl: './hourly-forcast.css',
})
export class HourlyForcast {
matMenu: any;
    constructor(

    private iconRegistry: MatIconRegistry,
    private sanitizer: DomSanitizer
  ){

 

    iconRegistry.addSvgIcon(
      'dropdownIcon',
      sanitizer.bypassSecurityTrustResourceUrl(
        'assets/images/icon-dropdown.svg'
      )
    );

  }

}
