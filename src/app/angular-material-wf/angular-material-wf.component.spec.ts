import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularMaterialWfComponent } from './angular-material-wf.component';

describe('AngularMaterialWfComponent', () => {
  let component: AngularMaterialWfComponent;
  let fixture: ComponentFixture<AngularMaterialWfComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AngularMaterialWfComponent]
    });
    fixture = TestBed.createComponent(AngularMaterialWfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
