import { Routes } from '@angular/router';
import { ProjectsComponent } from './projects/projects.component';
import { BlogComponent } from './blog/blog.component';
import { ContactComponent } from './contact/contact.component';

export const routes: Routes = [

    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: ProjectsComponent },
    { path: 'projects', component: ProjectsComponent },
    { path: 'blog', component: BlogComponent },
    { path: 'contact', component: ContactComponent },
    // other child routes

];
