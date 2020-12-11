import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanyPaymentsComponent } from './pagos-empresa.component';

describe('PagosEmpresaComponent', () => {
  let component: CompanyPaymentsComponent;
  let fixture: ComponentFixture<CompanyPaymentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompanyPaymentsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CompanyPaymentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
