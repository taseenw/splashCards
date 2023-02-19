import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(
    private router: Router,
    public app: AppComponent,
  ) { }

  ngOnInit(): void {
  }

  onSubmit(email: any, password: any){
    console.log("Email: " + email.value + " Password: " + password.value);
    let loginRequest = {
      email: email.value,
      password: password.value
    }

    if(this.loginValid(loginRequest)){
      this.router.navigate(['/home']);
    }
  }

  loginValid(loginRequest: any){
    localStorage.setItem('email', loginRequest.email);
    //Unimplemented login logic
    return true;
  }

}
