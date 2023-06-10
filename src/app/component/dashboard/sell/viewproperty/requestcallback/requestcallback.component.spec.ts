import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestcallbackComponent } from './requestcallback.component';

describe('RequestcallbackComponent', () => {
  let component: RequestcallbackComponent;
  let fixture: ComponentFixture<RequestcallbackComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RequestcallbackComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RequestcallbackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
