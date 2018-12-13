import { Component, OnInit } from '@angular/core';
import { single, multi } from '../chartData';

@Component({
  selector: 'app-other-charts',
  templateUrl: './other-charts.component.html',
  styleUrls: ['./other-charts.component.scss']
})
export class OtherChartsComponent implements OnInit {

  single: any[];
  multi: any[];
  data: any[];
  // view: any[] = [700, 400];

  // options
  showXAxis = true;
  showYAxis = true;
  gradient = false;
  showLegend = false;
  showXAxisLabel = true;
  xAxisLabel = 'Country';
  showYAxisLabel = true;
  yAxisLabel = 'Population';

  colorScheme = {
    domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA']
  };

  constructor() {
     this.data = single;
    Object.assign(this, {multi, single})
  }

  onSelect(event) {
    console.log(event);
  }

  ngOnInit() {
  }

}
