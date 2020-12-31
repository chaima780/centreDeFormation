import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';

@Injectable({
  providedIn: 'root'
})
export class AuthentificationFirebaseService {

  isLoggedIn : BehaviorSubject<boolean>;
  constructor(public firebaseAuth : AngularFireAuth) { this.isLoggedIn = new BehaviorSubject(false); }
  async sigingIn(email, password){
    await this.firebaseAuth.signInWithEmailAndPassword(email,password).then(res =>{
      this.isLoggedIn.next(true);
      localStorage.setItem('user',JSON.stringify(res.user));
    });
  }
  async sigingUp(email, password){
    await this.firebaseAuth.createUserWithEmailAndPassword(email,password).then(res =>{
      this.isLoggedIn.next(true);
      localStorage.setItem('user',JSON.stringify(res.user));
      return res;
    });
  }
  logout(){
    this.firebaseAuth.signOut();
    localStorage.removeItem('user');
    this.isLoggedIn.next(false);
  }
}
