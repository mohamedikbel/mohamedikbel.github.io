import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SectionTitleComponent } from '../../shared/components/section-title.component';
import { LanguageService } from '../../core/services/language.service';

@Component({
  selector: 'app-education',
  standalone: true,
  imports: [CommonModule, SectionTitleComponent],
  template: `
    <section id="education" class="section">
      <div class="container">
        <app-section-title
          [meta]="languageService.t('education.meta')"
          [title]="languageService.t('education.title')"
          [center]="true"
        ></app-section-title>
        <div class="education-content">
          <div class="education-card" *ngFor="let item of educationItems">
            <div class="edu-header">
              <h3>{{ item.title }}</h3>
              <div class="edu-meta">
                <p class="school">{{ item.school }}</p>
                <p class="location">{{ item.location }}</p>
                <p class="period">{{ item.period }}</p>
              </div>
            </div>
            <p class="edu-description">{{ item.description }}</p>
            <div class="edu-highlights" *ngIf="item.highlights">
              <h4>{{ languageService.t('education.highlightsTitle') }}</h4>
              <ul>
                <li *ngFor="let highlight of item.highlights">{{ highlight }}</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .education-content {
      max-width: 900px;
      margin: 0 auto;
    }
    
    .education-card {
      padding: 2.5rem;
      background: var(--bg-surface);
      border: 1px solid var(--border-color);
      border-radius: var(--radius-lg);
      border-left: 4px solid var(--primary);
      transition: all 0.3s ease;
    }
    
    .education-card:hover {
      border-color: var(--primary);
      box-shadow: var(--shadow-lg);
    }
    
    .edu-header h3 {
      font-size: 1.75rem;
      color: var(--text-heading);
      margin-bottom: 1rem;
      font-weight: 700;
    }
    
    .edu-meta {
      display: flex;
      flex-wrap: wrap;
      gap: 1rem;
      margin-bottom: 1.5rem;
    }
    
    .edu-meta p {
      margin: 0;
      font-size: 0.9rem;
    }
    
    .school {
      font-weight: 700;
      color: var(--primary);
      font-size: 1.125rem;
    }
    
    .location {
      color: var(--text-secondary);
    }
    
    .period {
      color: var(--text-muted);
      font-family: var(--font-mono);
    }
    
    .edu-description {
      color: var(--text-secondary);
      line-height: 1.6;
      margin-bottom: 1.5rem;
    }
    
    .edu-highlights h4 {
      font-size: 1rem;
      color: var(--text-heading);
      margin-bottom: 0.75rem;
      font-weight: 600;
    }
    
    .edu-highlights ul {
      list-style: none;
      padding: 0;
    }
    
    .edu-highlights li {
      position: relative;
      padding-left: 1.5rem;
      margin-bottom: 0.5rem;
      color: var(--text-secondary);
      line-height: 1.5;
    }
    
    .edu-highlights li::before {
      content: '▹';
      position: absolute;
      left: 0;
      color: var(--secondary);
      font-size: 1.25rem;
    }
    
    @media (max-width: 768px) {
      .education-card {
        padding: 1.5rem;
      }
      
      .edu-meta {
        flex-direction: column;
        gap: 0.5rem;
      }
    }
  `]
})
export class EducationComponent {
  constructor(public languageService: LanguageService) {}

  get educationItems() {
    return [
      {
        title: this.languageService.t('education.degree'),
        school: this.languageService.t('education.school'),
        location: this.languageService.t('education.location'),
        period: this.languageService.t('education.period'),
        description: this.languageService.t('education.description'),
        highlights: [
          this.languageService.t('education.highlight1'),
          this.languageService.t('education.highlight2'),
          this.languageService.t('education.highlight3')
        ]
      }
    ];
  }
}
