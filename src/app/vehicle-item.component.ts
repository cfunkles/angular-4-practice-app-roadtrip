import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { VehicleItem } from './vehicle-item';
import { VehicleItemService} from './vehicle-item.service';


@Component({
    selector: 'vehicle-item',
    templateUrl: './vehicle-item.component.html',
    styleUrls: ['./vehicle-item.component.css']
  })

export class VehicleItemComponent implements OnInit {
    itemsArr: VehicleItem[]; 

    constructor(
        private itemService: VehicleItemService
    ) {};

    ngOnInit() {
        this.getItem();
    }
    getItem(): void {
        this.itemsArr = this.itemService.getItems();
    }

    addToCar(money: number, weight: number){
        alert(money + weight);
    }

    removeFromCar(money: number, weight: number) {
        alert(money + weight);
    }
}