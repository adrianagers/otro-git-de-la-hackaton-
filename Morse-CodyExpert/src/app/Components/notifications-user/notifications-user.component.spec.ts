import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotificationsUserComponent } from './notifications-user.component';

describe('NotificacionesUserComponent', () => {
  let component: NotificationsUserComponent;
  let fixture: ComponentFixture<NotificationsUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NotificationsUserComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NotificationsUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
