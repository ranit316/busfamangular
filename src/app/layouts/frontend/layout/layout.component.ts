import { Component, Inject, PLATFORM_ID } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from '../footer/footer.component';
import { SettingsService } from '../../../services/setting/settings.service';
import { isPlatformBrowser } from '@angular/common';


@Component({
  selector: 'app-layout',
  imports: [HeaderComponent, RouterOutlet, FooterComponent],
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class FrontendComponent {
  data: any;
  logo: any;




  constructor(private settingApi: SettingsService, @Inject(PLATFORM_ID) private platformId: Object) { }

  ngOnInit() {
    this.loadFrontendAsset();
    this.getData();
  }

  loadFrontendAsset() {
    this.loadStyle('css/frontend.css');
    // this.loadScript('js/frontend.js');
  }

  loadStyle(url: string) {
    if (isPlatformBrowser(this.platformId)) {
      if (!document.querySelector(`link[href="${url}"]`)) {
        const link = document.createElement('link');
        link.href = url;
        link.rel = 'stylesheet';
        document.head.appendChild(link);
      }
    }
  }

  loadScript(url: string) {
    if (isPlatformBrowser(this.platformId)) {
      if (!document.querySelector(`script[src="${url}"]`)) {
        const script = document.createElement('script');
        script.src = url;
        script.async = false;
        script.defer = true;
        document.body.appendChild(script);
      }
    }
  }


  getData() {
    this.settingApi.settingsApi().subscribe({
      next: (response: any) => {
        if (response.success) {
          this.data = response.data;
          this.logo = this.data.site_logo;
        } else {
          console.error('API responded with an error:', response.message);
        }
        // console.log(response);
      },
      error: (err: any) => {
        console.error('Request failed:', err);
      }
    })
  }
}
