import { Component, OnInit } from '@angular/core';
import * as Quill from 'quill';

@Component({
  selector: 'app-quill-editor',
  templateUrl: './quill-editor.component.html',
  styleUrls: ['./quill-editor.component.scss']
})
export class QuillEditorComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    const quill = new Quill('#editor-container', {
      modules: {
        toolbar: {
          container: '.toolbar'
        }
      },
      placeholder: 'Compose an epic...',
      theme: 'snow'
    });
  }

}
