import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TechSectionContentComponent } from './tech-section-content.component';

describe('TechSectionContentComponent', () => {
  let component: TechSectionContentComponent;
  let fixture: ComponentFixture<TechSectionContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TechSectionContentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TechSectionContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
