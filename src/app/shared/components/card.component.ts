import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="card" [class.glass]="glass" [class.hover]="hover">
      <ng-content></ng-content>
    </div>
  `,
  styles: [`
    .card {
      background: var(--bg-secondary);
      border-radius: var(--radius-md);
      padding: 2rem;
      box-shadow: var(--shadow-md);
      transition: all 0.3s ease;
      border: 1px solid var(--border-color);

      &.glass {
        background: rgba(255, 255, 255, 0.1);
        backdrop-filter: blur(20px);
        border: 1px solid rgba(255, 255, 255, 0.2);
        
        [data-theme='dark'] & {
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.1);
        }
      }

      &.hover:hover {
        transform: translateY(-4px);
        box-shadow: var(--shadow-lg);
      }
    }
  `]
})
export class CardComponent {
  @Input() glass = false;
  @Input() hover = true;
}
