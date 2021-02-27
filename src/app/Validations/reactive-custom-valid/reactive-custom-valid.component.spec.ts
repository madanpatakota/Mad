import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactiveCustomValidComponent } from './reactive-custom-valid.component';

describe('ReactiveCustomValidComponent', () => {
  let component: ReactiveCustomValidComponent;
  let fixture: ComponentFixture<ReactiveCustomValidComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReactiveCustomValidComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReactiveCustomValidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
