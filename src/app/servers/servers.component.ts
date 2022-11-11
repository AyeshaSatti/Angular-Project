import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  isServerAllowed = false;
  serverStatus = "Server is not Created! ";
  userStatus = '';
  serverName = 'Testing';
  username = 'AyeshaSatti';
  isUserCreated = false;
  servers = ['TestServer'];
  secretCode = '';
  isCodeCreated = false;
  log = [1]

  constructor() {
    setTimeout(() => {
      this.isServerAllowed = true;
    }, 3000)
  }

  ngOnInit(): void {
  }


  getPasscode() {
    this.isCodeCreated = true;
    // this.log.push(this.log.length + 1);
    this.secretCode = 'Secret Passcode is TUNA007';
    // this.isCodeCreated = false;
  }
  oncreateServer() {
    // this.isUserCreated = true;
    this.serverStatus = "Server is Created!";
    this.servers.push(this.serverName);

  }
  onUpdateServerName(event: any) {
    this.isUserCreated = true;
    this.serverName = event.target.value;
  }
  showUsername(event: any) {
    this.isUserCreated = true;
    this.userStatus = 'User is Created and User Name is ' + this.username;
  }
}
