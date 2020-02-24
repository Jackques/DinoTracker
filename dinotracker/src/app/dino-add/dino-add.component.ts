import { Component, OnInit } from '@angular/core';
import { FormGroup } from "@angular/forms";
import { FormControl } from "@angular/forms";

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
    name: new FormControl(''),
    species: new FormControl(''),
    level: new FormControl(''),
    base_hp: new FormControl(''),
    base_melee: new FormControl(''),
  });

  onSubmit(){
    console.dir(this.newDino);
  }

}
