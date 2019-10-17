import { Component, OnInit, Injectable } from '@angular/core';
import { ModalService } from 'src/services/modal.service';
import { ScriptLoaderService } from 'src/services/script-loader.service';
//import { url } from 'inspector';

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

  public show: boolean = false;
  public buttonName: string = "Track";

  public watchId: any;

  constructor(private modalService: ModalService, private scriptLoader: ScriptLoaderService) {
  }

  //Confirm button to get user position
  confirmButton() {
    this.show = !this.show;

    if (this.show) {
      // document.getElementById('btn').style.visibility = 'hidden';

      this.modalService.confirm({
        title: 'Confirm to see Here map',
        message: 'By confirming you allow this site to track your position',
        yesButtonText: 'Watch my Location',
        noButtonText: 'No tracking for me'
      }).then(
        () => {
          this.buttonName = "Tracking";
          this.trackUserPosition();
        },
        () => {
          this.modalService.confirm({
            title: 'Confirm to see Here map',
            message: 'You can enable tracking at any time',
            yesButtonText: 'Watch my Location',
            noButtonText: 'No tracking for me'
          }).then(
            () => {
              this.buttonName = "Not Tracking";
              this.stopWatchingUserPosition();
            }
          );
        }
      );
    }
  }

  trackUserPosition() {
    var platform = new H.service.Platform({
      useCIT: true,
      "app_id": this.appId,
      "app_code": this.appCode,
      useHTTPS: true
    });
    var defaultLayers = platform.createDefaultLayers();
    var mapContainer = document.getElementById('map-container')
    var map = new H.Map(
      mapContainer,
      defaultLayers.normal.map,
      {
        zoom: this.zoom
      }
    );

    window.addEventListener('resize', function () {
      map.getViewPort().resize();
    });
    var behavior = new H.mapevents.Behavior(new H.mapevents.MapEvents(map));

    function updatePosition(event) {
      var userCoordinates = {
        lat: event.coords.latitude,
        lng: event.coords.longitude
      };

      var marker = new H.map.Marker(userCoordinates);
      map.addObject(marker);
      map.setCenter(userCoordinates);
    }

    this.watchId = navigator.geolocation.watchPosition(updatePosition);
  }

  stopWatchingUserPosition() {
    navigator.geolocation.clearWatch(this.watchId);
  }

  ngOnInit() {
    this.loadScripts();
  }

  private loadScripts() {
    this.scriptLoader.load('mapsjs-corejs', 'mapsjs-servicejs', 'mapsjs-servicejs', 'mapsjs-mapeventsjs').then(data => { }).catch(error => console.log(error));
  }

  public ngAfterViewInit() {
  }
}
