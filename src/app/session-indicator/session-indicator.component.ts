import { Component, OnInit,HostListener } from '@angular/core';
import { interval } from 'rxjs';
import { map } from 'rxjs/operators';
import { SessionService } from '../service/session.service';
@Component({
  selector: 'app-session-indicator',
  templateUrl: './session-indicator.component.html',
  styleUrls: ['./session-indicator.component.css']
})
export class SessionIndicatorComponent implements OnInit {

  constructor(private service :SessionService) { 
    this.removeSession();
    
  }
  currentSeconds = 0;
  starSessionDate : any= new Date();
  endSession= 1000;
  minute!:'2-digit';
  count$ = interval(1000).pipe(
    map((count) => this.format(count + this.currentSeconds * 1000))
  );
  format(seconds: number): string {
    return new Date(seconds + +new Date()-this.starSessionDate).toLocaleString('en-EN', {
      minute: '2-digit',
      second: '2-digit',
    });
  }
  @HostListener('click', ['$event'])
  @HostListener('document:mousewheel', ['$event'])
  @HostListener('document:scroll', ['$event'])
  @HostListener('document:keydown', ['$event'])
  @HostListener('document:keytouch', ['$event'])
  @HostListener('document:touchmove', ['$event'])
  @HostListener('document:mousemove', ['$event'])
  onDocumentMousewheelEvent(event:any) {
    this.starSessionDate = new Date();
  }

  removeSession(){
    if(this.endSession-this.starSessionDate >=0 ){
       this.service.closeSession();
    }
  }
  ngOnInit(): void {
    setTimeout(() => {
      this.removeSession();
    },parseInt(new Date().toString())-this.starSessionDate +100);
    if(this.endSession-this.starSessionDate >=0 ){
      this.service.closeSession();
   }
  }

}
