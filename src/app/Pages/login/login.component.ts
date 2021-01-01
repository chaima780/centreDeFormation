import { Component, OnInit } from '@angular/core';
import { FormBuilder,Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthentificationFirebaseService } from '../../authentification-firebase.service';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm = this._formBuilder.group({
    email: ['', [Validators.required, Validators.email]],
    Password: ['', [Validators.required, Validators.minLength(5)]]
  }); 


  constructor(private _snackBar: MatSnackBar,private _router: Router,private _formBuilder: FormBuilder,private _authentificationService: AuthentificationFirebaseService) {}


  ngOnInit(): void {
    this._authentificationService.isLoggedIn.subscribe(data =>{
      console.log(data);
      if(data == true){
        this._router.navigate(['/home']);
        this._snackBar.open('Your are In now','', {
          duration: 5 * 1000,
        });
      }
    });
  }

  login(){
    this._authentificationService.sigingIn(this.loginForm.controls['email'].value,this.loginForm.controls['Password'].value);
  }
}
