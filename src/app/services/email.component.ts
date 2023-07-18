import { Component } from '@angular/core';
import { EmailHttpService } from './email-http.service';

 

@Component({
  selector: 'app-your-component',
  template: `
<button (click)="makeBackendCall()">Make Backend Call</button>
  `
})
export class emailComponent {
  constructor(private emailHttpService: EmailHttpService) { }

 

  makeBackendCall() {
    this.emailHttpService.makeSuccessCall().subscribe(
      (data: any) => {
        // Handle the successful response
        console.log(data);
      },
     
      (error: any) => {
        // Handle the error response
        console.error(error);
      }
    );
  }
}