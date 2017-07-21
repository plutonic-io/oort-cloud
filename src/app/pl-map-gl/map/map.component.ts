import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import mapboxgl from 'mapbox-gl';

@Component({
  selector: 'pl-map-gl',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapGlComponent implements OnInit {

  @ViewChild('node') node: ElementRef;
  error: String;
  constructor() { }
  ngOnInit() {
    try {
      mapboxgl.accessToken = 'pk.eyJ1Ijoiam1hbGN6eWsiLCJhIjoiY2lxeXBrbzl5MDF0ZGZ2bThhM2UyYjRnNyJ9.TKceYTp5hwWY-WuHjs_15w';
      const map = new mapboxgl.Map({
          container: this.node.nativeElement,
          style: 'mapbox://styles/mapbox/streets-v9'
      });
    } catch(error) {
      this.error = 'This application requires a Web GL enabled browser.';
    }
  }
}
