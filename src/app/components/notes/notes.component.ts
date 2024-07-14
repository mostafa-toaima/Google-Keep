import { SharedNotesService } from './../../core/services/shared-notes.service';
import { Component, ContentChild, OnInit, inject } from '@angular/core';
import { AddNoteComponent } from '../add-note/add-note.component';
import {  NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Note } from '../../core/interfices/Note';
import { UpdateComponent } from '../update/update.component';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrl: './notes.component.scss',
})
export class NotesComponent implements OnInit {
  notes: Note[] = [];
  CompletedNotes: Note[] = [];
  @ContentChild(UpdateComponent) updateComponent!: UpdateComponent;

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

  // complete(note: Note) {
  //   // this.CompletedNotes.push(note);
  //   note.completed = true;
  // }

  update(note: any) {
    const modalRef = this.modalService.open(UpdateComponent);
    modalRef.componentInstance.note = note; 
  }
  removeNote(id: number) {
    this._SharedNotesService.delete(id);
  }
}
