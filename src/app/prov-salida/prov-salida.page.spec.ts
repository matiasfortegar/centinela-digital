import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProvSalidaPage } from './prov-salida.page';

describe('ProvSalidaPage', () => {
  let component: ProvSalidaPage;
  let fixture: ComponentFixture<ProvSalidaPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ProvSalidaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
