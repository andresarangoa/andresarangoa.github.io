import { Component } from '@angular/core';
import { SideStatisticsComponent } from '../../components/side-statistics/side-statistics.component';
import { ProjectslistComponent } from '../../components/projectslist/projectslist.component';
@Component({
  selector: 'app-projects',
  imports: [SideStatisticsComponent,ProjectslistComponent],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {

}
