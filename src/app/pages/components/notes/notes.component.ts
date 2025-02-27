import { ToastrService } from 'ngx-toastr';

import { NoteService } from './../../../core/services/note/note.service';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms'
import { UserNote } from '../../../shared/interfaces/IAddNote/iadd-note';
import { AllNote } from '../../../shared/interfaces/IGetNotes/iget-notes';
import { CardComponent } from "../../../features/components/card/card.component";
import Swal from 'sweetalert2'

@Component({
  selector: 'app-notes',
  imports: [ReactiveFormsModule, CardComponent],
  templateUrl: './notes.component.html',
  styleUrl: './notes.component.css'
})
export class NotesComponent {
  constructor(private readonly noteService: NoteService, private readonly toastrService: ToastrService) { }

  userNotes: UserNote = {} as UserNote
  getAllUserNotes: AllNote[] = []


  addForm: FormGroup = new FormGroup({
    title: new FormControl(null, [Validators.required]),
    content: new FormControl(null, [Validators.required]),
  })

  updateForm: FormGroup = new FormGroup({
    _id: new FormControl(null),
    title: new FormControl(null, [Validators.required]),
    content: new FormControl(null, [Validators.required]),
  })

  ngOnInit(): void {
    this.getUserNotes()
  }

  getUserNotes() {
    this.noteService.getUserNotes().subscribe({
      next: (res) => {
        this.getAllUserNotes = res.notes
      }
    })
  }

  submit() {
    if (this.addForm.valid) {
      this.noteService.addNote(this.addForm.value).subscribe({
        next: (res) => {
          this.getUserNotes()
          this.userNotes = res.note
          // console.log(this.userNotes);
        }
      })
    }
    else {
      this.addForm.markAllAsTouched()
    }
  }

  deleteNote(id: string) {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then((result) => {
      if (result.isConfirmed) {
        this.noteService.deleteNote(id).subscribe({
          next: (res) => {
            // console.log(res);
            this.toastrService.success(res.msg)
            this.getUserNotes()
            Swal.fire({
              title: "Deleted!",
              text: "Your file has been deleted.",
              icon: "success"
            });
          },
          error: (err) => {
            this.getAllUserNotes = []
          }
        })

      }
    });
  }

  getValue(note: any) {
    this.updateForm.patchValue(note)
  }


  submit2() {
    const id = this.updateForm.get('_id')?.value;
    const title = this.updateForm.get('title')?.value;
    const content = this.updateForm.get('content')?.value;
    this.noteService.updateNote(id, { title, content }).subscribe({
      next: (res) => {
        console.log(res);
        this.getUserNotes()
      }
    })
  }
}
