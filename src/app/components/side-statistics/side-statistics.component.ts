// side-statistics.component.ts
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
  standalone: true,
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
        // Sort categories by number of items (descending) for best visual distribution
        this.skillCategories = data.skills.sort((a, b) => {
          // First prioritize larger categories
          const itemsDiff = b.items.length - a.items.length;
          
          if (itemsDiff !== 0) return itemsDiff;
          
          // If same size, alphabetical order
          return a.category.localeCompare(b.category);
        });
      });
  }
}