import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from '../app/Pages/login/login.component'
import {MatCardModule} from '@angular/material/card';
import { RegisterComponent } from './Pages/register/register.component';
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
import { HomeComponent } from './Pages/home/home.component';
import { TitleComponent } from './Components/title/title.component';
import { HomeCarouselComponent } from './Components/home-carousel/home-carousel.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {MatDividerModule} from '@angular/material/divider';
import { MglTimelineModule } from 'angular-mgl-timeline';
import {CrystalLightboxModule} from '@crystalui/angular-lightbox';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { ComponentDetailsComponent } from './Pages/component-details/component-details.component';
import { FindFormationComponent } from './Pages/find-formation/find-formation.component';
import {MatChipsModule} from '@angular/material/chips';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    TitleComponent,
    HomeCarouselComponent,
    ComponentDetailsComponent,
    FindFormationComponent
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
    NgbModule,
    MatChipsModule,
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
    MatTooltipModule,
    MatDividerModule,
    MglTimelineModule,
    CrystalLightboxModule,
    AngularFireDatabaseModule
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA,
    NO_ERRORS_SCHEMA
  ],
  providers: [AuthentificationFirebaseService],
  bootstrap: [AppComponent]
})
export class AppModule { }
