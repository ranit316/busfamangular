import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-header',
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  webDesign: string = '/images/web-design.png';
  creative: string = '/images/creative.png';
  digitatMedia: string = '/images/digital-media.png';
  brand: string = '/images/brand.png';

  @Input() logo: any;
}
