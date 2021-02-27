import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ValidFirstComponent } from './valid-first.component';

describe('ValidFirstComponent', () => {
  let component: ValidFirstComponent;
  let fixture: ComponentFixture<ValidFirstComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ValidFirstComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ValidFirstComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
