import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SectionTitleComponent } from '../../shared/components/section-title.component';
import { LanguageService } from '../../core/services/language.service';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule, SectionTitleComponent],
  template: `
    <section id="work" class="section projects-section">
      <div class="container">
        <app-section-title
          [meta]="languageService.t('projects.meta')"
          [title]="languageService.t('projects.title')"
          [center]="true"
        ></app-section-title>
        
        <div class="projects-grid">
          <div *ngFor="let project of projects" class="project-card">
            <!-- GitHub-Style Header -->
            <div class="project-header">
              <div class="project-icon">
                <svg fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" />
                </svg>
              </div>
              <div class="project-meta">
                <span class="project-type">{{ project.type }}</span>
                <span class="project-year">{{ project.year }}</span>
              </div>
            </div>
            
            <!-- Project Info -->
            <div class="project-body">
              <h3 class="project-title">{{ project.title }}</h3>
              <p class="project-description">{{ project.description }}</p>
              
              <!-- Tech Stack -->
              <div class="project-stack">
                <span class="stack-label">{{ languageService.t('projects.tech') }}</span>
                <div class="stack-items">
                  <span *ngFor="let tech of project.tags" class="stack-item">
                    <span class="stack-dot"></span>
                    {{ tech }}
                  </span>
                </div>
              </div>
            </div>
            
            <!-- Actions -->
            <div class="project-footer">
              <a href="#contact" class="action-btn primary">
                <svg fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
                {{ languageService.t('projects.viewDetails') }}
              </a>
              <a href="#contact" class="action-btn secondary" title="Get in touch">
                <svg fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .projects-section {
      background: var(--bg-primary);
    }
    
    .projects-grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
      gap: 2rem;
    }

    .project-card {
      background: var(--bg-surface);
      border: 1px solid var(--border-color);
      border-radius: var(--radius-lg);
      overflow: hidden;
      transition: all 0.3s ease;
      display: flex;
      flex-direction: column;
    }

    .project-card:hover {
      transform: translateY(-8px);
      border-color: var(--primary);
      box-shadow: var(--shadow-glow);
    }

    .project-header {
      padding: 1.5rem;
      background: var(--bg-code);
      border-bottom: 1px solid var(--border-color);
      display: flex;
      align-items: center;
      justify-content: space-between;
    }

    .project-icon {
      width: 48px;
      height: 48px;
      background: var(--bg-tertiary);
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      border: 2px solid var(--primary);
    }

    .project-icon svg {
      width: 24px;
      height: 24px;
      color: var(--primary);
    }

    .project-meta {
      display: flex;
      gap: 1rem;
      font-size: 0.75rem;
      font-family: var(--font-mono);
    }

    .project-type {
      color: var(--secondary);
      font-weight: 600;
    }

    .project-year {
      color: var(--text-muted);
    }

    .project-body {
      padding: 1.5rem;
      flex: 1;
    }

    .project-title {
      font-family: var(--font-primary);
      font-size: 1.25rem;
      font-weight: 700;
      color: var(--text-heading);
      margin-bottom: 1rem;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
      overflow: hidden;
    }

    .project-description {
      font-family: var(--font-primary);
      font-size: 0.9375rem;
      color: var(--text-secondary);
      line-height: 1.6;
      margin-bottom: 1.5rem;
      display: -webkit-box;
      -webkit-line-clamp: 3;
      -webkit-box-orient: vertical;
      overflow: hidden;
    }

    .project-stack {
      display: flex;
      flex-direction: column;
      gap: 0.75rem;
    }

    .stack-label {
      font-size: 0.75rem;
      font-weight: 700;
      color: var(--text-muted);
      text-transform: uppercase;
      letter-spacing: 1px;
    }

    .stack-items {
      display: flex;
      flex-wrap: wrap;
      gap: 0.5rem;
    }

    .stack-item {
      display: inline-flex;
      align-items: center;
      gap: 0.375rem;
      padding: 0.25rem 0.75rem;
      background: var(--bg-tertiary);
      border: 1px solid var(--border-color);
      border-radius: 20px;
      font-size: 0.75rem;
      font-family: var(--font-mono);
      color: var(--text-code);
      transition: all 0.2s ease;
    }

    .stack-item:hover {
      background: var(--primary);
      border-color: var(--primary);
      color: white;
      transform: translateY(-2px);
    }

    .stack-dot {
      width: 6px;
      height: 6px;
      background: var(--secondary);
      border-radius: 50%;
    }

    .project-footer {
      padding: 1rem 1.5rem;
      background: var(--bg-code);
      border-top: 1px solid var(--border-color);
      display: flex;
      gap: 0.75rem;
    }

    .action-btn {
      flex: 1;
      padding: 0.625rem 1.25rem;
      border-radius: var(--radius-md);
      font-size: 0.875rem;
      font-weight: 600;
      font-family: var(--font-primary);
      display: inline-flex;
      align-items: center;
      justify-content: center;
      gap: 0.5rem;
      transition: all 0.3s ease;
      cursor: pointer;
      text-decoration: none;
    }

    .action-btn svg {
      width: 16px;
      height: 16px;
    }

    .action-btn.primary {
      background: var(--gradient-1);
      color: white;
      border: none;
    }

    .action-btn.primary:hover {
      transform: translateY(-2px);
      box-shadow: var(--shadow-md);
    }

    .action-btn.secondary {
      background: transparent;
      color: var(--text-secondary);
      border: 1px solid var(--border-color);
    }

    .action-btn.secondary:hover {
      background: var(--bg-surface);
      border-color: var(--primary);
      color: var(--primary);
    }

    @media (max-width: 768px) {
      .projects-grid {
        grid-template-columns: 1fr;
      }
    }
  `]
})
export class ProjectsComponent {
  constructor(public languageService: LanguageService) {}

  projects = [
    {
      type: 'Enterprise',
      year: '2023',
      title: 'ADVYTEAM - HR Management Platform',
      description: 'Full-stack N-tier enterprise application for comprehensive human resources management with multi-client architecture.',
      tags: ['JavaEE', 'JSF', 'ASP.NET', 'JAX-RS', 'OpenCV OCR', 'MySQL']
    },
    {
      type: 'FinTech',
      year: '2022',
      title: 'Wifak Bank - Transaction Monitoring',
      description: 'Real-time web application for importing, parsing, and auditing transaction trace files via FTP for the payment card department.',
      tags: ['Angular', 'Spring MVC', 'MongoDB', 'Swagger', 'PrimeNG']
    },
    {
      type: 'Multi-Platform',
      year: '2021',
      title: 'City of Culture Events',
      description: 'Cross-platform application (Desktop/Web/Mobile) for organizing and managing technology-focused cultural events.',
      tags: ['Java 8', 'JavaFX', 'Symfony', 'CodeNameOne', 'REST API']
    },
    {
      type: 'E-Commerce',
      year: '2020',
      title: 'Access Bijoux Shop Manager',
      description: 'Comprehensive web-based management solution for a traditional accessories retail store.',
      tags: ['HTML', 'CSS', 'JavaScript', 'PHP', 'MySQL']
    },
    {
      type: 'CRM',
      year: '2019',
      title: 'Michelin Auto Sales Platform',
      description: 'Desktop application for managing automotive sales operations and customer relationships.',
      tags: ['C++', 'Qt', 'Oracle']
    },
    {
      type: 'Game Dev',
      year: '2018',
      title: 'Prodgy 2D Game Engine',
      description: '2D game developed from scratch using C and SDL library with custom physics engine.',
      tags: ['C', 'SDL', 'Linux', 'Game Dev']
    }
  ];
}
