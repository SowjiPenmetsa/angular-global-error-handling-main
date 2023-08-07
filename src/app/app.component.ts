import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { EmailService } from './services/email.service';


/**
 * @title Basic progress-spinner
 */
@Component({
  selector: 'app',
  templateUrl: 'app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  constructor(private http: HttpClient,private emailService:EmailService) {}

  localError() {
    throw Error('The app component has thrown an error!');
  }
 


  failingRequest() {
   // this.http.get('https://httpstat.us/404?sleep=2000').toPromise();
   this.emailService.makeErrorCall();
  }

  successfulRequest() {
    //this.http.get('https://httpstat.us/200?sleep=2000').toPromise();
    this.emailService.makeSuccessCall();
  }
}
