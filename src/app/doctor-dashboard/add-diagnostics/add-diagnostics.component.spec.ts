import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddDiagnosticComponent } from './add-diagnostics.component';

describe('AddProductComponent', () => {
  let component: AddDiagnosticComponent;
  let fixture: ComponentFixture<AddDiagnosticComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddDiagnosticComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddDiagnosticComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
