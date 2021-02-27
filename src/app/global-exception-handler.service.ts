import { Injectable, ErrorHandler, NgZone } from '@angular/core';
import { Router } from '@angular/router';
import { HttpResponse, HttpErrorResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GlobalExceptionHandlerService implements ErrorHandler {

  constructor(private router: Router, private nazone: NgZone) { }
  handleError(error: any) {

     
    console.log("From GlobalException class ", error);

    this.router.navigate(["error"]);
    this.nazone.run(() => { this.router.navigate(["error"]); });


  }
}
