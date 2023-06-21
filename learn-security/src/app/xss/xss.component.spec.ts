import { ComponentFixture, TestBed } from '@angular/core/testing';

import { XssComponent } from './xss.component';

describe('XssComponent', () => {
  let component: XssComponent;
  let fixture: ComponentFixture<XssComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [XssComponent]
    });
    fixture = TestBed.createComponent(XssComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
