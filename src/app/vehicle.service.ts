import { Injectable } from '@angular/core';

import { Vehicle } from './vehicle';
import { VEHICLE } from './mock-vehicle';

@Injectable()

export class VehicleService {
    getVehicle(): Vehicle {
        return VEHICLE;
    }
}