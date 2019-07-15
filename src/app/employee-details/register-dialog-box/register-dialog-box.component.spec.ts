import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterDialogBoxComponent } from './register-dialog-box.component';

describe('RegisterDialogBoxComponent', () => {
  let component: RegisterDialogBoxComponent;
  let fixture: ComponentFixture<RegisterDialogBoxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegisterDialogBoxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterDialogBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
