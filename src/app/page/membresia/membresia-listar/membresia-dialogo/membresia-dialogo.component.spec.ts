import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MembresiaDialogoComponent } from './membresia-dialogo.component';

describe('MembresiaDialogoComponent', () => {
  let component: MembresiaDialogoComponent;
  let fixture: ComponentFixture<MembresiaDialogoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MembresiaDialogoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MembresiaDialogoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
