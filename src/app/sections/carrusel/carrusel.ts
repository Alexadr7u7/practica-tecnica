import { CommonModule } from '@angular/common';
import { Component, ViewChild } from '@angular/core';
import { Carousel, CarouselModule } from 'primeng/carousel';
interface CarouselItem {
  id: number;
  title: string;
  subtitle?: string;
  image: string;
  badge?: string;
}
@Component({
  selector: 'app-carrusel',
  imports: [CarouselModule, CommonModule],
  templateUrl: './carrusel.html',
  styleUrl: './carrusel.css',
})
export class Carrusel {
  @ViewChild(Carousel) carousel!: Carousel;

  constructor() {
    Carousel.prototype.onTouchMove = () => {};
  }
  carouselItems: CarouselItem[] = [
    {
      id: 1,
      title: 'Brand naming & guidelines',
      subtitle: 'Lean Product Roadmap',
      image: '/assets/img/Bitmaplv.png',
      badge: '2019 Project',
    },
    {
      id: 2,
      title: 'Brand identity & merchandise',
      subtitle: 'New Majestic Hotel',
      image: '/assets/img/Bitmapv.png',
      badge: '2018 Project',
    },
    {
      id: 3,
      title: 'Brand identity & web design',
      subtitle: 'Crypto Dashboard',
      image: '/assets/img/Bitmapvl.png',
      badge: '2019 Project',
    },
  ];

  responsiveOptions = [
    {
      breakpoint: '1024px',
      numVisible: 1,
      numScroll: 1,
    },
    {
      breakpoint: '768px',
      numVisible: 1,
      numScroll: 1,
    },
    {
      breakpoint: '560px',
      numVisible: 1,
      numScroll: 1,
    },
  ];
  prev() {
    this.carousel.navBackward(new MouseEvent('click'));
  }

  next() {
    this.carousel.navForward(new MouseEvent('click'));
  }
}
