import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanyCardsComponent } from './company-cards.component';

describe('TarjetasCompanyComponent', () => {
  let component: CompanyCardsComponent;
  let fixture: ComponentFixture<CompanyCardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompanyCardsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CompanyCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
