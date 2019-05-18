import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScalibComponent } from './scalib.component';

describe('ScalibComponent', () => {
  let component: ScalibComponent;
  let fixture: ComponentFixture<ScalibComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScalibComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScalibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
