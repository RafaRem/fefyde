import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DocentesAdmComponent } from './docentes-adm.component';

describe('DocentesAdmComponent', () => {
  let component: DocentesAdmComponent;
  let fixture: ComponentFixture<DocentesAdmComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DocentesAdmComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DocentesAdmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
