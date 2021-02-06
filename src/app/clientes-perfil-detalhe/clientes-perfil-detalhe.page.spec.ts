import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ClientesPerfilDetalhePage } from './clientes-perfil-detalhe.page';

describe('ClientesPerfilDetalhePage', () => {
  let component: ClientesPerfilDetalhePage;
  let fixture: ComponentFixture<ClientesPerfilDetalhePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClientesPerfilDetalhePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ClientesPerfilDetalhePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
