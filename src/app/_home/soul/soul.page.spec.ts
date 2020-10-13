import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SoulPage } from './soul.page';

describe('SoulPage', () => {
  let component: SoulPage;
  let fixture: ComponentFixture<SoulPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SoulPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SoulPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
