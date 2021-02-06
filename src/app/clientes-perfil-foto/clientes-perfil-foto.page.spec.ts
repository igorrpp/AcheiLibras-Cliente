import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ClientesPerfilFotoPage } from './clientes-perfil-foto.page';

describe('ClientesPerfilFotoPage', () => {
  let component: ClientesPerfilFotoPage;
  let fixture: ComponentFixture<ClientesPerfilFotoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClientesPerfilFotoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ClientesPerfilFotoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
