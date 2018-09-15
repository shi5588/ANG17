import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MathtestComponent } from './mathtest.component';

describe('MathtestComponent', () => {
  let component: MathtestComponent;
  let fixture: ComponentFixture<MathtestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MathtestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MathtestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
