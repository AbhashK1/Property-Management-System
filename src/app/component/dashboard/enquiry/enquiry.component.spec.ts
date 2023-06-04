import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnquiryComponent } from './enquiry.component';

describe('EnquiryComponent', () => {
  let component: EnquiryComponent;
  let fixture: ComponentFixture<EnquiryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EnquiryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EnquiryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
