import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SectionTitleComponent } from '../../shared/components/section-title.component';
import { LanguageService } from '../../core/services/language.service';

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [CommonModule, SectionTitleComponent],
  styleUrls: ['./experience.component.scss'],
  template: `
    <section id="experience" class="section">
      <div class="container">
        <app-section-title
          [meta]="languageService.t('experience.meta')"
          [title]="languageService.t('experience.title')"
          [center]="true"
        ></app-section-title>
        <div class="timeline">
          <div class="timeline-item" *ngFor="let exp of experiences" [class.current]="exp.current">
            <div class="exp-header">
              <div>
                <h3>{{ exp.title }}</h3>
                <p class="company-info">
                  <span class="company">{{ exp.company }}</span>
                  <span class="location" *ngIf="exp.location"> • {{ exp.location }}</span>
                </p>
                <p class="period">
                  {{ exp.period }}
                  <span class="badge" *ngIf="exp.current">{{ languageService.t('experience.current') }}</span>
                </p>
              </div>
            </div>
            
            <div class="exp-project" *ngIf="exp.project">
              <strong>{{ languageService.t('experience.project') }}</strong> <span class="mono">{{ exp.project }}</span>
            </div>
            
            <p class="exp-description">{{ exp.description }}</p>
            
            <div class="exp-highlights" *ngIf="exp.highlights">
              <ul>
                <li *ngFor="let highlight of exp.highlights">{{ highlight }}</li>
              </ul>
            </div>
            
            <div class="exp-stack" *ngIf="exp.stack">
              <div class="stack-label">{{ languageService.t('experience.stackLabel') }}</div>
              <div class="stack-tags">
                <span class="stack-tag" *ngFor="let tech of exp.stack">{{ tech }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `
})
export class ExperienceComponent {
  constructor(public languageService: LanguageService) {}

  experiences = [
    {
      title: 'Software Engineer',
      company: 'TotalEnergies',
      location: 'Paris',
      period: 'Nov. 2023 - Présent',
      current: true,
      project: 'DIGICHEM',
      description: 'Application web en temps réel pour les filiales TotalEnergies (onshore et offshore), visant à améliorer la gestion de bout en bout des produits chimiques – de l\'achat jusqu\'à l\'injection – afin de réduire les risques de production.',
      highlights: [
        'Conception d\'APIs REST avec Spring Boot 3 intégrant la logique métier',
        'Développement d\'algorithmes dynamiques pour le calcul des taux d\'injection',
        'Kafka Streams pour transformation et agrégation en continu',
        'Interface moderne Angular 18 (Atomic Design) avec ApexCharts temps réel',
        'Intégration Power Apps, Dataverse et dashboards Power BI',
        'CI/CD GitHub Actions et déploiement Azure (App Service, Static Web Apps)'
      ],
      stack: ['Java 17', 'Spring Boot 3', 'Kafka', 'PostgreSQL', 'Angular 18', 'TypeScript 5.5', 'Azure', 'Power Platform']
    },
    {
      title: 'Développeur Full Stack',
      company: 'Featway',
      location: 'Paris',
      period: 'Mars 2022 - Oct. 2023',
      current: false,
      project: 'Migration Angular/Firebase → Angular/Spring Boot',
      description: 'Plateforme centralisée offrant aux employés, gestionnaires et RH un accès aux informations, outils et services liés aux personnels.',
      highlights: [
        'Migration complète d\'une architecture Firebase vers Spring Boot',
        'Intégration des modules Workday (talents, carrières, performances)',
        'Solutions low-code/no-code avec Power Apps et Power Automate',
        'Développement frontend Angular 16, Angular Material, NGRX',
        'Auto Scaling avec EC2 et déploiement AWS Elastic Beanstalk'
      ],
      stack: ['Java', 'Spring Boot', 'PostgreSQL', 'Elasticsearch', 'Angular 16', 'NGRX', 'AWS', 'Power Platform', 'Jenkins']
    },
    {
      title: 'Développeur Full Stack',
      company: 'Featway',
      location: 'Paris',
      period: 'Déc. 2021 - Fév. 2022',
      current: false,
      project: 'Extraction bancaire - Migration Firebase',
      description: 'Migration d\'une solution bancaire existante vers une architecture Cloud-Native avec Firebase et Firestore.',
      highlights: [
        'Conception et migration vers architecture Firebase/Firestore',
        'Développement de services d\'extraction bancaire temps réel',
        'Implémentation de règles de sécurité Firestore',
        'Optimisation des requêtes et indexation Firestore',
        'Intégration Firebase Cloud Functions pour traitement asynchrone'
      ],
      stack: ['Firebase', 'Firestore', 'Cloud Functions', 'Angular', 'TypeScript', 'Node.js']
    },
    {
      title: 'Développeur Full Stack',
      company: 'BFM 3A',
      location: 'Tunis',
      period: 'Jan. 2020 - Mars 2022',
      current: false,
      project: 'Portail RH & Applications Métiers',
      description: 'Développement de plusieurs modules pour la dématérialisation et l\'automatisation des processus RH.',
      highlights: [
        'Module CVthèque avec Google Document AI pour extraction automatisée',
        'IA pour recommandations intelligentes de formations',
        'RB-GEST: Algorithme d\'analyse PDF avec Java PDFBox',
        'Traitement parallèle avec Apache Spark (Spark SQL, DataFrames)',
        'EGEST: Correction erreurs de paie et déclarations TG DGFIP'
      ],
      stack: ['Java', 'Spring Boot', 'Kafka', 'MongoDB', 'Firebase', 'Angular 14', 'Google Cloud', 'Apache Spark']
    }
  ];
}
