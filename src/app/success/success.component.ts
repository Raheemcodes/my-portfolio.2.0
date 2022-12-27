import { Component, EventEmitter, Output, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-success',
  templateUrl: './success.component.html',
  styleUrls: ['./success.component.scss'],
})
export class SuccessComponent implements OnDestroy {
  @Output() close = new EventEmitter<boolean>();
  timeout: any;

  onclick() {
    this.timeout = setTimeout(() => {
      this.close.emit(true);
    }, 300);
  }

  ngOnDestroy(): void {
    if (this.timeout) clearTimeout(this.timeout);
  }
}
