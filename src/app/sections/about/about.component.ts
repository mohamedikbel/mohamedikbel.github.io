import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SectionTitleComponent } from '../../shared/components/section-title.component';
import { LanguageService } from '../../core/services/language.service';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule, SectionTitleComponent],
  template: `
    <section id="about" class="section about-section">
      <div class="container">
        <app-section-title
          [meta]="languageService.t('about.meta')"
          [title]="languageService.t('about.title')"
          [center]="true"
        ></app-section-title>

        <!-- Terminal-Style Expertise Cards -->
        <div class="expertise-grid">
          <div *ngFor="let card of expertiseCards" class="terminal-card">
            <div class="terminal-header">
              <div class="terminal-dots">
                <span></span><span></span><span></span>
              </div>
              <div class="terminal-title">{{ card.command }}</div>
            </div>
            <div class="terminal-body">
              <div class="card-icon-wrapper">
                <div class="icon-glow"></div>
                <div class="card-icon">
                  <svg *ngIf="card.iconType === 'backend'" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M5.25 14.25h13.5m-13.5 0a3 3 0 01-3-3m3 3a3 3 0 100 6h13.5a3 3 0 100-6m-16.5-3a3 3 0 013-3h13.5a3 3 0 013 3m-19.5 0a4.5 4.5 0 01.9-2.7L5.737 5.1a3.375 3.375 0 012.7-1.35h7.126c1.062 0 2.062.5 2.7 1.35l2.587 3.45a4.5 4.5 0 01.9 2.7m0 0a3 3 0 01-3 3m0 3h.008v.008h-.008v-.008zm0-6h.008v.008h-.008v-.008zm-3 6h.008v.008h-.008v-.008zm0-6h.008v.008h-.008v-.008z" />
                  </svg>
                  <svg *ngIf="card.iconType === 'cloud'" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M2.25 15a4.5 4.5 0 004.5 4.5H18a3.75 3.75 0 001.332-7.257 3 3 0 00-3.758-3.848 5.25 5.25 0 00-10.233 2.33A4.502 4.502 0 002.25 15z" />
                  </svg>
                  <svg *ngIf="card.iconType === 'frontend'" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0V12a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 12V5.25" />
                  </svg>
                </div>
              </div>
              <h3 class="expertise-title">{{ card.title }}</h3>
              <p class="code-quote">
                <span class="comment">// </span>{{ card.quote }}
              </p>
              <div class="tech-tags">
                <span *ngFor="let tech of card.techs" class="tech-tag">{{ tech }}</span>
              </div>
            </div>
          </div>
        </div>

        <!-- Code-Style About Text -->
        <div class="about-content">
          <div class="code-block">
            <div class="code-header">
              <span class="file-icon">📄</span>
              <span class="file-name">about-me.ts</span>
            </div>
            <div class="code-body">
              <div class="code-line">
                <span class="line-number">1</span>
                <span class="keyword">interface</span> <span class="class-name">Developer</span> {{ '{' }}
              </div>
              <div class="code-line">
                <span class="line-number">2</span>
                &nbsp;&nbsp;name: <span class="string">"Mohamed Ikbel Sdiri"</span>;
              </div>
              <div class="code-line">
                <span class="line-number">3</span>
                &nbsp;&nbsp;role: <span class="string">"{{ languageService.t('about.code.role') }}"</span>;
              </div>
              <div class="code-line">
                <span class="line-number">4</span>
                &nbsp;&nbsp;location: <span class="string">"{{ languageService.t('about.code.location') }}"</span>;
              </div>
              <div class="code-line">
                <span class="line-number">5</span>
                &nbsp;&nbsp;passions: [
              </div>
              <div class="code-line">
                <span class="line-number">6</span>
                &nbsp;&nbsp;&nbsp;&nbsp;<span class="string">"{{ languageService.t('about.code.passion1') }}"</span>,
              </div>
              <div class="code-line">
                <span class="line-number">7</span>
                &nbsp;&nbsp;&nbsp;&nbsp;<span class="string">"{{ languageService.t('about.code.passion2') }}"</span>,
              </div>
              <div class="code-line">
                <span class="line-number">8</span>
                &nbsp;&nbsp;&nbsp;&nbsp;<span class="string">"{{ languageService.t('about.code.passion3') }}"</span>,
              </div>
              <div class="code-line">
                <span class="line-number">9</span>
                &nbsp;&nbsp;&nbsp;&nbsp;<span class="string">"{{ languageService.t('about.code.passion4') }}"</span>
              </div>
              <div class="code-line">
                <span class="line-number">10</span>
                &nbsp;&nbsp;];
              </div>
              <div class="code-line">
                <span class="line-number">11</span>
                &nbsp;&nbsp;hobbies: [
              </div>
              <div class="code-line">
                <span class="line-number">12</span>
                &nbsp;&nbsp;&nbsp;&nbsp;<span class="string">"{{ languageService.t('about.code.hobby1') }}"</span>,
              </div>
              <div class="code-line">
                <span class="line-number">13</span>
                &nbsp;&nbsp;&nbsp;&nbsp;<span class="string">"{{ languageService.t('about.code.hobby2') }}"</span>,
              </div>
              <div class="code-line">
                <span class="line-number">14</span>
                &nbsp;&nbsp;&nbsp;&nbsp;<span class="string">"{{ languageService.t('about.code.hobby3') }}"</span>
              </div>
              <div class="code-line">
                <span class="line-number">15</span>
                &nbsp;&nbsp;];
              </div>
              <div class="code-line">
                <span class="line-number">16</span>
                {{ '}' }}
              </div>
            </div>
          </div>

          <!-- Interactive Trait Cards -->
          <div class="traits-grid">
            <div *ngFor="let trait of traits" class="trait-card">
              <div class="trait-icon">
                <svg *ngIf="trait.iconType === 'innovation'" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" />
                </svg>
                <svg *ngIf="trait.iconType === 'code'" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
                </svg>
                <svg *ngIf="trait.iconType === 'team'" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
                </svg>
                <svg *ngIf="trait.iconType === 'learning'" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
                </svg>
              </div>
              <h4>{{ trait.title }}</h4>
              <p class="trait-desc">{{ trait.description }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  styleUrls: ['./about.component.scss']
})
export class AboutComponent {
  constructor(public languageService: LanguageService) {}

  get expertiseCards() {
    return [
      {
        command: 'backend.sh',
        iconType: 'backend',
        title: this.languageService.t('about.backend.title'),
        quote: this.languageService.t('about.backend.quote'),
        techs: ['Java', 'Spring', 'Kafka', 'Microservices']
      },
      {
        command: 'cloud-infra.yml',
        iconType: 'cloud',
        title: this.languageService.t('about.cloud.title'),
        quote: this.languageService.t('about.cloud.quote'),
        techs: ['AWS', 'Azure', 'GCP', 'Terraform']
      },
      {
        command: 'frontend.tsx',
        iconType: 'frontend',
        title: this.languageService.t('about.frontend.title'),
        quote: this.languageService.t('about.frontend.quote'),
        techs: ['Angular', 'TypeScript', 'SCSS', 'NGRX']
      }
    ];
  }

  get traits() {
    return [
      { 
        iconType: 'innovation',
        title: this.languageService.t('about.trait.innovation'),
        description: this.languageService.t('about.trait.innovationDesc')
      },
      { 
        iconType: 'code',
        title: this.languageService.t('about.trait.cleanCode'),
        description: this.languageService.t('about.trait.cleanCodeDesc')
      },
      { 
        iconType: 'team',
        title: this.languageService.t('about.trait.teamPlayer'),
        description: this.languageService.t('about.trait.teamPlayerDesc')
      },
      { 
        iconType: 'learning',
        title: this.languageService.t('about.trait.fastLearner'),
        description: this.languageService.t('about.trait.fastLearnerDesc')
      }
    ];
  }
}
