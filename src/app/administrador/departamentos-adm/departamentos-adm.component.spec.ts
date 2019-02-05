import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DepartamentosAdmComponent } from './departamentos-adm.component';

describe('DepartamentosAdmComponent', () => {
  let component: DepartamentosAdmComponent;
  let fixture: ComponentFixture<DepartamentosAdmComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DepartamentosAdmComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DepartamentosAdmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
