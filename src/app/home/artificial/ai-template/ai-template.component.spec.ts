import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AiTemplateComponent } from './ai-template.component';

describe('AiTemplateComponent', () => {
  let component: AiTemplateComponent;
  let fixture: ComponentFixture<AiTemplateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AiTemplateComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AiTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
