import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'
import { NgModule } from '@angular/core';

import { LoginPage } from './login.component';
import { VehicleSession } from './vehicle.component';
import { AppComponent } from './app.component';
import { VehicleItemComponent } from './vehicle-item.component';
import { VehicleItemService } from './vehicle-item.service';
import { VehicleService } from './vehicle.service';

import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    LoginPage,
    VehicleSession,
    VehicleItemComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [VehicleItemService, VehicleService],
  bootstrap: [AppComponent]
})
export class AppModule { }
