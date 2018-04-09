/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { SpheresComponent } from './spheres.component';

describe('SpheresComponent', () => {
  let component: SpheresComponent;
  let fixture: ComponentFixture<SpheresComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpheresComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpheresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
