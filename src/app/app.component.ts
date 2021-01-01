import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthentificationFirebaseService } from './authentification-firebase.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  title = 'angular-centre-formation';
  loginIn = false;
  constructor(private _router: Router,private _authentificationService: AuthentificationFirebaseService) { }

  ngOnInit(): void {
    this._authentificationService.isLoggedIn.subscribe(data =>{
      data ? this.loginIn = true : this.loginIn = false;
    });
  }
  logout(){
    this._authentificationService.logout();
    this._router.navigate(['/login']);
  }
  goCoach(){}
  goCondida(){}
  goFindFormation(){
    this._router.navigate(['/find']);
  }
  goHome(){
    this._router.navigate(['/home']);
  }
}
