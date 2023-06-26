import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavNmenuComponent } from './nav-menu.component';

describe('NavNmenuComponent', () => {
  let component: NavNmenuComponent;
  let fixture: ComponentFixture<NavNmenuComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NavNmenuComponent]
    });
    fixture = TestBed.createComponent(NavNmenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
