import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Component({
  selector: 'app-footer',
  imports: [CommonModule],
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
  @Input() data: any;

  constructor(private sanitizer: DomSanitizer) { }

  aboutUsContent: SafeHtml = '';
  academyBusfam: SafeHtml = '';

  ngOnInit() {
    this.aboutUsContent = this.sanitizer.bypassSecurityTrustHtml(this.data?.about_us);
    this.academyBusfam = this.sanitizer.bypassSecurityTrustHtml(this.data?.academy_busfam);
  }
}
