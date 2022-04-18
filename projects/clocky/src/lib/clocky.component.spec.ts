import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClockyComponent } from './digital-clock/clocky.component';

describe('ClockyComponent', () => {
  let component: ClockyComponent;
  let fixture: ComponentFixture<ClockyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClockyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClockyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
