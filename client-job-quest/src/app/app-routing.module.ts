import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppHomeComponent } from './app-home/app-home.component';
import { LoginSignupComponent } from './login-signup/login-signup.component';

const routes: Routes = [
  { path: 'login', component: LoginSignupComponent },
  { path: 'home', component: AppHomeComponent },
  { path: '', redirectTo: 'app-home', pathMatch: 'full' }
  // Add other routes as needed
];


@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
