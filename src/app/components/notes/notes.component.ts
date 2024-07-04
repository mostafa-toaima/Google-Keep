import { Component, TemplateRef } from '@angular/core';

interface Note {
  title: string;
  description: string;
}

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrl: './notes.component.scss',
})
export class NotesComponent {

  constructor() {}

  Notes: Note[] = [
    {
      title: 'Task Angular',
      description:
        'Angular is a platform and set of tools for building applications with HTML and TypeScript',
    },
  ];
}
