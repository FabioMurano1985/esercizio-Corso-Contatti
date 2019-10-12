import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InserisciContattoComponent } from './inserisci-contatto.component';

describe('InserisciContattoComponent', () => {
  let component: InserisciContattoComponent;
  let fixture: ComponentFixture<InserisciContattoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InserisciContattoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InserisciContattoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
