import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from '../app/login/login.component'
import {MatCardModule} from '@angular/material/card';
import { RegisterComponent } from './register/register.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from "@angular/flex-layout";
import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatRippleModule} from '@angular/material/core';
import {MatSelectModule} from '@angular/material/select';
import { AngularFireModule } from '@angular/fire';
import {AuthentificationFirebaseService} from './authentification-firebase.service';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatIconModule} from '@angular/material/icon';
import {MatTooltipModule} from '@angular/material/tooltip';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatToolbarModule,
    FlexLayoutModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatRippleModule,
    MatSelectModule,
    AngularFireModule.initializeApp({
      apiKey: "AIzaSyBTPaLKTNpoyTjk3xHBcJ70IpHx9Ruq4ZA",
      authDomain: "formation-a099f.firebaseapp.com",
      projectId: "formation-a099f",
      storageBucket: "formation-a099f.appspot.com",
      messagingSenderId: "907169860044",
      appId: "1:907169860044:web:99b8a59fea1f35fbd8f569"
    }),
    MatSnackBarModule,
    MatIconModule,
    MatTooltipModule
  ],
  providers: [AuthentificationFirebaseService],
  bootstrap: [AppComponent]
})
export class AppModule { }
