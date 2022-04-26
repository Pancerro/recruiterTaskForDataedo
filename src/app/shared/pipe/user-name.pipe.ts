import { Pipe, PipeTransform } from '@angular/core';
import {Name} from "../../home/model/user.model";

@Pipe({
  name: 'userName'
})
export class UserNamePipe implements PipeTransform {

  transform(name: Name): unknown {
    return `${name.first} ${name.last}`;
  }

}
