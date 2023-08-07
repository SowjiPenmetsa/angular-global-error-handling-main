import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { MailApiDTO } from './dto/mail-api.dto';
import { EmailHttpService } from './email-http.service';
import { MailApiAdaptor } from './mail-api.adaptor';
import { MailApiModel } from './model/mail-api.model';

@Injectable({
  providedIn: 'root'
})
export class EmailService {
 

   mailDtoInitilization:MailApiDTO={
    apiEndPoint:'',
    apiResponse:'',
    browserName:'',
    currentLoggedInUser:'',
    currentTimeStamp:'',
    errorMessage:'',
    requestPayload:'',
    comments:'', 
    screenName:''
  }

  private mailPayloadStore= new BehaviorSubject<MailApiDTO>(this.mailDtoInitilization);
  mailPayloadStore$=this.mailPayloadStore.asObservable();
  private mailFileStore= new BehaviorSubject<FormData>(new FormData
    ());
  mailFileStore$=this.mailPayloadStore.asObservable();

  private commentStore = new BehaviorSubject<string>(null||'');
  commentStore$=this.commentStore.asObservable();

  constructor(private emailHttpService:EmailHttpService) { }

  makeSuccessCall():void{
    this.emailHttpService.makeSuccessCall().subscribe((res)=>{

    });
  }

  setCommentStore(comment:string):void{
this.commentStore.next(comment);
  }

  makeErrorCall():void {
    this.emailHttpService.makeErrorCall().subscribe((res)=>{

    });
  }

  setMailPayloadStore(payload:MailApiModel,file:FormData):void{
   const mailDto =MailApiAdaptor.mapMailApiObject(payload);
   this.mailFileStore.next(file)
    this.mailPayloadStore.next(mailDto);
  }

  setMailPayload():void{
    const payLoadStore= this.mailPayloadStore.getValue();
    let mailStore= this.mailFileStore.getValue();
    mailStore.append('apiEndPoint',payLoadStore.apiEndPoint??'');
    mailStore.append('browserName',payLoadStore.browserName);
    mailStore.append('currentLoggedInUser',payLoadStore.currentLoggedInUser);
    mailStore.append('screenName',payLoadStore.screenName);
    mailStore.append('errorMessage',payLoadStore.errorMessage);
    mailStore.append('requestPayload',payLoadStore.requestPayload??'')
    mailStore.append('apiResponse',payLoadStore.apiResponse??'')
    mailStore.append('comments',this.commentStore.getValue())
    mailStore.append('currentTimeStamp',payLoadStore.currentTimeStamp)
      this.emailHttpService.sendErrorReport(this.mailFileStore.getValue()).subscribe(()=>{
      });
  }
}
