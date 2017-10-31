import { Injectable } from '@angular/core';

import { VehicleItem } from './vehicle-item';
import { VITEMS } from './mock-vehicle-items';

@Injectable()

export class VehicleItemService {
    getItems(): VehicleItem[] {
        return VITEMS;
    }
}