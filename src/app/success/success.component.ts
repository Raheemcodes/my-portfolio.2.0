import { DOCUMENT } from '@angular/common';
import {
  Component,
  EventEmitter,
  Inject,
  OnDestroy,
  OnInit,
  Output,
  Renderer2,
} from '@angular/core';
import { Subscription, timer } from 'rxjs';

@Component({
  selector: 'app-success',
  templateUrl: './success.component.html',
  styleUrls: ['./success.component.scss'],
})
export class SuccessComponent implements OnInit, OnDestroy {
  @Output() close = new EventEmitter<boolean>();
  timerSub: Subscription;

  constructor(
    @Inject(DOCUMENT) private document: Document,
    private renderer: Renderer2
  ) {}

  ngOnInit(): void {
    this.renderer.addClass(this.document.body, 'noscroll');
  }

  onclick() {
    this.timerSub = timer(300).subscribe(() => this.close.emit(true));
  }

  ngOnDestroy(): void {
    if (this.timerSub) this.timerSub.unsubscribe();
    this.renderer.removeClass(this.document.body, 'noscroll');
  }
}
