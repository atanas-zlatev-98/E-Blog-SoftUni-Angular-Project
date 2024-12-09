import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopTenSingleComponent } from './top-ten-single.component';

describe('TopTenSingleComponent', () => {
  let component: TopTenSingleComponent;
  let fixture: ComponentFixture<TopTenSingleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TopTenSingleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TopTenSingleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
