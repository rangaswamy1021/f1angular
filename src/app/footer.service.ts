import { Injectable } from '@angular/core';

@Injectable()
export class FooterService {

   footervisible: boolean;

  constructor() { this.footervisible = false; }

  hide() { this.footervisible = false; }

  show() { this.footervisible = true; }

  toggle() { this.footervisible = !this.footervisible; }

}
