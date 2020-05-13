import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';
import tt from '@tomtom-international/web-sdk-maps';
import { MapService } from './map.service';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class MapComponent {
  @Input() set location(location: string) {
    this.createMap();
    this.getGeoLocation(location);
  };

  constructor(private mapService: MapService) { }

  private createMap() {
    const map = tt.map({
      key: this.mapService.API_KEY,
      container: 'app-map',
      style: 'tomtom://vector/1/basic-main'
    });
    map.addControl(new tt.NavigationControl());
  }

  private getGeoLocation(location: string) {
    this.mapService.requestGeoLocation(location).subscribe(ttRes =>{
      debugger
      console.log(ttRes);
    });
  }
}
