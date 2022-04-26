import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserNamePipe } from './pipe/user-name.pipe';

@NgModule({
  declarations: [
    UserNamePipe
  ],
  exports: [
    UserNamePipe
  ],
  imports: [
    CommonModule,
  ]
})
export class SharedModule { }
