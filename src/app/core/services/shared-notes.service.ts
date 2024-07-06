import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Note } from '../interfices/Note';

@Injectable({
  providedIn: 'root',
})
export class SharedNotesService {
  private notesSubject = new BehaviorSubject<Note[]>([]);
  notes$ = this.notesSubject.asObservable();

  private notes: Note[] = [];

  constructor() {
    this.notes = this.getAllNotes();
    this.notesSubject.next(this.notes);
  }

  getAllNotes(): Note[] {
    const notesItem = localStorage.getItem('Notes');
    return notesItem ? JSON.parse(notesItem) : [];
  }

  create(note: Note): void {
    this.notes.push(note);
    this.notesSubject.next(this.notes);
    localStorage.setItem('Notes', JSON.stringify(this.notes));
  }

  delete(id: number): void {
    this.notes = this.notes.filter((note) => note.id !== id);
    this.notesSubject.next(this.notes);
    localStorage.setItem('Notes', JSON.stringify(this.notes)); 
  }
}


