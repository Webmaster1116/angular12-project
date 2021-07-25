import { ComponentFixture, TestBed } from '@angular/core/testing';

import { salespersonsComponent } from './salespersons.component';

describe('salespersonsComponent', () => {
  let component: salespersonsComponent;
  let fixture: ComponentFixture<salespersonsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ salespersonsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(salespersonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
