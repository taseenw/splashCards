import { Component, OnInit } from '@angular/core';
import {AppComponent} from '../app.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit {

  constructor(
    public app: AppComponent,
    public router: Router
  ) { }
  ngOnInit(): void {
  }

}
