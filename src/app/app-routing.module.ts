import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginPage } from './login.component';
import { VehicleSession } from './vehicle.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginPage },
  { path: 'vehicle', component: VehicleSession},
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule]
})
export class AppRoutingModule {}