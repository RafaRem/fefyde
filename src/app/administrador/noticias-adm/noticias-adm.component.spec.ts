import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NoticiasAdmComponent } from './noticias-adm.component';

describe('NoticiasAdmComponent', () => {
  let component: NoticiasAdmComponent;
  let fixture: ComponentFixture<NoticiasAdmComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NoticiasAdmComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NoticiasAdmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
