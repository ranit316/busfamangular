import { CommonModule, isPlatformBrowser, DOCUMENT } from '@angular/common';
import { Component, Input, AfterViewInit, Inject, PLATFORM_ID } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Component({
  selector: 'app-footer',
  imports: [CommonModule],
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
  @Input() data: any;

  constructor(
    private sanitizer: DomSanitizer,
    @Inject(DOCUMENT) private document: Document,
    @Inject(PLATFORM_ID) private platformId: Object
  ) { }

  aboutUsContent: SafeHtml = '';
  academyBusfam: SafeHtml = '';

  ngOnInit() {
    this.aboutUsContent = this.sanitizer.bypassSecurityTrustHtml(this.data?.about_us);
    this.academyBusfam = this.sanitizer.bypassSecurityTrustHtml(this.data?.academy_busfam);
  }

  ngAfterViewInit(): void {
    // Ensure script is added only in browser
    if (isPlatformBrowser(this.platformId)) {
      this.loadRazorpayButton();
    }
  }

  loadRazorpayButton(): void {
    const containerId = 'razorpay-form-container';

    const container = this.document.getElementById(containerId);

    if (container) {
      container.innerHTML = ''; // Clear previous content, if any

      const form = this.document.createElement('form');

      const script = this.document.createElement('script');
      script.src = 'https://checkout.razorpay.com/v1/payment-button.js';
      script.setAttribute('data-payment_button_id', 'pl_Izol3f0CdmqSAi');
      script.type = 'text/javascript';
      script.async = true;

      form.appendChild(script);
      container.appendChild(form);
    }
  }
}
