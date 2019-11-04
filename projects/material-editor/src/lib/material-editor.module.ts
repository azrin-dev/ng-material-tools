import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MaterialEditorComponent } from './material-editor.component';
import { MaterialEditorToolbarComponent } from './material-editor-toolbar.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MaterialEditorService } from './material-editor.service';
import { MatButtonModule } from '@angular/material/button';


@NgModule({
   declarations: [
      MaterialEditorToolbarComponent,
      MaterialEditorComponent
   ],
   imports: [
      CommonModule,
      FormsModule,
      ReactiveFormsModule,
      HttpClientModule,
      FlexLayoutModule,
      MatButtonToggleModule,
      MatButtonModule
   ],
   exports: [
      CommonModule,
      FormsModule,
      ReactiveFormsModule,
      HttpClientModule,
      FlexLayoutModule,
      MatButtonToggleModule,
      MaterialEditorComponent,
      MatButtonModule
   ],
   providers: [
      MaterialEditorService
    ]
})

export class MaterialEditorModule {}
