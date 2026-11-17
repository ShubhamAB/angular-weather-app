import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WixCloneComponent } from './wix-clone.component';

describe('WixCloneComponent', () => {
  let component: WixCloneComponent;
  let fixture: ComponentFixture<WixCloneComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WixCloneComponent]
    });
    fixture = TestBed.createComponent(WixCloneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
