import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { map } from 'rxjs';
import { SharedService } from '../shared/shared.service';
import { environment } from './../../environments/environment';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  msgForm = new FormGroup({
    email: new FormControl('', [Validators.email]),
    name: new FormControl('', [Validators.maxLength(50), Validators.required]),
    message: new FormControl('', [
      Validators.maxLength(500),
      Validators.required,
    ]),
  });
  restApi: string = environment.REST_API;

  constructor(public sharedSv: SharedService, private http: HttpClient) {}

  ngOnInit(): void {}

  get name() {
    return this.msgForm.get('name');
  }
  get email() {
    return this.msgForm.get('email');
  }
  get msg() {
    return this.msgForm.get('message');
  }

  submit() {
    const { name, email, message } = this.msgForm.value;

    this.postData(name, email, message).subscribe({
      next: (data) => {
        console.log(data);
      },
    });
  }

  postData(name: string, email: string, message: string) {
    return this.http
      .post<{ message: string }>(this.restApi + '/mail-api', {
        name,
        email,
        message,
      })
      .pipe(map((resData) => resData.message));
  }
}
