import { Component, OnInit, Injectable } from '@angular/core';

import { ModalService } from 'src/services/modal.service';
import { ScriptLoaderService } from 'src/services/script-loader.service';
import { HereService } from 'src/services/here.service';

import { Here } from "src/enums/here.enum";

/**Access to HereApi */
declare var H: any;

@Component({
  selector: 'app-here',
  templateUrl: './here.component.html',
  styleUrls: ['./here.component.scss']
})

@Injectable()
export class HereComponent implements OnInit {

  public zoom: number = 10;

  //Set App ID to empty string
  appId = '';

  //Set App Code to empty string
  appCode = '';

  public show: boolean = false;
  public trackButtonName: string = "Track";
  public notTrackingButtonName: string = "Not Tracking";

  public watchId: any;

  constructor(private modalService: ModalService,
    private scriptLoader: ScriptLoaderService,
    private hereService: HereService, ) { }

  /**
   * onClick to track user position
   */
  trackPositionBtn() {
    this.show = !this.show;

    if (this.show) {

      this.modalService.openModal({
        title: 'Confirm to see Here map',
        message: 'By confirming you allow this site to track your position',
        buttonText: 'Watch my Location'
      }).then(
        () => {
          this.trackButtonName = 'Tracking';
          this.trackUserPosition();
          this.changeButtonAttributes('trackBtn', 'notTrackingBtn');
        },
        () => {
          this.modalService.openModal({
            title: 'Don\'t worry your location is secure.',
            message: 'You can enable tracking at any time.',
            buttonText: 'Close'
          });
        }
      )
    }
  }

  /**
   * onClick to stop tracking user position
   */
  stopTrackingPositionBtn() {
    if (this.show) {

      this.modalService.openModal({
        title: 'Confirm to stop tracking',
        message: 'You can enable tracking at any time',
        buttonText: 'Don\'t watch my Location'
      }).then(
        () => {
          this.trackButtonName = 'Track';
          this.stopWatchingUserPosition();
          this.changeButtonAttributes('notTrackingBtn', 'trackBtn');
          this.clearContainer('map-container');
        },
        (error) => {
          this.modalService.openModal({
            image: 'assets/error.png',
            title: 'There was an error',
            message: `${error}`,
            buttonText: 'Close'
          });
        }
      )
    }
  }

  /**
   * Changes button onClick to set attribute and style
   * @param buttonToDisable Button to disable
   * @param buttonToEnable Button to enable
   */
  changeButtonAttributes(buttonToDisable: string, buttonToEnable: string) {
    document.getElementById(buttonToDisable).setAttribute('disabled', 'disabled');
    document.getElementById(buttonToDisable).style.opacity = '0.2';

    document.getElementById(buttonToEnable).removeAttribute('disabled');
    document.getElementById(buttonToEnable).style.opacity = '1';
  }

  /**
   * Gets user location and sends it to HereApi to display their position
   */
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

  /**
   * Stops watching user position on tracking button click
   */
  stopWatchingUserPosition() {
    navigator.geolocation.clearWatch(this.watchId);
  }

  /**
   * Clears an html element
   * @param elementId Element to clear
   */
  clearContainer(elementId: string) {
    document.getElementById(elementId).innerHTML = '';
  }

  ngOnInit() {
    this.loadScripts();

   /**
   * Gets Here app code needed to initialize HereApi
   */
    this.hereService.getSettingById(Here.appCodeId)
      .subscribe(code => this.appCode = code.stringValue,
        err => this.modalService.openModal({
          title: `${err.code}`,
          message: `${err.error.message}`,
          buttonText: 'Close'
        }));

   /**
   * Gets Here app id needed to initialize HereApi
   */
    this.hereService.getSettingById(Here.appId_ID)
      .subscribe(id => this.appId = id.stringValue,
        err => this.modalService.openModal({
          title: `${err.code}`,
          message: `${err.error.message}`,
          buttonText: 'Close'
        }));
  }

  /**
   * Load scripts when Here component is initialized instead of when website loads
   */
  private loadScripts() {
    this.scriptLoader.load('mapsjs-corejs', 'mapsjs-servicejs', 'mapsjs-servicejs', 'mapsjs-mapeventsjs').then(data => { }).catch(error => console.log(error));
  }

  public ngAfterViewInit() {
  }
}
