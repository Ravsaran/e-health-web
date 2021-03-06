import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewDoctorsComponent } from './view-doctors.component';

describe('ViewProductsComponent', () => {
  let component: ViewDoctorsComponent;
  let fixture: ComponentFixture<ViewDoctorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewDoctorsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewDoctorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
