import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { CreateDriveComponent } from './createdrive.component';

describe('CreateDriveComponent', () => {
  let component: CreateDriveComponent;
  let fixture: ComponentFixture<CreateDriveComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateDriveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateDriveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
