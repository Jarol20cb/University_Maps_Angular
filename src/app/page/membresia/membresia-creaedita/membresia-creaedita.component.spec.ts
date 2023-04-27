import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MembresiaCreaeditaComponent } from './membresia-creaedita.component';

describe('MembresiaCreaeditaComponent', () => {
  let component: MembresiaCreaeditaComponent;
  let fixture: ComponentFixture<MembresiaCreaeditaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MembresiaCreaeditaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MembresiaCreaeditaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
