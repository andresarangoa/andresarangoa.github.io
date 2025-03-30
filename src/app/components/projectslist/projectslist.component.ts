// projectslist.component.ts
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule, KeyValue } from '@angular/common';
import { ImageCarouselComponent } from '../image-carousel/image-carousel.component';
import { AngularUrlPreviewModule } from 'angular-url-preview';

interface Project {
  name: string;
  technologies: string[];
  images: string[];
  link: string;
  description: string;
  type: string;
  oc?: string;
  ocLink?: string;
  client?: string;
  clientLink?: string;
}

interface ProjectCategories {
  outsourcingCompanies: Project[];
  ownProjects: Project[];
  freelanceProjects: Project[];
  [key: string]: Project[]; // Index signature
}

@Component({
  selector: 'app-projectslist',
  standalone: true,
  imports: [CommonModule, ImageCarouselComponent],
  templateUrl: './projectslist.component.html',
  styleUrl: './projectslist.component.scss'
})
export class ProjectslistComponent implements OnInit {
  projectCategories: ProjectCategories = {
    outsourcingCompanies: [],
    ownProjects: [],
    freelanceProjects: []
  };
  
  // Add this flag to track data loading
  dataLoaded = false;
  
  constructor(private http: HttpClient) {}
  
  ngOnInit(): void {
    this.http.get<ProjectCategories>('assets/projects.json').subscribe(
      (data) => {
        this.projectCategories = data;
        
        // Add a small delay to ensure DOM is ready
        setTimeout(() => {
          this.dataLoaded = true;
          console.log('Project data loaded, ready to initialize carousels');
        }, 200);
      },
      (error) => {
        console.error('Error fetching projects:', error);
        this.dataLoaded = true; // Set to true even on error to show error state
      }
    );
  }
  
  formatCategoryName(key: string): string {
    switch (key) {
      case 'outsourcingCompanies':
        return 'Outsourcing Companies';
      case 'freelanceProjects':
        return 'Freelance Projects';
      case 'ownProjects':
        return 'Own Projects';
      default:
        return key;
    }
  }
  
  customSort = (a: KeyValue<string, Project[]>, b: KeyValue<string, Project[]>): number => {
    const order = ['outsourcingCompanies', 'freelanceProjects', 'ownProjects'];
    return order.indexOf(a.key) - order.indexOf(b.key);
  };
}