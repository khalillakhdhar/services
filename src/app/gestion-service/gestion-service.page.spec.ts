import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { GestionServicePage } from './gestion-service.page';

describe('GestionServicePage', () => {
  let component: GestionServicePage;
  let fixture: ComponentFixture<GestionServicePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GestionServicePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(GestionServicePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
