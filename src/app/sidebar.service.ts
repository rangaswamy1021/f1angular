import { Injectable } from '@angular/core';

@Injectable()
export class SidebarService {

  sidebarvisible: boolean;

  constructor() { this.sidebarvisible = false; }

  hide() { this.sidebarvisible = false; }

  show() { this.sidebarvisible = true; }

  toggle() { this.sidebarvisible = !this.sidebarvisible; }

}
