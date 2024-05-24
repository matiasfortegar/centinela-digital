import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ListadoSalidasPage } from './listado-salidas.page';

describe('ListadoSalidasPage', () => {
  let component: ListadoSalidasPage;
  let fixture: ComponentFixture<ListadoSalidasPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ListadoSalidasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
