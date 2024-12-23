import { NgIf } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { TranslocoModule } from '@ngneat/transloco';

@Component({
  selector: 'app-header-text',
  templateUrl: './header-text.component.html',
  styleUrls: ['./header-text.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [TranslocoModule, MatIconModule, MatButtonModule,  NgIf],

})
export class HeaderTextComponent implements OnInit {
	@Input() public edit: boolean | null = null;
	@Input() public text: string | null = null;
  constructor() { }

  ngOnInit(): void {
  }

}
