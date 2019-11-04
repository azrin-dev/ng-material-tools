import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MaterialEditorComponent } from './material-editor.component';
import { MaterialEditorToolbarComponent } from './material-editor-toolbar.component';
import { MaterialEditorService } from './material-editor.service';

describe('MaterialEditorComponent', () => {
  let component: MaterialEditorComponent;
  let fixture: ComponentFixture<MaterialEditorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
         MatButtonToggleModule,
         FormsModule,
         ReactiveFormsModule,
         HttpClientModule
      ],
      declarations: [ MaterialEditorComponent, MaterialEditorToolbarComponent ],
      providers: [ MaterialEditorService ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MaterialEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
