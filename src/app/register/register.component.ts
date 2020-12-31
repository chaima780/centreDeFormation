import { Component, OnInit } from '@angular/core';
import { FormBuilder,Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { AuthentificationFirebaseService } from '../authentification-firebase.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerForm = this._formBuilder.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(5)]],
    rePassword: ['', [Validators.required, Validators.minLength(5)]],
    role: ['']
  }); ;
  Roles = ['Admin','User'];
  constructor(private _snackBar: MatSnackBar,private _router: Router,private _formBuilder: FormBuilder,private _authentificationService: AuthentificationFirebaseService) { }

  ngOnInit(): void {
    this._authentificationService.isLoggedIn.subscribe(data =>{
      console.log(data);
      if(data == true){
        this._router.navigate(['/home']);
        this._snackBar.open('Account created!','', {
          duration: 5 * 1000,
        });
      }
    });
  }
  register(){
    this._authentificationService.sigingUp(this.registerForm.controls['email'].value,this.registerForm.controls['password'].value);
  }
}
