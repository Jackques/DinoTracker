import { Component, OnInit } from '@angular/core';
import { MatTableModule } from '@angular/material/table';

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

  columnsToDisplay = ['name', 'species', 'base_level', 'base_melee', 'base_healthpoints'];

}
