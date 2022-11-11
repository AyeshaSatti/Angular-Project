import { Component } from "@angular/core";

@Component({
    selector: 'app-server',
    templateUrl: './server.component.html',
    styleUrls: ['./server.component.css'],
    styles: [`
    .online {
        color : white;
    }
    `]
})
export class ServerComponent {
    title = 'Angular-Project';
    serverStatus = 'Offline';

    constructor() {
        this.serverStatus = Math.random() > 0.5 ? 'Offline' : 'Online'
    }

    getServerStatus() {
        return this.serverStatus;
    }
    getColor() {
        return this.serverStatus === 'Online' ? 'green' : 'red';
    }

}
