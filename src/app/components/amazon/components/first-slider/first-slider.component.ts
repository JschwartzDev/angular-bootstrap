import { Component, OnInit, Inject, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImageService } from '../../../../services/imagesService';

@Component({
  selector: 'app-first-slider',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './first-slider.component.html',
  styleUrl: './first-slider.component.scss',
})
export class FirstSliderComponent implements OnInit {
  private imageService = inject(ImageService);
  images: any = [];

  ngOnInit(): void {
    this.getImages();
  }

  getImages(): any {
    this.imageService.getImages().subscribe({
      next: (data: any) => {
        this.images = data;
      },
      error: (error) => {
        console.log('erorr fetching data');
      },
    });
  }

  next() {
    let removedElement = this.images.shift();
    this.images.push(removedElement);
  }

  prev() {
    let removedElement = this.images.pop();
    this.images.unshift(removedElement);
  }
}
