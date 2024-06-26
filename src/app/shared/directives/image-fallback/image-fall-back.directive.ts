import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appImageFallBack]',
  standalone: true,
})
export class ImageFallBackDirective {
  @Input() appImageFallback!: string;

  constructor(private el: ElementRef) {}

  @HostListener('error') onError() {
    this.el.nativeElement.src =
      this.appImageFallback ||
      'https://www.peacemakersnetwork.org/wp-content/uploads/2019/09/placeholder.jpg';
  }
}
