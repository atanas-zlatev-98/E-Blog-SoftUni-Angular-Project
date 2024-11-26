import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AiTemplateBelowComponent } from './ai-template-below.component';

describe('AiTemplateBelowComponent', () => {
  let component: AiTemplateBelowComponent;
  let fixture: ComponentFixture<AiTemplateBelowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AiTemplateBelowComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AiTemplateBelowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
