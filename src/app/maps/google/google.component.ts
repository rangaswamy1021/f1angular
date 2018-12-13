import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-google',
  templateUrl: './google.component.html',
  styleUrls: ['./google.component.scss']
})
export class GoogleComponent implements OnInit {
  lat = 17.437238;
  lng = 78.369220;
  latA = -34.754764;
  lngA = 149.736246;
  zoom = 8;
  constructor() { }

  ngOnInit() {
  }

}
