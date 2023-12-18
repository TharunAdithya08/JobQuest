import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { RouterOutlet, Routes, RouterModule } from '@angular/router';

// const appRoutes: Routes = [
//   {path: 'home', component: AppHomeComponent}
// ]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule,
    RouterOutlet,
    // RouterModule.forRoot(appRoutes)
  ]
})
export class AppModule { }
