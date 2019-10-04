import { Component, OnInit, Injectable } from '@angular/core';

//H = Here api
declare var H: any;

@Component({
  selector: 'app-here',
  templateUrl: './here.component.html',
  styleUrls: ['./here.component.scss']
})

@Injectable()
export class HereComponent implements OnInit {

  public zoom: number = 10;

  public appId: string = "CLQnccnmD03JEEiO57PO";

  public appCode: string = "liwyUE1ETkTTU4SyRTGeqw";

  constructor() {
   }

  ngOnInit() {
    var platform = new H.service.Platform({
      useCIT: true,
      "app_id": this.appId,
      "app_code": this.appCode,
      useHTTPS: true
    });
    var defaultLayers = platform.createDefaultLayers();
    var mapContainer = document.getElementById('map-container');
    var map = new H.Map(
      mapContainer,
      defaultLayers.normal.map,
      {
        zoom: this.zoom
      }
    );

    window.addEventListener('resize', function(){
      map.getViewPort().resize();
    });
    var behavior = new H.mapevents.Behavior(new H.mapevents.MapEvents(map));

    function updatePosition (event) {
      var HEREHQcoordinates = {
      lat: event.coords.latitude,
      lng: event.coords.longitude
      };
       
      var marker = new H.map.Marker(HEREHQcoordinates);
      map.addObject(marker);
      map.setCenter(HEREHQcoordinates);
      }
       
      navigator.geolocation.watchPosition(updatePosition);
  }

  public ngAfterViewInit() {
  }
}
