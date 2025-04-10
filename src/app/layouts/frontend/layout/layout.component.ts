import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from '../footer/footer.component';
import { SettingsService } from '../../../services/setting/settings.service';


@Component({
  selector: 'app-layout',
  imports: [HeaderComponent, RouterOutlet, FooterComponent],
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class FrontendComponent {
  data: any;
  logo: any;
  constructor(private settingApi: SettingsService) { }

  ngOnInit() {
    this.getData();
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
