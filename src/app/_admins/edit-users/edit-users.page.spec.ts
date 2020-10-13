import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EditUsersPage } from './edit-users.page';

describe('EditUsersPage', () => {
  let component: EditUsersPage;
  let fixture: ComponentFixture<EditUsersPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditUsersPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EditUsersPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
