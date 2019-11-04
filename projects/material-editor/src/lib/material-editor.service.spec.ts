import {inject, TestBed} from '@angular/core/testing';

import {MaterialEditorService} from './material-editor.service';
import {HttpClientModule} from '@angular/common/http';

describe('MaterialEditorService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientModule ],
      providers: [MaterialEditorService]
    });
  });

  it('should be created', inject([MaterialEditorService], (service: MaterialEditorService) => {
    expect(service).toBeTruthy();
  }));
});
