import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifyDataCompanyComponent } from './modify-data-company.component';

describe('ModificarDatosEmpresaComponent', () => {
  let component: ModifyDataCompanyComponent;
  let fixture: ComponentFixture<ModifyDataCompanyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModifyDataCompanyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModifyDataCompanyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
