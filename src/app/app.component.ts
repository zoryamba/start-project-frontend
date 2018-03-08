import { Component, OnInit } from '@angular/core';
import { Socket } from 'ng-socket-io';
import { HttpClient } from "@angular/common/http";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  constructor(
    private socket: Socket,
    private http: HttpClient
  ){}
  title = 'app';

  ngOnInit(){
    this.socket.on('connect', (socket) => {
      setInterval(() => {
      this.http.get('/api/').subscribe((res)=>{console.log('api responsed')});
      }, 5000)
    })

    this.socket.fromEvent("message").subscribe((msg) => {
      console.log(msg)
    })
  }
}
