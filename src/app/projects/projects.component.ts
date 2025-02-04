import { Component } from '@angular/core';
import { StatisticsComponent } from '../statistics/statistics.component';

@Component({
  selector: 'app-projects',
  imports: [StatisticsComponent],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {

}
