import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {CrudService} from "../../shared/services/crud.service";
import {environment} from "../../../environments/environment";
import {PageApi} from "../model/user.model";

@Injectable({
  providedIn: 'root'
})
export class DataService extends CrudService<PageApi>{
  resourceName = environment.randomUser;

  constructor(protected http: HttpClient) {
    super(http)
  }
}
