import { Component, OnInit } from '@angular/core';
import { NavbarService } from '../navbar.service';
import { SidebarService } from '../sidebar.service';
import { FooterService } from '../footer.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor( public navbarService: NavbarService, public sidebarService: SidebarService, private footerService: FooterService) { }

  ngOnInit() {
    this.navbarService.show();
    this.sidebarService.show();
    this.footerService.show();
    this.navbarService.topelement = true;
    // document.getElementsByClassName('body').classList.add('signin-page');
  }

}
