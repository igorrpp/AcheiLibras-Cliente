import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { InterpretesPage } from './interpretes.page';

describe('InterpretesPage', () => {
  let component: InterpretesPage;
  let fixture: ComponentFixture<InterpretesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InterpretesPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(InterpretesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
