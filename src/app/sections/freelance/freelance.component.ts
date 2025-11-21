import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SectionTitleComponent } from '../../shared/components/section-title.component';
import { CardComponent } from '../../shared/components/card.component';

@Component({
  selector: 'app-freelance',
  standalone: true,
  imports: [CommonModule, SectionTitleComponent, CardComponent],
  template: `
    <section id="blog" class="section">
      <div class="container">
        <app-section-title
          meta="MISSIONS"
          title="QUELQUES-UNS DE MES PROJETS EN FREELANCE"
          [center]="true"
        ></app-section-title>
        <div class="freelance-grid">
          <app-card *ngFor="let project of freelanceProjects">
            <div class="category-badge">{{ project.category }}</div>
            <h3>{{ project.title }}</h3>
            <p class="date" *ngIf="project.date">{{ project.date }}</p>
            <p class="description">{{ project.description }}</p>
            <a [href]="project.link" target="_blank" class="project-link">
              Voir le projet
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
              </svg>
            </a>
          </app-card>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .freelance-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
      gap: 2rem;
    }
    
    .category-badge {
      display: inline-block;
      padding: 0.5rem 1rem;
      background: var(--gradient-1);
      color: white;
      border-radius: var(--radius-sm);
      font-size: 0.75rem;
      font-weight: 600;
      text-transform: uppercase;
      letter-spacing: 0.5px;
      margin-bottom: 1.5rem;
    }
    
    h3 {
      font-size: 1.5rem;
      margin-bottom: 0.75rem;
      color: var(--text-heading);
    }
    
    .date {
      color: var(--primary);
      font-weight: 600;
      font-size: 0.875rem;
      margin-bottom: 1rem;
    }
    
    .description {
      color: var(--text-secondary);
      line-height: 1.6;
      margin-bottom: 1.5rem;
    }
    
    .project-link {
      display: inline-flex;
      align-items: center;
      gap: 0.5rem;
      color: var(--primary);
      font-weight: 600;
      transition: all 0.3s ease;
      
      svg {
        width: 18px;
        height: 18px;
        transition: transform 0.3s ease;
      }
      
      &:hover {
        gap: 0.75rem;
        
        svg {
          transform: translate(2px, -2px);
        }
      }
    }
    
    @media (max-width: 768px) {
      .freelance-grid {
        grid-template-columns: 1fr;
      }
    }
  `]
})
export class FreelanceComponent {
  freelanceProjects = [
    {
      title: 'Créer des sites Web WordPress',
      date: 'Juillet 2020',
      category: 'Développement Web',
      description: 'Je crée et conçois des sites web WordPress réactifs pour les clients. Exemple : odelices-paris.com',
      link: 'https://odelices-paris.com/'
    },
    {
      title: 'Logos et Posters Design',
      category: 'Graphic Design',
      description: 'Je conçois des affiches, des logos et des brochures et je manipule également des images. Par exemple, j\'ai conçu le logo de Tataouine International Cup. Vous pouvez consulter mon profil Behance.',
      link: 'https://www.behance.net/sdmedik'
    },
    {
      title: 'Vmix - Directeur de diffusion en direct',
      category: 'Live Streaming',
      description: 'Je diffuse les matchs via la technologie de streaming dans le championnat professionnel tunisien sur les plateformes officielles des équipes.',
      link: 'https://www.facebook.com/UnionSportiveDeTataouine/videos/1113183436202764/'
    }
  ];
}
