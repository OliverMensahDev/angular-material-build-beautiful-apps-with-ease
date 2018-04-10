import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddpostdialogComponent } from './addpostdialog.component';

describe('AddpostdialogComponent', () => {
  let component: AddpostdialogComponent;
  let fixture: ComponentFixture<AddpostdialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddpostdialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddpostdialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
