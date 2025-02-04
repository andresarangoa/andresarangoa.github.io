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
  selector: 'app-statistics',
  imports: [CommonModule],
  templateUrl: './statistics.component.html',
  styleUrl: './statistics.component.scss'
})
export class StatisticsComponent implements OnInit {
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