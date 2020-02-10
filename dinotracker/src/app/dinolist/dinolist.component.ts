import { Component, OnInit } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { Dino } from "./dino.interface";
@Component({
  selector: 'app-dinolist',
  templateUrl: './dinolist.component.html',
  styleUrls: ['./dinolist.component.scss']
})
export class DinolistComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  //todo: Figure out why Type species can be other string values and doesn't produce an error

  dinoList: Dino[] = [
    {position: 1, name: 'Floor', species: 'rex', base_level: 90, base_melee: 303, base_healthpoints: 20000},
    {position: 2, name: 'Jansen', species: 'rex', base_level: 90, base_melee: 4.0026, base_healthpoints: 30000},
    {position: 3, name: 'Lithium', species: 'rex', base_level: 90, base_melee: 6.941, base_healthpoints: 40000},
    {position: 4, name: 'Beryllium', species: 'rex', base_level: 90, base_melee: 9.0122, base_healthpoints: 15000},
    {position: 5, name: 'Boron', species: 'rex', base_level: 90, base_melee: 10.811, base_healthpoints: 15000},
    {position: 6, name: 'Carbon', species: 'rex', base_level: 90, base_melee: 12.0107, base_healthpoints: 15000},
    {position: 7, name: 'Nitrogen', species: 'rex', base_level: 90, base_melee: 14.0067, base_healthpoints: 15000},
    {position: 8, name: 'Oxygen', species: 'rex', base_level: 90, base_melee: 15.9994, base_healthpoints: 15000},
    {position: 9, name: 'Fluorine', species: 'rex', base_level: 90, base_melee: 18.9984, base_healthpoints: 15000},
    {position: 10, name: 'Neon', species: 'rex', base_level: 90, base_melee: 20.1797, base_healthpoints: 15000},
  ];

  columnsToDisplay = ['name', 'species', 'base_level', 'base_melee', 'base_healthpoints'];

}
