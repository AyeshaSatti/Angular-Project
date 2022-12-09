import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router'
import { ServersService } from '../servers.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit {
  
  server : { id: number, name: string, status: string };
  paramsSubscription!: Subscription;

  constructor(private serversService: ServersService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    const id = +this.route.snapshot.params['id'];
    console.log('ID', id)

    this.server != this.serversService.getServer(id);

    console.log('Servers', this.server);
    this.route.params
      .subscribe(
        (params: Params) => {
          this.server != this.serversService.getServer(params['id']);
        }
      );
  }

  onEdit() {
    this.router.navigate(['edit'], { relativeTo: this.route, queryParamsHandling: 'preserve' })
  }


  ngOnDestroy() {
    // this.paramsSubscription.unsubscribe()
  }


}
