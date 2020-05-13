import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';
import tt from '@tomtom-international/web-sdk-maps';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class MapComponent {
@Input() set location(location: string){
    this.createMap();
} ;
private readonly API_KEY = 'NhIjFC1GbTNcmr2U4QvYAV0XjL4IJhOR'
  constructor() { }

  private createMap(){
    const map = tt.map({
      key: this.API_KEY,
      container: 'app-map',
      style: 'tomtom://vector/1/basic-main'
    });
    map.addControl(new tt.NavigationControl());
  }

}
