/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { RentalListingComponent } from './rental-listing.component';

describe('RentalListingComponent', () => {
  let component: RentalListingComponent;
  let fixture: ComponentFixture<RentalListingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RentalListingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RentalListingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
