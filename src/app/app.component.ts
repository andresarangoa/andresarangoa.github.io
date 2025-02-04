import { Component } from '@angular/core';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { LayoutComponent } from './layout/layout.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    TranslateModule, // Import TranslateModule to enable the translate pipe,
    LayoutComponent,
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(private translate: TranslateService) {
    this.translate.addLangs(['en', 'es']);
    this.translate.setDefaultLang('en');
    const browserLang = this.translate.getBrowserLang() ?? 'en';
    this.translate.use(browserLang.match(/en|es/) ? browserLang : 'en');
  }

  switchLanguage(language: string): void {
    this.translate.use(language);
  }
  title = 'my-angular-app';
  toggleDetails(event: Event): void {
    const element = event.currentTarget as HTMLElement;
    element.classList.toggle('active');
  }
}

// Bootstrap the application with `TranslateModule.forRoot()`
// bootstrapApplication(AppComponent, {
//   providers: [
//     provideHttpClient(),
//     ...(TranslateModule.forRoot({
//       loader: {
//         provide: TranslateLoader,
//         useFactory: HttpLoaderFactory,
//         deps: [HttpClient]
//       }
//     }).providers ?? [])
//   ]
// }).catch((err) => console.error(err));
