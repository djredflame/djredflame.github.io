import { ChangeDetectionStrategy, Component } from '@angular/core';
import { HeaderComponent } from './shared/ui/header/header.component';

@Component({
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-root',
  imports: [HeaderComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {}
