import { Injectable } from '@angular/core';

@Injectable({
  providedIn : "root"
})

export class LogsService {
  constructor() { 
  }
  Logger(Log){
      console.log("%c Logs are '"+Log+"'" , 'color : green ; font-weight : bold;');
  }
}
