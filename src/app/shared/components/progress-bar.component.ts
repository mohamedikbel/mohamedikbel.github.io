import { Component, Input, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-progress-bar',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="progress-wrap">
      <div class="progress-header">
        <h3>{{ skill }}</h3>
        <span class="percentage">{{ level }}%</span>
      </div>
      <div class="progress-bar">
        <div 
          class="progress-fill" 
          [style.width.%]="animatedLevel()"
          [style.background]="color"
        ></div>
      </div>
    </div>
  `,
  styles: [`
    .progress-wrap {
      margin-bottom: 1.5rem;
    }

    .progress-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 0.5rem;
    }

    h3 {
      font-size: 1rem;
      font-weight: 500;
      color: var(--text-primary);
      margin: 0;
    }

    .percentage {
      font-size: 0.875rem;
      font-weight: 600;
      color: var(--primary);
    }

    .progress-bar {
      width: 100%;
      height: 8px;
      background: var(--bg-tertiary);
      border-radius: 10px;
      overflow: hidden;
    }

    .progress-fill {
      height: 100%;
      background: var(--gradient-1);
      border-radius: 10px;
      transition: width 1.5s cubic-bezier(0.4, 0, 0.2, 1);
    }
  `]
})
export class ProgressBarComponent implements OnInit {
  @Input() skill = '';
  @Input() level = 0;
  @Input() color = '';

  animatedLevel = signal(0);

  ngOnInit() {
    setTimeout(() => {
      this.animatedLevel.set(this.level);
    }, 100);
  }
}
