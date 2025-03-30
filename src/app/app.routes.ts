// app.routes.ts
import { Routes } from '@angular/router';
import { ProjectsComponent } from './pages/projects/projects.component';
import { BlogComponent } from './pages/blog/blog.component';
import { ContactComponent } from './pages/contact/contact.component';
import { LayoutComponent } from './layout/layout/layout.component';

export const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      { path: '', redirectTo: 'projects', pathMatch: 'full' },
      { path: 'home', redirectTo: 'projects', pathMatch: 'full' },
      { path: 'projects', component: ProjectsComponent },
      { path: 'blog', component: BlogComponent },
      { path: 'contact', component: ContactComponent },
      // Skills and About components are not available yet
      // { path: 'skills', component: SkillsComponent },
      // { path: 'about', component: AboutComponent },
    ],
  },
  // Wildcard route for a 404 page or redirect
  { path: '**', redirectTo: 'projects' },
];