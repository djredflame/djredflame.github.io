import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'app-music',
  imports: [],
  templateUrl: './music.component.html',
  styleUrl: './music.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MusicComponent {}
