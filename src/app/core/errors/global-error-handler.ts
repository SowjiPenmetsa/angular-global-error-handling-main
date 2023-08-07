import { HttpErrorResponse } from '@angular/common/http';
import { ErrorHandler, Injectable, NgZone} from '@angular/core';
import { Title } from '@angular/platform-browser';
import { EmailService } from 'src/app/services/email.service';
import { MailApiModel } from 'src/app/services/model/mail-api.model';
import { ScreenShotService } from 'src/app/shared/screen-shot/screen-shot.service';
import { ErrorDialogService } from '../../shared/errors/error-dialog.service';
import { Inject } from '@angular/core';

@Injectable()
export class GlobalErrorHandler implements ErrorHandler {
  constructor(
    private errorDialogService: ErrorDialogService,
    private zone: NgZone,
    private mailService:EmailService,
    private titleService:Title,
    private screenShotService:ScreenShotService,
   
    
    
  ) {}

  handleError(error: any) {
    // Check if it's an error from an HTTP response
    if (!(error instanceof HttpErrorResponse)) {
      error = error.rejection || error?.message; // get the error object
      this.zone.run(() =>
      this.errorDialogService.openDialog(
        error || 'client error occured',
        error?.status,
       
      )
    );
    }else{

      this.zone.run(() =>
      this.errorDialogService.openDialog(
        error?.message || 'client error occured',
        error?.status
      )
    );
    }
   
    

 /// call reportAnError

 this.reportAnError(error);
  }

  reportAnError(_error:HttpErrorResponse):void{
    this.screenShotService.takeScreenShot().subscribe((blob:any)=>{
      
      const payload:MailApiModel={
        apiEndPoint: _error?.url,
        currentTimeStamp:new Date().toString(),
        currentLoggedInUser: "Test User",
        requestPayload:null,
        apiResponse:null,
        browserName:navigator.appVersion,
        errorMessage:_error?.message,
        comments: "",
        screenName:this.titleService.getTitle(),
  
       };


     const formData= new FormData();
     formData.append('file',blob);
   
      this.mailService.setMailPayloadStore(payload,formData);
    })
    // here collect all the details like apiend point and screen name and screenprint 
    //create a mailapi dto object pass into the below method
    
  }

   
}


