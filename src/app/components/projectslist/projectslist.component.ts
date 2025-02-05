import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule ,KeyValue} from '@angular/common'; 
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

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http.get<ProjectCategories>('assets/projects.json').subscribe(
      (data) => {
        this.projectCategories = data;
      },
      (error) => {
        console.error('Error fetching projects:', error);
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
