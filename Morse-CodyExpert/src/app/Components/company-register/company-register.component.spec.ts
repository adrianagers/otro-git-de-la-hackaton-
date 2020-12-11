import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanyRegisterComponent } from './company-register.component';

describe('RegistroEmpresaComponent', () => {
  let component: CompanyRegisterComponent;
  let fixture: ComponentFixture<CompanyRegisterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompanyRegisterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CompanyRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
