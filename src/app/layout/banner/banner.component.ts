import { Component, inject } from '@angular/core';
import { Router, RouterLink,  } from '@angular/router';

@Component({
  selector: 'app-banner',
  imports: [ RouterLink],
  templateUrl: './banner.component.html',
  styleUrl: './banner.component.scss'
})
export class BannerComponent {

  router = inject(Router)
}
