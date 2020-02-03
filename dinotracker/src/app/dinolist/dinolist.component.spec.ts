import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DinolistComponent } from './dinolist.component';

describe('DinolistComponent', () => {
  let component: DinolistComponent;
  let fixture: ComponentFixture<DinolistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DinolistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DinolistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
