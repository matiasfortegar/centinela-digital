import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ListadoNotiPage } from './listado-noti.page';

describe('ListadoNotiPage', () => {
  let component: ListadoNotiPage;
  let fixture: ComponentFixture<ListadoNotiPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ListadoNotiPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
