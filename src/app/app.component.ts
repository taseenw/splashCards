import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'splashCard';

  constructor(
    public router: Router
   ) {}

  sessionStarted(){
  if(localStorage.getItem("email")==null){
    return false;
  }
  return true;
  }

  getName(){
    return localStorage.getItem("email");
  }
  
  homeRoute(){
    return this.router.navigate(['/home']);
  }

  loginRoute(){
    return this.router.navigate(['/login']);
  }

  logout(){
    localStorage.clear();
    return this.router.navigate(['/login']);
  }

}
