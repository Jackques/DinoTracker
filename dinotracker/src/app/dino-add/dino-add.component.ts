import { Component, OnInit } from '@angular/core';
import {FormGroup, Validators} from "@angular/forms";
import { FormControl } from "@angular/forms";
import {validate} from "codelyzer/walkerFactory/walkerFn";
import {DinolistService} from "../dinolist.service";

@Component({
  selector: 'app-dino-add',
  templateUrl: './dino-add.component.html',
  styleUrls: ['./dino-add.component.css']
})
export class DinoAddComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  newDino = new FormGroup({
    name: new FormControl('', Validators.required),
    species: new FormControl('', Validators.required),
    level: new FormControl('', Validators.required),
    base_hp: new FormControl('', Validators.required),
    base_melee: new FormControl('', Validators.required),
  });

  onSubmit(){
    console.dir(this.newDino);
    DinolistService.();


}
