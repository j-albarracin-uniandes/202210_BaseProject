import { Component, OnInit } from '@angular/core';
import { Plant } from '../plant';
import { PlantService } from '../plant.service';

@Component({
  selector: 'app-plants-list',
  templateUrl: './plants-list.component.html',
  styleUrls: ['./plants-list.component.css']
})
export class PlantsListComponent implements OnInit {

  plants: Array<Plant> = [];

  constructor(private plantService: PlantService) { }
 
  getPlants(): void {
    this.plantService.getPlants().subscribe((plants) => {
      this.plants = plants;
      console.log(this.plants)
    });
  }
  totalInterior():number{
    return this.plants.filter((e)=>e.tipo==='Interior').length;
  }

  totalExterior():number{
    return this.plants.filter((e)=>e.tipo==='Exterior').length;
  }
 
  ngOnInit() {
    this.getPlants();
  }
}
