import {Directive, OnDestroy, OnInit} from '@angular/core';
import {Subject} from "rxjs";
import { ROUTE } from 'src/app/routes-names';
import {ActivatedRoute} from "@angular/router";
import {Title} from "@angular/platform-browser";

@Directive()
export class BaseComponent implements OnInit, OnDestroy {
  unsubscribe$ = new Subject<void>();
  ROUTE = ROUTE;

  constructor(protected route?: ActivatedRoute) { }

  ngOnInit(): void {
  }

  setTitle(titleService: Title): void {
    const title = this.getTitle();
    if (title) {
      titleService.setTitle(title);
    } else {
      titleService.setTitle('Default Title');
    }
  }

  getTitle(): string {
    let child = this.route;
    while (child) {
      if (child.firstChild) {
        child = child.firstChild;
      } else if (child.snapshot.data && child.snapshot.data['title'] && typeof child.snapshot.data['title'] === 'string') {
        return child.snapshot.data['title'];
      } else {
        return '';
      }
    }
    return '';
  }

  ngOnDestroy() {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

}
