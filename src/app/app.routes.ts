import { Routes } from '@angular/router';
import { ProjectsComponent } from './pages/projects/projects.component';
import { BlogComponent } from  './pages/blog/blog.component';
import { ContactComponent } from './pages/contact/contact.component';
import { LayoutComponent } from './layout/layout/layout.component';


export const routes: Routes = [
    {
      path: '',
      component: LayoutComponent,
      children: [
        { path: '', redirectTo: 'home', pathMatch: 'full' },
        { path: 'home', component: ProjectsComponent },
        { path: 'projects', component: ProjectsComponent },
        { path: 'blog', component: BlogComponent },
        { path: 'contact', component: ContactComponent },
        // other child routes
      ],
    },
    // Wildcard route for a 404 page or redirect
    { path: '**', redirectTo: 'home' },
  ];