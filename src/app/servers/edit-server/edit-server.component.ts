import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router, ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot } from '@angular/router';
import { ServersService } from '../servers.service';
import { CanComponentDeactivate } from './can-deactivate-gurad.service';
import { Observable } from "rxjs";

@Component({
  selector: 'app-edit-server',
  templateUrl: './edit-server.component.html',
  styleUrls: ['./edit-server.component.css']
})

export class EditServerComponent implements OnInit, CanComponentDeactivate {
  server: any;
  serverName = '';
  serverStatus = '';
  allowEdit = false;
  changesSaved = false;

  constructor(private serversService: ServersService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
    this.route.queryParams.subscribe(
      (queryParams: Params) => {
        console.log('QueryParams:: ', queryParams['allowEdit'])
        this.allowEdit = queryParams['allowEdit'] === 1 ? true : false;
        console.log('isAllowEdit ', this.allowEdit)
      }
    );
    this.route.fragment.subscribe();
    const id = +this.route.snapshot.params['id'];
    this.server != this.serversService.getServer(id);
    this.serverName = this.server.name;
    this.serverStatus = this.server.status;
  }

  onUpdateServer() {
    this.serversService.updateServer(this.server.id, {
      name: this.serverName, status: this.serverStatus
    });
    this.changesSaved = true;
    this.router.navigate(['../'], { relativeTo: this.route })
  };

  canDeactivate(): Observable<boolean> | Promise<boolean> | boolean {
    if (!this.allowEdit) {
      return true;
    }
    if (this.serverName !== this.server.name || this.serverStatus !== this.server.status && !this.changesSaved) {
      return confirm('Do you want ot discard Changes?')
    } else {
      return true;
    }
  }
}
