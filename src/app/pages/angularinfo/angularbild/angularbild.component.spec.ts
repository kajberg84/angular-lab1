import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularbildComponent } from './angularbild.component';

describe('AngularbildComponent', () => {
  let component: AngularbildComponent;
  let fixture: ComponentFixture<AngularbildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AngularbildComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AngularbildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
