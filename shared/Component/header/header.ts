import { Component } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { MatDividerModule } from '@angular/material/divider';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule, MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
// import { NgIf } from "../../../../../node_modules/@angular/common/types/_common_module-chunk";
import { CommonModule } from '@angular/common';
interface Food {
  value: string;
  viewValue: string;
}
interface Car {
  value: string;
  viewValue: string;
}
@Component({
  selector: 'app-header',
  imports: [MatInputModule, MatSelectModule, MatFormFieldModule, FormsModule, MatDividerModule, MatMenuModule, MatButtonModule, MatIconModule, CommonModule],
  templateUrl: './header.html',
  styleUrl: './header.css',
})


export class Header {

   selectedTempUnit:string='';
   selectedTempValue:boolean=false;

    selectedWindUnit:string='';
   selectedWindValue:boolean=false;

    selectedPreciptaionUnit:string='';
    selectedPreciptaionValue:boolean=false;
  constructor(

    private iconRegistry: MatIconRegistry,
    private sanitizer: DomSanitizer
  ){

  this.iconRegistry.addSvgIcon(
      'setting',
      this.sanitizer.bypassSecurityTrustResourceUrl(
        'assets/images/icon-units.svg'
      )
    );

    iconRegistry.addSvgIcon(
      'dropdownIcon',
      sanitizer.bypassSecurityTrustResourceUrl(
        'assets/images/icon-dropdown.svg'
      )
    );

  }
  onSelectedTempUnit(unit: string, event: Event) 
  {
     event.stopPropagation();
    
    // if(this.selectedValue==false)
    // {
    //     this.selectedValue=true;
    //     this.selectedUnit=unit;
    // }
    // else if(this.selectedValue==true && this.selectedUnit=='F')
    // {
    //    this.selectedValue=false;
    //     this.selectedUnit=unit;
    // }
    //  else if(this.selectedValue==true && this.selectedUnit=='C')
    // {
    //     this.selectedValue=false;
    //     this.selectedUnit=unit;
    // }
    if(this.selectedTempValue==true )
      {
        this.selectedTempValue=false;
    
      }
    else
      {
        this.selectedTempValue=true;
        this.selectedTempUnit=unit;
      }
  }











   onSelectedWindUnit(unit: string, event: Event) 
  {
     event.stopPropagation();
    
    // if(this.selectedValue==false)
    // {
    //     this.selectedValue=true;
    //     this.selectedUnit=unit;
    // }
    // else if(this.selectedValue==true && this.selectedUnit=='F')
    // {
    //    this.selectedValue=false;
    //     this.selectedUnit=unit;
    // }
    //  else if(this.selectedValue==true && this.selectedUnit=='C')
    // {
    //     this.selectedValue=false;
    //     this.selectedUnit=unit;
    // }
    if(this.selectedWindValue==true )
      {
        this.selectedWindValue=false;
    
      }
    else
      {
        this.selectedWindValue=true;
        this.selectedWindUnit=unit;
      }
  }
    onSelectedPreciptaionUnit(unit: string, event: Event)
  {
     event.stopPropagation(); 
    if(this.selectedPreciptaionValue==true )
      {
        this.selectedPreciptaionValue=false;  
      }
    else
      {
        this.selectedPreciptaionValue=true;
        this.selectedPreciptaionUnit=unit;
      }
  }
}


