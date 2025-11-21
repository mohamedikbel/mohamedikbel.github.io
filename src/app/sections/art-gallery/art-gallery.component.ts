import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SectionTitleComponent } from '../../shared/components/section-title.component';

@Component({
  selector: 'app-art-gallery',
  standalone: true,
  imports: [CommonModule, SectionTitleComponent],
  template: `
    <section id="my-world" class="section">
      <div class="container">
        <app-section-title
          meta="CRÉATIVITÉ"
          title="MON ŒUVRE D'ART"
          [center]="true"
        ></app-section-title>
        <div class="gallery-grid">
          <a *ngFor="let item of artworks" [href]="item.link" target="_blank" class="gallery-item">
            <div class="gallery-image" [style.background-image]="'url(' + item.image + ')'"></div>
            <div class="gallery-overlay">
              <h3>{{ item.title }}</h3>
              <span class="category">{{ item.category }}</span>
            </div>
          </a>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .gallery-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
      gap: 2rem;
    }
    
    .gallery-item {
      position: relative;
      aspect-ratio: 4/3;
      border-radius: var(--radius-md);
      overflow: hidden;
      cursor: pointer;
      transition: all 0.3s ease;
      
      &:hover {
        transform: translateY(-8px);
        box-shadow: var(--shadow-xl);
        
        .gallery-overlay {
          opacity: 1;
        }
      }
    }
    
    .gallery-image {
      width: 100%;
      height: 100%;
      background-size: cover;
      background-position: center;
      transition: transform 0.3s ease;
      
      .gallery-item:hover & {
        transform: scale(1.05);
      }
    }
    
    .gallery-overlay {
      position: absolute;
      inset: 0;
      background: linear-gradient(to top, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0) 100%);
      display: flex;
      flex-direction: column;
      justify-content: flex-end;
      padding: 1.5rem;
      opacity: 0;
      transition: opacity 0.3s ease;
      
      h3 {
        color: white;
        font-size: 1.25rem;
        margin: 0 0 0.5rem;
      }
      
      .category {
        color: rgba(255,255,255,0.8);
        font-size: 0.875rem;
        text-transform: uppercase;
        letter-spacing: 1px;
      }
    }
    
    @media (max-width: 768px) {
      .gallery-grid {
        grid-template-columns: 1fr;
      }
    }
  `]
})
export class ArtGalleryComponent {
  artworks = [
    {
      title: 'Photo Manipulation - Tataouine',
      category: 'Website',
      image: 'https://mir-s3-cdn-cf.behance.net/project_modules/max_3840/a8e2ac99778421.5efa67ca7f772.jpg',
      link: 'https://www.behance.net/gallery/99778421/Photo-Manipulation-Tataouine'
    },
    {
      title: 'Animation Work',
      category: 'Animation',
      image: 'https://mir-s3-cdn-cf.behance.net/project_modules/fs/dbc94999775717.5efa59fdaed66.png',
      link: 'https://www.behance.net/sdmedik'
    },
    {
      title: 'Illustration',
      category: 'Illustration',
      image: 'https://mir-s3-cdn-cf.behance.net/project_modules/max_3840/16cb7999777027.5efa607187443.jpg',
      link: 'https://www.behance.net/sdmedik'
    },
    {
      title: 'Application Design',
      category: 'Application',
      image: 'https://mir-s3-cdn-cf.behance.net/project_modules/max_3840/05fba399778019.5efa658bea78a.jpg',
      link: 'https://www.behance.net/sdmedik'
    },
    {
      title: 'Logo & Graphic Design',
      category: 'Graphic, Logo',
      image: 'https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/15549299776523.5efa5dea0c16e.jpg',
      link: 'https://www.behance.net/sdmedik'
    },
    {
      title: 'Web Design',
      category: 'Web Design',
      image: 'https://mir-s3-cdn-cf.behance.net/project_modules/max_3840/3a0ba699777819.5efa64a403d9c.jpg',
      link: 'https://www.behance.net/sdmedik'
    }
  ];
}
