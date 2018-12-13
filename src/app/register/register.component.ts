import { Component, OnInit } from '@angular/core';
import { NavbarService } from '../navbar.service';
import { SidebarService } from '../sidebar.service';
import { FooterService } from '../footer.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  constructor(private navbarService: NavbarService, private sidebarService: SidebarService, private footerService: FooterService) { }

  ngOnInit() {
    this.navbarService.show();
    this.sidebarService.show();
    this.footerService.show();
    this.navbarService.topelement = true;
  }

}
