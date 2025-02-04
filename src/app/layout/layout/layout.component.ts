import { Component } from '@angular/core';
import { BannerComponent } from '../banner/banner.component';
@Component({
  selector: 'app-layout',
  imports: [BannerComponent],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss'
})
export class LayoutComponent {

}
