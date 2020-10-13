import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MindPage } from './mind.page';

describe('MindPage', () => {
  let component: MindPage;
  let fixture: ComponentFixture<MindPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MindPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MindPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
