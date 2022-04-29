import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlantsListComponent } from './plants-list.component';
import { faker } from '@faker-js/faker';
import { Plant } from '../plant';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';
export type Result = (string | undefined)[];
describe('PlantsListComponent', () => {
  let component: PlantsListComponent;
  let fixture: ComponentFixture<PlantsListComponent>;
  let debug: DebugElement;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PlantsListComponent],
      imports: [HttpClientModule],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlantsListComponent);
    component = fixture.componentInstance;
    const ids = [1, 2, 3];
    let plants: Array<Plant> = [];
    for (let id of ids) {
      plants.push(
        new Plant(
          id,
          faker.lorem.sentence(),
          faker.lorem.sentence(),
          faker.lorem.sentence(),
          faker.datatype.number(),
          faker.lorem.sentence(),
          faker.lorem.sentence()
        )
      );
    }

    component.plants = plants;

    fixture.detectChanges();
    debug = fixture.debugElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('validar encabezados de la tabla', () => {
    const table = document.querySelector('table');
    if (!table) return;
    const tableHeaders = Array.from(table.getElementsByTagName('th'));
    const headerName = ['#', 'Nombre común', 'Tipo', 'Clima'];
    tableHeaders.forEach((header) => {
      expect(headerName.some((item) => header.innerHTML === item)).toBeTruthy();
    });
  });

  it('validar contenido de la tabla', () => {
    const table = document.querySelector('table');
    if (!table) return;
    const tableHeaders = Array.from(table.getElementsByTagName('tr'));
    tableHeaders.forEach((content, index) => {
      const idPlant = String(component.plants[index].id);
      const nombreComunPlant = String(component.plants[index].nombre_comun);
      const tipoPlant = String(component.plants[index].tipo);
      const climaPlant = String(component.plants[index].clima);

      const idTable = content.getElementsByTagName('b').item(0)?.innerHTML;
      const nombreComunTable = content
        .getElementsByTagName('td')
        .item(1)?.innerHTML;
      const tipoTable = content.getElementsByTagName('td').item(2)?.innerHTML;
      const climaTable = content.getElementsByTagName('td').item(3)?.innerHTML;

      const datosPlant: Result = [
        idPlant,
        nombreComunPlant,
        tipoPlant,
        climaPlant,
      ];
      const datosTable: Result = [
        idTable,
        nombreComunTable,
        tipoTable,
        climaTable,
      ];

      expect(datosPlant).toEqual(datosTable);
    });
  });
});
