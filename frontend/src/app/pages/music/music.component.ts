import { ChangeDetectionStrategy, Component } from '@angular/core';
import { AsyncPipe } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { inject } from '@angular/core';
import { catchError, map, Observable, of } from 'rxjs';

interface ReleaseInfo {
  released: number;
  songs: string;
  songs_length: string;
  bpm: string;
  spotify_icon: string;
  spotify_link: string;
  youtube_icon: string;
  youtube_link: string;
  itunes_icon: string;
  itunes_link: string;
}

interface Release {
  image: string;
  title: string;
  short_infos: ReleaseInfo[];
}

interface MusicData {
  releases: Release[];
}

@Component({
  standalone: true,
  selector: 'app-music',
  imports: [AsyncPipe],
  templateUrl: './music.component.html',
  styleUrl: './music.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MusicComponent {
  private readonly http = inject(HttpClient);

  readonly releases$: Observable<Release[]> = this.http
    .get<MusicData>('assets/musicdata.json')
    .pipe(
      map((data) => data.releases ?? []),
      catchError(() => of([])),
    );
}
