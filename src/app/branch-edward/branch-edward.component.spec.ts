import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BranchEdwardComponent } from './branch-edward.component';

describe('BranchEdwardComponent', () => {
  let component: BranchEdwardComponent;
  let fixture: ComponentFixture<BranchEdwardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BranchEdwardComponent]
    });
    fixture = TestBed.createComponent(BranchEdwardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
