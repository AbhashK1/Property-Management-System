import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeletepropertyComponent } from './deleteproperty.component';

describe('DeletepropertyComponent', () => {
  let component: DeletepropertyComponent;
  let fixture: ComponentFixture<DeletepropertyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeletepropertyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeletepropertyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
