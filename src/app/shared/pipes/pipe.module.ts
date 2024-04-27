import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FileFetchPipe } from './file-fetch.pipe';
import { DateFormatPipe } from './dateFormat.pipe';
import { CapitalizePipe } from './capitalize.pipe';
import { UppercasePipe } from './uppercase.pipe';

@NgModule({
  declarations: [FileFetchPipe, DateFormatPipe, CapitalizePipe, UppercasePipe],
  imports: [
    CommonModule
  ],
  exports: [FileFetchPipe, DateFormatPipe, CapitalizePipe, UppercasePipe],
})
export class PipeModule { }
