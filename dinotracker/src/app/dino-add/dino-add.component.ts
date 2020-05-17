import { Component, OnInit } from '@angular/core';
import { FormGroup } from "@angular/forms";
import { FormControl } from "@angular/forms";
import { DinolistService } from "../dinolist/dinolist.service";
import { Dino } from '../dinolist/dino.interface';

@Component({
  selector: 'app-dino-add',
  templateUrl: './dino-add.component.html',
  styleUrls: ['./dino-add.component.css']
})
export class DinoAddComponent implements OnInit {

  constructor(private dinolistService: DinolistService) { }

  newDino = new FormGroup({
    name: new FormControl(''),
    species: new FormControl(''),
    level: new FormControl(''),
    base_hp: new FormControl(''),
    base_melee: new FormControl(''),
  });

  dino: Dino;

  ngOnInit() {
    //todo: dino is undefined whilst being initiated above? Don't know why, please fix!
    this.dino.name = "";
    this.dino.species = "rex";
    this.dino.base_level = 0;
    this.dino.base_melee = 0;
    this.dino.base_healthpoints = 0;
  }

  onSubmit(){
    console.dir(this.newDino);

    this.dino.name = this.newDino.value.name;
    this.dino.species = this.newDino.value.species;
    this.dino.base_level = this.newDino.value.level;
    this.dino.base_melee = this.newDino.value.base_melee;
    this.dino.base_healthpoints = this.newDino.value.base_hp;

    this.dinolistService.addDinoToList(this.dino);
  }

}
