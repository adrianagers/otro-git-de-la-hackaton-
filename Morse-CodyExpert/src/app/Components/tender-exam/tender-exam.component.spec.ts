import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExamenOfertaComponent } from './tender-exam.component';

describe('ExamenOfertaComponent', () => {
  let component: ExamenOfertaComponent;
  let fixture: ComponentFixture<ExamenOfertaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExamenOfertaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExamenOfertaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
