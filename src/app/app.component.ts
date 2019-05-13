import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  //To retrive data from the backend server.

  title = 'bpssFrontend';
  baseUrl = 'https://my-json-server.typicode.com/xero7412/bpss_backend'; //Server URL
  arrInventory = []; //array to store the inventory list
  constructor(private httpClient: HttpClient){}
  ngOnInit () {
    this.httpClient.get(this.baseUrl + '/inventory').subscribe((res : any[])=>{
        this.arrInventory = res;
    });
  }
}
