import { Component, OnInit } from '@angular/core';
import { NgbPanelChangeEvent } from '@ng-bootstrap/ng-bootstrap';
import {NgbAccordionConfig} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.css'],
  providers: [NgbAccordionConfig] // add the NgbAccordionConfig to the component providers
})
export class AccordionComponent implements OnInit {

  public beforeChange($event: NgbPanelChangeEvent) {

    if ($event.panelId === 'preventchange-2') {
      $event.preventDefault();
    }

    if ($event.panelId === 'preventchange-3' && $event.nextState === false) {
      $event.preventDefault();
    }
  };

  constructor( config: NgbAccordionConfig ) {
    // customize default values of accordions used by this component tree
    config.closeOthers = true;
    config.type = 'info';
   }

  ngOnInit() {
  }

}
