import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProvIngresoPage } from './prov-ingreso.page';

describe('ProvIngresoPage', () => {
  let component: ProvIngresoPage;
  let fixture: ComponentFixture<ProvIngresoPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ProvIngresoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
