import { VehicleItem } from './vehicle-item';

export class Vehicle {
    username: string;
    overPriceOrWeight: boolean;
    nothingToRemove: boolean;
    vehicle: string;
    money: number;
    weight: number;
    itemsInV: Array<VehicleItem>;
}