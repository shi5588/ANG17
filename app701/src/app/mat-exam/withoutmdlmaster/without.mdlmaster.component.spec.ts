import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Without.MdlmasterComponent } from './without.mdlmaster.component';

describe('Without.MdlmasterComponent', () => {
  let component: Without.MdlmasterComponent;
  let fixture: ComponentFixture<Without.MdlmasterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Without.MdlmasterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Without.MdlmasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
