import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MatStudyComponent } from './mat-study.component';

describe('MatStudyComponent', () => {
  let component: MatStudyComponent;
  let fixture: ComponentFixture<MatStudyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MatStudyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MatStudyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
