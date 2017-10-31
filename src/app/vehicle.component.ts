import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Vehicle } from './vehicle';
import { VehicleService } from './vehicle.service';

@Component({
    selector: 'vehicle-session',
    templateUrl: './vehicle.component.html',
    styleUrls: ['./vehicle.component.css']
  })

  export class VehicleSession implements OnInit {
    vehicleSession: Vehicle;

    constructor(
      private vehicle: VehicleService
    ) {};

    ngOnInit(): void {
      this.getVehicle();
    }

    getVehicle(): void {
      this.vehicleSession = this.vehicle.getVehicle();
    }
  }