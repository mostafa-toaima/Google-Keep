import { SharedNotesService } from './../../core/services/shared-notes.service';
import { Component, OnInit, inject } from '@angular/core';
import { AddNoteComponent } from '../add-note/add-note.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Note } from '../../core/interfices/Note';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrl: './notes.component.scss',
})
export class NotesComponent implements OnInit {
  notes: Note[] = [];
  CompletedNotes: Note[] = [];

  constructor(
    private modalService: NgbModal,
    private _SharedNotesService: SharedNotesService
  ) {}

  ngOnInit(): void {
    this._SharedNotesService.notes$.subscribe((notes) => {
      this.notes = notes;
    });
  }

  open() {
    this.modalService.open(AddNoteComponent);
  }

  complete(note: Note) {
    // this.CompletedNotes.push(note);
    note.completed = true;
  }

  removeNote(id: number) {
    this._SharedNotesService.delete(id);
  }
}
