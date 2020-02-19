/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { DinoAddComponent } from './dino-add.component';

describe('DinoAddComponent', () => {
  let component: DinoAddComponent;
  let fixture: ComponentFixture<DinoAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DinoAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DinoAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
