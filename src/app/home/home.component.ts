import { HttpClient } from '@angular/common/http';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { map } from 'rxjs';
import { SharedService } from '../shared/shared.service';
import { environment } from './../../environments/environment';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit, OnDestroy {
  msgForm = new FormGroup({
    email: new FormControl('', [Validators.email, Validators.required]),
    name: new FormControl('', [Validators.maxLength(50), Validators.required]),
    message: new FormControl('', [
      Validators.maxLength(500),
      Validators.required,
    ]),
  });
  loading: boolean = false;
  success: boolean = false;
  error: boolean = false;

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
    if (!this.loading && !this.success) {
      this.loading = true;
      const { name, email, message } = this.msgForm.value;

      this.postData(name, email, message).subscribe({
        next: () => {
          setTimeout(() => {
            this.loading = false;
            this.success = true;
          }, 2000);
        },
        error: (err) => {
          this.loading = false;
          this.error = true;
        },
      });
    }
  }

  postData(name: string, email: string, message: string) {
    return this.http
      .post<{ message: string }>(environment.REST_API + '/mail-api', {
        name,
        email,
        message,
      })
      .pipe(map((resData) => resData.message));
  }

  onclose() {
    this.success = false;
  }

  ngOnDestroy(): void {}
}
