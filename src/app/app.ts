import { Component, signal, OnInit, OnDestroy, PLATFORM_ID, inject } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { ThemeService } from './core/theme.service';
import { LanguageService } from './core/services/language.service';
import { HeroComponent } from './sections/hero/hero.component';
import { AboutComponent } from './sections/about/about.component';
import { SkillsComponent } from './sections/skills/skills.component';
import { EducationComponent } from './sections/education/education.component';
import { ExperienceComponent } from './sections/experience/experience.component';
import { ProjectsComponent } from './sections/projects/projects.component';
import { ArtGalleryComponent } from './sections/art-gallery/art-gallery.component';
import { FreelanceComponent } from './sections/freelance/freelance.component';
import { ContactComponent } from './sections/contact/contact.component';
import { fromEvent, Subscription } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    HeroComponent,
    AboutComponent,
    SkillsComponent,
    EducationComponent,
    ExperienceComponent,
    ProjectsComponent,
    ArtGalleryComponent,
    FreelanceComponent,
    ContactComponent
  ],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App implements OnInit, OnDestroy {
  private platformId = inject(PLATFORM_ID);
  mobileMenuOpen = signal(false);
  private resizeSubscription?: Subscription;

  constructor(
    public themeService: ThemeService,
    public languageService: LanguageService
  ) {}

  ngOnInit() {
    if (isPlatformBrowser(this.platformId)) {
      this.resizeSubscription = fromEvent(window, 'resize')
        .pipe(debounceTime(200))
        .subscribe(() => {
          if (window.innerWidth >= 769 && this.mobileMenuOpen()) {
            this.closeMobileMenu();
          }
        });
    }
  }

  ngOnDestroy() {
    this.resizeSubscription?.unsubscribe();
  }

  toggleMobileMenu() {
    this.mobileMenuOpen.update(value => !value);
  }

  closeMobileMenu() {
    this.mobileMenuOpen.set(false);
  }
}
