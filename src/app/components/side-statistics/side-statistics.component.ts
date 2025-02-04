import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common'; 
// This interface helps TypeScript with the data shape
interface SkillItem {
  name: string;
  percentage: number;
}

interface SkillCategory {
  category: string;
  items: SkillItem[];
}
@Component({
  selector: 'app-side-statistics',
  imports: [CommonModule],
  templateUrl: './side-statistics.component.html',
  styleUrl: './side-statistics.component.scss'
})
export class SideStatisticsComponent implements OnInit {
  skillCategories: SkillCategory[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    // Load data from stats.json (adjust path if needed)
    this.http.get<{ skills: SkillCategory[] }>('assets/stats.json')
      .subscribe(data => {
        this.skillCategories = data.skills;
      });
  }
}