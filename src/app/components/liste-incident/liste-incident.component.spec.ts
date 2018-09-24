import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeIncidentComponent } from './liste-incident.component';

describe('ListeIncidentComponent', () => {
  let component: ListeIncidentComponent;
  let fixture: ComponentFixture<ListeIncidentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListeIncidentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListeIncidentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
