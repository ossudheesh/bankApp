import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimataionDemoComponent } from './animataion-demo.component';

describe('AnimataionDemoComponent', () => {
  let component: AnimataionDemoComponent;
  let fixture: ComponentFixture<AnimataionDemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnimataionDemoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AnimataionDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
