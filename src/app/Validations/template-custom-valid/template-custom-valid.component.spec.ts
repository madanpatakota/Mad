import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplateCustomValidComponent } from './template-custom-valid.component';

describe('TemplateCustomValidComponent', () => {
  let component: TemplateCustomValidComponent;
  let fixture: ComponentFixture<TemplateCustomValidComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TemplateCustomValidComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TemplateCustomValidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
