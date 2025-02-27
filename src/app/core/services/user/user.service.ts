import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../shared/environment/environment';
import { ISignUpFail, ISignUpSucc } from '../../../shared/interfaces/isign-up';
import { IsigninSucc } from '../../../shared/interfaces/ISignin/isignin';
import { jwtDecode } from "jwt-decode";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private readonly httpClient: HttpClient) { }


  signUp(data: object): Observable<ISignUpFail | ISignUpSucc> {
    return this.httpClient.post<ISignUpFail | ISignUpSucc>(`${environment.baseUrl}users/signUp`, data)
  }



  signIn(data: object): Observable<IsigninSucc> {
    return this.httpClient.post<IsigninSucc>(`${environment.baseUrl}users/signIn`, data)
  }

  decode() {
    const token = localStorage.getItem('token')
    if (token) {
      jwtDecode(token)
    }
  }
}
