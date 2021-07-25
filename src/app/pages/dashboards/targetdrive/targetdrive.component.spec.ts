import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TargetDriveComponent } from './targetdrive.component';

describe('TargetDriveComponent', () => {
  let component: TargetDriveComponent;
  let fixture: ComponentFixture<TargetDriveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TargetDriveComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TargetDriveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
