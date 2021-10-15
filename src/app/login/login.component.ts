import { Component, OnInit } from '@angular/core';
import { SessionService } from '../service/session.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private service : SessionService) { }

  ngOnInit(): void {
  }
  start(){
      this.service.sessionStart();
  }
}
