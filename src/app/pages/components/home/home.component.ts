import { DatePipe, SlicePipe } from '@angular/common';
import { AllNote } from '../../../shared/interfaces/IGetNotes/iget-notes';
import { NoteService } from './../../../core/services/note/note.service';
import { Component } from '@angular/core';
import { CardComponent } from "../../../features/components/card/card.component";

@Component({
  selector: 'app-home',
  imports: [CardComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  constructor(private readonly noteService: NoteService) { }

  getALLNotes: AllNote[] = []
  ngOnInit(): void {
    this.noteService.getNotes().subscribe({
      next: (res) => {
        this.getALLNotes=res.notes
        console.log(this.getALLNotes);
      }
    })

  }

}
