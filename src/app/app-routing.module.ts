import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegisterComponent } from './Pages/register/register.component';
import { LoginComponent } from '../app/Pages/login/login.component';
import { HomeComponent } from '../app/Pages/home/home.component';
import { ComponentDetailsComponent } from '../app/Pages/component-details/component-details.component';
import { FindFormationComponent } from './Pages/find-formation/find-formation.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'login' },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'home', component: HomeComponent },
  { path: 'detils/:formation', component: ComponentDetailsComponent },
  { path: 'find', component: FindFormationComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
