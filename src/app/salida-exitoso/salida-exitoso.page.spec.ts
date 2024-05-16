import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SalidaExitosoPage } from './salida-exitoso.page';

describe('SalidaExitosoPage', () => {
  let component: SalidaExitosoPage;
  let fixture: ComponentFixture<SalidaExitosoPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(SalidaExitosoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
