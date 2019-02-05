import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OfertaAdmComponent } from './oferta-adm.component';

describe('OfertaAdmComponent', () => {
  let component: OfertaAdmComponent;
  let fixture: ComponentFixture<OfertaAdmComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OfertaAdmComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OfertaAdmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
