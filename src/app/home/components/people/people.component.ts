import { Component, OnInit } from '@angular/core';
import {BaseListComponent} from "../../../shared/components/base/base-list.component";
import {ActivatedRoute, Router} from "@angular/router";
import {Title} from "@angular/platform-browser";
import {DataService} from "../../services/data.service";
import {CrudService} from "../../../shared/services/crud.service";
import {Result, PageApi} from "../../model/user.model";

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.scss']
})
export class PeopleComponent extends BaseListComponent<PageApi> implements OnInit {
  users: Array<Result> = [];
  interval: any;

  constructor(protected override route: ActivatedRoute,
              private router: Router,
              private dataService: DataService,
              private titleService: Title) {
    super(route);
  }

  ngOnInit(): void {
    super.ngOnInit();
    super.setTitle(this.titleService);
    this.start();
  }

  prepareData(data: PageApi): void {
    this.users = [];
    if (data && data.results.length) {
      for (let singleData of data.results) {
        const cloneData = JSON.parse(JSON.stringify(singleData));
        this.users.push(cloneData);
      }
    }
  }

  protected getCrudService(): CrudService<PageApi> | null {
    return this.dataService;
  }

  getNewUser(): void {
    this.searchResult();
  }

  start(): void {
    this.interval = setInterval(() => this.searchResult(), 5000);
  }

  stop(): void {
    if (this.interval) {
      clearInterval(this.interval);
    }
  }

  ngOnDestroy() {
    super.ngOnDestroy();
    if (this.interval) {
      clearInterval(this.interval);
    }
  }
}
