import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { BodyPage } from './body.page';

describe('BodyPage', () => {
  let component: BodyPage;
  let fixture: ComponentFixture<BodyPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BodyPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(BodyPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
