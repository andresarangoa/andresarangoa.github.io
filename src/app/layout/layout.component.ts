import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { BannerComponent } from '../banner/banner.component';
@Component({
  selector: 'app-layout',
  imports: [RouterOutlet,BannerComponent],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss'
})
export class LayoutComponent {

}
