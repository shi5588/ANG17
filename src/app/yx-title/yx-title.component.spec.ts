import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { YxTitleComponent } from './yx-title.component';

describe('YxTitleComponent', () => {
  let component: YxTitleComponent;
  let fixture: ComponentFixture<YxTitleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ YxTitleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(YxTitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
