import { Injectable } from '@angular/core';
import html2canvas from 'html2canvas';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ScreenShotService {

  constructor() { }

  takeScreenShot():Observable<Blob>{
  const blob = new Observable<Blob>((observable)=>{
    html2canvas(document.body).then(canvas => {
      canvas.toBlob((blob)=>{
      const blobObj=blob??undefined
      observable.next(blobObj);
      observable.complete();
  });
});
  });
  return blob;
}   
   
}
