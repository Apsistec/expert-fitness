import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DetailUsersPage } from './detail-users.page';

describe('DetailUsersPage', () => {
  let component: DetailUsersPage;
  let fixture: ComponentFixture<DetailUsersPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailUsersPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DetailUsersPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
