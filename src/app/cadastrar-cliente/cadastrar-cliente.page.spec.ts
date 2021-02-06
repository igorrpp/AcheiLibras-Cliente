import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CadastrarClientePage } from './cadastrar-cliente.page';

describe('CadastrarClientePage', () => {
  let component: CadastrarClientePage;
  let fixture: ComponentFixture<CadastrarClientePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CadastrarClientePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CadastrarClientePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
