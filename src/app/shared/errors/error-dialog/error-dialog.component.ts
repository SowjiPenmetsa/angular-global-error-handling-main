import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { EmailService } from 'src/app/services/email.service';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-error-dialog',
  templateUrl: './error-dialog.component.html',
  styleUrls: ['./error-dialog.component.scss'],
})
export class ErrorDialogComponent{
  comments!:string;
  showDetails: boolean = true;
  constructor(
    @Inject(MAT_DIALOG_DATA)
    public data: { message: string; status?: number; url: string; traceId?: string },
    private emailService :EmailService,
    private titleService: Title,
  ) {}
 
  onCommentChange() :void{
 this.emailService.setCommentStore(this.comments)
} 
  reportAnIssue():void{
this.emailService.setMailPayload();
  }
  getCurrentDateTime(): string {
    const currentDateTime = new Date().toLocaleString();
    return currentDateTime; 

  }
  getCurrentURL(): string {
    
    return window.location.href; 

  }
  toggleDetails(): void{
    this.showDetails = !this.showDetails;
  }
  copyError():void{
    const dummyTextarea = document.createElement('textarea');
    dummyTextarea.value = this.data.message || '';
    document.body.appendChild(dummyTextarea);

    dummyTextarea.select();
    document.execCommand('copy');
    document.body.removeChild(dummyTextarea);
  }
  // getScreenName(): string{
  //   return this.titleService.getTitle();
  // }
}
