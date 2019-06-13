import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyMineComponent } from './my-mine.component';

describe('MyMineComponent', () => {
  let component: MyMineComponent;
  let fixture: ComponentFixture<MyMineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyMineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyMineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
