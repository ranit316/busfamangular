import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BanerService } from '../../services/banner/baner.service';

@Component({
  selector: 'app-add-banner',
  imports: [CommonModule, FormsModule],
  templateUrl: './add-banner.component.html',
  styleUrl: './add-banner.component.css'
})
export class AddBannerComponent {
  imagePreview: string | ArrayBuffer | null = null;
  onImageSelected(event: Event): void {
    const file = (event.target as HTMLInputElement).files?.[0];
    if (file) {
      this.bannerObj.image = file;
      const reader = new FileReader();
      reader.onload = () => {
        this.imagePreview = reader.result;
      };
      reader.readAsDataURL(file);
    }
  }

  bannerObj: any = {
    content: '',
    short: '',
    status: ''
  }

  constructor(private bannerService: BanerService) { }

  onSubmit() {
    // debugger;
    // const formValue = this.bannerObj;
    const formData = new FormData();
    formData.append('content', this.bannerObj.content);
    formData.append('short', this.bannerObj.short);
    formData.append('image', this.bannerObj.image);
    formData.append('status', this.bannerObj.status);

    this.bannerService.bannerPost(formData).subscribe({
      next: (res: any) => console.log('Success', res),
      error: (err: any) => console.error('Error', err)
    });
  }


}
