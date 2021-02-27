import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReacativeApproachTwoComponent } from './reacative-approach-two.component';

describe('ReacativeApproachTwoComponent', () => {
  let component: ReacativeApproachTwoComponent;
  let fixture: ComponentFixture<ReacativeApproachTwoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReacativeApproachTwoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReacativeApproachTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
