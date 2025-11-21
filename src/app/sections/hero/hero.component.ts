import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LanguageService } from '../../core/services/language.service';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section id="home" class="hero-section">
      <!-- Animated Grid Background -->
      <div class="grid-background"></div>
      <div class="gradient-overlay"></div>
      
      <!-- Floating Code Snippets -->
      <div class="code-particles">
        <div class="code-snippet" style="--delay: 0s; --x: 10%; --y: 20%;">const developer = 'ikbel';</div>
        <div class="code-snippet" style="--delay: 2s; --x: 80%; --y: 30%;">async function() {{ '{' }}{{ '}' }}</div>
        <div class="code-snippet" style="--delay: 4s; --x: 15%; --y: 70%;">@Component({{ '{' }}...{{ '}' }})</div>
        <div class="code-snippet" style="--delay: 1s; --x: 85%; --y: 60%;">&lt;/Spring Boot&gt;</div>
        <div class="code-snippet" style="--delay: 3s; --x: 50%; --y: 15%;">npm run build</div>
      </div>
      
      <div class="container">
        <div class="hero-content">
          <!-- Terminal-Style Header -->
          <div class="terminal-header animate-fade-in">
            <div class="terminal-dots">
              <span class="dot red"></span>
              <span class="dot yellow"></span>
              <span class="dot green"></span>
            </div>
            <div class="terminal-title">~/developer/ikbel-sdiri</div>
          </div>
          
          <!-- Profile with Glow Effect -->
          <div class="profile-container animate-fade-in-up delay-100">
            <div class="profile-glow"></div>
            <div class="avatar"><img 
  src="https://media.licdn.com/dms/image/v2/D4D03AQGoL5awiRbY0w/profile-displayphoto-shrink_400_400/B4DZcJhVyvG0Ag-/0/1748211424959?e=1765411200&v=beta&t=4_NIfBOy7doRZRzEB61VdOXnLnniVnBxes8AwHz1cnc" 
  alt="Votre Photo de Profil"
  style="width: 170px; height: 170px; border-radius: 50%; object-fit: cover;"
></div>
            <div class="status-badge">
              <span class="status-dot"></span>
              {{ languageService.t('hero.available') }}
            </div>
          </div>
          
          <!-- Typing Effect Title -->
          <div class="title-wrapper animate-fade-in-up delay-200">
            <span class="prompt">$</span>
            <h1 class="hero-title">
              <span class="typed-text">Mohamed Ikbel Sdiri</span>
              <span class="cursor">|</span>
            </h1>
          </div>
          
          <p class="hero-role animate-fade-in-up delay-300">
            <span class="role-bracket">&lt;</span>
            <span class="role-text">{{ languageService.t('hero.role') }}</span>
            <span class="role-bracket">/&gt;</span>
          </p>
          
          <!-- Tech Stack Badges -->
          <div class="tech-stack animate-fade-in-up delay-350">
            <span class="tech-badge java">Java</span>
            <span class="tech-badge angular">Angular</span>
            <span class="tech-badge aws">AWS</span>
            <span class="tech-badge spring">Spring</span>
            <span class="tech-badge docker">Docker</span>
          </div>
          
          <!-- Enhanced Stats Grid -->
          <div class="stats-grid animate-fade-in-up delay-400">
            <div class="stat-card">
              <div class="stat-icon">📅</div>
              <div class="stat-value">6+</div>
              <div class="stat-label">{{ languageService.t('hero.yearsExp') }}</div>
              <div class="stat-bar"><div class="stat-fill" style="width: 85%"></div></div>
            </div>
            <div class="stat-card">
              <div class="stat-icon">☁️</div>
              <div class="stat-value">3</div>
              <div class="stat-label">{{ languageService.t('hero.cloudPlatforms') }}</div>
              <div class="stat-bar"><div class="stat-fill" style="width: 95%"></div></div>
            </div>
            <div class="stat-card">
              <div class="stat-icon">🚀</div>
              <div class="stat-value">20+</div>
              <div class="stat-label">{{ languageService.t('hero.technologies') }}</div>
              <div class="stat-bar"><div class="stat-fill" style="width: 90%"></div></div>
            </div>
            <div class="stat-card">
              <div class="stat-icon">💼</div>
              <div class="stat-value">15+</div>
              <div class="stat-label">{{ languageService.t('hero.projectsShipped') }}</div>
              <div class="stat-bar"><div class="stat-fill" style="width: 80%"></div></div>
            </div>
          </div>
          
          <!-- CTA Buttons with Icons -->
          <div class="hero-cta animate-fade-in-up delay-500">
            <a href="#contact" class="btn-primary">
              <svg class="btn-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              {{ languageService.t('hero.getInTouch') }}
            </a>
            <a href="#work" class="btn-secondary">
              <svg class="btn-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
              </svg>
              {{ languageService.t('hero.viewWork') }}
            </a>
          </div>
        </div>
      </div>
      
      <!-- Animated Scroll Indicator -->
      <div class="scroll-indicator animate-bounce">
        <div class="scroll-text">{{ languageService.t('hero.scrollExplore') }}</div>
        <div class="scroll-arrow">↓</div>
      </div>
    </section>
  `,
  styleUrls: ['./hero.component.scss']
})
export class HeroComponent {
  constructor(public languageService: LanguageService) {}
}
