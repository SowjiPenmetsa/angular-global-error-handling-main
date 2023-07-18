import { MailApiDTO } from "./dto/mail-api.dto";
import { MailApiModel } from "./model/mail-api.model";

 export class MailApiAdaptor{


    static mapMailApiObject(MailApiModel:MailApiModel):MailApiDTO{
        return{
            apiEndPoint:MailApiModel.apiEndPoint,
            apiResponse:MailApiModel.apiResponse||null,
            browserName:MailApiModel.browserName,
            currentLoggedInUser:"test user",
            currentTimeStamp:new Date().toString(),
            errorMessage:MailApiModel.errorMessage,
            requestPayload:MailApiModel.requestPayload,
            comments:MailApiModel.comments,//new
            screenName:MailApiModel.screenName,
             
        }

    }
}