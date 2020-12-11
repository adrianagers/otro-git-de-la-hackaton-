import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TendersComponent } from './tenders.component';

describe('OfertasComponent', () => {
  let component: TendersComponent;
  let fixture: ComponentFixture<TendersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TendersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TendersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
