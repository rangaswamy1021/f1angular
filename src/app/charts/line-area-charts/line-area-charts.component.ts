import { Component, OnInit } from '@angular/core';
import { single, multi } from '../chartData';

@Component({
  selector: 'app-line-area-charts',
  templateUrl: './line-area-charts.component.html',
  styleUrls: ['./line-area-charts.component.scss']
})
export class LineAreaChartsComponent implements OnInit {

  single: any[];
  multi: any[];

  view: any[] = [550, 300];

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

  // line, area
  autoScale = true;
  constructor() {
    Object.assign(this, {single, multi})
  }
  onSelect(event) {
    console.log(event);
  }

  ngOnInit() {
  }

}
