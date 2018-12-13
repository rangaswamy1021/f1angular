import { Component, OnInit, Input } from '@angular/core';
import {Subject} from 'rxjs/Subject';
import {debounceTime} from 'rxjs/operator/debounceTime';
import {NgbAlertConfig} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.css'],
  providers: [NgbAlertConfig],
  styles: [`
    :host >>> .alert-custom {
      color: #99004d;
      background-color: #f169b4;
      border-color: #800040;
    }
  `]
})
export class AlertComponent implements OnInit {

  @Input()
  public alerts: Array<IAlert> = [];

  private backup: Array<IAlert>;

   private _success = new Subject<string>();
  staticAlertClosed = false;
  successMessage: string;

  constructor(alertConfig: NgbAlertConfig ) {
     // customize default values of alerts used by this component tree
    alertConfig.type = 'success';
    // alertConfig.dismissible = false;
    this.alerts.push({
      id: 1,
      type: 'success',
      message: 'This is an success alert',
    }, {
        id: 2,
        type: 'info',
        message: 'This is an info alert',
      }, {
        id: 3,
        type: 'warning',
        message: 'This is a warning alert',
      }, {
        id: 4,
        type: 'danger',
        message: 'This is a danger alert',
      });
    this.backup = this.alerts.map((alert: IAlert) => Object.assign({}, alert));
  }

  public closeAlert(alert: IAlert) {
    const index: number = this.alerts.indexOf(alert);
    this.alerts.splice(index, 1);
  }

  public reset() {
    this.alerts = this.backup.map((alert: IAlert) => Object.assign({}, alert));
  }

  ngOnInit(): void {
    setTimeout(() => this.staticAlertClosed = true, 20000);

    this._success.subscribe((message) => this.successMessage = message);
    debounceTime.call(this._success, 5000).subscribe(() => this.successMessage = null);
  }
 public changeSuccessMessage() {
    this._success.next(`${new Date()} - Message successfully changed.`);
  }

}

export interface IAlert {
  id: number;
  type: string;
  message: string;
}