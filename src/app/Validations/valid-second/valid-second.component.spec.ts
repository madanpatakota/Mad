import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ValidSecondComponent } from './valid-second.component';

describe('ValidSecondComponent', () => {
  let component: ValidSecondComponent;
  let fixture: ComponentFixture<ValidSecondComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ValidSecondComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ValidSecondComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
