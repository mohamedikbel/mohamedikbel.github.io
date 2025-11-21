import { Injectable, signal, computed, PLATFORM_ID, inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

export type Language = 'fr' | 'en';

interface Translations {
  [key: string]: {
    fr: string;
    en: string;
  };
}

@Injectable({
  providedIn: 'root'
})
export class LanguageService {
  private platformId: Object;
  private currentLanguage = signal<Language>('fr');
  
  constructor() {
    this.platformId = inject(PLATFORM_ID);
    
    if (isPlatformBrowser(this.platformId)) {
      const savedLang = localStorage.getItem('language') as Language;
      if (savedLang && (savedLang === 'fr' || savedLang === 'en')) {
        this.currentLanguage.set(savedLang);
      }
    }
  }

  lang = computed(() => this.currentLanguage());

  setLanguage(lang: Language) {
    this.currentLanguage.set(lang);
    if (isPlatformBrowser(this.platformId)) {
      localStorage.setItem('language', lang);
    }
  }

  toggleLanguage() {
    const newLang: Language = this.currentLanguage() === 'fr' ? 'en' : 'fr';
    this.setLanguage(newLang);
  }

  private translations: Translations = {
    // Navigation
    'nav.home': { fr: 'Accueil', en: 'Home' },
    'nav.about': { fr: 'À Propos', en: 'About' },
    'nav.skills': { fr: 'Compétences', en: 'Skills' },
    'nav.education': { fr: 'Éducation', en: 'Education' },
    'nav.experience': { fr: 'Expérience', en: 'Experience' },
    'nav.projects': { fr: 'Projets', en: 'Projects' },
    'nav.contact': { fr: 'Contact', en: 'Contact' },
    
    // Hero Section
    'hero.role': { fr: 'Développeur Fullstack Senior', en: 'Senior Fullstack Engineer' },
    'hero.available': { fr: 'Disponible pour embauche', en: 'Available for hire' },
    'hero.yearsExp': { fr: 'années d\'expérience', en: 'years experience' },
    'hero.cloudPlatforms': { fr: 'Plateformes Cloud', en: 'Cloud Platforms' },
    'hero.technologies': { fr: 'Technologies', en: 'Technologies' },
    'hero.projectsShipped': { fr: 'Projets livrés', en: 'Projects Shipped' },
    'hero.getInTouch': { fr: 'Me Contacter', en: 'Get In Touch' },
    'hero.viewWork': { fr: 'Voir mes travaux', en: 'View Work' },
    'hero.scrollExplore': { fr: 'Défiler pour explorer', en: 'Scroll to explore' },
    
    // About Section
    'about.meta': { fr: '$ cat about.md', en: '$ cat about.md' },
    'about.title': { fr: '// À Propos de Moi', en: '// About Me' },
    'about.backend.title': { fr: 'Backend Engineering', en: 'Backend Engineering' },
    'about.backend.quote': { fr: 'Création de systèmes scalables et résilients', en: 'Building scalable & resilient systems' },
    'about.cloud.title': { fr: 'Architecture Cloud', en: 'Cloud Architecture' },
    'about.cloud.quote': { fr: 'Solutions multi-cloud & DevOps', en: 'Multi-cloud solutions & DevOps' },
    'about.frontend.title': { fr: 'Développement Frontend', en: 'Frontend Development' },
    'about.frontend.quote': { fr: 'Interface moderne avec les meilleures pratiques', en: 'Modern UI with best practices' },
    'about.code.role': { fr: 'Développeur Fullstack Senior', en: 'Senior Fullstack Engineer' },
    'about.code.location': { fr: 'France 🇫🇷', en: 'France 🇫🇷' },
    'about.code.passion1': { fr: 'Code Propre', en: 'Clean Code' },
    'about.code.passion2': { fr: 'Architecture Cloud', en: 'Cloud Architecture' },
    'about.code.passion3': { fr: 'Culture DevOps', en: 'DevOps Culture' },
    'about.code.passion4': { fr: 'Open Source', en: 'Open Source' },
    'about.code.hobby1': { fr: 'Football ⚽', en: 'Football ⚽' },
    'about.code.hobby2': { fr: 'Design Graphique 🎨', en: 'Graphic Design 🎨' },
    'about.code.hobby3': { fr: 'Films Documentaires 🎬', en: 'Documentary Films 🎬' },
    'about.trait.innovation': { fr: 'Innovation', en: 'Innovation' },
    'about.trait.innovationDesc': { fr: 'Toujours explorer les technologies de pointe', en: 'Always exploring cutting-edge technologies' },
    'about.trait.cleanCode': { fr: 'Code Propre', en: 'Clean Code' },
    'about.trait.cleanCodeDesc': { fr: 'Principes SOLID & meilleures pratiques', en: 'SOLID principles & best practices' },
    'about.trait.teamPlayer': { fr: 'Esprit d\'équipe', en: 'Team Player' },
    'about.trait.teamPlayerDesc': { fr: 'Collaboration & partage de connaissances', en: 'Collaboration & knowledge sharing' },
    'about.trait.fastLearner': { fr: 'Apprentissage Rapide', en: 'Fast Learner' },
    'about.trait.fastLearnerDesc': { fr: 'Adaptation rapide aux nouvelles technologies', en: 'Quick adaptation to new technologies' },
    
    // Skills Section
    'skills.meta': { fr: '$ npm list --depth=0', en: '$ npm list --depth=0' },
    'skills.title': { fr: '// Stack Technique', en: '// Tech Stack' },
    'skills.backend': { fr: 'Développement Backend', en: 'Backend Development' },
    'skills.frontend': { fr: 'Développement Frontend', en: 'Frontend Development' },
    'skills.cloud': { fr: 'Cloud & DevOps', en: 'Cloud & DevOps' },
    'skills.databases': { fr: 'Bases de Données & Stockage', en: 'Databases & Storage' },
    'skills.powerPlatform': { fr: 'Power Platform', en: 'Power Platform' },
    'skills.testing': { fr: 'Tests & Qualité', en: 'Testing & Quality' },
    
    // Education Section
    'education.meta': { fr: 'FORMATION', en: 'EDUCATION' },
    'education.title': { fr: 'ÉDUCATION', en: 'EDUCATION' },
    'education.degree': { fr: 'Diplôme d\'ingénieur en Informatique', en: 'Engineering Degree in Computer Science' },
    'education.school': { fr: 'École Supérieure Privée d\'Ingénierie et de Technologies (ESPRIT)', en: 'Private Higher School of Engineering and Technologies (ESPRIT)' },
    'education.location': { fr: 'Tunis, Tunisie', en: 'Tunis, Tunisia' },
    'education.period': { fr: '2014 - 2019', en: '2014 - 2019' },
    'education.description': { fr: 'Formation d\'ingénieur en sciences informatiques avec spécialisation en développement logiciel et architecture système.', en: 'Engineering degree in Computer Science with specialization in software development and system architecture.' },
    'education.highlightsTitle': { fr: 'Points clés', en: 'Key Highlights' },
    'education.highlight1': { fr: 'Développement Full-Stack & Architecture Microservices', en: 'Full-Stack Development & Microservices Architecture' },
    'education.highlight2': { fr: 'DevOps, Cloud Computing & CI/CD', en: 'DevOps, Cloud Computing & CI/CD' },
    'education.highlight3': { fr: 'Génie Logiciel & Méthodologies Agiles', en: 'Software Engineering & Agile Methodologies' },
    
    // Experience Section
    'experience.meta': { fr: 'PARCOURS', en: 'JOURNEY' },
    'experience.title': { fr: 'EXPÉRIENCE PROFESSIONNELLE', en: 'PROFESSIONAL EXPERIENCE' },
    'experience.current': { fr: 'En cours', en: 'Current' },
    'experience.project': { fr: 'Projet:', en: 'Project:' },
    'experience.stackLabel': { fr: 'Stack technique:', en: 'Tech Stack:' },
    
    // Projects Section
    'projects.meta': { fr: '$ ls ~/projects', en: '$ ls ~/projects' },
    'projects.title': { fr: '// Travaux Sélectionnés', en: '// Featured Work' },
    'projects.tech': { fr: 'Tech:', en: 'Tech:' },
    'projects.viewDetails': { fr: 'Voir Détails', en: 'View Details' },
    
    // Contact Section
    'contact.meta': { fr: 'RESTONS EN CONTACT', en: 'LET\'S CONNECT' },
    'contact.title': { fr: 'Contact', en: 'Contact' },
    'contact.quote': { fr: 'Le succès ne se mesure pas à comment votre vie paraît aux autres, mais à comment elle vous fait sentir.', en: 'Success isn\'t about how your life looks to others. It\'s about how it feels to you.' },
    'contact.quoteAuthor': { fr: '— Michelle Obama', en: '— Michelle Obama' },
    'contact.copyright': { fr: 'Tous droits réservés. Fait avec ❤️ par Sdiri Ikbel', en: 'All rights reserved. Made with ❤️ by Sdiri Ikbel' },
  };

  t(key: string): string {
    const translation = this.translations[key];
    if (!translation) {
      return key;
    }
    return translation[this.currentLanguage()];
  }
}
