import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SectionTitleComponent } from '../../shared/components/section-title.component';
import { ProgressBarComponent } from '../../shared/components/progress-bar.component';
import { LanguageService } from '../../core/services/language.service';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule, SectionTitleComponent, ProgressBarComponent],
  template: `
    <section id="skills" class="section">
      <div class="container">
        <app-section-title
          [meta]="languageService.t('skills.meta')"
          [title]="languageService.t('skills.title')"
          [center]="true"
        ></app-section-title>

        <div class="skills-categories">
          <div class="skill-category" *ngFor="let category of skillCategories">
            <div class="category-header">
              <span class="category-icon">{{ category.icon }}</span>
              <h3>{{ category.category }}</h3>
            </div>
            <div class="category-skills">
              <app-progress-bar
                *ngFor="let skill of category.skills"
                [skill]="skill.name"
                [level]="skill.level"
              ></app-progress-bar>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .skills-categories {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(380px, 1fr));
      gap: 2rem;
      max-width: 1200px;
      margin: 0 auto;
    }
    
    .skill-category {
      background: var(--bg-surface);
      border: 1px solid var(--border-color);
      border-radius: var(--radius-lg);
      padding: 2rem;
      transition: all 0.3s ease;
    }
    
    .skill-category:hover {
      border-color: var(--primary);
      box-shadow: var(--shadow-lg);
      transform: translateY(-4px);
    }
    
    .category-header {
      display: flex;
      align-items: center;
      gap: 1rem;
      margin-bottom: 1.5rem;
      padding-bottom: 1rem;
      border-bottom: 2px solid var(--border-color);
    }
    
    .category-icon {
      font-size: 2rem;
      line-height: 1;
    }
    
    .category-header h3 {
      font-size: 1.25rem;
      font-weight: 700;
      color: var(--text-heading);
      margin: 0;
    }
    
    .category-skills {
      display: flex;
      flex-direction: column;
      gap: 1rem;
    }

    @media (max-width: 768px) {
      .skills-categories {
        grid-template-columns: 1fr;
      }
    }
  `]
})
export class SkillsComponent {
  constructor(public languageService: LanguageService) {}

  get skillCategories() {
    return [
      {
        category: this.languageService.t('skills.backend'),
        icon: '⚙️',
        skills: [
          { name: 'Java 8/17', level: 95 },
          { name: 'Spring Boot 3', level: 95 },
          { name: 'Hibernate / JPA', level: 90 },
          { name: 'Kafka / Kafka Streams', level: 90 },
          { name: 'Spring Batch', level: 90 },
          { name: 'FastAPI', level: 80 },
          { name: 'RabbitMQ', level: 75 },
          { name: 'REST / SOAP APIs', level: 95 }
        ]
      },
      {
        category: this.languageService.t('skills.frontend'),
        icon: '🎨',
        skills: [
          { name: 'Angular 18', level: 95 },
          { name: 'TypeScript 5.5', level: 95 },
          { name: 'SCSS / Atomic Design', level: 90 },
          { name: 'NGRX / Angular Material', level: 85 },
          { name: 'ApexCharts', level: 80 }
        ]
      },
      {
        category: this.languageService.t('skills.cloud'),
        icon: '☁️',
        skills: [
          { name: 'AWS (EC2, EBS, CloudWatch)', level: 90 },
          { name: 'Azure (App Service, Monitor)', level: 90 },
          { name: 'Google Cloud Platform', level: 80 },
          { name: 'Terraform', level: 85 },
          { name: 'Ansible', level: 80 },
          { name: 'Jenkins / GitHub Actions', level: 90 },
          { name: 'Docker / Kubernetes', level: 85 }
        ]
      },
      {
        category: this.languageService.t('skills.databases'),
        icon: '💾',
        skills: [
          { name: 'PostgreSQL / Liquibase', level: 95 },
          { name: 'MongoDB', level: 90 },
          { name: 'Firebase / Firestore', level: 85 },
          { name: 'Oracle', level: 85 },
          { name: 'Elasticsearch', level: 85 },
          { name: 'Cassandra / Dataverse', level: 80 }
        ]
      },
      {
        category: this.languageService.t('skills.powerPlatform'),
        icon: '⚡',
        skills: [
          { name: 'Power Apps', level: 90 },
          { name: 'Power Automate', level: 90 },
          { name: 'Power BI', level: 90 },
          { name: 'Dataverse', level: 85 }
        ]
      },
      {
        category: this.languageService.t('skills.testing'),
        icon: '✅',
        skills: [
          { name: 'JUnit 5 / Mockito', level: 95 },
          { name: 'Jest / Jasmine', level: 90 },
          { name: 'TDD Methodology', level: 90 },
          { name: 'SonarQube / Checkmarx', level: 85 }
        ]
      }
    ];
  }

  get skills() {
    return this.skillCategories.flatMap(cat => cat.skills);
  }
}
