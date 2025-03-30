// image-carousel.component.ts
import { Component, Input, OnInit, AfterViewInit, ChangeDetectorRef, OnChanges, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-image-carousel',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './image-carousel.component.html',
  styleUrls: ['./image-carousel.component.scss']
})
export class ImageCarouselComponent implements OnInit, OnChanges, AfterViewInit {
  @Input() images: string[] = [];
  currentIndex = 0;
  isLoading = true;
  carouselReady = false;

  constructor(private cdr: ChangeDetectorRef) {}

  ngOnInit(): void {
    console.log('ngOnInit - Received images:', this.images?.length);
    this.initializeCarousel();
  }

  ngAfterViewInit(): void {
    // Force another initialization after view is fully rendered
    setTimeout(() => {
      console.log('ngAfterViewInit - Reinitializing carousel');
      this.initializeCarousel();
      this.carouselReady = true;
      this.cdr.detectChanges();
    }, 100);
  }

  ngOnChanges(changes: SimpleChanges): void {
    // Reset carousel when images change
    if (changes['images']) {
      console.log('ngOnChanges - Images updated:', this.images?.length);
      this.initializeCarousel();
    }
  }

  private initializeCarousel(): void {
    // Reset index when images are initialized or changed
    this.currentIndex = 0;
    
    // Default image if none provided
    if (!this.images || this.images.length === 0) {
      this.images = ['assets/images/placeholder.png'];
    }
    
    this.isLoading = false;
    console.log('Carousel initialized with', this.images.length, 'images');
    
    // Force change detection
    this.cdr.detectChanges();
  }

  prevSlide(event: Event): void {
    console.log('Previous button clicked');
    
    // Stop event propagation to prevent clicking through to parent elements
    event.stopPropagation();
    event.preventDefault();
    
    if (!this.carouselReady || this.images.length <= 1) return;
    
    this.currentIndex = (this.currentIndex === 0)
      ? this.images.length - 1
      : this.currentIndex - 1;
    
    // Force change detection
    this.cdr.detectChanges();
    console.log('Current index:', this.currentIndex);
  }

  nextSlide(event: Event): void {
    console.log('Next button clicked');
    
    // Stop event propagation to prevent clicking through to parent elements
    event.stopPropagation();
    event.preventDefault();
    
    if (!this.carouselReady || this.images.length <= 1) return;
    
    this.currentIndex = (this.currentIndex === this.images.length - 1)
      ? 0
      : this.currentIndex + 1;
    
    // Force change detection
    this.cdr.detectChanges();
    console.log('Current index:', this.currentIndex);
  }

  // Helper method to safely get the current image URL
  getCurrentImageUrl(): string {
    if (!this.images || this.images.length === 0) {
      return 'assets/images/placeholder.png';
    }
    return this.images[this.currentIndex];
  }
}