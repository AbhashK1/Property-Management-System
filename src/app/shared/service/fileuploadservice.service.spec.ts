import { TestBed } from '@angular/core/testing';

import { FileuploadserviceService } from './fileuploadservice.service';

describe('FileuploadserviceService', () => {
  let service: FileuploadserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FileuploadserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
