export interface MailApiModel{
    apiEndPoint:string|null;//1
    errorMessage:string;//2
    currentTimeStamp:string;//3
    screenName:string;//4
    requestPayload:string|null;//leave it set null 
    apiResponse:string|null;//leave it set null
    currentLoggedInUser:string;//leave it 
    comments:string;//new
    browserName:string;//6
 }