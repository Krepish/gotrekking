/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { TourItemComponent } from './tour-item.component';

describe('TourItemComponent', () => {
  let component: TourItemComponent;
  let fixture: ComponentFixture<TourItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TourItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TourItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
