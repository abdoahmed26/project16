import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RejserFormComponent } from './rejser-form.component';

describe('RejserFormComponent', () => {
  let component: RejserFormComponent;
  let fixture: ComponentFixture<RejserFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RejserFormComponent]
    });
    fixture = TestBed.createComponent(RejserFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
