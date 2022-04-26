import {Component, OnInit} from '@angular/core';
import {BaseComponent} from "../../../shared/components/base/base.component";
import {ActivatedRoute, Router} from "@angular/router";
import {Title} from "@angular/platform-browser";

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent extends BaseComponent implements OnInit {

  constructor(private router: Router,
              protected override route: ActivatedRoute,
              private titleService: Title) {
    super(route);
  }

  ngOnInit(): void {
    super.setTitle(this.titleService);
  }

}
