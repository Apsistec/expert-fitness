import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { UploadExcelComponent } from './upload-excel.component';

describe('UploadExcelComponent', () => {
  let component: UploadExcelComponent;
  let fixture: ComponentFixture<UploadExcelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UploadExcelComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(UploadExcelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
