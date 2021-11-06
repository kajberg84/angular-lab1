import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TypescriptinfoComponent } from './typescriptinfo.component';

describe('TypescriptinfoComponent', () => {
  let component: TypescriptinfoComponent;
  let fixture: ComponentFixture<TypescriptinfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TypescriptinfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TypescriptinfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
