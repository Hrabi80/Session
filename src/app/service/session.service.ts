import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SessionService {

  constructor() { }
  token! : boolean;
  sessionStart(){
    let username="user";
    this.token = true;
    localStorage.setItem('session',username);
  }
  IsStillInSession(){
    if(localStorage.getItem('session')){
    this.token=true;
    return true;
    }
    else{
      this.token=false;
      return false;
    }
  }
  closeSession(){
    this.token = false;
    localStorage.removeItem('session');
  }
}
