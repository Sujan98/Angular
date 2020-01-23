import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { BasicServiceService } from '../basic-service.service';
import { Router } from '@angular/router';
import { NgForm, FormControl, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { AuthService, AuthResponseData } from '../auth.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  invalid = 0;
  x = 0;
  errorMessage;
  error = false;
  load = false;
  SignUpForm: FormGroup;
  loginMode = true;
  focus: boolean = false;
  @ViewChild("rad1", { static: true }) rad: ElementRef;
  radC = false;
  loginDetails = [];
  select = "Bangalore";
  @ViewChild('name', { static: true }) name: ElementRef;
  constructor(private form: BasicServiceService, private router: Router, private http: HttpClient, private auth: AuthService) { }

  ngOnInit() {
    this.SignUpForm = new FormGroup({
      'username3': new FormControl(null, [Validators.required, Validators.email]),
      'password3': new FormControl(null, Validators.required)
    });
  }

  focusOn(el: any) {
    let x = el.target.parentNode;
    x.childNodes[1].classList.add('focused');
  }

  focusOut(el: any) {
    let x = el.target.parentNode;
    if (el.target.value === "") {
      x.childNodes[1].classList.remove('focused');
    }
  }

  radioCheck() {
    this.rad.nativeElement.errors ? this.radC = true : this.radC = false;
    this.rad.nativeElement.valid ? console.log(this.rad.nativeElement) : ''
  }

  // loader() {
  //   this.router.navigate(['/load']);
  // }

  toggleSign() {
    this.loginMode = !this.loginMode;
    this.invalid = 0;
  }

  onSubmit(form: NgForm) {
    let authObs: Observable<AuthResponseData>;
    // this.radioCheck();
    if (form.valid) {
      this.load = true;
      // this.form.formV();
      // this.http.post('https://my-project-1557616436370.firebaseio.com/posts.json', { name: form.value.email, password: form.value.password, city: form.value.select }).subscribe(responseData => {
      //   console.log(responseData);
      // });
      if (this.loginMode) {
        authObs = this.auth.signIn(form.value.email, form.value.password);
      }
      else {
        authObs = this.auth.signUp(form.value.email, form.value.password);
      }
      authObs.subscribe(resData => {
        console.log(resData);
        this.load = false;
        if (this.loginMode) {
          setTimeout(function () {
            alert("Success!");
          }, 100);
          this.form.formV();
          this.http.post('https://my-project-1557616436370.firebaseio.com/posts.json', { name: form.value.email, password: form.value.password, city: form.value.select }).subscribe(responseData => {
            console.log(responseData);
          });
          this.router.navigate(['/recipe']);
          this.form.formV();
          setTimeout(() => {
            this.http.get('https://my-project-1557616436370.firebaseio.com/posts.json')
              .pipe(
                map(responseData => {
                  for (const key in responseData) {
                    if (responseData.hasOwnProperty(key)) {
                      this.loginDetails.push({ ...responseData[key], FireId: key, id: this.form.x })
                    }
                    this.form.x++;
                  }
                  this.form.x = 1;
                  return this.loginDetails;
                })
              )
              .subscribe(responseData => {

                console.log(responseData);

              });
          }, 2000);
          this.form.onProfile(this.loginDetails);
        }
        else {
          setTimeout(function () {
            alert("Account Registerd");
          }, 100);
          this.loginMode = true;
        }
      }, error => {
        console.log(error);
        this.load = false;
        this.error = true;
        this.errorMessage = error;
      }
      );

      // this.router.navigate(['/recipe']);
    }
    else {
      this.invalid = 1;
      // console.log(typeof form.value.email);
      // this.http.post('https://my-project-1557616436370.firebaseio.com/posts.json', { name: form.value.email, password: form.value.password, city: form.value.select }).subscribe(responseData => {
      //   console.log(responseData);
      // });
    }
  }

  closeError() {
    this.error = false;
  }

}
