import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TargetDrive1Component } from './targetdrive1.component';

describe('TargetDriveComponent', () => {
  let component: TargetDrive1Component;
  let fixture: ComponentFixture<TargetDrive1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TargetDrive1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TargetDrive1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
