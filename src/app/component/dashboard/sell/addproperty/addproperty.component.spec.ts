import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddpropertyComponent } from './addproperty.component';

describe('AddpropertyComponent', () => {
  let component: AddpropertyComponent;
  let fixture: ComponentFixture<AddpropertyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddpropertyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddpropertyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
