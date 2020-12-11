import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifyDataUserComponent } from './modify-data-user.component';

describe('ModificarDatosUserComponent', () => {
  let component: ModifyDataUserComponent;
  let fixture: ComponentFixture<ModifyDataUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModifyDataUserComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModifyDataUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
