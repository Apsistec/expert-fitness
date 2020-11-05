import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { UserTicketsPage } from './user-tickets.page';

describe('UserTicketsPage', () => {
  let component: UserTicketsPage;
  let fixture: ComponentFixture<UserTicketsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserTicketsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(UserTicketsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
