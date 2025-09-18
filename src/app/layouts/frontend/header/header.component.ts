import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [CommonModule, RouterLink],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  webDesign: string = '/images/web-design.png';
  creative: string = '/images/creative.png';
  digitatMedia: string = '/images/digital-media.png';
  brand: string = '/images/brand.png';

  @Input() logo: any;

  isAboutDropdownOpen = false;

  toggleAboutDropdown() {
    this.isAboutDropdownOpen = !this.isAboutDropdownOpen;
  }
}
