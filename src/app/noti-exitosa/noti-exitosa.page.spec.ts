import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NotiExitosaPage } from './noti-exitosa.page';

describe('NotiExitosaPage', () => {
  let component: NotiExitosaPage;
  let fixture: ComponentFixture<NotiExitosaPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(NotiExitosaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
