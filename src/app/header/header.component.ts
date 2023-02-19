import { Component, OnInit } from '@angular/core';
import {AppComponent} from '../app.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(
    public app: AppComponent,
    public router: Router
  ) { }

  ngOnInit(): void {
  }

}
