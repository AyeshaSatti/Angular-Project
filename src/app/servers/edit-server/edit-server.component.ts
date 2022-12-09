import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import { ServersService } from '../servers.service';

@Component({
  selector: 'app-edit-server',
  templateUrl: './edit-server.component.html',
  styleUrls: ['./edit-server.component.css']
})

export class EditServerComponent implements OnInit {
  server !: { id: number, name: string, status: string };
  serverName = '';
  serverStatus = '';
  allowEdit = false;

  constructor(private serversService: ServersService, private route: ActivatedRoute) { }
  ngOnInit() {
    this.route.queryParams.subscribe(
      (queryParams: Params) => {
        console.log('QueryParams:: ', queryParams['allowEdit'])
        this.allowEdit = queryParams['allowEdit'] === 1 ? true : false;
        console.log('isAllowEdit ', this.allowEdit)
      }
    );
    this.route.fragment.subscribe();
    // this.server != this.serversService.getServer(this.server.id);
    // this.serverName = this.server.name;
    // this.serverStatus = this.server.status;
  }

  onUpdateServer() {
    this.serversService.updateServer(this.server.id, { name: this.serverName, status: this.serverStatus });
  }

}
