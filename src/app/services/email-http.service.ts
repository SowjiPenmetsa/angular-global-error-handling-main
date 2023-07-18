import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { MailApiDTO } from './dto/mail-api.dto';

@Injectable({
  providedIn: 'root'
})
export class EmailHttpService {
   private static base_url=environment.api;
  constructor(private httpClient: HttpClient) { }

  makeSuccessCall(): Observable<any>{
    
    const Url=`${EmailHttpService.base_url}/success`;
    
    return this.httpClient.get(Url);
  }

  makeErrorCall(): Observable<any>{
    
    const Url=`${EmailHttpService.base_url}/error`;
    
    return this.httpClient.get(Url);
}

sendErrorReport( file:FormData):Observable<string>{
  const url=`${EmailHttpService.base_url}/mail-api`;
  return this.httpClient.post<string>(url,file);
}
}