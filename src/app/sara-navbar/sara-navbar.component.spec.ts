import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SaraNavbarComponent } from './sara-navbar.component';

describe('SaraNavbarComponent', () => {
  let component: SaraNavbarComponent;
  let fixture: ComponentFixture<SaraNavbarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SaraNavbarComponent]
    });
    fixture = TestBed.createComponent(SaraNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
