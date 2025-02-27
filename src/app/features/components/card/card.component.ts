import { NoteService } from './../../../core/services/note/note.service';
import { Component, Input } from '@angular/core';
import { AllNote, IGetNotes } from '../../../shared/interfaces/IGetNotes/iget-notes';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-card',
  imports: [DatePipe],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {

  @Input() note!:AllNote ;
  @Input() home!:boolean;
  @Input() notes!:boolean;

 
}
