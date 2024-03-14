import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FileFetchPipe } from './file-fetch.pipe';
import { DateFormatPipe } from './dateFormat.pipe';

@NgModule({
  declarations: [FileFetchPipe, DateFormatPipe],
  imports: [
    CommonModule
  ],
  exports: [FileFetchPipe, DateFormatPipe],
})
export class PipeModule { }
