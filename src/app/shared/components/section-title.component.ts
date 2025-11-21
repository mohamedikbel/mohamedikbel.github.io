import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-section-title',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="section-title" [class.center]="center">
      <span class="meta">{{ meta }}</span>
      <h2 class="title">{{ title }}</h2>
      <p *ngIf="subtitle" class="subtitle">{{ subtitle }}</p>
    </div>
  `,
  styles: [`
    .section-title {
      margin-bottom: 3rem;

      &.center {
        text-align: center;
      }
    }

    .meta {
      display: inline-block;
      font-size: 0.875rem;
      font-weight: 600;
      text-transform: uppercase;
      letter-spacing: 1.5px;
      color: var(--primary);
      margin-bottom: 0.5rem;
    }

    .title {
      font-size: clamp(2rem, 4vw, 3rem);
      font-weight: 700;
      margin: 0;
      background: var(--gradient-1);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
    }

    .subtitle {
      font-size: 1.125rem;
      color: var(--text-secondary);
      margin-top: 1rem;
      max-width: 600px;
    }

    .center .subtitle {
      margin-left: auto;
      margin-right: auto;
    }
  `]
})
export class SectionTitleComponent {
  @Input() meta = '';
  @Input() title = '';
  @Input() subtitle = '';
  @Input() center = false;
}
