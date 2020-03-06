import { Component, OnInit } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import {DinolistService} from '../dinolist.service';

@Component({
  selector: 'app-dinolist',
  templateUrl: './dinolist.component.html',
  styleUrls: ['./dinolist.component.scss']
})
export class DinolistComponent implements OnInit {

  constructor(private dinoListService: DinolistService) { }

  ngOnInit() {
  }

  // todo: Figure out why Type species can be other string values and doesn't produce an error

  list = this.dinoListService.dinoList;
  // this.heroes = this.heroService.getHeroes();

  columnsToDisplay = ['name', 'species', 'base_level', 'base_melee', 'base_healthpoints'];

}
