import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ExcelSheetJsComponent } from './excel-sheet-js.component';

describe('ExcelSheetJsComponent', () => {
  let component: ExcelSheetJsComponent;
  let fixture: ComponentFixture<ExcelSheetJsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExcelSheetJsComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ExcelSheetJsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
