import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { NgbRatingConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.scss'],
  styles: [`
    .star {
      font-size: 1.5rem;
      color: #b0c4de;
      position: relative; display: inline-block;
      font-size: 3rem;
      color: #d3d3d3;
    }
    .full {
      color: red;
    }
    .half {
      position: absolute;
      display: inline-block;
      overflow: hidden;
      color: red;
    }
    .filled {
      color: #1e90ff;
    }
  `],
  providers: [NgbRatingConfig] // add NgbRatingConfig to the component providers
})
export class RatingComponent implements OnInit {
  ctrl = new FormControl(null, Validators.required);

  currentHeartRate = 3.14;
  currentRate = 8;
  currentStartRate = 6;
  selected = 0;
  hovered = 0;
  readonly = false;
  constructor(config: NgbRatingConfig) {
    // customize default values of ratings used by this component tree
    // config.max = 5;
    // config.readonly = true;
  }

  ngOnInit() {
  }
  toggle() {
    if (this.ctrl.disabled) {
      this.ctrl.enable();
    } else {
      this.ctrl.disable();
    }
  }

}
