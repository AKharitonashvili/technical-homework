import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'titleTypeToText',
  standalone: true,
})
export class TitleTypeToTextPipe implements PipeTransform {
  transform(value: string, ...args: unknown[]): string {
    switch (value) {
      case 'movie':
      case 'tvMovie':
        return 'Movie';
      case 'tvSeries':
        return 'Tv Series';
      case 'short':
        return 'Limited Series';
      case 'tvMiniSeries':
        return 'TV Mini Series';
      case 'videoGame':
        return 'Video Game';
      default:
        return value;
    }
  }
}
