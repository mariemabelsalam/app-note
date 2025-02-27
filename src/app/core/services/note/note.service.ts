import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../shared/environment/environment';
import { IGetNotes } from '../../../shared/interfaces/IGetNotes/iget-notes';
import { IAddNote } from '../../../shared/interfaces/IAddNote/iadd-note';
import { IDelete } from '../../../shared/interfaces/IDelete/idelete';

@Injectable({
  providedIn: 'root'
})
export class NoteService {

  constructor(private readonly httpClient: HttpClient) { }

  addNote(data: object): Observable<IAddNote> {
    return this.httpClient.post<IAddNote>(`${environment.baseUrl}notes`, data)
  }

  getNotes(): Observable<IGetNotes> {
    return this.httpClient.get<IGetNotes>(`${environment.baseUrl}notes/allNotes`)
  }

  getUserNotes(): Observable<IGetNotes> {
    return this.httpClient.get<IGetNotes>(`${environment.baseUrl}notes`)
  }


  updateNote(id: string, data: object): Observable<IGetNotes> {
    return this.httpClient.put<IGetNotes>(`${environment.baseUrl}notes/${id}`, data)
  }

  deleteNote(id: string): Observable<IDelete> {
    return this.httpClient.delete<IDelete>(`${environment.baseUrl}notes/${id}`)
  }
}
