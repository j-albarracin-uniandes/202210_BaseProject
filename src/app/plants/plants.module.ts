import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlantsListComponent } from './plants-list/plants-list.component';
import { PlantService } from './plant.service';

@NgModule({
  declarations: [PlantsListComponent],
  imports: [CommonModule],
  exports: [PlantsListComponent],
  providers:[PlantService]
})
export class PlantsModule {}
