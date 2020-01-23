import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

export interface AuthResponseData {
  idToken: string;
  email: string;
  refreshToken: string;
  expiresIn: string;
  localId: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private http: HttpClient) { }

  signUp(email: string, password: string) {
    return this.http.post<AuthResponseData>(
      "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyD7Yrj5DmAiDfrJfl0PMETVjTKDl1SvXQ8", {
        email: email,
        password: password,
        returnSecureToken: true
      }
    ).pipe(catchError(this.handleError));
  }

  signIn(email: string, password: string) {
    return this.http.post<AuthResponseData>(
      "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyD7Yrj5DmAiDfrJfl0PMETVjTKDl1SvXQ8", {
        email: email,
        password: password,
        returnSecureToken: true
      }
    ).pipe(catchError(this.handleError));
  }

  private handleError(errorR: HttpErrorResponse) {
    let errorMessage = "An unknown error occurred!";
    if (!errorR.error || !errorR.error.error) {
      return throwError(errorMessage);
    }
    console.log(errorR.error.error.message);
    switch (errorR.error.error.message) {
      case "EMAIL_EXISTS":
        errorMessage = "This email exists already";
        break;
      case "INVALID_PASSWORD":
        errorMessage = "Incorrect Password"
        break;
      case "EMAIL_NOT_FOUND":
        errorMessage = "This email does not exist"
        break;
      case "WEAK_PASSWORD : Password should be at least 6 characters":
        errorMessage = "Password should be at least 6 characters"
        break;
    }
    return throwError(errorMessage);
  }
}
