import { Injectable } from '@angular/core';

@Injectable()
export class NavbarService {

topelement: boolean;
visible: boolean;

  constructor() {
   this.visible = false;
}

navtop() {
  this.topelement = false ;
}

hide() { this.visible = false; }

show() { this.visible = true; }

toggle() { this.visible = !this.visible; }

}
