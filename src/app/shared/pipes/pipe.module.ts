import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FileFetchPipe } from './file-fetch.pipe';

@NgModule({
  declarations: [FileFetchPipe],
  imports: [
    CommonModule
  ],
  exports: [FileFetchPipe],
})
export class PipeModule { }
