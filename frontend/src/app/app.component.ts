import { ChangeDetectionStrategy, Component, inject, PLATFORM_ID, OnInit } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './shared/ui/header/header.component';
import { FooterComponent } from './shared/ui/footer/footer.component';

import { tsParticles } from '@tsparticles/engine';
import { loadBasic } from '@tsparticles/basic';
import { loadImageShape } from '@tsparticles/shape-image';

@Component({
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  private platformId = inject(PLATFORM_ID);

  async ngOnInit(): Promise<void> {
    if (!isPlatformBrowser(this.platformId)) return;

    await loadBasic(tsParticles);
    await loadImageShape(tsParticles);

    await tsParticles.load({
      id: 'tsparticles',
      options: {
        background: { color: '#121212' },
        particles: {
          number: { value: 200 },
          shape: {
            type: 'image',
            options: {
              image: {
                src: 'assets/logo/djredflame.png',
                width: 50,
                height: 50,
              },
            },
          },
          size: { value: { min: 5, max: 10 } },
          opacity: { value: 0.8 },
          move: { enable: true, speed: 1.5, direction: 'none', outModes: 'bounce' },
          rotate: { value: { min: 0, max: 360 }, animation: { enable: true, speed: 5 } },
        },
      },
    });
  }
}
