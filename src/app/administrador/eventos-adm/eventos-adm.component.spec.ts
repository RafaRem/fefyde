import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EventosAdmComponent } from './eventos-adm.component';

describe('EventosAdmComponent', () => {
  let component: EventosAdmComponent;
  let fixture: ComponentFixture<EventosAdmComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EventosAdmComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventosAdmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
