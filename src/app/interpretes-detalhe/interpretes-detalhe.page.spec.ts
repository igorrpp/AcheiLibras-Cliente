import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { InterpretesDetalhePage } from './interpretes-detalhe.page';

describe('InterpretesDetalhePage', () => {
  let component: InterpretesDetalhePage;
  let fixture: ComponentFixture<InterpretesDetalhePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InterpretesDetalhePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(InterpretesDetalhePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
