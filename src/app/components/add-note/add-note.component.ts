import { SharedNotesService } from './../../core/services/shared-notes.service';
import { Component, ElementRef, Input, ViewChild, inject } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Note } from '../../core/interfices/Note';

@Component({
  selector: 'app-add-note',
  templateUrl: './add-note.component.html',
  styleUrl: './add-note.component.scss',
})
export class AddNoteComponent {
  // activeModal = inject(NgbActiveModal);

  newNote: Note = {
    id: 0,
    title: '',
    description: '',
    completed: false,
  };

  constructor(
    public activeModal: NgbActiveModal,
    private _SharedNotesService: SharedNotesService
  ) {}

  createNote() {
    this._SharedNotesService.create(this.newNote);
    this.activeModal.close();
  }
}
