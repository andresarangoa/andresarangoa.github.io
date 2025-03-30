// banner.component.ts
import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-banner',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './banner.component.html',
  styleUrl: './banner.component.scss'
})
export class BannerComponent {
  constructor(private router: Router) {}

  onNavItemClick(route: string): void {
    // Get the current URL
    const currentUrl = this.router.url;
    
    // Check if we're navigating to the same route
    if (currentUrl === route || 
        (route === '/projects' && (currentUrl === '/home' || currentUrl === '/'))) {
      // Force refresh the component by navigating to the same route
      this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
        this.router.navigate([route]);
      });
    }
  }
}