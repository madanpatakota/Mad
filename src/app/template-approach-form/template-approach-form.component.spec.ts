import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplateApproachFormComponent } from './template-approach-form.component';

describe('TemplateApproachFormComponent', () => {
  let component: TemplateApproachFormComponent;
  let fixture: ComponentFixture<TemplateApproachFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TemplateApproachFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TemplateApproachFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
