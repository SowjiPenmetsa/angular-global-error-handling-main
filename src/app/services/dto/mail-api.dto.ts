export interface MailApiDTO{
   apiEndPoint:string|null;
   errorMessage:string;
   currentTimeStamp:string;
   screenName:string;
   requestPayload:string|null;
   apiResponse:string|null;
   currentLoggedInUser:string;
   
   browserName:string;
}