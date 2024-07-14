import { Component, Input, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Note } from '../../core/interfices/Note';
import { BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrl: './update.component.scss',
})
export class UpdateComponent implements OnInit {
  newNote: Note = {
    id: 0,
    title: '',
    description: '',
    completed: false,
  };


  constructor(
    public activeModal: NgbActiveModal,
    private modalRef: BsModalRef
  ) {}

  @Input() note: any;
  ngOnInit(): void {
      this.newNote = this.note;
  }

  updateNote(){
    console.log("update");

  }
}
