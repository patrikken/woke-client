import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DemandedevisComponent } from './demandedevis.component';

describe('DemandedevisComponent', () => {
  let component: DemandedevisComponent;
  let fixture: ComponentFixture<DemandedevisComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DemandedevisComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DemandedevisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
